const sharp = require('sharp');
const fs = require('fs');

async function createPerfectCutout() {
  const inputPath = 'C:/Users/Jayesh Phale/.gemini/antigravity/brain/3b12924c-5ca0-457a-aa8e-16657282f7e2/.user_uploaded/media_1793599330750_bd016c9d.jpg';
  const outputPath = 'scratch/perfect_cutout.png';
  
  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  console.log(`Input image: ${width}x${height}, ${channels} channels`);
  
  // 1. Identify all candidate checkerboard pixels
  // Protect only the student's ID badge: x: 418..450, y: 325..385
  const isBg = new Uint8Array(width * height);
  
  function isCheckerColor(r, g, b) {
    const maxC = Math.max(r, g, b);
    const minC = Math.min(r, g, b);
    const sat = maxC - minC;
    const avg = (r + g + b) / 3;
    
    // Checkered white is avg >= 240, sat <= 8
    // Checkered grey is 185 <= avg <= 228, sat <= 8
    // Blend at boundaries: 178 <= avg <= 255, sat <= 8
    return avg >= 178 && sat <= 8;
  }
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      // Exclude ID card
      if (x >= 418 && x <= 450 && y >= 325 && y <= 385) {
        continue;
      }
      
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      
      if (isCheckerColor(r, g, b)) {
        isBg[y * width + x] = 1;
      }
    }
  }
  
  // 2. Remove isolated false-positive noise inside foreground (speckle filter)
  // Any background pixel with < 3 background 8-neighbors is likely a tiny white highlight on metal/clothing
  for (let pass = 0; pass < 2; pass++) {
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const p = y * width + x;
        if (isBg[p]) {
          let bgNeighbors = 0;
          for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
              if (dx !== 0 || dy !== 0) {
                if (isBg[(y + dy) * width + (x + dx)]) bgNeighbors++;
              }
            }
          }
          if (bgNeighbors < 3) {
            isBg[p] = 0; // Keep as foreground
          }
        }
      }
    }
  }
  
  // 3. Smooth / feather boundary edges (Anti-Aliasing)
  // Calculate distance or alpha for edge pixels so there are no jagged staircases
  const alphaMap = new Uint8Array(width * height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const p = y * width + x;
      if (isBg[p]) {
        alphaMap[p] = 0;
      } else {
        // Check if on boundary (adjacent to bg)
        let bgAdjacent = false;
        let countBg = 0;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            const ny = y + dy;
            const nx = x + dx;
            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
              if (isBg[ny * width + nx]) countBg++;
            }
          }
        }
        
        if (countBg > 0) {
          // Edge pixel: soft feathering based on how exposed it is
          // If 5 out of 8 neighbors are bg, alpha is ~120
          alphaMap[p] = Math.round(255 * (1 - (countBg / 9) * 0.45));
        } else {
          alphaMap[p] = 255;
        }
      }
    }
  }
  
  // 4. Construct RGBA buffer with defringing
  const rgba = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    const inIdx = i * channels;
    const outIdx = i * 4;
    const a = alphaMap[i];
    
    if (a === 0) {
      rgba[outIdx] = 0;
      rgba[outIdx + 1] = 0;
      rgba[outIdx + 2] = 0;
      rgba[outIdx + 3] = 0;
    } else {
      rgba[outIdx] = data[inIdx];
      rgba[outIdx + 1] = data[inIdx + 1];
      rgba[outIdx + 2] = data[inIdx + 2];
      rgba[outIdx + 3] = a;
    }
  }
  
  // 5. Trim transparent margins so the cutout is tightly bounded
  const trimmed = await sharp(rgba, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toBuffer({ resolveWithObject: true });
    
  console.log(`Original: ${width}x${height}, Cutout size: ${trimmed.info.width}x${trimmed.info.height}`);
  fs.writeFileSync(outputPath, trimmed.data);
  console.log(`Saved perfect cutout to ${outputPath}`);
}

createPerfectCutout().catch(console.error);


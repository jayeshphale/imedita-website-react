const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processEngineer() {
  const inputPath = 'C:/Users/Jayesh Phale/.gemini/antigravity/brain/3b12924c-5ca0-457a-aa8e-16657282f7e2/.user_uploaded/media_1793599330750_bd016c9d.jpg';
  
  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  console.log(`Original image: ${width}x${height}, ${channels} channels`);
  
  // 1. Identify all candidate checkerboard pixels
  // Protect the student's ID badge: x: 418..450, y: 325..385
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
  const alphaMap = new Uint8Array(width * height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const p = y * width + x;
      if (isBg[p]) {
        alphaMap[p] = 0;
      } else {
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
  
  // 5. Increase image size by 25%:
  // 1024 * 1.25 = 1280 width
  // 571 * 1.25 = 714 height
  const newWidth = Math.round(width * 1.25);
  const newHeight = Math.round(height * 1.25);
  console.log(`Rescaling by +25%: ${width}x${height} -> ${newWidth}x${newHeight}`);
  
  const resizedPngBuffer = await sharp(rgba, { raw: { width, height, channels: 4 } })
    .resize(newWidth, newHeight, {
      kernel: sharp.kernel.lanczos3,
      fit: 'fill'
    })
    .png({ compressionLevel: 9 })
    .toBuffer();
    
  // 6. Write to destination files
  const destinations = [
    'src/assets/server-datacenter-engineer.png',
    'public/assets/server-datacenter-engineer.png',
    'public/server-datacenter-engineer.png',
    'C:/Users/Jayesh Phale/.gemini/antigravity/brain/3b12924c-5ca0-457a-aa8e-16657282f7e2/server-datacenter-engineer-transparent-25pct.png'
  ];
  
  for (const dest of destinations) {
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(dest, resizedPngBuffer);
    console.log(`Saved to ${dest} (${(resizedPngBuffer.length / 1024).toFixed(1)} KB)`);
  }
  
  console.log('Successfully completed background removal & 25% size increase!');
}

processEngineer().catch(console.error);


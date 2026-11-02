const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function process100Percent() {
  const inputPath = 'C:/Users/Jayesh Phale/.gemini/antigravity/brain/3b12924c-5ca0-457a-aa8e-16657282f7e2/.user_uploaded/media_1793599330750_bd016c9d.jpg';
  
  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  console.log(`Input: ${width}x${height}`);
  
  const isBg = new Uint8Array(width * height);
  
  function isCheckerColor(r, g, b) {
    const maxC = Math.max(r, g, b);
    const minC = Math.min(r, g, b);
    const sat = maxC - minC;
    const avg = (r + g + b) / 3;
    return avg >= 178 && sat <= 8;
  }
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (x >= 418 && x <= 450 && y >= 325 && y <= 385) {
        continue; // Keep ID badge
      }
      const idx = (y * width + x) * channels;
      if (isCheckerColor(data[idx], data[idx + 1], data[idx + 2])) {
        isBg[y * width + x] = 1;
      }
    }
  }
  
  // Noise filtering
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
            isBg[p] = 0;
          }
        }
      }
    }
  }
  
  // Boundary anti-aliasing
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
  
  // +100% increase (2x original resolution):
  // 1024 * 2.0 = 2048 width, 571 * 2.0 = 1142 height
  const newWidth = Math.round(width * 2.0);
  const newHeight = Math.round(height * 2.0);
  console.log(`Increasing size by +100% (2x): ${width}x${height} -> ${newWidth}x${newHeight}`);
  
  const resizedBuffer = await sharp(rgba, { raw: { width, height, channels: 4 } })
    .resize(newWidth, newHeight, {
      kernel: sharp.kernel.lanczos3,
      fit: 'fill'
    })
    .png({ compressionLevel: 9 })
    .toBuffer();
    
  const targets = [
    'src/assets/server-datacenter-engineer.png',
    'public/assets/server-datacenter-engineer.png',
    'public/server-datacenter-engineer.png',
    'C:/Users/Jayesh Phale/.gemini/antigravity/brain/3b12924c-5ca0-457a-aa8e-16657282f7e2/server-datacenter-engineer-transparent-100pct.png'
  ];
  
  for (const t of targets) {
    const d = path.dirname(t);
    if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
    fs.writeFileSync(t, resizedBuffer);
    console.log(`Saved 100% upscaled image to ${t} (${(resizedBuffer.length / 1024).toFixed(1)} KB)`);
  }
  console.log('Successfully generated 2048x1142 transparent cutout (+100% size)!');
}

process100Percent().catch(console.error);


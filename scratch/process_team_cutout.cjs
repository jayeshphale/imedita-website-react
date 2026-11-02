const sharp = require('sharp');
const fs = require('fs');

async function processCutout() {
  const inputPath = 'C:/Users/Jayesh Phale/.gemini/antigravity-ide/brain/f6e04c0b-2bf6-4568-9b2a-e581f9463bf3/.user_uploaded/media_1793341084976.jpg';
  const outputPath = 'src/assets/exam-vouchers-team.png';
  
  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });
    
  const { width, height, channels } = info;
  console.log(`Processing team image: ${width}x${height}, channels: ${channels}`);
  
  const rgba = Buffer.alloc(width * height * 4);
  const isBg = new Uint8Array(width * height);
  
  // Background criterion:
  // Studio white background is very pure (typically > 240, neutral grey/white)
  function isNearBg(x, y) {
    const idx = (y * width + x) * channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    
    // Background pixels are very light and have low saturation
    const maxVal = Math.max(r, g, b);
    const minVal = Math.min(r, g, b);
    const diff = maxVal - minVal;
    
    return minVal >= 235 && diff <= 14;
  }

  const queue = new Int32Array(width * height);
  let qHead = 0;
  let qTail = 0;

  function push(x, y) {
    const idx = y * width + x;
    if (isBg[idx] === 0) {
      isBg[idx] = 1;
      queue[qTail++] = idx;
    }
  }

  // Seed borders
  for (let x = 0; x < width; x++) {
    if (isNearBg(x, 0)) push(x, 0);
  }
  for (let y = 0; y < height; y++) {
    if (isNearBg(0, y)) push(0, y);
    if (isNearBg(width - 1, y)) push(width - 1, y);
  }
  // Bottom corners
  for (let x = 0; x < 220; x++) {
    if (isNearBg(x, height - 1)) push(x, height - 1);
  }
  for (let x = 880; x < width; x++) {
    if (isNearBg(x, height - 1)) push(x, height - 1);
  }

  console.log(`Starting BFS flood fill from ${qTail} seed pixels...`);

  while (qHead < qTail) {
    const curr = queue[qHead++];
    const cx = curr % width;
    const cy = Math.floor(curr / width);

    const neighbors = [
      [cx - 1, cy],
      [cx + 1, cy],
      [cx, cy - 1],
      [cx, cy + 1]
    ];

    for (let i = 0; i < 4; i++) {
      const nx = neighbors[i][0];
      const ny = neighbors[i][1];
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nIdx = ny * width + nx;
        if (isBg[nIdx] === 0 && isNearBg(nx, ny)) {
          isBg[nIdx] = 1;
          queue[qTail++] = nIdx;
        }
      }
    }
  }

  console.log(`Flood fill completed. Background pixels: ${qTail}`);

  // Build RGBA with antialiasing and defringing
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pIdx = y * width + x;
      const srcIdx = pIdx * channels;
      const outIdx = pIdx * 4;

      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];

      if (isBg[pIdx] === 1) {
        // Completely transparent
        rgba[outIdx] = 255;
        rgba[outIdx + 1] = 255;
        rgba[outIdx + 2] = 255;
        rgba[outIdx + 3] = 0;
      } else {
        // Check adjacent to background
        let bgNeighborCount = 0;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            if (dx === 0 && dy === 0) continue;
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
              if (isBg[ny * width + nx] === 1) {
                bgNeighborCount++;
              }
            }
          }
        }

        if (bgNeighborCount > 0 && r >= 220 && g >= 220 && b >= 220) {
          const avg = (r + g + b) / 3;
          const alphaRatio = Math.max(0, Math.min(1, (255 - avg) / 35));
          const alpha = Math.round(alphaRatio * 255);
          
          if (alpha <= 10) {
            rgba[outIdx] = 255;
            rgba[outIdx + 1] = 255;
            rgba[outIdx + 2] = 255;
            rgba[outIdx + 3] = 0;
          } else {
            const aNorm = alpha / 255;
            const defringe = (c) => Math.max(0, Math.min(255, Math.round((c - 255 * (1 - aNorm)) / aNorm)));
            rgba[outIdx] = defringe(r);
            rgba[outIdx + 1] = defringe(g);
            rgba[outIdx + 2] = defringe(b);
            rgba[outIdx + 3] = alpha;
          }
        } else {
          rgba[outIdx] = r;
          rgba[outIdx + 1] = g;
          rgba[outIdx + 2] = b;
          rgba[outIdx + 3] = 255;
        }
      }
    }
  }

  // Save to PNG
  await sharp(rgba, {
    raw: {
      width,
      height,
      channels: 4
    }
  })
  .png({ compressionLevel: 8 })
  .toFile(outputPath);

  // Also copy to public directory
  fs.copyFileSync(outputPath, 'public/assets/exam-vouchers-team.png');
  fs.copyFileSync(outputPath, 'public/exam-vouchers-team.png');

  console.log(`Successfully created transparent cutout: ${outputPath}`);
}

processCutout().catch(console.error);

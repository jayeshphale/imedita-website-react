const sharp = require('sharp');
const fs = require('fs');

async function removeBackground() {
  const inputPath = 'src/assets/server-datacenter-engineer.jpg';
  const outputPath = 'src/assets/server-datacenter-engineer.png';
  
  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });
    
  const { width, height, channels } = info;
  console.log(`Processing image: ${width}x${height}, channels: ${channels}`);
  
  // Output RGBA buffer
  const rgba = Buffer.alloc(width * height * 4);
  
  // Array to mark visited background pixels in flood fill
  const isBg = new Uint8Array(width * height);
  
  // Helper to check if a pixel is background white/near-white
  function isPureBg(x, y) {
    const idx = (y * width + x) * channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    // Very strict white threshold
    return r >= 244 && g >= 244 && b >= 244;
  }

  function isNearBg(x, y) {
    const idx = (y * width + x) * channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    // Slightly broader for flood fill expansion
    return r >= 235 && g >= 235 && b >= 235 && Math.abs(r - g) < 12 && Math.abs(g - b) < 12;
  }

  // Multi-source BFS starting from all outer borders and through the door window
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

  // 1. Add all border pixels that match background
  for (let x = 0; x < width; x++) {
    if (isNearBg(x, 0)) push(x, 0);
    if (isNearBg(x, height - 1)) push(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    if (isNearBg(0, y)) push(0, y);
    if (isNearBg(width - 1, y)) push(width - 1, y);
  }

  // Also seed inside the open door glass window if it's enclosed by frame
  // The door glass is roughly in the region x = 410 to 570, y = 200 to 600
  for (let y = 200; y < 600; y += 10) {
    for (let x = 420; x < 560; x += 10) {
      if (isNearBg(x, y)) {
        push(x, y);
      }
    }
  }

  console.log(`Starting flood fill from ${qTail} seed pixels...`);

  // 4-way flood fill
  while (qHead < qTail) {
    const curr = queue[qHead++];
    const cx = curr % width;
    const cy = Math.floor(curr / width);

    // Neighbors
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

  console.log(`Flood fill completed. Total background pixels found: ${qTail}`);

  // Now build RGBA output with smooth antialiased edges
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pIdx = y * width + x;
      const srcIdx = pIdx * channels;
      const outIdx = pIdx * 4;

      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];

      if (isBg[pIdx] === 1) {
        // Definite background
        rgba[outIdx] = 255;
        rgba[outIdx + 1] = 255;
        rgba[outIdx + 2] = 255;
        rgba[outIdx + 3] = 0; // Transparent
      } else {
        // Foreground pixel. Check if it's adjacent to a background pixel (edge feathering)
        let bgNeighborCount = 0;
        let minNeighborDist = 99;
        
        // Check 3x3 neighborhood
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
          // Antialiased edge pixel that was blended with white background
          const avg = (r + g + b) / 3;
          // Calculate alpha: brighter means closer to white bg
          const alphaRatio = Math.max(0, Math.min(1, (255 - avg) / 35));
          const alpha = Math.round(alphaRatio * 255);
          
          if (alpha <= 10) {
            rgba[outIdx] = 255;
            rgba[outIdx + 1] = 255;
            rgba[outIdx + 2] = 255;
            rgba[outIdx + 3] = 0;
          } else {
            // Defringe: un-multiply white from foreground
            const aNorm = alpha / 255;
            const defringe = (c) => Math.max(0, Math.min(255, Math.round((c - 255 * (1 - aNorm)) / aNorm)));
            rgba[outIdx] = defringe(r);
            rgba[outIdx + 1] = defringe(g);
            rgba[outIdx + 2] = defringe(b);
            rgba[outIdx + 3] = alpha;
          }
        } else {
          // Normal solid foreground
          rgba[outIdx] = r;
          rgba[outIdx + 1] = g;
          rgba[outIdx + 2] = b;
          rgba[outIdx + 3] = 255;
        }
      }
    }
  }

  // Save as high-quality PNG
  await sharp(rgba, {
    raw: {
      width,
      height,
      channels: 4
    }
  })
  .png({ compressionLevel: 8 })
  .toFile(outputPath);

  console.log(`Saved transparent PNG to ${outputPath}`);
}

removeBackground().catch(console.error);

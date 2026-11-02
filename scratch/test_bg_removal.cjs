const sharp = require('sharp');
const fs = require('fs');

async function testRemoval() {
  const inputPath = 'C:/Users/Jayesh Phale/.gemini/antigravity/brain/3b12924c-5ca0-457a-aa8e-16657282f7e2/.user_uploaded/media_1793599330750_bd016c9d.jpg';
  const outputPath = 'scratch/test_cutout.png';
  
  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  console.log(`Dimensions: ${width}x${height}, channels: ${channels}`);
  
  // 1. Create a 2D boolean array or Uint8Array for background mask (1 = background, 0 = foreground)
  const isBg = new Uint8Array(width * height);
  
  // Helper to check if pixel looks like checkerboard background
  function isCheckerboardColor(idx) {
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    const maxC = Math.max(r, g, b);
    const minC = Math.min(r, g, b);
    const sat = maxC - minC;
    const avg = (r + g + b) / 3;
    
    // Checkered white: avg >= 240, sat <= 10
    // Checkered grey: 185 <= avg <= 225, sat <= 8
    // Transition between squares: 180 <= avg <= 255, sat <= 10
    return avg >= 180 && sat <= 10;
  }
  
  // 2. Flood fill (BFS) starting from known background seeds:
  // - Entire top border (except the server rack at x < 260)
  // - Entire right border
  // - Bottom right corner
  // - Gaps between cart legs
  const queue = [];
  function addSeed(x, y) {
    if (x < 0 || x >= width || y < 0 || y >= height) return;
    const pIdx = y * width + x;
    if (isBg[pIdx]) return;
    if (isCheckerboardColor(pIdx * channels)) {
      isBg[pIdx] = 1;
      queue.push(pIdx);
    }
  }
  
  // Top edge from x=270 to width-1
  for (let x = 270; x < width; x++) {
    addSeed(x, 0);
  }
  // Right edge from y=0 to height-1
  for (let y = 0; y < height; y++) {
    addSeed(width - 1, y);
  }
  // Bottom edge from x=830 to width-1
  for (let x = 830; x < width; x++) {
    addSeed(x, height - 1);
  }
  // Space between cart legs: around x=680, y=500
  addSeed(680, 500);
  addSeed(720, 500);
  // Space between student and rack: around x=290, y=450
  addSeed(290, 450);
  addSeed(330, 520);
  // Space under student's arm: around x=320, y=380
  addSeed(320, 380);
  // Space above cable: around x=330, y=360
  addSeed(330, 360);
  
  console.log(`Starting BFS with ${queue.length} seeds...`);
  
  let head = 0;
  while (head < queue.length) {
    const curr = queue[head++];
    const cx = curr % width;
    const cy = Math.floor(curr / width);
    
    // Check 4 neighbors
    const neighbors = [
      [cx + 1, cy],
      [cx - 1, cy],
      [cx, cy + 1],
      [cx, cy - 1]
    ];
    
    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nIdx = ny * width + nx;
        if (!isBg[nIdx]) {
          if (isCheckerboardColor(nIdx * channels)) {
            isBg[nIdx] = 1;
            queue.push(nIdx);
          }
        }
      }
    }
  }
  
  console.log(`BFS visited ${queue.length} background pixels (${((queue.length / (width * height)) * 100).toFixed(1)}% of image)`);
  
  // 3. Create RGBA output
  const rgba = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    const inIdx = i * channels;
    const outIdx = i * 4;
    const r = data[inIdx];
    const g = data[inIdx + 1];
    const b = data[inIdx + 2];
    
    if (isBg[i]) {
      rgba[outIdx] = 0;
      rgba[outIdx + 1] = 0;
      rgba[outIdx + 2] = 0;
      rgba[outIdx + 3] = 0; // Transparent
    } else {
      rgba[outIdx] = r;
      rgba[outIdx + 1] = g;
      rgba[outIdx + 2] = b;
      rgba[outIdx + 3] = 255;
    }
  }
  
  // 4. Save test output
  await sharp(rgba, { raw: { width, height, channels: 4 } })
    .png()
    .toFile(outputPath);
    
  console.log(`Saved test cutout to ${outputPath}`);
}

testRemoval().catch(console.error);


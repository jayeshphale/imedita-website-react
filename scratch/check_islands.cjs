const sharp = require('sharp');

async function checkIslands() {
  const { data, info } = await sharp('src/assets/server-datacenter-engineer.png')
    .raw()
    .toBuffer({ resolveWithObject: true });
    
  const { width, height, channels } = info;
  let remainingWhiteCount = 0;
  const islands = [];
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const a = data[idx + 3];
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      
      // If it's still solid (alpha > 100) and pure white
      if (a > 100 && r >= 245 && g >= 245 && b >= 245) {
        remainingWhiteCount++;
        if (remainingWhiteCount % 1000 === 1) {
          islands.push({ x, y, r, g, b, a });
        }
      }
    }
  }
  
  console.log('Total solid white pixels remaining with alpha > 100:', remainingWhiteCount);
  console.log('Sample locations of remaining white pixels:', islands.slice(0, 15));
}

checkIslands().catch(console.error);

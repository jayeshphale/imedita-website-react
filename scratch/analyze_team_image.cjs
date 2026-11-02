const sharp = require('sharp');

async function analyze() {
  const inputPath = 'C:/Users/Jayesh Phale/.gemini/antigravity-ide/brain/f6e04c0b-2bf6-4568-9b2a-e581f9463bf3/.user_uploaded/media_1793341084976.jpg';
  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });
    
  console.log('Image dimensions:', info.width, 'x', info.height);
  const { width, height, channels } = info;
  
  const testPoints = [
    [0, 0],
    [width - 1, 0],
    [0, height - 1],
    [width - 1, height - 1],
    [Math.floor(width / 2), 0],
    [10, Math.floor(height / 2)],
    [width - 10, Math.floor(height / 2)],
    [100, 20],
    [900, 20]
  ];
  
  for (const [x, y] of testPoints) {
    const idx = (y * width + x) * channels;
    console.log(`Point (${x}, ${y}): R=${data[idx]}, G=${data[idx+1]}, B=${data[idx+2]}`);
  }
}

analyze().catch(console.error);

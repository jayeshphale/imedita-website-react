const sharp = require('sharp');

async function analyzeBadge() {
  const inputPath = 'C:/Users/Jayesh Phale/.gemini/antigravity-ide/brain/f6e04c0b-2bf6-4568-9b2a-e581f9463bf3/.user_uploaded/media_1793341447781.jpg';
  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });
    
  const { width, height, channels } = info;
  console.log(`Badge size: ${width}x${height}, channels: ${channels}`);
  
  // Histogram of brightness
  const brightnessCount = new Array(256).fill(0);
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i], g = data[i+1], b = data[i+2];
    const avg = Math.round((r + g + b) / 3);
    brightnessCount[avg]++;
  }
  
  console.log('Top 10 highest brightness counts (near white):');
  for (let b = 255; b >= 240; b--) {
    if (brightnessCount[b] > 0) {
      console.log(`Brightness ${b}: ${brightnessCount[b]} pixels`);
    }
  }

  // Check the laurel leaves color (they are grey)
  // Let's sample a grey leaf: around x=100, y=500
  console.log('Sampling grey leaf area around x=100 to 180, y=450 to 550:');
  for (let y = 480; y <= 520; y += 10) {
    for (let x = 120; x <= 160; x += 10) {
      const idx = (y * width + x) * channels;
      console.log(`Leaf at (${x}, ${y}): R=${data[idx]}, G=${data[idx+1]}, B=${data[idx+2]}`);
    }
  }
}

analyzeBadge().catch(console.error);

const sharp = require('sharp');

async function inspectRegions() {
  const inputPath = 'C:/Users/Jayesh Phale/.gemini/antigravity-ide/brain/f6e04c0b-2bf6-4568-9b2a-e581f9463bf3/.user_uploaded/media_1793341084976.jpg';
  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });
    
  const { width, height, channels } = info;
  
  // Let's check horizontal scan at y = 450 (roughly waist/elbow height)
  console.log('Scanning horizontal line at y=450:');
  for (let x = 0; x < width; x += 25) {
    const idx = (450 * width + x) * channels;
    const r = data[idx], g = data[idx+1], b = data[idx+2];
    const isW = r > 240 && g > 240 && b > 240;
    if (isW) {
      console.log(`White at x=${x}, y=450: R=${r}, G=${g}, B=${b}`);
    }
  }

  // Scan at y = 550
  console.log('Scanning horizontal line at y=550:');
  for (let x = 0; x < width; x += 25) {
    const idx = (550 * width + x) * channels;
    const r = data[idx], g = data[idx+1], b = data[idx+2];
    const isW = r > 240 && g > 240 && b > 240;
    if (isW) {
      console.log(`White at x=${x}, y=550: R=${r}, G=${g}, B=${b}`);
    }
  }
}

inspectRegions().catch(console.error);

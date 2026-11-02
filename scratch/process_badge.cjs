const sharp = require('sharp');
const fs = require('fs');

async function processBadge() {
  const inputPath = 'C:/Users/Jayesh Phale/.gemini/antigravity-ide/brain/f6e04c0b-2bf6-4568-9b2a-e581f9463bf3/.user_uploaded/media_1793341447781.jpg';
  const outputPath = 'src/assets/certified-badge.png';
  
  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });
    
  const { width, height, channels } = info;
  console.log(`Processing badge: ${width}x${height}, channels: ${channels}`);
  
  const rgba = Buffer.alloc(width * height * 4);
  
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const outIdx = (i / channels) * 4;
    
    // Average brightness
    const avg = (r + g + b) / 3;
    const minC = Math.min(r, g, b);
    const maxC = Math.max(r, g, b);
    const saturation = maxC - minC;
    
    // If it's neutral and bright white
    if (minC >= 248 && saturation <= 10) {
      rgba[outIdx] = 255;
      rgba[outIdx + 1] = 255;
      rgba[outIdx + 2] = 255;
      rgba[outIdx + 3] = 0; // Transparent
    } else if (minC >= 220 && saturation <= 18) {
      // Smooth antialiased edge
      const alphaRatio = Math.max(0, Math.min(1, (255 - avg) / (255 - 220)));
      const alpha = Math.round(alphaRatio * 255);
      
      if (alpha <= 8) {
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
      // Crisp solid foreground (text, leaves, chevron, divider)
      rgba[outIdx] = r;
      rgba[outIdx + 1] = g;
      rgba[outIdx + 2] = b;
      rgba[outIdx + 3] = 255;
    }
  }

  // Trim transparent edges around the badge so it's tightly framed without excessive padding!
  const trimmed = await sharp(rgba, {
    raw: { width, height, channels: 4 }
  })
  .trim({ threshold: 5 })
  .png({ compressionLevel: 9 })
  .toBuffer({ resolveWithObject: true });

  console.log('Trimmed size:', trimmed.info.width, 'x', trimmed.info.height);

  fs.writeFileSync(outputPath, trimmed.data);
  fs.writeFileSync('public/assets/certified-badge.png', trimmed.data);
  fs.writeFileSync('public/certified-badge.png', trimmed.data);

  console.log(`Saved transparent badge to ${outputPath} and public folders!`);
}

processBadge().catch(console.error);

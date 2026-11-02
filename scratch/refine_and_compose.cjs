const sharp = require('sharp');
const fs = require('fs');

async function refineAndCompose() {
  const input = 'src/assets/instructors-composed.png'; // or instructors.png
  // Let's use the backup from instructors.png if available, or extract from src/assets/instructors.png
  const sourcePath = fs.existsSync('src/assets/instructors.png') ? 'src/assets/instructors.png' : 'public/instructors.png';
  
  // First let's check dimensions of sourcePath
  const meta = await sharp(sourcePath).metadata();
  console.log('Source metadata:', meta.width, 'x', meta.height);
  
  let baseInput = sourcePath;
  if (meta.width < 800) {
    // If it was already rewritten, let's check public/assets/instructors-GAjiLNKU.png in dist or git
    if (fs.existsSync('dist/assets/instructors-GAjiLNKU.png')) {
      baseInput = 'dist/assets/instructors-GAjiLNKU.png';
    }
  }
  
  console.log('Using base input:', baseInput);

  async function cleanAndExtract(region) {
    const { data, info } = await sharp(baseInput)
      .extract(region)
      .raw()
      .toBuffer({ resolveWithObject: true });
      
    const { width, height, channels } = info;
    const clean = Buffer.alloc(width * height * 4);
    
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = (y * width + x) * channels;
        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];
        const a = data[idx + 3];
        
        // Trim faint halos:
        if (a < 60 || (r > 240 && g > 240 && b > 240)) {
          clean[idx] = 0;
          clean[idx + 1] = 0;
          clean[idx + 2] = 0;
          clean[idx + 3] = 0;
        } else if (r > 210 && g > 210 && b > 210 && a < 250) {
          const normA = a / 255;
          clean[idx] = Math.max(0, Math.min(255, Math.round((r - 255 * (1 - normA)) / normA)));
          clean[idx + 1] = Math.max(0, Math.min(255, Math.round((g - 255 * (1 - normA)) / normA)));
          clean[idx + 2] = Math.max(0, Math.min(255, Math.round((b - 255 * (1 - normA)) / normA)));
          clean[idx + 3] = a;
        } else {
          clean[idx] = r;
          clean[idx + 1] = g;
          clean[idx + 2] = b;
          clean[idx + 3] = a;
        }
      }
    }
    
    return sharp(clean, { raw: { width, height, channels: 4 } }).png().toBuffer();
  }

  const inst1Png = await cleanAndExtract({ left: 26, top: 36, width: 233, height: 439 });
  const inst2Png = await cleanAndExtract({ left: 281, top: 11, width: 240, height: 464 });
  const inst3Png = await cleanAndExtract({ left: 541, top: 15, width: 214, height: 460 });
  const inst4Png = await cleanAndExtract({ left: 778, top: 24, width: 209, height: 451 });

  // Resize
  const inst4Res = await sharp(inst4Png).resize({ height: 470 }).toBuffer({ resolveWithObject: true });
  const inst3Res = await sharp(inst3Png).resize({ height: 485 }).toBuffer({ resolveWithObject: true });
  const inst2Res = await sharp(inst2Png).resize({ height: 500 }).toBuffer({ resolveWithObject: true });
  const inst1Res = await sharp(inst1Png).resize({ height: 515 }).toBuffer({ resolveWithObject: true });

  const cHeight = 530;
  const leftOffsets = [0, 185, 365, 520];
  const totalWidth = 520 + inst4Res.info.width; // ~735px

  const composites = [
    { input: inst4Res.data, top: cHeight - inst4Res.info.height, left: leftOffsets[3] },
    { input: inst3Res.data, top: cHeight - inst3Res.info.height, left: leftOffsets[2] },
    { input: inst2Res.data, top: cHeight - inst2Res.info.height, left: leftOffsets[1] },
    { input: inst1Res.data, top: cHeight - inst1Res.info.height, left: leftOffsets[0] }
  ];

  const composedBuf = await sharp({
    create: {
      width: totalWidth,
      height: cHeight,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite(composites)
  .png({ compressionLevel: 9 })
  .toBuffer();

  fs.writeFileSync('src/assets/instructors.png', composedBuf);
  fs.writeFileSync('public/assets/instructors.png', composedBuf);
  fs.writeFileSync('public/instructors.png', composedBuf);

  console.log(`Saved refined instructors.png: ${totalWidth}x${cHeight}`);
}

refineAndCompose().catch(console.error);

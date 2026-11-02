const sharp = require('sharp');
const fs = require('fs');

async function perfectComposition() {
  const baseInput = 'dist/assets/instructors-GAjiLNKU.png';
  const { data, info } = await sharp(baseInput).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  
  // Clean source buffer: zero out RGB where alpha is 0 or near-white halo
  const cleanData = Buffer.from(data);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = cleanData[idx];
      const g = cleanData[idx + 1];
      const b = cleanData[idx + 2];
      const a = cleanData[idx + 3];
      
      if (a <= 25) {
        cleanData[idx] = 0;
        cleanData[idx + 1] = 0;
        cleanData[idx + 2] = 0;
        cleanData[idx + 3] = 0;
      } else if (r > 200 && g > 200 && b > 200 && a < 240) {
        // Edge fringe from white bg: defringe
        const normA = a / 255;
        cleanData[idx] = Math.max(0, Math.min(255, Math.round((r - 255 * (1 - normA)) / normA)));
        cleanData[idx + 1] = Math.max(0, Math.min(255, Math.round((g - 255 * (1 - normA)) / normA)));
        cleanData[idx + 2] = Math.max(0, Math.min(255, Math.round((b - 255 * (1 - normA)) / normA)));
      }
    }
  }

  const cleanSharp = sharp(cleanData, { raw: { width, height, channels: 4 } });

  // Extract each figure with a generous 10px padding of clean alpha=0 around them
  // Inst 1: x: 15 to 270 (width: 255)
  // Inst 2: x: 270 to 530 (width: 260)
  // Inst 3: x: 530 to 765 (width: 235)
  // Inst 4: x: 765 to 995 (width: 230)

  async function getPerson(left, widthW) {
    const buf = await cleanSharp
      .clone()
      .extract({ left, top: 0, width: widthW, height })
      .png()
      .toBuffer();
    return buf;
  }

  const inst1Png = await getPerson(15, 255);
  const inst2Png = await getPerson(270, 260);
  const inst3Png = await getPerson(530, 235);
  const inst4Png = await getPerson(765, 230);

  // Resize figures to make them bold and tall
  // Target container height = 560
  const inst1Res = await sharp(inst1Png).resize({ height: 535 }).toBuffer({ resolveWithObject: true });
  const inst2Res = await sharp(inst2Png).resize({ height: 520 }).toBuffer({ resolveWithObject: true });
  const inst3Res = await sharp(inst3Png).resize({ height: 505 }).toBuffer({ resolveWithObject: true });
  const inst4Res = await sharp(inst4Png).resize({ height: 490 }).toBuffer({ resolveWithObject: true });

  const cHeight = 550;
  // Let's place them with natural, professional shoulder overlap:
  // Inst 1 (foreground left)
  // Inst 2 (center, arms crossed, behind Inst 1's left arm)
  // Inst 3 (blue shirt, smiling, behind Inst 2's left arm)
  // Inst 4 (goatee, right, behind Inst 3's left arm)
  
  // Placement X coordinates:
  const x1 = 0;
  const x2 = 195;
  const x3 = 390;
  const x4 = 555;
  const totalW = x4 + inst4Res.info.width; // ~ 800px

  console.log(`Canvas dimensions: ${totalW} x ${cHeight}`);

  const composites = [
    { input: inst4Res.data, top: cHeight - inst4Res.info.height, left: x4 },
    { input: inst3Res.data, top: cHeight - inst3Res.info.height, left: x3 },
    { input: inst2Res.data, top: cHeight - inst2Res.info.height, left: x2 },
    { input: inst1Res.data, top: cHeight - inst1Res.info.height, left: x1 }
  ];

  const finalPng = await sharp({
    create: {
      width: totalW,
      height: cHeight,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite(composites)
  .png({ compressionLevel: 9 })
  .toBuffer();

  fs.writeFileSync('src/assets/instructors.png', finalPng);
  fs.writeFileSync('public/assets/instructors.png', finalPng);
  fs.writeFileSync('public/instructors.png', finalPng);

  console.log('Saved final instructors.png successfully!');
}

perfectComposition().catch(console.error);

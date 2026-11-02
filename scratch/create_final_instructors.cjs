const sharp = require('sharp');
const fs = require('fs');

async function createFinalInstructors() {
  const baseInput = 'dist/assets/instructors-GAjiLNKU.png';
  
  // Extract the 4 clean figures:
  const inst1Png = await sharp(baseInput).extract({ left: 26, top: 36, width: 233, height: 439 }).png().toBuffer();
  const inst2Png = await sharp(baseInput).extract({ left: 281, top: 11, width: 240, height: 464 }).png().toBuffer();
  const inst3Png = await sharp(baseInput).extract({ left: 541, top: 15, width: 214, height: 460 }).png().toBuffer();
  const inst4Png = await sharp(baseInput).extract({ left: 778, top: 24, width: 209, height: 451 }).png().toBuffer();

  // Target canvas height = 520
  const hInst2 = 505; // Center leader tallest
  const hInst1 = 490; // Left
  const hInst3 = 485; // Mid right
  const hInst4 = 470; // Far right

  const p2 = await sharp(inst2Png).resize({ height: hInst2 }).toBuffer({ resolveWithObject: true });
  const p1 = await sharp(inst1Png).resize({ height: hInst1 }).toBuffer({ resolveWithObject: true });
  const p3 = await sharp(inst3Png).resize({ height: hInst3 }).toBuffer({ resolveWithObject: true });
  const p4 = await sharp(inst4Png).resize({ height: hInst4 }).toBuffer({ resolveWithObject: true });

  const cHeight = 520;
  
  // Tight natural shoulder overlap
  const x1 = 0;
  const x2 = 150;
  const x3 = 345;
  const x4 = 495;
  const totalW = x4 + p4.info.width; // ~ 715px

  console.log(`Composing canvas: ${totalW} x ${cHeight}`);

  // Layer order: Inst 4 -> Inst 3 -> Inst 1 -> Inst 2 (Leader Center Front)
  const composites = [
    { input: p4.data, top: cHeight - p4.info.height, left: x4 },
    { input: p3.data, top: cHeight - p3.info.height, left: x3 },
    { input: p1.data, top: cHeight - p1.info.height, left: x1 },
    { input: p2.data, top: cHeight - p2.info.height, left: x2 }
  ];

  const outBuf = await sharp({
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

  fs.writeFileSync('src/assets/instructors.png', outBuf);
  fs.writeFileSync('public/assets/instructors.png', outBuf);
  fs.writeFileSync('public/instructors.png', outBuf);

  console.log('Saved final instructors.png (715x520) successfully!');
}

createFinalInstructors().catch(console.error);

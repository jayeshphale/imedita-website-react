const sharp = require('sharp');
const fs = require('fs');

async function testLeaderCenter() {
  const baseInput = 'dist/assets/instructors-GAjiLNKU.png';
  const { data, info } = await sharp(baseInput).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // Extract the 4 clean figures:
  // Inst 1 (beard): x=26..258, y=36..474 (w=233, h=439)
  // Inst 2 (bald leader): x=281..520, y=11..474 (w=240, h=464)
  // Inst 3 (blue shirt): x=541..754, y=15..474 (w=214, h=460)
  // Inst 4 (goatee): x=778..986, y=24..474 (w=209, h=451)

  const inst1Png = await sharp(baseInput).extract({ left: 26, top: 36, width: 233, height: 439 }).png().toBuffer();
  const inst2Png = await sharp(baseInput).extract({ left: 281, top: 11, width: 240, height: 464 }).png().toBuffer();
  const inst3Png = await sharp(baseInput).extract({ left: 541, top: 15, width: 214, height: 460 }).png().toBuffer();
  const inst4Png = await sharp(baseInput).extract({ left: 778, top: 24, width: 209, height: 451 }).png().toBuffer();

  // Target canvas height = 520
  // Scale each figure to be prominent and large:
  const hInst2 = 505; // Center leader tallest
  const hInst1 = 490; // Left
  const hInst3 = 485; // Mid right
  const hInst4 = 470; // Far right

  const p2 = await sharp(inst2Png).resize({ height: hInst2 }).toBuffer({ resolveWithObject: true });
  const p1 = await sharp(inst1Png).resize({ height: hInst1 }).toBuffer({ resolveWithObject: true });
  const p3 = await sharp(inst3Png).resize({ height: hInst3 }).toBuffer({ resolveWithObject: true });
  const p4 = await sharp(inst4Png).resize({ height: hInst4 }).toBuffer({ resolveWithObject: true });

  const cHeight = 520;
  // Let's position them comfortably:
  // Total target width ~ 720px - 740px
  // p1 at left = 0
  // p2 at left = 160 (overlaps p1 by 100px!)
  // p3 at left = 365 (behind p2, overlaps p2 by 55px)
  // p4 at left = 520 (behind p3, overlaps p3 by 65px)
  // totalWidth = 520 + p4.info.width = 520 + 218 = 738px!

  const x1 = 0;
  const x2 = 160;
  const x3 = 365;
  const x4 = 520;
  const totalW = x4 + p4.info.width;

  console.log(`Composing canvas: ${totalW} x ${cHeight}`);

  // Layer order: back to front
  // Back: Inst 4 -> Inst 3 -> Inst 1 -> Inst 2 (Front)
  const composites = [
    { input: p4.data, top: cHeight - p4.info.height, left: x4 },
    { input: p3.data, top: cHeight - p3.info.height, left: x3 },
    { input: p1.data, top: cHeight - p1.info.height, left: x1 },
    { input: p2.data, top: cHeight - p2.info.height, left: x2 } // Center leader in front!
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

  fs.writeFileSync('src/assets/instructors-new.png', outBuf);
  console.log('Saved src/assets/instructors-new.png successfully!');
}

testLeaderCenter().catch(console.error);

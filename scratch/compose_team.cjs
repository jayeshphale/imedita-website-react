const sharp = require('sharp');
const fs = require('fs');

async function composeTeam() {
  const input = 'src/assets/instructors.png';
  
  // Extract individual figures as buffers
  // Inst 1: { minX: 26, maxX: 258, minY: 36, maxY: 474, width: 233, height: 439 }
  // Inst 2: { minX: 281, maxX: 520, minY: 11, maxY: 474, width: 240, height: 464 }
  // Inst 3: { minX: 541, maxX: 754, minY: 15, maxY: 474, width: 214, height: 460 }
  // Inst 4: { minX: 778, maxX: 986, minY: 24, maxY: 474, width: 209, height: 451 }

  const inst1Buf = await sharp(input)
    .extract({ left: 26, top: 36, width: 233, height: 439 })
    .toBuffer();

  const inst2Buf = await sharp(input)
    .extract({ left: 281, top: 11, width: 240, height: 464 })
    .toBuffer();

  const inst3Buf = await sharp(input)
    .extract({ left: 541, top: 15, width: 214, height: 460 })
    .toBuffer();

  const inst4Buf = await sharp(input)
    .extract({ left: 778, top: 24, width: 209, height: 451 })
    .toBuffer();

  // Let's create an overlapping composition:
  // Base height = 500px.
  // Inst 1: scale slightly (1.08x) for foreground prominence: width 252, height 474
  // Inst 2: height 485, width 251
  // Inst 3: height 475, width 221
  // Inst 4: height 465, width 215

  const inst4Resized = await sharp(inst4Buf)
    .resize({ height: 465 })
    .toBuffer({ resolveWithObject: true });

  const inst3Resized = await sharp(inst3Buf)
    .resize({ height: 475 })
    .toBuffer({ resolveWithObject: true });

  const inst2Resized = await sharp(inst2Buf)
    .resize({ height: 490 })
    .toBuffer({ resolveWithObject: true });

  const inst1Resized = await sharp(inst1Buf)
    .resize({ height: 505 })
    .toBuffer({ resolveWithObject: true });

  console.log('Resized heights:');
  console.log('Inst 1:', inst1Resized.info.width, 'x', inst1Resized.info.height);
  console.log('Inst 2:', inst2Resized.info.width, 'x', inst2Resized.info.height);
  console.log('Inst 3:', inst3Resized.info.width, 'x', inst3Resized.info.height);
  console.log('Inst 4:', inst4Resized.info.width, 'x', inst4Resized.info.height);

  // Canvas total height = 520
  // Align bottom: top = 520 - height
  const cHeight = 520;

  // Let's position from left to right:
  // Inst 1 at left = 0, top = 520 - 505 = 15
  // Inst 2 at left = 175, top = 520 - 490 = 30
  // Inst 3 at left = 350, top = 520 - 475 = 45
  // Inst 4 at left = 500, top = 520 - 465 = 55
  // Total canvas width = 500 + inst4Resized.info.width = 500 + 215 = 715px!

  const totalWidth = 500 + inst4Resized.info.width;
  console.log(`Composing canvas: ${totalWidth} x ${cHeight}`);

  // Layer order: Inst 4 (back) -> Inst 3 -> Inst 2 -> Inst 1 (front)
  const composites = [
    {
      input: inst4Resized.data,
      top: cHeight - inst4Resized.info.height,
      left: 500
    },
    {
      input: inst3Resized.data,
      top: cHeight - inst3Resized.info.height,
      left: 350
    },
    {
      input: inst2Resized.data,
      top: cHeight - inst2Resized.info.height,
      left: 175
    },
    {
      input: inst1Resized.data,
      top: cHeight - inst1Resized.info.height,
      left: 0
    }
  ];

  const composed = await sharp({
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

  fs.writeFileSync('src/assets/instructors-composed.png', composed);
  console.log('Saved src/assets/instructors-composed.png successfully!');
}

composeTeam().catch(console.error);

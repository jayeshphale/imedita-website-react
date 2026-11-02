const sharp = require('sharp');
const fs = require('fs');

async function cleanCutout() {
  const baseInput = 'dist/assets/instructors-GAjiLNKU.png';
  const { data, info } = await sharp(baseInput).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // Function to extract a person and erode/defringe white edge pixels
  async function extractPerson(minX, maxX) {
    const pWidth = maxX - minX + 1;
    const pBuf = Buffer.alloc(pWidth * height * 4);

    for (let y = 0; y < height; y++) {
      for (let x = minX; x <= maxX; x++) {
        const srcIdx = (y * width + x) * channels;
        const destIdx = (y * pWidth + (x - minX)) * 4;
        pBuf[destIdx] = data[srcIdx];
        pBuf[destIdx + 1] = data[srcIdx + 1];
        pBuf[destIdx + 2] = data[srcIdx + 2];
        pBuf[destIdx + 3] = data[srcIdx + 3];
      }
    }

    // Now clean the boundaries of this person
    // Find boundary pixels that have a neighbor with alpha = 0
    const cleaned = Buffer.from(pBuf);
    for (let pass = 0; pass < 2; pass++) {
      for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < pWidth - 1; x++) {
          const idx = (y * pWidth + x) * 4;
          const a = cleaned[idx + 3];
          if (a === 0) continue;

          // Check if adjacent to transparent pixel
          let hasTransparentNeighbor = false;
          for (const [dy, dx] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
            const nIdx = ((y + dy) * pWidth + (x + dx)) * 4;
            if (cleaned[nIdx + 3] === 0) {
              hasTransparentNeighbor = true;
              break;
            }
          }

          if (hasTransparentNeighbor) {
            const r = cleaned[idx], g = cleaned[idx + 1], b = cleaned[idx + 2];
            const avg = (r + g + b) / 3;
            // If it's a light/white fringe pixel on suit or hair
            if (avg > 140) {
              cleaned[idx + 3] = 0; // erase the white boundary pixel
            }
          }
        }
      }
    }

    // Return trimmed person
    return sharp(cleaned, { raw: { width: pWidth, height, channels: 4 } })
      .trim({ threshold: 5 })
      .png()
      .toBuffer({ resolveWithObject: true });
  }

  const p1 = await extractPerson(15, 270);
  const p2 = await extractPerson(270, 530);
  const p3 = await extractPerson(530, 765);
  const p4 = await extractPerson(765, 995);

  console.log('P1 size:', p1.info.width, 'x', p1.info.height);
  console.log('P2 size:', p2.info.width, 'x', p2.info.height);
  console.log('P3 size:', p3.info.width, 'x', p3.info.height);
  console.log('P4 size:', p4.info.width, 'x', p4.info.height);

  // Resize them so they are large and tall
  // P1 is in the foreground: height = 535
  const p1Res = await sharp(p1.data).resize({ height: 535 }).toBuffer({ resolveWithObject: true });
  const p2Res = await sharp(p2.data).resize({ height: 520 }).toBuffer({ resolveWithObject: true });
  const p3Res = await sharp(p3.data).resize({ height: 505 }).toBuffer({ resolveWithObject: true });
  const p4Res = await sharp(p4.data).resize({ height: 490 }).toBuffer({ resolveWithObject: true });

  const cHeight = 550;
  // Let's place them with generous natural overlap:
  const x1 = 0;
  const x2 = 190;
  const x3 = 385;
  const x4 = 550;
  const totalW = x4 + p4Res.info.width; // ~ 780px

  console.log(`Final canvas: ${totalW} x ${cHeight}`);

  const composites = [
    { input: p4Res.data, top: cHeight - p4Res.info.height, left: x4 },
    { input: p3Res.data, top: cHeight - p3Res.info.height, left: x3 },
    { input: p2Res.data, top: cHeight - p2Res.info.height, left: x2 },
    { input: p1Res.data, top: cHeight - p1Res.info.height, left: x1 }
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

  console.log('Cleaned and composed instructors.png saved successfully!');
}

cleanCutout().catch(console.error);

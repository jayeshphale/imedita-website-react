const sharp = require('sharp');

async function extractInstructors() {
  const input = 'src/assets/instructors.png';
  const { data, info } = await sharp(input).raw().toBuffer({ resolveWithObject: true });
  
  // Find bounds for each of the 4 instructors:
  // Inst 1: x from 0 to 275
  // Inst 2: x from 275 to 535
  // Inst 3: x from 535 to 770
  // Inst 4: x from 770 to info.width
  
  function getBounds(startX, endX) {
    let minX = endX, maxX = startX, minY = info.height, maxY = 0;
    for (let y = 0; y < info.height; y++) {
      for (let x = startX; x < endX; x++) {
        const a = data[(y * info.width + x) * info.channels + 3];
        if (a > 20) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }
    return { minX, maxX, minY, maxY, width: maxX - minX + 1, height: maxY - minY + 1 };
  }

  const b1 = getBounds(0, 275);
  const b2 = getBounds(275, 535);
  const b3 = getBounds(535, 770);
  const b4 = getBounds(770, info.width);

  console.log('Inst 1 (Beard):', b1);
  console.log('Inst 2 (Bald/Glasses):', b2);
  console.log('Inst 3 (Blue Shirt):', b3);
  console.log('Inst 4 (Goatee):', b4);
}

extractInstructors().catch(console.error);

const sharp = require('sharp');

async function checkForegroundIntegrity() {
  const { data, info } = await sharp('src/assets/server-datacenter-engineer.png')
    .raw()
    .toBuffer({ resolveWithObject: true });
    
  const { width, height, channels } = info;
  
  // Engineer body area: x from 600 to 850, y from 350 to 750
  let transparentInBody = 0;
  for (let y = 350; y < 750; y++) {
    for (let x = 600; x < 850; x++) {
      const idx = (y * width + x) * channels;
      const a = data[idx + 3];
      if (a < 200) {
        // Check if this was close to edge or inside
        transparentInBody++;
      }
    }
  }
  
  // Server rack area: x from 100 to 350, y from 100 to 700
  let transparentInRack = 0;
  for (let y = 100; y < 700; y++) {
    for (let x = 100; x < 350; x++) {
      const idx = (y * width + x) * channels;
      const a = data[idx + 3];
      if (a < 200) {
        transparentInRack++;
      }
    }
  }
  
  console.log('Transparent pixels in body bounding box (mostly edge):', transparentInBody);
  console.log('Transparent pixels in rack bounding box:', transparentInRack);
}

checkForegroundIntegrity().catch(console.error);

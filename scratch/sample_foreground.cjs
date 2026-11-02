const sharp = require('sharp');

async function main() {
  const { data, info } = await sharp('src/assets/server-datacenter-engineer.jpg')
    .raw()
    .toBuffer({ resolveWithObject: true });
    
  const { width, height, channels } = info;
  // Let's sample along a horizontal line through the engineer's chest/shoulder around y=450, x=600 to 800
  console.log('Sampling horizontal line across shirt (y=480, x=650 to 750, step=10):');
  for (let x = 650; x <= 750; x += 10) {
    const idx = (480 * width + x) * channels;
    console.log(`x=${x}: R=${data[idx]}, G=${data[idx+1]}, B=${data[idx+2]}`);
  }

  // Sample collar (y=380, x=650 to 700)
  console.log('Sampling collar (y=380, x=650 to 700, step=10):');
  for (let x = 650; x <= 700; x += 10) {
    const idx = (380 * width + x) * channels;
    console.log(`x=${x}: R=${data[idx]}, G=${data[idx+1]}, B=${data[idx+2]}`);
  }
}

main().catch(console.error);

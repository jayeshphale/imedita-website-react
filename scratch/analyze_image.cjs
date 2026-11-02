const sharp = require('sharp');

async function main() {
  const { data, info } = await sharp('src/assets/server-datacenter-engineer.jpg')
    .raw()
    .toBuffer({ resolveWithObject: true });
    
  console.log('Image info:', info);
  const { width, height, channels } = info;
  const testPoints = [
    [0, 0], 
    [width - 1, 0], 
    [Math.floor(width / 2), 0],
    [width - 1, Math.floor(height / 2)],
    [width - 1, height - 10],
    [Math.floor(width * 0.7), 20],
    [Math.floor(width * 0.5), 100], // inside the open door area
  ];
  
  for (const [x, y] of testPoints) {
    const idx = (y * width + x) * channels;
    console.log('Pixel at (' + x + ', ' + y + '): R=' + data[idx] + ', G=' + data[idx+1] + ', B=' + data[idx+2]);
  }
}

main().catch(console.error);

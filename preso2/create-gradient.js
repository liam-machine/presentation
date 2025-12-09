const sharp = require('sharp');

async function createGradient() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="810">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#EB1E32"/>
        <stop offset="100%" style="stop-color:#55328C"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
  </svg>`;

  await sharp(Buffer.from(svg)).png().toFile('gradient-bg.png');
  console.log('Gradient background created');
}

createGradient().catch(console.error);

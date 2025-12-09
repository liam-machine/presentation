const React = require('react');
const ReactDOMServer = require('react-dom/server');
const sharp = require('sharp');
const {
  FaMicrosoft, FaDatabase, FaCog, FaRocket,
  FaTable, FaFileAlt, FaBrain, FaCode,
  FaCheckCircle, FaTimesCircle, FaLayerGroup
} = require('react-icons/fa');

async function rasterizeIcon(IconComponent, color, size, filename) {
  const svgString = ReactDOMServer.renderToStaticMarkup(
    React.createElement(IconComponent, { color: `#${color}`, size: size })
  );
  await sharp(Buffer.from(svgString)).png().toFile(filename);
  return filename;
}

async function createIcons() {
  const johnHollandRed = 'EB1E32';
  const johnHollandPurple = '55328C';
  const johnHollandLightBlue = '89D0DD';
  const johnHollandGrey = '6E6E6E';

  await rasterizeIcon(FaMicrosoft, johnHollandPurple, '120', 'icon-microsoft.png');
  await rasterizeIcon(FaDatabase, johnHollandRed, '120', 'icon-databricks.png');
  await rasterizeIcon(FaCog, johnHollandPurple, '80', 'icon-automate.png');
  await rasterizeIcon(FaRocket, johnHollandRed, '80', 'icon-jobs.png');
  await rasterizeIcon(FaTable, johnHollandPurple, '80', 'icon-table.png');
  await rasterizeIcon(FaLayerGroup, johnHollandRed, '80', 'icon-catalog.png');
  await rasterizeIcon(FaFileAlt, johnHollandPurple, '80', 'icon-powerapps.png');
  await rasterizeIcon(FaCode, johnHollandRed, '80', 'icon-apps.png');
  await rasterizeIcon(FaBrain, johnHollandRed, '100', 'icon-brain.png');
  await rasterizeIcon(FaCheckCircle, '70AD47', '50', 'icon-check.png');
  await rasterizeIcon(FaTimesCircle, 'E74C3C', '50', 'icon-times.png');

  console.log('Icons created successfully');
}

createIcons().catch(console.error);

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const sharp = require('sharp');
const {
  FaRobot, FaToolbox, FaLightbulb, FaBrain, FaRocket, FaShieldAlt,
  FaLock, FaChartLine, FaCheckCircle, FaClock, FaCode, FaDatabase,
  FaChartBar, FaFileAlt, FaCogs, FaUsers, FaHandshake, FaBullseye,
  FaArrowRight, FaExclamationTriangle, FaTachometerAlt
} = require('react-icons/fa');

async function rasterizeIconPng(IconComponent, color, size, filename) {
  const svgString = ReactDOMServer.renderToStaticMarkup(
    React.createElement(IconComponent, { color: `#${color}`, size: size })
  );
  await sharp(Buffer.from(svgString)).png().toFile(filename);
  return filename;
}

async function generateAllIcons() {
  const icons = [
    { component: FaRobot, color: 'EB1E32', size: '80', name: 'robot-icon.png' },
    { component: FaToolbox, color: '55328C', size: '80', name: 'toolbox-icon.png' },
    { component: FaLightbulb, color: 'EB1E32', size: '80', name: 'lightbulb-icon.png' },
    { component: FaBrain, color: '55328C', size: '80', name: 'brain-icon.png' },
    { component: FaRocket, color: 'EB1E32', size: '80', name: 'rocket-icon.png' },
    { component: FaShieldAlt, color: '6E6E6E', size: '80', name: 'shield-icon.png' },
    { component: FaLock, color: '6E6E6E', size: '80', name: 'lock-icon.png' },
    { component: FaChartLine, color: 'EB1E32', size: '80', name: 'chart-icon.png' },
    { component: FaCheckCircle, color: 'B4D2C3', size: '80', name: 'check-icon.png' },
    { component: FaClock, color: '55328C', size: '80', name: 'clock-icon.png' },
    { component: FaCode, color: 'EB1E32', size: '80', name: 'code-icon.png' },
    { component: FaDatabase, color: '55328C', size: '80', name: 'database-icon.png' },
    { component: FaChartBar, color: 'EB1E32', size: '80', name: 'chartbar-icon.png' },
    { component: FaFileAlt, color: '55328C', size: '80', name: 'file-icon.png' },
    { component: FaCogs, color: '6E6E6E', size: '80', name: 'cogs-icon.png' },
    { component: FaUsers, color: 'EB1E32', size: '80', name: 'users-icon.png' },
    { component: FaHandshake, color: 'EB1E32', size: '80', name: 'handshake-icon.png' },
    { component: FaBullseye, color: '55328C', size: '80', name: 'target-icon.png' },
    { component: FaArrowRight, color: 'EB1E32', size: '80', name: 'arrow-icon.png' },
    { component: FaExclamationTriangle, color: 'EF4B5B', size: '80', name: 'warning-icon.png' },
    { component: FaTachometerAlt, color: 'EB1E32', size: '80', name: 'speedometer-icon.png' }
  ];

  for (const icon of icons) {
    await rasterizeIconPng(icon.component, icon.color, icon.size, icon.name);
    console.log(`Created ${icon.name}`);
  }
}

generateAllIcons().catch(console.error);

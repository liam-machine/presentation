const React = require('react');
const ReactDOMServer = require('react-dom/server');
const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');
const lucide = require('react-icons/lu');

async function rasterizeIconPng(IconComponent, color, size = "256", filename) {
  const svgString = ReactDOMServer.renderToStaticMarkup(
    React.createElement(IconComponent, { color: `#${color}`, size: size })
  );

  await sharp(Buffer.from(svgString))
    .png()
    .toFile(filename);

  return filename;
}

async function main() {
  const iconsDir = './icons';
  await fs.mkdir(iconsDir, { recursive: true });

  // Icon colors - using John Holland brand colors
  const red = 'EB1E32';
  const purple = '55328C';
  const grey = '6E6E6E';
  const white = 'FFFFFF';

  const icons = [
    { name: 'Zap', color: red, component: lucide.LuZap },
    { name: 'CircleCheck', color: red, component: lucide.LuCircleCheck },
    { name: 'Network', color: white, component: lucide.LuNetwork },
    { name: 'Globe', color: red, component: lucide.LuGlobe },
    { name: 'Wrench', color: red, component: lucide.LuWrench },
    { name: 'Users', color: red, component: lucide.LuUsers },
    { name: 'Server', color: red, component: lucide.LuServer },
    { name: 'Shield', color: red, component: lucide.LuShield },
    { name: 'Target', color: red, component: lucide.LuTarget },
    { name: 'Link', color: red, component: lucide.LuLink },
    { name: 'MessageSquare', color: purple, component: lucide.LuMessageSquare },
    { name: 'Code', color: purple, component: lucide.LuCode },
    { name: 'Key', color: red, component: lucide.LuKey },
    { name: 'GitPullRequest', color: red, component: lucide.LuGitPullRequest },
    { name: 'Bot', color: red, component: lucide.LuBot },
    { name: 'UsersRound', color: white, component: lucide.LuUsersRound },
    { name: 'Sparkles', color: red, component: lucide.LuSparkles },
    { name: 'FileText', color: white, component: lucide.LuFileText },
    { name: 'ShieldCheck', color: white, component: lucide.LuShieldCheck },
    { name: 'FlaskConical', color: white, component: lucide.LuFlaskConical },
    { name: 'TrendingUp', color: white, component: lucide.LuTrendingUp },
    { name: 'Building', color: white, component: lucide.LuBuilding },
    { name: 'Handshake', color: white, component: lucide.LuHandshake },
    { name: 'Calendar', color: red, component: lucide.LuCalendar },
    { name: 'RefreshCw', color: red, component: lucide.LuRefreshCw },
    { name: 'Calculator', color: red, component: lucide.LuCalculator },
    { name: 'ShieldAlert', color: red, component: lucide.LuShieldAlert },
    { name: 'ListChecks', color: white, component: lucide.LuListChecks },
    { name: 'Rocket', color: red, component: lucide.LuRocket },
  ];

  console.log('Rasterizing icons...');
  for (const icon of icons) {
    const filename = path.join(iconsDir, `${icon.name}.png`);
    await rasterizeIconPng(icon.component, icon.color, '256', filename);
    console.log(`✓ ${icon.name}.png`);
  }
  console.log(`\nCreated ${icons.length} icon files in ${iconsDir}/`);
}

main().catch(console.error);

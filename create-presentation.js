const pptxgen = require('pptxgenjs');
const html2pptx = require('./.claude/skills/pptx-john-holland/scripts/html2pptx.js');
const path = require('path');

async function createPresentation() {
  console.log('Creating PowerPoint presentation...');
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'John Holland';
  pptx.title = 'Bridge Construction Excellence';

  // Slide 1: Title
  console.log('Converting slide 1...');
  const { slide: slide1 } = await html2pptx('slide1.html', pptx);

  // Add logo to slide 1 using PptxGenJS directly
  const logoPath = path.resolve('.claude/skills/pptx-john-holland/assets/John Holland Logo.png');
  slide1.addImage({
    path: logoPath,
    x: 3.5,
    y: 0.8,
    w: 3,
    h: 0.6
  });

  // Add a decorative shape for visual interest
  slide1.addShape(pptx.shapes.RECTANGLE, {
    x: 0, y: 3.5, w: 10, h: 2,
    fill: { color: "55328C" },
    line: { type: 'none' }
  });

  // Slide 2: Content
  console.log('Converting slide 2...');
  const { slide: slide2 } = await html2pptx('slide2.html', pptx);

  // Add logo to slide 2
  slide2.addImage({
    path: logoPath,
    x: 0.3,
    y: 0.15,
    w: 1.8,
    h: 0.36
  });

  // Save presentation
  console.log('Saving presentation...');
  await pptx.writeFile({ fileName: 'john-holland-bridge-demo.pptx' });

  console.log('✓ Presentation created: john-holland-bridge-demo.pptx');
}

createPresentation().catch(console.error);

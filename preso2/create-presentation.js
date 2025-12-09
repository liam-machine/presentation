const pptxgen = require('pptxgenjs');
const html2pptx = require('./.claude/skills/pptx-john-holland/scripts/html2pptx.js');

async function createPresentation() {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'John Holland';
  pptx.title = 'Microsoft vs Databricks Platform Comparison';

  // Slide 1: Title
  await html2pptx('slide1.html', pptx);
  
  // Slide 2: Power Apps vs Databricks Apps
  await html2pptx('slide2.html', pptx);
  
  // Slide 3: Power Automate vs Databricks Jobs
  await html2pptx('slide3.html', pptx);
  
  // Slide 4: SharePoint Lists vs Unity Catalog
  await html2pptx('slide4.html', pptx);
  
  // Slide 5: Databricks Advantage
  await html2pptx('slide5.html', pptx);
  
  // Slide 6: AI-Powered Development
  await html2pptx('slide6.html', pptx);

  await pptx.writeFile({ fileName: 'Microsoft-vs-Databricks.pptx' });
  console.log('Presentation created successfully: Microsoft-vs-Databricks.pptx');
}

createPresentation().catch(console.error);

const pptxgen = require('pptxgenjs');
const html2pptx = require('./.claude/skills/pptx-john-holland/scripts/html2pptx');
const path = require('path');

async function createPresentation() {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'John Holland IT';
  pptx.title = 'Accelerating AI Capability';
  pptx.subject = 'AI Enablement Proposal';

  console.log('Converting slides to PowerPoint...\n');

  // Process slides (skip slide 2)
  const slidesToProcess = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  let slideCount = 0;

  for (const i of slidesToProcess) {
    slideCount++;
    const slideNum = i.toString().padStart(2, '0');
    const htmlFile = path.join(__dirname, 'slides', `slide${slideNum}.html`);

    console.log(`Processing slide ${slideCount}/${slidesToProcess.length}...`);
    const { slide, placeholders } = await html2pptx(htmlFile, pptx);

    // Add table to slide 11 in final presentation (original slide 12)
    if (i === 12) {
      const tablePlaceholder = placeholders.find(p => p.id === 'investment-table');
      if (tablePlaceholder) {
        const tableData = [
          [
            { text: 'Category', options: { fill: { color: 'EB1E32' }, color: 'FFFFFF', bold: true, fontSize: 13 } },
            { text: 'Items', options: { fill: { color: 'EB1E32' }, color: 'FFFFFF', bold: true, fontSize: 13 } },
            { text: 'Est. Cost/Impact', options: { fill: { color: 'EB1E32' }, color: 'FFFFFF', bold: true, fontSize: 13 } }
          ],
          ['Licenses', 'Claude Pro, GitHub Copilot', 'Per-seat licensing'],
          ['Platform', 'ServiceNow AI Studio access', 'Included in existing'],
          ['Network', 'MCP server whitelisting', 'IT effort only'],
          ['People', 'AI Enablers time allocation', '2-4 hrs/fortnight'],
          ['Governance', 'Review sessions', '4-6 hrs/6 months']
        ];

        slide.addTable(tableData, {
          ...tablePlaceholder,
          border: { pt: 1, color: 'CCCCCC' },
          fill: { color: 'F8F8F8' },
          fontSize: 12,
          valign: 'middle',
          rowH: [0.45, 0.5, 0.5, 0.5, 0.5, 0.5]
        });
      }
    }
  }

  // Save the presentation
  const outputFile = 'AI-Capability-Acceleration.pptx';
  await pptx.writeFile({ fileName: outputFile });

  console.log(`\n✓ Presentation created: ${outputFile}`);
  console.log('Total slides: 14');
}

createPresentation().catch(err => {
  console.error('Error creating presentation:', err);
  process.exit(1);
});

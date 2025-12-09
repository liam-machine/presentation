const pptxgen = require('pptxgenjs');
const html2pptx = require('../.claude/skills/pptx-john-holland/scripts/html2pptx.js');

async function createPresentation() {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'Data & Analytics Team';
  pptx.title = 'AI-Augmented Data Engineering: A Proof of Concept Proposal';
  pptx.subject = 'Anthropic Claude & MCP Servers POC';

  console.log('Creating presentation...');

  // Slide 1: Title
  console.log('Processing slide 1...');
  await html2pptx('slide-01.html', pptx);

  // Slide 2: Current State
  console.log('Processing slide 2...');
  await html2pptx('slide-02.html', pptx);

  // Slide 3: The Opportunity
  console.log('Processing slide 3...');
  await html2pptx('slide-03.html', pptx);

  // Slide 4: Why Anthropic Claude
  console.log('Processing slide 4...');
  await html2pptx('slide-04.html', pptx);

  // Slide 5: MCP Protocol
  console.log('Processing slide 5...');
  await html2pptx('slide-05.html', pptx);

  // Slide 6: Use Case 1
  console.log('Processing slide 6...');
  await html2pptx('slide-06.html', pptx);

  // Slide 7: Use Case 2
  console.log('Processing slide 7...');
  await html2pptx('slide-07.html', pptx);

  // Slide 8: Use Case 3
  console.log('Processing slide 8...');
  await html2pptx('slide-08.html', pptx);

  // Slide 9: POC Workflow
  console.log('Processing slide 9...');
  await html2pptx('slide-09.html', pptx);

  // Slide 10: Value Proposition
  console.log('Processing slide 10...');
  await html2pptx('slide-10.html', pptx);

  // Slide 11: Security & Governance
  console.log('Processing slide 11...');
  await html2pptx('slide-11.html', pptx);

  // Slide 12: Blockers
  console.log('Processing slide 12...');
  await html2pptx('slide-12.html', pptx);

  // Slide 13: Competitive Landscape
  console.log('Processing slide 13...');
  await html2pptx('slide-13.html', pptx);

  // Slide 14: Success Criteria
  console.log('Processing slide 14...');
  await html2pptx('slide-14.html', pptx);

  // Slide 15: Timeline
  console.log('Processing slide 15...');
  await html2pptx('slide-15.html', pptx);

  // Slide 16: Call to Action
  console.log('Processing slide 16...');
  await html2pptx('slide-16.html', pptx);

  // Save presentation
  const filename = 'AI_Augmented_Data_Engineering_Proposal.pptx';
  console.log(`Saving presentation as ${filename}...`);
  await pptx.writeFile({ fileName: filename });
  console.log('Presentation created successfully!');
}

createPresentation().catch(console.error);

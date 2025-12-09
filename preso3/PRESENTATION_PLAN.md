# Presentation Plan: AI-Augmented Data Engineering with Anthropic Claude

## Audience
General Manager of Emerging Applications and Technology, John Holland

## Objective
Secure approval for Anthropic subscription and MCP server network whitelisting to enable AI-augmented data engineering experimentation.

## Implementation Requirement
**CRITICAL**: This presentation MUST be created using the **pptx-john-holland** skill to ensure proper John Holland branding, color palette, and logo usage.

---

## Presentation Structure (14-16 slides, ~15-20 minutes)

### Slide 1: Title Slide
**Title**: "AI-Augmented Data Engineering: A Proof of Concept Proposal"
**Subtitle**: "Leveraging Anthropic Claude & MCP Servers to Transform Data Team Productivity"
**Footer**: Data & Analytics Team | [Date]

**Visual Elements**:
- John Holland logo (top right)
- Clean, professional background using JH color palette
- Icon: Robot/AI brain icon

**Speaker Notes**:
- Thank the GM for their time
- Set context: We're proposing an experimental approach to enhance our data engineering capabilities
- Duration: 15-20 minutes with Q&A at the end

---

### Slide 2: Current State - Our AI Toolkit
**Title**: "Where We Are Today"

**Content**:
- ✅ GitHub Copilot access across the organization
- 🔧 Useful for code completion and simple suggestions
- ❌ **Limitations we're experiencing:**
  - Context window truncation in complex projects
  - Limited to IDE-based interactions
  - Generic solutions that don't understand our tech stack
  - No integration with our workflow tools (Jira, DBT, Databricks, etc.)

**Visual Elements**:
- Icon: Toolbox or current state icon
- Simple comparison table or bullet points
- Use cautious yellow/orange for limitations

**Speaker Notes**:
- Acknowledge Copilot's value as a starting point
- Emphasize we're not replacing it, but complementing it for specific data engineering use cases
- Current tools are model-agnostic platforms that compromise on specialized capabilities
- Our team has specific needs that require deeper integration

---

### Slide 3: The Opportunity
**Title**: "Beyond Code Completion: The Next Evolution"

**Content**:
**What if our data engineers could:**
- 🎯 Build entire data models from Jira ticket descriptions
- 🔍 Debug complex DBT models with full repository context
- 📊 Generate Power BI reports from natural language requirements
- 📑 Create branded presentations automatically (like this one!)

**All while maintaining human oversight and control**

**Visual Elements**:
- Icon: Lightbulb, rocket, or growth chart
- Visual representation of human + AI collaboration
- Use aspirational green from JH palette

**Speaker Notes**:
- Paint the vision of augmented engineers, not replaced engineers
- These are tasks that currently take hours or days
- Focus on "what if" to create excitement
- This slide transitions from problem to possibility

---

### Slide 4: Why Anthropic Claude?
**Title**: "Why We Need Direct Access to Frontier Models"

**Content**:
**Two Critical Advantages Over Current Tools:**

**1. Superior Context Management** 🎯
- Full context window utilization (no truncation)
- Maintain conversation state across complex tasks
- Understand entire codebases and documentation

**2. Advanced Agent Capabilities** 🤖
- Claude Agents for autonomous task execution
- Skills for specialized functions (like PowerPoint generation)
- Tool use and function calling
- Multi-step reasoning with human checkpoints

**Visual Elements**:
- Split slide with two sections (icons for each)
- Icon: Brain/processor for context, Robot for agents
- Comparison visual: Generic platform vs. Frontier model

**Speaker Notes**:
- Model-agnostic platforms create a lowest-common-denominator experience
- Context window truncation means the AI "forgets" critical information mid-task
- Agents can execute research plans, create implementation plans, and generate code with human review at each stage
- This is about accessing cutting-edge capabilities, not just another chat interface

---

### Slide 5: The MCP Protocol Revolution
**Title**: "Model Context Protocol: Connecting AI to Our Stack"

**Content**:
**What is MCP?**
A standardized protocol that allows AI to securely interact with tools and data sources

**Our Proposed MCP Servers:**
- 🔗 GitHub - Code repositories and version control
- 📋 Atlassian (Jira) - Requirements and tickets
- 🗄️ SQLdbm - Data modeling
- 🔧 DBT - Data transformation pipelines
- ⚡ Databricks - Data platform and notebooks
- 📊 Power BI - Business intelligence

**Visual Elements**:
- Central AI hub with connections to each tool (spider diagram)
- Icons for each platform
- Visual flow showing data/context exchange

**Speaker Notes**:
- MCP is an open standard (like HTTP for AI interactions)
- Allows AI to read contexts from our tools, not just generic code
- This is the key differentiator - AI that understands OUR environment
- Each MCP server provides secure, read-focused access to relevant context

---

### Slide 6: Use Case #1 - The Data Engineer Agent
**Title**: "Use Case: Autonomous Data Model Development"

**Content**:
**Workflow:**
1. 📋 Reads Jira ticket requirements
2. 🔍 Analyzes existing DBT models and patterns
3. 📝 Creates research plan → **Human reviews**
4. 🎯 Develops implementation plan → **Human reviews**
5. 💻 Generates DBT code → **Human reviews PR**
6. 🐛 Debugs failures using logs and context

**Value**: Reduces model development time from days to hours

**Visual Elements**:
- Step-by-step workflow diagram
- Checkpoints highlighted for human review
- Icon: Robot engineer or workflow icon
- Use process flow arrows

**Speaker Notes**:
- This mirrors how senior engineers work: research, plan, implement
- Human reviews ensure quality at each decision point
- AI handles the "grunt work" - reading documentation, writing boilerplate, checking standards
- One bad requirement could lead to thousands of bad lines of code, so humans control strategy
- AI can debug by reading error logs, checking documentation, and testing iteratively

---

### Slide 7: Use Case #2 - Power BI Report Builder
**Title**: "Use Case: Natural Language to BI Reports"

**Content**:
**Workflow:**
1. 📊 User describes report requirements in natural language
2. 🔗 Agent queries Databricks for data structure
3. 🎨 Designs report layout based on JH standards
4. 📈 Generates Power BI report definition
5. ✅ Human reviews and publishes

**Example**: "Create a monthly safety metrics dashboard by region with YoY comparison"

**Value**: Democratizes BI development, reduces analyst backlog

**Visual Elements**:
- Before/after visual (manual process vs. agent-assisted)
- Icon: Dashboard or analytics icon
- Example report mock-up

**Speaker Notes**:
- Currently analysts spend significant time on repetitive report requests
- This doesn't replace analysts - it frees them for complex analysis
- Agent understands our data model through Databricks MCP server
- Maintains JH styling and standards automatically

---

### Slide 8: Use Case #3 - Presentation Builder (Meta!)
**Title**: "Use Case: This Presentation Was AI-Assisted"

**Content**:
**What You're Viewing:**
- 🎨 Generated using natural language requirements
- 🏢 John Holland color palette and branding applied automatically
- 📝 Speaker notes drafted by AI
- 🎯 Structured for executive audience
- ✅ Human reviewed and refined

**From Concept to Presentation: Minutes, Not Hours**

**Visual Elements**:
- Icon: Presentation or slides icon
- Screenshot or visual of the creation process
- Self-referential design element

**Speaker Notes**:
- This is a working example of what we're proposing
- Demonstrates the pptx-john-holland skill in action
- Same concept applies to any branded content creation
- Imagine project proposals, status reports, technical documentation all created this way
- Human provides strategic input, AI handles formatting and structure

---

### Slide 9: The POC Workflow
**Title**: "How It Works: Human-in-the-Loop AI"

**Content**:
**Three-Stage Review Process:**

**Stage 1: Research Plan** 🔍
- AI analyzes repository, documentation, existing patterns
- Produces research findings
- **→ Human reviews and approves/modifies**

**Stage 2: Implementation Plan** 📋
- AI creates detailed implementation strategy based on ticket requirements
- Outlines approach, files to modify, patterns to follow
- **→ Human reviews and approves/modifies**

**Stage 3: Code Generation** 💻
- AI generates code following approved plan
- Pull request includes trace log of all changes and reasoning
- **→ Human reviews PR with full audit trail**

**Visual Elements**:
- Three-column workflow with gates between stages
- Icons for research, planning, and coding
- Emphasis on human review checkpoints

**Speaker Notes**:
- This is the key to safe, controlled AI usage
- One line of bad code from a human is one line of bad code
- But one bad plan could generate thousands of bad lines
- By controlling strategy, humans maintain quality while gaining productivity
- Full traceability: every change has an explanation
- This mirrors software development best practices (peer review, documentation)

---

### Slide 10: Value Proposition
**Title**: "Expected Outcomes and ROI"

**Content**:
**Realistic Short-Term (3-6 months):**
- ⬆️ 10-20% productivity improvement on repetitive tasks
- ⏱️ Faster onboarding of junior engineers (learning from AI)
- 📚 Better documentation and code consistency
- 🔄 Reduced context switching for senior engineers

**Long-Term Potential:**
- 📈 Productivity gains scale with model improvements
- 🎯 Team focuses on high-value strategic work
- 🚀 Faster delivery of data products
- 💡 Innovation through experimentation

**Investment**: Anthropic Team subscription (~$30-40/user/month)

**Visual Elements**:
- Split timeline: short-term vs. long-term
- Icon: Growth chart, ROI symbol
- Cost vs. value comparison

**Speaker Notes**:
- We're being conservative with estimates - under-promise, over-deliver
- The real value is in freeing senior engineers from repetitive work
- Models improve monthly - Claude Opus 4.5 just released, capabilities expanding
- Compare cost to hiring additional engineers or consultants
- This is an experiment - low cost, high learning potential
- Even 10% productivity improvement pays for itself many times over

---

### Slide 11: Security & Governance
**Title**: "Addressing Security Concerns"

**Content**:
**Our Approach:**
- ✅ Enterprise-grade Anthropic subscription (data not used for training)
- 🔒 MCP servers operate within our network security boundaries
- 👥 Human review required before any code deployment
- 📝 Full audit trails of all AI interactions
- 🎯 Read-only access where possible
- 🔐 SSO integration and access controls

**We'll work with Security team to:**
- Define acceptable use policies
- Configure appropriate access levels
- Establish monitoring and audit procedures

**Visual Elements**:
- Icon: Shield, lock, or security badge
- Checklist visual
- Trust/security themed colors

**Speaker Notes**:
- We understand security is paramount
- This is why we need Security sign-off as our first blocker to address
- Anthropic has enterprise security features and compliance certifications
- We're not asking for unrestricted access - controlled POC with monitoring
- Happy to work through security review process
- MCP servers can be configured with granular permissions

---

### Slide 12: Blockers & What We Need
**Title**: "Two Key Approvals Required"

**Content**:
**Blocker #1: Security Approval** 🔒
- Procurement of Anthropic Team licenses for Data & Analytics team
- Security review and acceptable use policy
- **Our ask**: Sponsor security review process

**Blocker #2: Network Whitelisting** 🌐
- MCP servers need network access (GitHub, Atlassian, DBT, Databricks, Power BI, SQLdbm)
- Architectural governance typically required for new integrations
- **The challenge**: We're trying to run a POC, not a production rollout

**Our ask**: Fast-track POC approval with limited scope

**Visual Elements**:
- Icon: Roadblock or gate icon
- Two distinct sections with clear call-outs
- Use attention-grabbing colors (cautious yellow/orange)

**Speaker Notes**:
- Being transparent about what we need
- We understand the process exists for good reasons
- But POCs shouldn't require full architectural review
- Suggest sandbox/limited access approach for POC
- Once we prove value, we can go through full governance for production
- Time is competitive advantage - other companies are already experimenting

---

### Slide 13: The Competitive Landscape
**Title**: "The Industry is Moving Fast"

**Content**:
**What's Happening:**
- 🏢 Leading engineering teams are already using AI agents in production
- 📊 Data engineering specifically identified as high-ROI use case for AI
- ⚡ Model capabilities doubling every 6-12 months
- 🎯 Companies that experiment now will lead tomorrow

**Risk of Waiting:**
- Falling behind in AI-augmented workflows
- Missing productivity gains competitors are realizing
- Longer catch-up period when we eventually adopt

**This POC positions us as innovators, not followers**

**Visual Elements**:
- Icon: Rocket, speedometer, or trend line
- Timeline showing AI evolution
- Competitive positioning visual

**Speaker Notes**:
- Not trying to create FOMO, but being realistic about pace of change
- This is particularly relevant for data engineering - perfect use case for AI
- The teams that learn how to work with AI now will have significant advantages
- POC de-risks the investment - we learn cheaply whether this works for us
- John Holland's reputation as an innovative company

---

### Slide 14: POC Success Criteria
**Title**: "How We'll Measure Success"

**Content**:
**3-Month POC Metrics:**

**Quantitative:**
- ✅ Time to complete standard data modeling tasks (% reduction)
- ✅ Number of models developed per sprint
- ✅ Code review cycles required (reduced rework)
- ✅ Documentation completeness scores

**Qualitative:**
- ✅ Engineer satisfaction and perceived productivity
- ✅ Code quality maintained or improved
- ✅ Learning curve for team members

**Decision Point**: Continue, expand, or stop based on data

**Visual Elements**:
- Icon: Checklist, target, or metrics dashboard
- Scorecard visual
- Success criteria in clear format

**Speaker Notes**:
- We're approaching this scientifically
- Will measure both hard metrics and soft benefits
- 3 months is enough to see meaningful results
- Clear go/no-go decision criteria - not an open-ended experiment
- Commitment to transparency and regular updates
- If it doesn't work, we'll be honest and stop

---

### Slide 15: Next Steps & Timeline
**Title**: "Proposed Path Forward"

**Content**:
**Phase 1: Approvals (Weeks 1-4)**
- Security review and license procurement
- Network access approval for MCP servers
- Define acceptable use policies

**Phase 2: Setup (Weeks 5-6)**
- Configure MCP servers
- Team training on agent workflows
- Establish measurement baselines

**Phase 3: POC Execution (Weeks 7-18)**
- Begin with simple use cases
- Expand complexity as we learn
- Weekly metric tracking

**Phase 4: Review & Decision (Week 19-20)**
- Present findings and recommendations
- Go/No-Go for broader rollout

**Visual Elements**:
- Icon: Calendar, roadmap, or timeline
- Gantt chart or timeline visual
- Phase gates clearly marked

**Speaker Notes**:
- Realistic timeline accounting for approval processes
- Not asking to skip security review, just to prioritize it
- Training is crucial - this is a new way of working
- Start small, learn, scale what works
- Built-in review point - you'll have data to make informed decision
- Total 20 weeks (5 months) from approval to decision

---

### Slide 16: Call to Action
**Title**: "Let's Experiment Together"

**Content**:
**What We're Asking For:**
1. ✅ Sponsorship of security review for Anthropic licenses
2. ✅ Fast-track network approval for MCP servers (POC scope)
3. ✅ Support for 3-month POC with Data & Analytics team

**What You'll Get:**
- 📊 Data-driven insights on AI productivity potential
- 🎯 Proof points for broader organizational AI strategy
- 🚀 A team experienced in cutting-edge AI workflows
- 💡 Lessons learned to inform future initiatives

**Next Step**: Security team introduction and kickoff meeting

**Visual Elements**:
- Icon: Handshake, partnership, or forward arrow
- Clean, action-oriented layout
- Use JH brand blue for positive momentum

**Speaker Notes**:
- This is a partnership - we're pioneering together
- Low cost, high learning value
- Data & Analytics is the perfect team to pilot this
- Our learnings can inform company-wide AI strategy
- We're ready to start as soon as approvals come through
- Thank them for consideration and open for questions

---

## Additional Guidance for Implementation

### Icon Strategy
Use icons consistently throughout to:
- Improve visual engagement and comprehension
- Break up text-heavy slides
- Create visual hierarchy
- Reinforce key concepts

**Recommended icon themes:**
- AI/Technology: Robot, brain, chip, neural network
- Process: Arrows, workflow, checkpoints, gears
- Value: Charts, growth, target, lightbulb
- Tools: Specific logos for GitHub, Jira, Databricks, etc.
- Security: Shield, lock, key
- People: Human + robot, collaboration, team

### Color Palette Usage (John Holland)
- **Primary Blue**: Trust, technology, main messages
- **Secondary Colors**: Strategic accent use
- **Caution Yellow/Orange**: Blockers, challenges, attention points
- **Success Green**: Opportunities, benefits, positive outcomes
- **Neutral Grays**: Supporting text, backgrounds

### Speaker Notes Principles
- Provide conversational guidance, not scripts
- Include timing cues where relevant
- Suggest emphasis points
- Offer response strategies for anticipated questions
- Include storytelling elements to make technical content engaging

### Presentation Flow Strategy
1. **Hook** (Slides 1-3): Current state → Opportunity
2. **Build Case** (Slides 4-5): Why Anthropic/Claude, Why MCP
3. **Demonstrate Value** (Slides 6-8): Concrete use cases
4. **Show How** (Slide 9): POC workflow methodology
5. **Justify Investment** (Slides 10-11): ROI and security
6. **Address Concerns** (Slides 12-13): Blockers and urgency
7. **Close** (Slides 14-16): Metrics, timeline, call to action

### Key Messages to Reinforce
- **Humans do the thinking, AI does the grunt work**
- **This is augmentation, not replacement**
- **Start small, measure, scale what works**
- **Low cost, high learning value**
- **Time-sensitive competitive advantage**

---

## Technical Implementation Notes

When creating this presentation using the **pptx-john-holland** skill:

1. **Ensure proper branding**: John Holland logo, color palette, font styles
2. **Maintain consistency**: Use templates and master slides
3. **Icon quality**: High-quality, professional icons throughout
4. **Visual hierarchy**: Clear heading structure, readable font sizes
5. **Speaker notes**: Include all speaker note content from this plan
6. **File output**: Save to `/Users/liamwynne/GIT/presentation/preso3/` directory
7. **Naming**: Use descriptive filename like `AI_Augmented_Data_Engineering_Proposal.pptx`

---

## Anticipated Questions & Suggested Responses

**Q: Why not just use Copilot more effectively?**
A: Copilot is excellent for code completion but lacks the context management and agent capabilities we need for complex data engineering workflows. We're not replacing it - we're complementing it for specialized use cases.

**Q: What's the security risk?**
A: Enterprise Anthropic subscriptions don't use data for training. MCP servers operate within our network boundaries with read-focused access. All code goes through human review before deployment. We'll work with Security to establish appropriate controls.

**Q: What if the POC fails?**
A: We'll have learned valuable lessons about AI capabilities and limitations for under $5K investment. That knowledge informs our broader AI strategy. Failure is a successful outcome if we learn from it.

**Q: Why only Data & Analytics team?**
A: We're the ideal pilot - technical capability to implement, clear use cases with measurable outcomes, and manageable team size. Our learnings can inform rollout to other teams.

**Q: What happens after the POC?**
A: Based on measured results, we'll present recommendations: expand to other teams, continue with D&A only, or discontinue. You'll have data to make an informed decision.

**Q: How much time will this take from the team?**
A: Initial setup: ~40 hours across team. POC execution: ~20% of each participant's time. We'll track productivity impact to ensure ROI.

---

## Success Factors

This presentation will be successful if it:
1. ✅ Clearly articulates the value proposition without overpromising
2. ✅ Addresses security and governance concerns proactively
3. ✅ Demonstrates understanding of organizational priorities
4. ✅ Proposes a measured, data-driven approach
5. ✅ Makes it easy to say "yes" to a low-risk experiment
6. ✅ Establishes credibility through realistic expectations
7. ✅ Creates urgency without being alarmist
8. ✅ Shows respect for existing tools while proposing evolution

---

**END OF PLAN**

---

## Implementation Checklist

- [ ] Use **pptx-john-holland** skill to create presentation
- [ ] Apply all John Holland branding guidelines
- [ ] Include icons on every slide
- [ ] Write comprehensive speaker notes for each slide
- [ ] Ensure logical flow and storytelling arc
- [ ] Proofread for clarity and professionalism
- [ ] Save to preso3 folder
- [ ] Review final output for completeness

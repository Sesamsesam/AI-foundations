import type { Tab } from './types';

export const content: Tab[] = [
    // ===== TAB 1: OVERVIEW =====
    {
        id: 'overview',
        label: 'Overview',
        hero: {
            title: 'Welcome to AI Foundations',
            subtitle: 'Your guided path to mastering AI.\nFor anyone to become aconfident practitioner',
            videoUrl: 'https://www.youtube.com/embed/kbOrgrPQHG4',
        },
        sections: [
            {
                id: 'what-is-modern-ai',
                title: 'What is Modern AI Exactly?',
                sidebarTitle: 'What is AI?',
                intro: 'A short intro to help you understand what you are about to learn.',
                cards: [
                    {
                        id: 'modern-ai-exactly-video',
                        type: 'videoEmbed',
                        title: 'What is Modern AI Exactly?',
                        videoId: 'https://www.youtube.com/embed/iWFVkDkuAB8',
                    },
                ],
            },
            {
                id: 'why-learn-ai',
                title: 'Why Learn AI Now?',
                sidebarTitle: 'Why AI Now?',
                intro: 'AI is transforming every industry, it is no longer optional - it is essential for career growth',
                cards: [
                    {
                        id: 'why-learn-carousel',
                        type: 'infoCarousel',
                        fullWidth: true,
                        infoItems: [
                            {
                                title: 'A New Baseline',
                                content: 'In 2026, learning AI is about keeping up with professional competence',
                                iconPath: '/icons/Color/level-up.svg'
                            },
                            {
                                title: 'The Reality',
                                content: 'Experts now regard AI literacy as a mandatory skill',
                                iconPath: '/icons/Color/world.svg'
                            },
                            {
                                title: 'The AI Imperative',
                                content: 'By 2030, AI is projected to contribute $15.7 trillion to the global economy',
                                stat: '$15.7T',
                                statLabel: 'Global GDP Impact',
                                iconPath: '/icons/Color/artificial-intelligence_gold.svg'
                            },
                            {
                                title: 'The Mastery Dividend',
                                content: 'The greatest value will flow to those who master these tools.',
                                iconPath: '/icons/Color/diamond.svg'
                            },
                            {
                                title: 'Substantial Salary Premium',
                                content: 'Jobs that require AI skills command a significant salary premium',
                                stat: '25-56%',
                                statLabel: 'Salary Premium',
                                iconPath: '/icons/Color/salary.svg'
                            },
                            {
                                title: 'Market Advantage',
                                content: 'In the US, the median salary for AI-capable professionals is roughly \n$160,000.',
                                iconPath: '/icons/Color/bar-graph.svg'
                            },
                            {
                                title: 'Specialized Roles',
                                content: 'Technical roles command even higher premiums of up to \n$200,000+',
                                iconPath: '/icons/Color/scientist.svg'
                            },
                            {
                                title: 'The Hiring Signal',
                                content: 'Candidates who list AI skills on their CVs are significantly more likely to receive callbacks',
                                stat: '+15%',
                                statLabel: 'Callback Rate',
                                iconPath: '/icons/Color/wink-emoji.svg'
                            },
                            {
                                title: 'From Support to Teammate',
                                content: 'Organizations are integrating AI Agents that coordinate entire workflows.',
                                iconPath: '/icons/Color/virtual-assistant.svg'
                            },
                            {
                                title: 'Agent Orchestration',
                                content: 'By 2026, an estimated 40% of enterprise apps will include task-specific AI agents.',
                                iconPath: '/icons/Color/ai_purple.svg'
                            },
                            {
                                title: 'Management Skills',
                                content: 'The most valuable workers are becoming "Managers of Agents"',
                                iconPath: '/icons/Color/teaching.svg'
                            },
                            {
                                title: 'Protection',
                                content: 'Without AI literacy, careers do not end abruptly; they plateau and narrow.',
                                iconPath: '/icons/Color/brain (4).svg'
                            },
                            {
                                title: 'Automation Resilience',
                                content: 'Roles that require human judgment, emathy and strategy are growing faster and are less vulnerable.',
                                iconPath: '/icons/Color/brain%20(1).svg'
                            },
                            {
                                title: 'Decision Quality',
                                content: 'AI-literate professionals are trusted with high-impact projects because they know how to validate AI outputs.',
                                iconPath: '/icons/Color/mind%20(1).svg'
                            },
                            {
                                title: 'Exponential Productivity',
                                content: 'Early adopters are seeing drastically more output by blending human creativity with automated systems.',
                                stat: '10x',
                                statLabel: 'Productivity',
                                iconPath: '/icons/Color/rocket%20(2).svg'
                            },
                            {
                                title: 'High-Value Work',
                                content: 'AI handles the mundane (summarizing, data entry), \nfreeing humans to focus on strategy and innovation.',
                                iconPath: '/icons/Color/creativity.svg'
                            },
                            {
                                title: 'AI-Native',
                                content: 'Companies are increasingly looking for professionals who think in terms of systems and workflows.',
                                iconPath: '/icons/Color/neural-network.svg'
                            },
                            {
                                title: 'If you upskill with AI!',
                                content: '',
                                iconPath: '/icons/Color/brain (5).svg'
                            },
                            {
                                title: '',
                                content: '',
                                iconPath: '/icons/Color/you-win.svg',
                                largeIcon: true
                            }
                        ]
                    },
                ],
            },
            {
                id: 'quick-wins',
                title: 'Your Quick Wins Today',
                sidebarTitle: 'Quick Wins',
                intro: 'Start with these five actionable steps. Each one takes less than 10 minutes and builds your AI foundation.',
                cards: [
                    {
                        id: 'quick-wins-intro-video',
                        type: 'videoEmbed',
                        title: 'Your Next Steps',
                        videoId: 'https://www.youtube.com/embed/4870PlMbuH0',
                        fullWidth: true,
                    },

                    {
                        id: 'quick-wins-carousel',
                        type: 'actionCarousel',
                        actionItems: [
                            {
                                title: 'Get 35 Free Credits',
                                description: 'Join Google Innovators to get 35 free learning credits every month for Google Cloud Skills. (Google Cloud Skills explained in Free Courses tab)',
                                details: [
                                    '35 free learning credits every month for Google Cloud Skills Boost',
                                    'Access to Google Labs for experimental AI features',
                                    'Free skill badges to add to your LinkedIn profile',
                                ],
                                url: 'https://developers.google.com/',
                                buttonText: 'Join Free',
                            },
                            {
                                title: 'Download Superwhisper',
                                description: 'Speak 3x faster than you type. Local, private, accurate.',
                                details: [
                                    'Average speaking speed: 150 WPM vs typing: 60-80 WPM',
                                    'Runs 100% locally on your Mac - nothing sent to the cloud',
                                    'Works in any app - emails, documents, code, messages',
                                    'Supports multiple languages and voice commands',
                                ],
                                url: 'https://superwhisper.com/',
                                buttonText: 'Download for Mac',
                            },
                            {
                                title: 'Explore NotebookLM',
                                description: 'Upload any document and have AI explain it to you.',
                                details: [
                                    'Upload PDFs, docs, or paste text for AI analysis',
                                    'Ask questions and get cited answers from your sources',
                                    'Generate summaries, outlines, and study guides',
                                    'Create AI-generated podcast discussions of your content',
                                ],
                                url: 'https://notebooklm.google/',
                                buttonText: 'Try NotebookLM',
                            },
                            {
                                title: 'Take a 30-Minute Free Course',
                                description: 'Complete your first AI certification in under an hour.',
                                details: [
                                    'Intro to Generative AI - official Google course',
                                    'Earn a skill badge for your LinkedIn profile',
                                    'Uses your free Google Developer learning points',
                                    'No coding required - perfect for beginners',
                                ],
                                url: 'https://www.cloudskillsboost.google/course_templates/536',
                                buttonText: 'Start Learning',
                            },
                            {
                                title: 'Try Google AI Studio',
                                description: 'The fastest path from prompt to production with Gemini.',
                                details: [
                                    'Experiment with Gemini models instantly - no setup required',
                                    'Generate and test API keys for your projects',
                                    'Save and share your best prompts',
                                    'Export code directly to your applications',
                                ],
                                url: 'https://aistudio.google.com/',
                                buttonText: 'Launch AI Studio',
                            },
                        ],
                    },
                ],
            },
            {
                id: 'physical-reality',
                title: 'AI\'s Physical Reality',
                sidebarTitle: 'AI Reality',
                intro: 'Before diving into tools, understand what AI actually is and how it works.',
                cards: [
                    {
                        id: 'physical-reality-video',
                        type: 'videoEmbed',
                        title: 'AI\'s Physical Reality Explained',
                        videoId: 'https://www.youtube.com/embed/2YWvtXeKHUQ',
                        fullWidth: true,
                    },
                    {
                        id: 'slide-physical',
                        type: 'slideViewer',
                        title: 'AI\'s Physical Reality',
                        pdfPath: '/slides/1. AI_s_Physical_Reality.pdf',
                    },
                ],
            },
            {
                id: 'learning-path',
                title: 'Your Learning Path',
                sidebarTitle: 'Learning Path',
                cards: [
                    {
                        id: 'path-callout',
                        type: 'callout',
                        title: 'Recommended Journey',
                        content: '1. Start with \'Google Setup\' to get your accounts ready. 2. Take the free courses to build foundations. 3. Then explore tools and eventually pursue certifications for career advancement.',
                    },
                    {
                        id: 'ai-ml-dl',
                        type: 'text',
                        title: 'AI vs ML vs Deep Learning',
                        content: 'AI is the broad concept of machines performing tasks "smartly." Machine Learning is a subset where machines learn from data. Deep Learning uses neural networks with many layers. Generative AI (like ChatGPT, Gemini, Claude) is built on Deep Learning.',
                    },
                ],
            },
        ],
    },

    // ===== TAB 2: GOOGLE SETUP =====
    {
        id: 'google-setup',
        label: 'Google Setup',
        hero: {
            title: 'Set Up Your AI Workspace',
            subtitle: 'Google has SO much to offer. \nLet us unlock it all.',
            videoUrl: 'https://www.youtube.com/embed/pd2Xu-a8x_c',
        },
        sections: [
            {
                id: 'navigation-warning',
                title: 'Before You Begin',
                cards: [
                    {
                        id: 'google-warning',
                        type: 'alert',
                        alertType: 'warning',
                        title: 'Google Can Be Confusing',
                        content: 'Google\'s AI ecosystem is powerful but not always easy to navigate. They have many overlapping products with similar names. Do not worry - I will guide you through exactly what you need. Bookmark this page!',
                        fullWidth: true,
                    },
                ],
            },
            {
                id: 'developer-account',
                title: 'Step 1: Google Developer Account',
                sidebarTitle: 'Step 1',
                intro: 'Your gateway to free learning and experimentation.',
                cards: [
                    {
                        id: 'developer-video',
                        type: 'videoEmbed',
                        title: 'How to Sign Up',
                        videoId: 'h489hYQCt0s',
                        fullWidth: true,
                    },
                    {
                        id: 'why-developer',
                        type: 'callout',
                        title: 'Why Developer Account?',
                        content: 'Even if you are not a developer, this gives you 35 Free credits for learning on Google Skills. Earn badges for your resume and access exclusive features in Google Labs - all for free!',
                    },
                    {
                        id: 'developer-links',
                        type: 'linksGrid',
                        title: 'Essential Links',
                        links: [
                            { label: 'Google Developer', url: 'https://developers.google.com/', description: 'Sign up for your developer account' },
                            { label: 'Google Skills', url: 'https://www.cloudskillsboost.google/', description: 'Earn badges with your 35 Free credits' },
                            { label: 'Google Labs', url: 'https://labs.google/', description: 'Experiment with cutting-edge AI' },
                        ],
                    },
                ],
            },
            {
                id: 'cloud-credits',
                title: 'Step 2: G$300 Free',
                sidebarTitle: 'Step 2',
                intro: 'Google gives you G$300 to experiment with their cloud services.',
                cards: [
                    {
                        id: 'credits-video',
                        type: 'videoEmbed',
                        title: 'Understanding Your Credits',
                        videoId: '9ux2EiI30uU',
                        isVertical: true, // YouTube Short - vertical 9:16 aspect ratio
                        fullWidth: true,
                    },
                    {
                        id: 'g300-explainer',
                        type: 'toolCard',
                        title: 'How to Get G$300 Free from Google',
                        content: 'The $300 credit is for anyone who creates a new billing account on Google Cloud. You do not need to be a "professional developer" or pay for a membership. Click to learn exactly how to activate it.',
                        faviconPath: '/favicons/google-cloud.png',
                        url: 'https://cloud.google.com/?hl=en',
                        fullWidth: true,
                        detailedContent: `**The "Google Cloud" Rule (Where the money is)**

The Offer: Google gives $300 in free credit to any new customer who sets up a Cloud Billing Account.

The Requirement: You must provide a credit card to verify you are a human (identity verification), even though they won't charge you until the $300 runs out.

NOTE: Your have 90 days to spend it from time of sign up. 
It can be used for any Google Cloud service, including AI Studio and Vertex AI. 
(veo 3 video generation etc.)

Is it "Developer Only"? No. Anyone can sign up. You could be a student, a hobbyist, or a baker. To Google, you are a "new cloud customer."

**The "AI Studio" Rule (Where the interface is)**

The Default: When you sign up for Google AI Studio, you get the Free Tier. You don't need a credit card, and you don't get $300. You just get free (limited) access.

**How to get the $300 applied to AI Studio:**

1. Sign up for Google Cloud Free Trial first to get your $300 wallet
2. Go to AI Studio
3. Click Settings → Billing and link your project to that Cloud account
4. Now your API usage will drain from that $300 credit instead of being capped by the free tier limits`,
                    },
                    {
                        id: 'credits-dual-info',
                        type: 'dualExpandable',
                        fullWidth: true,
                        dualExpandable: {
                            leftCard: {
                                title: '90 Days to Spend Your Credits',
                                content: 'Your G$300 credits expire in 90 days. Great for experimenting with Gemini API, Vertex AI, and building real projects. Start small and scale up.',
                                type: 'tip',
                            },
                            rightCard: {
                                title: 'What You Can Do With Credits',
                                items: [
                                    { label: 'Get a Gemini API key to use anywhere', url: 'https://aistudio.google.com/welcome' },
                                    { label: 'Experiment with Vertex AI for ML projects', url: 'https://cloud.google.com/vertex-ai' },
                                    { label: 'Generate videos with Veo 3', url: 'https://cloud.google.com/vertex-ai/generative-ai/docs/video/overview' },
                                    { label: 'Design UIs with Google Stitch', url: 'https://stitch.withgoogle.com/' },
                                    { label: 'Run BigQuery for data analysis', url: 'https://cloud.google.com/bigquery' },
                                ],
                            },
                        },
                    },
                    {
                        id: 'cloud-link',
                        type: 'linksGrid',
                        title: 'Get Started',
                        links: [
                            { label: 'Google Cloud Console', url: 'https://cloud.google.com/?hl=en', description: 'Sign up and claim your G$300 credits' },
                        ],
                    },
                ],
            },
            {
                id: 'why-google',
                title: 'Why Google', // G-H1: Renamed from "Understanding Gemini"
                intro: 'Google\'s flagship AI and how it connects everything.',
                cards: [
                    {
                        id: 'why-google-video',
                        type: 'videoEmbed',
                        title: 'The Google Ecosystem',
                        videoId: 'https://www.youtube.com/embed/JWjeURdXC3s',
                        isVertical: true,
                    },
                    {
                        id: 'slide-gemini',
                        type: 'slideViewer',
                        title: 'Gemini: The Infrastructure Skill',
                        pdfPath: '/slides/3. Gemini_The_Infrastructure_Skill.pdf',
                    },
                ],
            },
            {
                id: 'workspace-studio',
                title: 'Workspace.studio', // G-S1: New section
                intro: 'A powerful new tool for Workspace accounts to automate workflows.',
                cards: [
                    {
                        id: 'workspace-studio-reel',
                        type: 'videoEmbed',
                        title: 'Workspace Studio in Action',
                        videoId: 'https://www.youtube.com/embed/Xy0r5fKwlVo?start=13',
                        fullWidth: true,
                    },
                    {
                        id: 'n8n-obsolete',
                        type: 'callout',
                        title: 'N8N Will Be Obsolete',
                        content: 'Google Workspace Studio brings powerful automation directly into your workspace. For Workspace account holders, this could replace external tools like N8N for many common workflows.',
                    },
                    {
                        id: 'workspace-studio-link',
                        type: 'linksGrid',
                        title: 'Get Started',
                        links: [
                            { label: 'Workspace Studio', url: 'https://workspace.google.com/studio/', description: 'Explore Workspace Studio (requires Workspace account)' },
                        ],
                    },
                ],
            },
            {
                id: 'role-use-cases',
                title: 'Real-World AI Cases by Role',
                sidebarTitle: 'Use Cases',
                intro: 'Click any card to see how AI transforms real work scenarios with specific tools and workflows.\n\nWhen you see the G$ symbol, it means you can use your G$300 of free credits for that feature.',
                cards: [
                    {
                        id: 'role-cases-grid',
                        type: 'roleUseCases',
                        fullWidth: true,
                        roleUseCases: [
                            {
                                role: 'Sales',
                                scenario: 'Qualify 200 Inbound Leads',
                                tools: [
                                    { name: 'Gemini API', usesCredits: true },
                                    { name: 'BigQuery', usesCredits: true },
                                    { name: 'Sheets' },
                                ],
                                workflow: [
                                    'Import leads CSV to BigQuery for structured analysis',
                                    'Use Gemini to analyze company data and score leads 1-10',
                                    'Auto-generate personalized follow-up email drafts',
                                    'Export prioritized list with talking points to CRM',
                                ],
                                result: '⚡️ 8 hours to 30 minutes',
                                primaryUrl: 'https://cloud.google.com/bigquery',
                                businessContext: `Imagine you've just returned from a trade show or large online event with 200 inbound leads. Each person signed up with basic information – maybe just their email, name, company name, and website URL. That's not much to work with.

Here's the challenge: Which of these 200 leads should you call first? Who's actually a good fit for your product? Who has budget? Who's ready to buy now versus researching for next year?

Without AI, you'd spend the next 8+ hours manually researching each company. You'd visit their website, check LinkedIn, maybe use a tool like ZoomInfo, and try to piece together company size, industry, recent news, and funding status. Most salespeople either skip this step entirely (and waste time on bad leads) or do it superficially.

With AI, you can enrich all 200 leads in minutes. The AI visits each company's website, pulls relevant data, analyzes their LinkedIn presence, and scores each lead on fit, urgency, and budget likelihood. You get a prioritized list with personalized talking points – so when you call lead #1, you already know they just raised funding, are hiring for your target role, and mentioned a relevant pain point in a recent press release.

The outcome: Instead of calling leads randomly and hearing "not a good fit" 80% of the time, you start with your highest-probability prospects. Your conversion rate goes up, and you never waste time researching companies that were never going to buy.`,
                            },
                            {
                                role: 'Marketing',
                                scenario: 'Create 10 Video Ads',
                                tools: [
                                    { name: 'Veo 3', usesCredits: true },
                                    { name: 'HeyGen' },
                                    { name: 'Gemini' },
                                ],
                                workflow: [
                                    'Generate 10 script variations with Gemini (different tones per segment)',
                                    'Create AI avatar spokesperson with HeyGen',
                                    'Generate cinematic B-roll footage with Veo 3',
                                    'Combine and export for each platform',
                                ],
                                result: '⚡️ 3 weeks to 2 days',
                                primaryUrl: 'https://cloud.google.com/vertex-ai/generative-ai/docs/video/overview',
                                businessContext: `Your company needs video ads for a new product launch. Not just one video – you need 10 different versions: different tones for different audiences (professional for LinkedIn, casual for Instagram), different lengths (6-second, 15-second, 30-second), and different value propositions highlighted.

The traditional approach? Hire a video production agency or freelancer for $5,000-$20,000. Wait 2-3 weeks for scripts, another week for filming, then editing and revisions. If you need to test different messages or update the content, you're back to square one with additional costs.

With AI, the process becomes radically different. First, you use Gemini to generate 10 script variations in minutes – it understands tone, audience, and can create variations that would take a copywriter days to produce. Then, instead of hiring actors and booking studio time, you create a professional AI spokesperson with HeyGen that looks and sounds completely natural. Finally, Veo 3 generates the B-roll footage – product shots, lifestyle imagery, abstract visuals – that would otherwise require expensive stock footage or custom shoots.

The result: What used to require a production team, actors, equipment, and weeks of coordination now happens in 2 days with one person at the keyboard. And if version 3 performs best in early testing? You can instantly create 5 more variations of that message for different platforms. This isn't about replacing creative vision – it's about removing the production bottleneck between having an idea and testing it with real customers.`,
                            },
                            {
                                role: 'Project Manager',
                                scenario: 'Summarize 50 Pages of Feedback',
                                tools: [
                                    { name: 'NotebookLM' },
                                    { name: 'Gemini' },
                                    { name: 'Sheets' },
                                ],
                                workflow: [
                                    'Upload all feedback documents to NotebookLM',
                                    'Ask: "Extract all action items with owner and deadline"',
                                    'Generate an audio podcast summary for the team',
                                    'Export structured action items to Sheets',
                                ],
                                result: '⚡️ 4 hours to 10 minutes',
                                primaryUrl: 'https://notebooklm.google/',
                                businessContext: `You've just wrapped up a major product sprint, customer research initiative, or team retrospective. The result: 50 pages of feedback spread across Google Docs, Slack threads, survey responses, and meeting notes. Your job is to make sense of it all and turn it into actionable next steps.

Traditionally, this is a painful, error-prone process. You'd spend 4+ hours reading through everything, copying and pasting key points into a summary document, trying to spot patterns, and probably missing important insights because you're mentally exhausted by page 30. Then you'd need to write up the findings, distribute them, and hope people actually read your 5-page summary.

With AI, specifically NotebookLM, you upload all 50 pages and let the AI do the heavy lifting. Ask it to extract every action item with owner and deadline – it reads everything in seconds and never misses an item hidden in page 47. Ask it to identify patterns and contradictions in the feedback. Ask it to highlight the three most surprising insights.

But here's the game-changer: NotebookLM can generate an audio podcast summary of all this feedback. Your busy stakeholders who won't read a 5-page document? They'll listen to a 10-minute podcast on their commute. The AI creates a conversational summary that's engaging and covers all the key points.

This isn't about being lazy – it's about making sure important feedback actually gets heard and acted upon, instead of dying in a document nobody reads.`,
                            },
                            {
                                role: 'Customer Support',
                                scenario: 'Handle 500 Support Tickets',
                                tools: [
                                    { name: 'Vertex AI Agent Builder', usesCredits: true },
                                    { name: 'Gemini', usesCredits: true },
                                ],
                                workflow: [
                                    'Train an agent on product docs and common issues',
                                    'Auto-categorize incoming tickets by urgency and type',
                                    'Generate draft responses for agent review',
                                    'Escalate complex issues with full context summaries',
                                ],
                                result: '⚡️ 15 min/ticket to 2 min/ticket',
                                primaryUrl: 'https://cloud.google.com/products/agent-builder',
                                businessContext: `Your support inbox has 500 tickets waiting. Each one needs to be read, understood, researched, and responded to. Some are simple password resets. Some are complex technical issues. Some are angry customers who need careful handling. How do you triage this without burning out your team?

The old way: Each agent spends 15 minutes per ticket on average – reading, researching knowledge bases, writing responses, and context-switching between completely different issues. That's 125 hours of work for 500 tickets. Agents get fatigued, responses become templated and impersonal, and complex issues fall through the cracks.

With an AI-powered approach using Vertex AI Agent Builder, you flip the script entirely. First, every ticket is automatically categorized by type (billing, technical, general inquiry) and urgency (frustrated tone, VIP customer, simple question). Your agents now see a prioritized queue instead of chaos.

Second, for each ticket, the AI drafts a response based on your product documentation and past successful responses. The agent's job shifts from "write from scratch" to "review and send" – checking that the AI's draft is accurate and adding personal touches where needed.

For complex issues, the AI provides a full context summary: "This customer has contacted us 3 times in the past week about billing. They're on the Pro plan, their payment failed on the 15th, and they seem frustrated. Here's the conversation history summarized."

The result: Your team handles the same ticket volume in 1/7th the time, with better quality and less burnout. Simple tickets get resolved instantly, and agents can focus their human judgment on the cases that actually need it.`,
                            },
                            {
                                role: 'Finance',
                                scenario: 'Explain Quarterly Results',
                                tools: [
                                    { name: 'Gemini' },
                                    { name: 'Gamma.app' },
                                    { name: 'Sheets' },
                                ],
                                workflow: [
                                    'Upload financial data to Gemini for analysis',
                                    'Ask: "Explain these results like I am a sales manager"',
                                    'Generate visual presentation with Gamma',
                                    'Create FAQ document for common questions',
                                ],
                                result: '⚡️ Complex to Clear narrative',
                                primaryUrl: 'https://gemini.google.com/',
                                businessContext: `The quarterly results are in, and now you need to explain them to stakeholders who don't speak finance. The sales team wants to know if they hit their targets. The CEO wants the executive summary. The board wants detailed analysis. And none of them want to wade through a 20-page financial report.

Traditionally, finance teams spend days creating different versions of the same information for different audiences. You simplify for some, add detail for others, and inevitably someone says "I don't understand what this means for my department."

Here's where AI transforms the process. Upload your financial data to Gemini and ask it to explain the results "like I'm a sales manager who cares about commission." Instantly, the AI translates abstract financial metrics into concrete implications: "Revenue grew 15%, but your average deal size dropped 8%. This means more deals are closing, but they're smaller – here's what that means for commission structures."

Need a board presentation? Use Gamma.app to generate a visual presentation from your data – charts, insights, and narrative all generated in minutes instead of hours. Need an FAQ for the all-hands meeting? The AI anticipates the questions people will ask based on the data patterns.

The real value isn't just time saved – it's clarity gained. Financial data often hides important stories that get lost in translation. AI helps surface "here's what's actually happening and why it matters" in language each stakeholder can understand and act upon.`,
                            },
                            {
                                role: 'HR',
                                scenario: 'Screen 300 Resumes',
                                tools: [
                                    { name: 'Gemini', usesCredits: true },
                                    { name: 'Sheets' },
                                    { name: 'Vertex AI', usesCredits: true },
                                ],
                                workflow: [
                                    'Define specific criteria and must-haves per role',
                                    'Use Gemini to score and rank candidates objectively',
                                    'Generate tailored interview questions per candidate',
                                    'Create bias-check report for review',
                                ],
                                result: '⚡️ 2 weeks to 4 hours',
                                primaryUrl: 'https://cloud.google.com/vertex-ai',
                                businessContext: `You've posted a job opening and received 300 resumes. Some are clearly unqualified. Some look perfect but aren't. Some hidden gems are buried under keyword-stuffed applications. You need to find the best 10 candidates to interview, and you need to do it fairly.

The traditional approach is brutal: HR spends 2 weeks skimming resumes, making split-second judgments based on format, keywords, and first impressions. Studies show humans make resume decisions in 6-7 seconds on average. Unconscious biases creep in. Great candidates get overlooked because their resume format was unusual or they used different terminology.

AI changes this equation fundamentally. First, you define exactly what you're looking for – specific skills, years of experience, types of projects, cultural indicators. Not vague requirements, but concrete criteria that can be evaluated objectively.

Then Gemini reads every single resume thoroughly – something no human has time to do. It evaluates each candidate against your criteria with complete consistency. Candidate #1 and candidate #300 get the same level of attention. The AI doesn't get tired and doesn't have a bias toward certain universities or company names.

But here's where it gets powerful: for your top candidates, the AI generates tailored interview questions based on their specific experience. "Your resume mentions leading a migration from on-prem to cloud. Walk me through the challenges you faced." This means your interviewers walk in prepared with relevant questions instead of generic ones.

Finally, the AI creates a bias-check report – flagging any patterns in who was ranked high or low that might indicate unintentional bias. This isn't about replacing human judgment; it's about making human judgment more informed, more fair, and more efficient.`,
                            },
                        ],
                    },
                ],
            },
            {
                id: 'case-study',
                title: 'Case Study: From Idea to Product Demo in One Day',
                sidebarTitle: 'Case Study',
                intro: 'See how a founder combined multiple AI tools to create a professional product demo video with G$0 budget.',
                cards: [
                    {
                        id: 'founder-case-study',
                        type: 'caseStudy',
                        fullWidth: true,
                        caseStudy: {
                            title: 'Launch an AI-Powered Product Demo Video',
                            context: 'A startup founder needs a professional product demo video for investors. No budget for a production crew, no time to hire freelancers.',
                            steps: [
                                {
                                    time: '8:00 AM',
                                    title: 'Script Writing',
                                    description: 'Prompt Gemini to write a 60-second product demo script. Iterate through 3 versions, pick the best and refine the tone.',
                                    tools: [{ name: 'Gemini' }],
                                },
                                {
                                    time: '9:00 AM',
                                    title: 'UI Mockups',
                                    description: 'Use Google Stitch to generate professional UI mockups from text descriptions. Export as high-res images.',
                                    tools: [{ name: 'Google Stitch', usesCredits: true }],
                                },
                                {
                                    time: '10:00 AM',
                                    title: 'Avatar Video',
                                    description: 'Upload script to HeyGen, choose a professional avatar, generate video in 3 languages for global reach.',
                                    tools: [{ name: 'HeyGen' }],
                                },
                                {
                                    time: '11:00 AM',
                                    title: 'B-Roll Generation',
                                    description: 'Use Veo 3 to generate tech-themed footage and abstract AI visuals. Download 5 clips for editing.',
                                    tools: [{ name: 'Veo 3', usesCredits: true }],
                                },
                                {
                                    time: '12:00 PM',
                                    title: 'Video Assembly',
                                    description: 'Combine all assets in any video editor. Add music, transitions, and export for web and social.',
                                    tools: [{ name: 'Any Editor' }, { name: 'Google Vids', url: 'https://workspace.google.com/products/vids/' }],
                                },
                                {
                                    time: '2:00 PM',
                                    title: 'Investor Prep',
                                    description: 'Upload product docs to NotebookLM, generate investor FAQ, create audio summary for team prep.',
                                    tools: [{ name: 'NotebookLM' }],
                                },
                            ],
                            outcome: {
                                summary: 'Professional product demo video that would traditionally cost $5,000-10,000 and take 2-4 weeks.',
                                traditional: '$5,000+ and 2-4 weeks',
                                withAI: '$20 and 1 day',
                            },
                        },
                    },
                ],
            },
        ],
    },

    // ===== TAB 3: FREE COURSES =====
    {
        id: 'free-courses',
        label: 'Free Courses',
        hero: {
            title: 'Free AI Education',
            subtitle: 'High-quality courses you can start right now, at no cost.',
            videoUrl: 'https://www.youtube.com/embed/0iGcOx7l4HU',
        },
        sections: [
            {
                id: 'google-free',
                title: 'Google Cloud Skills Boost',
                sidebarTitle: 'Google Skills',
                intro: 'Earn badges for your resume while learning AI fundamentals. Uses your 35 Free credits.',
                cards: [
                    {
                        id: 'intro-gen-ai',
                        type: 'courseCard',
                        title: 'Intro to Generative AI',
                        provider: 'Google',
                        duration: '45 mins',
                        level: 'beginner',
                        iconPath: '/icons/Color/Learn/1ai-technology.svg',
                        content: 'Learn what Generative AI is, how it works, and how it differs from traditional ML. Perfect first course for beginners.',
                        url: 'https://www.cloudskillsboost.google/course_templates/536',
                    },
                    {
                        id: 'gemini-workspace',
                        type: 'courseCard',
                        title: 'Workspace with Gemini',
                        provider: 'Google',
                        duration: '2 hours',
                        level: 'beginner',
                        iconPath: '/icons/Color/Learn/email.svg',
                        content: 'Master using Gemini in Gmail, Docs, Sheets, and Slides for 10x productivity in your daily work.',
                        url: 'https://www.cloudskillsboost.google/paths/249',
                    },
                    {
                        id: 'gen-ai-leader',
                        type: 'courseCard',
                        title: 'Generative AI for Leaders',
                        provider: 'Google',
                        duration: '3 hours',
                        level: 'beginner',
                        iconPath: '/icons/Color/Learn/leadership.svg',
                        content: 'For managers: understand how to lead AI initiatives in your organization.',
                        url: 'https://www.cloudskillsboost.google/paths/118',
                    },
                    {
                        id: 'intro-llm',
                        type: 'courseCard',
                        title: 'Intro to LLM\'s',
                        provider: 'Google',
                        duration: '30 mins',
                        level: 'beginner',
                        iconPath: '/icons/Color/Learn/bot.svg',
                        content: 'Understand how LLMs work and their use cases across industries.',
                        url: 'https://www.cloudskillsboost.google/course_templates/539',
                    },
                ],
            },
            {
                id: 'other-free',
                title: 'More Free Resources',
                sidebarTitle: 'Other Free',
                intro: 'High-quality free courses from other industry leaders.',
                cards: [
                    {
                        id: 'fast-ai',
                        type: 'courseCard',
                        title: 'Deep Learning',
                        provider: 'fast.ai',
                        duration: 'Self-paced',
                        level: 'intermediate',
                        iconPath: '/icons/Color/certs/classification.svg',
                        content: 'For those who want hands-on coding. Build real AI models from day one.',
                        url: 'https://course.fast.ai/',
                    },
                    {
                        id: 'kaggle-learn',
                        type: 'courseCard',
                        title: 'Kaggle Learn',
                        provider: 'Kaggle',
                        duration: 'Self-paced',
                        level: 'beginner',
                        iconPath: '/icons/Color/Learn/letter-k.svg',
                        content: 'Free micro-courses on Python, ML, and data science. Great for hands-on practice.',
                        url: 'https://www.kaggle.com/learn',
                    },
                    {
                        id: 'microsoft-ai',
                        type: 'courseCard',
                        title: 'AI Fundamentals',
                        provider: 'Microsoft',
                        duration: '5 hours',
                        level: 'beginner',
                        iconPath: '/icons/Color/Learn/mind (2).svg',
                        content: 'Prepare for the Azure AI Fundamentals certification. Free learning path.',
                        url: 'https://learn.microsoft.com/en-us/training/paths/get-started-with-artificial-intelligence-on-azure/',
                    },
                ],
            },
        ],
    },

    // ===== TAB 4: CERTIFICATES =====
    {
        id: 'certificates',
        label: 'Certificates',
        hero: {
            title: 'Courses & Credentials',
            subtitle: 'Investment-based learning with certificates for your resume.',
            videoUrl: 'https://www.youtube.com/embed/0cRWf2_g52I',
        },
        sections: [
            {
                id: 'recommended-courses',
                title: 'Recommended Learning Path',
                sidebarTitle: 'Learning Path',
                intro: 'All courses below are included with Coursera Plus (50% off until February 2nd - just $100/year). If you are dedicated, you could complete all 6 courses in 1-2 months and have certificates to add to your resume.',
                cards: [
                    {
                        id: 'coursera-link',
                        type: 'linksGrid',
                        title: 'Get Coursera Plus - 50% Off',
                        links: [
                            { label: 'Coursera Plus', url: 'https://www.coursera.org/courseraplus', description: 'Unlimited access to all courses. Annual: $100 (normally $200). Monthly: $20 (40% off).', premium: true },
                        ],
                    },
                    {
                        id: 'prompting-essentials',
                        type: 'courseCard',
                        title: 'Prompting Essentials',
                        provider: 'Google',
                        duration: '4 hours',
                        price: 'Included',
                        level: 'beginner',
                        iconPath: '/icons/Color/certs/chat-bubble.svg',
                        content: 'Master the art of prompting. Learn to get exactly what you need from AI assistants.',
                        url: 'https://www.coursera.org/learn/google-prompting-essentials',
                    },
                    {
                        id: 'ai-essentials',
                        type: 'courseCard',
                        title: 'AI Essentials',
                        provider: 'Google',
                        duration: '4 weeks',
                        price: 'Included',
                        level: 'beginner',
                        iconPath: '/icons/Color/certs/graduation-cap.svg',
                        content: 'Comprehensive AI fundamentals: productivity tools, responsible AI, staying current.',
                        url: 'https://www.coursera.org/learn/google-ai-essentials',
                    },
                    {
                        id: 'intro-ml',
                        type: 'courseCard',
                        title: 'AI & Machine Learning',
                        provider: 'Google Cloud',
                        duration: '8 hours',
                        price: 'Included',
                        level: 'beginner',
                        iconPath: '/icons/Color/certs/mesh.svg',
                        content: 'Technical intro to how AI and ML actually work under the hood.',
                        url: 'https://www.coursera.org/learn/introduction-to-ai-and-machine-learning-on-google-cloud',
                    },
                    {
                        id: 'claude-code',
                        type: 'courseCard',
                        title: 'Claude Code In Action',
                        provider: 'Anthropic',
                        duration: '2 hours',
                        price: 'Included',
                        level: 'beginner',
                        iconPath: '/icons/Color/certs/lightning.svg',
                        content: 'Learn to use Claude for coding assistance and complex reasoning tasks.',
                        url: 'https://www.coursera.org/learn/claude-code-in-action',
                    },
                    {
                        id: 'mcp-intro',
                        type: 'courseCard',
                        title: 'Model Context Protocol',
                        provider: 'Anthropic',
                        duration: '3 hours',
                        price: 'Included',
                        level: 'beginner',
                        iconPath: '/icons/Color/certs/server (2).svg',
                        content: 'Understand the future of AI integration with MCP - how AI connects to tools.',
                        url: 'https://www.coursera.org/learn/introduction-to-model-context-protocol',
                    },
                    {
                        id: 'ai-for-leaders',
                        type: 'courseCard',
                        title: 'Generative AI for Leaders',
                        provider: 'Coursera',
                        duration: '8 hours',
                        price: 'Included',
                        level: 'beginner',
                        iconPath: '/icons/Color/Learn/leadership.svg',
                        content: 'A comprehensive professional certificate designed for executives and managers. Learn to strategically implement AI across your organization, from assessing opportunities to managing AI-driven teams and measuring ROI.',
                        url: 'https://www.coursera.org/professional-certificates/generative-ai-for-leaders',
                    },
                    {
                        id: 'ai-for-everyone',
                        type: 'courseCard',
                        title: 'AI For Everyone',
                        provider: 'DeepLearning.AI',
                        duration: '4 weeks',
                        price: 'Included',
                        level: 'beginner',
                        iconPath: '/icons/Color/certs/neural.svg',
                        content: 'Andrew Ng\'s famous course. No coding required. Understand what AI can and cannot do, and how it will impact your work and life.',
                        url: 'https://www.coursera.org/learn/ai-for-everyone',
                    },
                    {
                        id: 'smart-analytics-ml',
                        type: 'courseCard',
                        title: 'Smart Analytics & ML on GCP',
                        provider: 'Google Cloud',
                        duration: '7 hours',
                        price: 'Included',
                        level: 'intermediate',
                        iconPath: '/icons/Color/certs/scatter-graph.svg',
                        content: 'Dive deeper into analytics and ML workflows on Google Cloud. Learn to build data pipelines, run ML models at scale, and leverage AI APIs for smart solutions.',
                        url: 'https://www.coursera.org/learn/smart-analytics-machine-learning-ai-gcp',
                    },
                    {
                        id: 'gcp-data-ml',
                        type: 'courseCard',
                        title: 'Data & Machine Learning on GCP',
                        provider: 'Google Cloud',
                        duration: '4 weeks',
                        price: 'Included',
                        level: 'intermediate',
                        iconPath: '/icons/Color/certs/database.svg',
                        content: 'Build practical ML skills with Google Cloud. Learn to prepare data, build models, and deploy ML solutions using BigQuery, Vertex AI, and other GCP services. Ideal for data professionals ready to level up.',
                        url: 'https://www.coursera.org/specializations/gcp-data-machine-learning',
                    },
                    {
                        id: 'advanced-ml-tensorflow',
                        type: 'courseCard',
                        title: 'Advanced ML with TensorFlow',
                        provider: 'Google Cloud',
                        duration: '4 weeks',
                        price: 'Included',
                        level: 'advanced',
                        iconPath: '/icons/Color/certs/deep-learning.svg',
                        content: 'Master advanced ML techniques with TensorFlow on GCP. Build production-ready models, implement custom architectures, and optimize for performance at scale.',
                        url: 'https://www.coursera.org/specializations/advanced-machine-learning-tensorflow-gcp',
                    },
                ],
            },
            {
                id: 'financial-aid',
                title: 'Need Financial Aid?',
                sidebarTitle: 'Financial Aid',
                intro: 'Coursera offers financial aid for most courses if you cannot afford the subscription.',
                cards: [
                    {
                        id: 'aid-video',
                        type: 'videoEmbed',
                        title: 'How to Apply for Financial Aid',
                        videoId: 'https://www.youtube.com/watch?v=11MwVZcyG6c',
                    },
                    {
                        id: 'aid-tip',
                        type: 'alert',
                        alertType: 'tip',
                        title: 'Application Tips',
                        content: 'Financial aid applications take up to 14 days for approval. Be honest about your financial situation. Most applications are approved! You apply for each specific course, not the entire platform.',
                    },
                ],
            },
            {
                id: 'official-certs',
                title: '',
                sidebarTitle: 'Official Cert',
                intro: 'Proctored exam from Google, not Coursera. Valid for 3 years. Entry level (Study first).',
                cards: [
                    {
                        id: 'cdl-cert',
                        type: 'courseCard',
                        title: 'Cloud Digital Leader',
                        provider: 'Google Cloud',
                        duration: '10-20 hours study',
                        price: '$99 exam',
                        level: 'beginner',
                        iconPath: '/icons/Color/certs/google-cloud-search.svg',
                        content: 'Entry-level certification. Perfect for sales, PM, consulting, or business roles. Shows you understand cloud concepts without requiring technical depth. Easy to obtain but still respected.',
                        url: 'https://cloud.google.com/learn/certification/cloud-digital-leader',
                    },
                ],
            },
        ],
    },

    // ===== TAB 5: AI TOOLS =====
    {
        id: 'ai-tools',
        label: 'AI Tools',
        hero: {
            title: 'Essential AI Tools',
            subtitle: 'The best tools to supercharge your workflow.',
            videoUrl: 'https://www.youtube.com/embed/Lo7zzeqI1SQ',
        },
        sections: [
            {
                id: 'credits-reminder',
                title: '',
                cards: [
                    {
                        id: 'credits-callout',
                        type: 'alert',
                        alertType: 'tip',
                        content: 'Tools marked with a G$ badge below can be accessed using your free $300 Google Cloud credits.',
                        fullWidth: true,
                    },
                ],
            },
            {
                id: 'video-creation',
                title: 'Video Creation',
                intro: 'Create professional videos without cameras or crews, these are the tools I use for content creation.',
                cards: [
                    {
                        id: 'veo3',
                        type: 'toolCard',
                        title: 'Veo 3',
                        content: 'Google\'s text-to-video AI. I\'ve created some cinematic clips with it, describe a scene in words, get footage with matching audio.',
                        url: 'https://cloud.google.com/vertex-ai/generative-ai/docs/video/overview',
                        faviconPath: '/favicons/google-cloud.png',
                        usesCredits: true,
                        iconPath: '/icons/video.svg',
                        detailedContent: `Veo 3 is Google's flagship text-to-video model. 🎬 \n\nIt's not just about generating random video, it creates genuinely cinematic footage with synchronized audio.

I use it for creating short cinematic clips when I need high-quality B-roll or concept videos. 

The quality is impressive, especially for abstract or stylized content.

**Tip:** 
It uses your $300 Google Cloud credits, so you can experiment quite a bit before spending any real money. Access it through Vertex AI.

The technology has evolved rapidly. Videos I created in early 2025 look dated compared to what's possible now. If you're just starting, expect way better results than my examples 💯`,
                    },
                    {
                        id: 'heygen',
                        type: 'toolCard',
                        title: 'HeyGen',
                        content: 'I\'m currently using this to create video avatars. Perfect for long-form speaking content, clone yourself or create a virtual presenter.',
                        url: 'https://heygen.com',
                        faviconPath: '/favicons/heygen.png',
                        iconPath: '/icons/ai.svg',
                        detailedContent: `HeyGen is arguably the future of content creation. 🎥 \n\nI genuinely believe everyone should have an AI avatar of themselves.

I use it for creating long-form speaking content. Instead of recording myself for hours, I write a script, and my avatar delivers it naturally. 

The lip-sync is remarkably good, and it supports 175+ languages.

**My workflow:** 
I create the audio using NotebookLM (Google's audio quality is spectacular), then use that audio with my HeyGen avatar. The combination is powerful.

Whether you clone your own face or use one of their pre-made avatars, this is a game-changer for anyone creating educational or marketing content. 

Recording a 30-minute video now takes me 15 minutes of script writing instead of hours of filming, editing, and re-takes. ⏱️`,
                    },
                    {
                        id: 'higgsfield',
                        type: 'toolCard',
                        title: 'Higgsfield',
                        content: 'Fantastic for UGC and ads. The control over motion is incredible, and it\'s genuinely fun to use.',
                        url: 'https://higgsfield.ai',
                        faviconPath: '/favicons/higgsfield.png',
                        iconPath: '/icons/lightning.svg',
                        detailedContent: `Higgsfield is spectacular for creating UGC (user-generated content) style videos and ads. 🚀 \n\nThe level of control you get over motion is amazing.

I use it for product placement concepts and short ad materials. You upload a photo and can precisely control how it animates, walking, turning, gesturing.

(it's important to understand that many of these video models are actually powered by Veo3 and other large Generative models - these companies build on top of them)

**The limitation:** 
Clips are typically 5-8 seconds max. For longer content, you need to generate multiple clips and edit them together. But for punchy social media ads or product showcases, that's often exactly what you need.

It's also genuinely fun to use. There's something satisfying about bringing a still image to life with realistic human motion. 🎉`,
                    },
                    {
                        id: 'klingai',
                        type: 'toolCard',
                        title: 'Kling AI',
                        content: 'Powerful Chinese video AI. Known for impressive motion quality and longer generations than many competitors.',
                        url: 'https://klingai.com/global/',
                        faviconPath: '/favicons/klingai.png',
                        iconPath: '/icons/video.svg',
                        detailedContent: `Kling AI is one of the most powerful video generation models available. 🎯 \n\nBuilt by Kuaishou (a major Chinese tech company), it produces impressive motion quality.

What sets it apart is the ability to generate longer clips compared to many competitors. 

The motion is smooth and realistic, especially for human movements.

**Worth knowing:** 
While it originated in China, the global version is accessible. It's worth trying alongside Veo and other options to see which produces the best results for your specific use case.

The AI video space is evolving so fast that no single tool is "best" for everything. I recommend experimenting with multiple options. 🧪`,
                    },
                    {
                        id: 'nanabanana',
                        type: 'toolCard',
                        title: 'Nano Banana',
                        content: 'I use this constantly for quick video and image customizations. Spectacular for pinpointing and changing specific elements.',
                        url: 'https://gemini.google/overview/image-generation/',
                        faviconPath: '/favicons/gemini.png',
                        usesCredits: true,
                        iconPath: '/icons/startup.svg',
                        detailedContent: `Nano Banana is fantastic for quick customizations. 🔧 \n\nWhen I need to make precise changes to images or add specific camera movements, this is my go-to.

The tool excels at letting you pinpoint exactly what you want to change. 

Instead of regenerating entire images, you can modify specific elements directly.

**What I love:** 
The precision. When other tools give you broad strokes, Nano Banana lets you be surgical. Pan, zoom, rotation, you describe the camera move, and it brings the photo to life intelligently.

I haven't created sample videos to share yet, but I've used the tool extensively. It's become an essential part of my editing workflow. ✂️`,
                    },
                    {
                        id: 'xai',
                        type: 'toolCard',
                        title: 'xAI',
                        content: 'Lightning fast and many generations of image variations at once.',
                        url: 'https://x.ai/',
                        faviconPath: '/favicons/xai.png',
                        iconPath: '/icons/ai.svg',
                        detailedContent: `I've used their video/image gen specifically for some logo design and small b-rolls. ⚡ 

What's amazing about it is that it is lightning fast. You can create images super fast like you can with Kling AI, but video generation is lightning fast too.

I believe all models essentially will become much longer and also so fast that it's on instant demand, but xAI is definitely someone to look out for, especially because they're scaling up their compute over the next couple of years.

**Key strength:** 
Speed. When you need multiple variations quickly, xAI delivers. 🏃`,
                    },
                    {
                        id: 'video-showcase',
                        type: 'text',
                        title: '🎬 Video Showcase',
                        content: 'A quick look at what\'s possible with AI video tools. These were created in June 2025. The technology has improved significantly since then. For the marketing folks: if you haven\'t started using AI for video, now\'s the time.',
                        fullWidth: true,
                    },
                    {
                        id: 'video-grid',
                        type: 'videoGrid',
                        videos: [
                            { id: 'c_cK-6baVvM', title: 'ICP Product Concept' },
                            { id: 'QCGdDaq50hI', title: 'CaffeineAI Promo' },
                            { id: '30Qnxm0D9IQ', title: 'Tech Demo' },
                        ],
                        fullWidth: true,
                    },
                ],
            },
            {
                id: 'productivity-tools',
                title: 'Productivity Essentials',
                intro: 'The tools I use every single day to get more done in less time.',
                cards: [
                    {
                        id: 'superwhisper',
                        type: 'toolCard',
                        title: 'Superwhisper',
                        content: 'I use this every day. I rarely type anymore, even emails, iMessages, chat. Last week I saved 16 hours compared to typing. 🤯',
                        url: 'https://superwhisper.com',
                        faviconPath: '/favicons/superwhisper.png',
                        statImage: '/dication.png',
                        detailedContent: `Superwhisper has fundamentally changed how I work. 🎙️ \n\nI use it every single day, for everything, emails, personal messages, chat interfaces, even writing code comments.

Superwhisper tells me I save 16hrs, that's two full work days lol. That might give you an idea of HOW much I use all these tools daily - and I use Superwhisper in all my Ai tooling & Agents. Instead of typing... I speak.

It's a bit akward in the start (if you come from being a person who thinks through writing like myself and like it) but once you practice delivering messages over and over again, verbally, with no delay you get better at communicating your tasks.

It's a NON-negotiable for me now. I mainly use speech - I used to frown at it - literally now I can't live without it. 👍

I'm currently - right now - actually speaking this out here in antigravity, and it's fast. I used to use Whisper Flow, but Whisper Flow has a $15 a month subscription. It's arguably much better than Super Whisper, but Super Whisper is free, and you can download a local fast model for it, The downside is that the model is not as smart and you also need to add an a vocabolary over time.
Whereas whisperflow is so accurate and super smart.

**The real benefit:**
The math is simple: I speak at around 150 words per minute. Typing is 60-80 WPM at best. That's a 2-3x speed increase on every piece of text I create. ⭐️

If you're not using voice-to-text, you're working harder and slower than you need.`,
                    },
                    {
                        id: 'notebooklm',
                        type: 'toolCard',
                        title: 'NotebookLM',
                        content: 'I use it to create slides, generate audio for my HeyGen avatars, and research complex topics. Google\'s audio quality is spectacular.',
                        url: 'https://notebooklm.google/',
                        faviconPath: '/favicons/notebooklm.png',
                        iconPath: '/icons/book.svg',
                        detailedContent: `NotebookLM has become central to my content workflow. 📚 \n\nIt's not just a research tool, it's a production tool.

**How I use it:**
- Upload documents and research papers, then have conversations about the content
- Generate the audio I use for HeyGen avatar videos, Google's audio quality is genuinely spectacular
- Create slide presentations based on complex topics I've researched

The "podcast" feature that generates a natural conversation about your documents is remarkably good. 

The voices sound like two people genuinely discussing your content.

**Tip:** 
NotebookLM is for research and synthesis. Gamma.app is for presenting that research. They complement each other perfectly. 🔗`,
                    },
                    {
                        id: 'gemini-plus',
                        type: 'toolCard',
                        title: 'Gemini for Workspace',
                        content: 'I use it every day. Gemini for Gmail, Docs, and Sheets. This is potentially going to be the biggest AI ecosystem of the future.',
                        url: 'https://gemini.google/subscriptions/',
                        faviconPath: '/favicons/gemini.png',
                        iconPath: '/icons/ai.svg',
                        detailedContent: `I use Gemini for Workspace every single day. ✅ \n\nIt's integrated into Gmail, Docs, Sheets, Drive, everywhere I already work.

There are two ways to use it:
- **Individual Gmail:** Gemini for your personal Google account
- **Workspace for domains:** Full integration across your organization's email and docs

**Why I'm bullish on this:** 
Google already owns the productivity stack that billions use. Adding native AI to that stack isn't just convenient, it's potentially the biggest AI ecosystem of the future.

I highly recommend learning everything you can about Gemini. 

Whether you end up using Claude, ChatGPT, or other tools for specific tasks, understanding Gemini's ecosystem will be valuable as AI becomes more integrated into how we work. 🚀`,
                    },
                    {
                        id: 'otter',
                        type: 'toolCard',
                        title: 'Otter.ai',
                        content: 'For those who do a lot of meetings. Unlike native transcribers in Zoom or Google Meet, this one integrates with ALL of them.',
                        url: 'https://otter.ai',
                        faviconPath: '/favicons/otter.png',
                        iconPath: '/icons/headphones.svg',
                        detailedContent: `This is one of the two tools on the list I don't use (or have used myself) Otter.ai but I know it's valuable for individuals who do a lot of recordings and need comprehensive notes. 🎧

**The key advantage:** 
Why is it so good? Unlike the native AI transcribers built into Zoom, Google Meet, or other calling platforms from what I understand Otter.ai integrates with all of them. One tool, universal access - that's a plus!

This means you get consistent transcription quality across all your meeting platforms and as far as I can tell from a bit of research and anecdotes, it's very accurate and people seem to love it because they can have all their meeting notes in one place rather than scattered across different apps.

I can see how it would be genuinely valuable if you're in a role with lots of meetings, sales, consulting, project management, HOWEVER, I can't vouch for it myself but I thought it might be something you could look into if this type of thing is useful to you. 📝`,
                    },
                ],
            },
            {
                id: 'ai-assistants',
                title: 'AI Assistants',
                intro: 'The AI conversation partners I use daily, each has different strengths.',
                cards: [
                    {
                        id: 'gemini',
                        type: 'toolCard',
                        title: 'Gemini Assistant',
                        content: 'I use the regular Gemini Assistant daily. It knows my Gmail, Calendar, and Drive. Tip: install it as an app on your dock.',
                        url: 'https://gemini.google.com',
                        faviconPath: '/favicons/gemini.png',
                        iconPath: '/icons/ai.svg',
                        detailedContent: `The regular Gemini Assistant is great. 💎 \n\nI use it every day for quick questions and tasks.

**Tip:** 
If you use Google Chrome, click the three dots in the upper right corner, then "Cast, Save, and Share," then "Install Page as an app." It becomes an app on your dock (Mac). This works for any web app, I do it with all my favorites.

What makes Gemini special is the ecosystem integration. It already knows your Gmail, Calendar, and Drive. 

You're not copy-pasting context, it's already there.

Is it the "best" at everything? No. But for users in Google's ecosystem, the convenience factor is unmatched. 🌟`,
                    },
                    {
                        id: 'chatgpt',
                        type: 'toolCard',
                        title: 'ChatGPT',
                        content: 'I find it incredible for looking through code and finding critical issues. The most human-like of all LLMs to speak with. I use it every day.',
                        url: 'https://chat.openai.com',
                        faviconPath: '/favicons/chatgpt.png',
                        iconPath: '/icons/artificial-intelligence.svg',
                        detailedContent: `I use ChatGPT every day. 🧠 \n\nIt's genuinely great at so many things.

**What I use it for:**
- Looking through code to find critical issues, vulnerabilities, or better approaches
- Verifying plans from other AI models (even Claude Opus 4.5), ChatGPT is excellent at finding edge cases
- Natural conversation, it's the most human-like of all the LLMs

The comprehension and language quality are outstanding. 

When I need something explained in a clear, accessible way, ChatGPT consistently delivers.

**Tip:** 
Just like with Gemini, you can install the web app to your dock using Chrome's "Install Page as an app" feature.`,
                    },
                    {
                        id: 'claude',
                        type: 'toolCard',
                        title: 'Claude',
                        content: 'I use Claude for writing, copywriting, scripts, presentations. And for coding? Claude Opus 4.5 is arguably the best coding model on the planet.',
                        url: 'https://claude.ai',
                        faviconPath: '/favicons/claude.png',
                        iconPath: '/icons/artificial-intelligence.svg',
                        detailedContent: `I don't use the Claude AI assistant that often for general chat, to be honest. But for specific use cases, it's unmatched. ✍️

**Writing:** 
Copywriting, story writing, scriptwriting, Claude excels. I've used it for several presentations. The prose quality is noticeably better than other models.

**Coding:** 
This is where Claude really shines. I use Claude Opus 4.5 and Claude Sonnet 4.5 daily with my coding agents. It's arguably the best coding AI on the planet right now.

The model can read entire books (200K+ tokens). 

For long documents, research papers, or analyzing complex codebases, Claude handles context that would overwhelm other models. 📚`,
                    },
                    {
                        id: 'grok',
                        type: 'toolCard',
                        title: 'Grok (xAI)',
                        content: 'I use Grok whenever I need sentiment analysis or want to know what people think about a topic. It scours X in real-time.',
                        url: 'https://x.ai/grok',
                        faviconPath: '/favicons/grok.png',
                        iconPath: '/icons/speedometer.svg',
                        detailedContent: `I use Grok often, specifically for one thing: understanding what people think. 🌐

**My use case:** 
Whenever I learn about something new, a tool, technology, or concept, I go to xAI and ask Grok to scour X and tell me what people are saying about it.

It's like having real-time sentiment analysis. What does the crowd think? 

What are the common complaints? What are people excited about?

Grok is an LLM like ChatGPT, it can do most of the same things. 

But the 24/7 access to X's data stream is the differentiator. For trends, breaking news, and public opinion, nothing else comes close.

**Note:** 
It also has API access if you want to build with it. 🛠️`,
                    },
                    {
                        id: 'ai-studio',
                        type: 'toolCard',
                        title: 'Google AI Studio',
                        content: 'I don\'t use it that much since I spend most time in IDEs, but it\'s great for prototyping. Fast way to test prompts and take designs to functionality.',
                        url: 'https://aistudio.google.com',
                        faviconPath: '/favicons/aistudio.png',
                        usesCredits: true,
                        iconPath: '/icons/lightning.svg',
                        detailedContent: `I don't use AI Studio that much since I mainly work in coding IDEs. But when I do use it, it's valuable. 🛠️

**What it's good for:**
- Rapid prototyping with Gemini models
- Testing prompts before committing them to code
- Moving quickly from Stitch designs to initial functionality

Think of it as the playground before the real work. 

You can experiment with different Gemini models (Pro, Flash, Experimental), test system prompts, and export to code when you're happy.

It uses your $300 Google Cloud credits, so it's essentially free to experiment. 🎮`,
                    },
                    {
                        id: 'open-webui',
                        type: 'toolCard',
                        title: 'Open WebUI',
                        content: 'I\'ve used this in the past as a User Interface for self-hosted LLMs with Ollama. Why? you don\'t need internet to run your models.',
                        url: 'https://openwebui.com',
                        faviconPath: '/favicons/openwebui.png',
                        iconPath: '/icons/ai.svg',
                        detailedContent: `I've used Open WebUI for self-hosting. 🖥️ \n\nI use Ollama to download AI models, and then I always have an LLM available directly on my machine.

**Important note:** 
Depending on your computer's specs, there's a limit to which models you can run locally. But it's really cool to have AI that never needs internet. You can also find models on huggingface.co.

**Another use case:** 
You can use Open WebUI as a starting template for your own application instead of building the entire UI yourself. If you're building an LLM-powered app, starting from their codebase can save weeks.

There's also LM Studio, another popular option for running local models with a nice UI. 👍`,
                    },
                ],
            },
            {
                id: 'developer-tools',
                title: 'Design Tools',
                intro: 'The tools I use for building interfaces and writing code with AI assistance.',
                cards: [
                    {
                        id: 'stitch',
                        type: 'toolCard',
                        title: 'Google Stitch',
                        content: 'Great for getting quick design concepts. I haven\'t used it for final designs yet, but it\'s very good for rapid mockups and exploring ideas.',
                        url: 'https://stitch.withgoogle.com/',
                        faviconPath: '/favicons/stitch.png',
                        usesCredits: true,
                        iconPath: '/icons/diamond.svg',
                        detailedContent: `Google Stitch is great for getting quick concepts for design. 🎨 \n\nIf you're sitting with an idea, you can quickly go in and create mockups.

I haven't used it yet for final designs that I take directly to my coding agents, but it's very good for exploring ideas and getting visual direction quickly.

** How it works:** Describe a UI in plain English, get production- ready code.It's like having a designer and developer in one, you say what you want, it builds it.

It uses your $300 Google Cloud credits, so you can experiment freely. ✨`,
                    },
                    {
                        id: 'v0',
                        type: 'toolCard',
                        title: 'v0.dev',
                        content: 'I haven\'t used v0.dev myself yet, but I\'m eyeing some cool designs there. Worth checking out for finished components and landing page templates.',
                        url: 'https://v0.dev',
                        faviconPath: '/favicons/v0.png',
                        iconPath: '/icons/startup.svg',
                        detailedContent: `I haven't actually used v0.dev yet, but I hear good things. 👀 \n\nIn some circles, people are very happy with it.

I see there are some great components in there, and I typically use 21st.dev instead.

But I'm eyeing some cool designs in v0 and might try some out in the coming weeks.

            ** What it offers:** Finished components, small applications, and full designs, even landing pages, that you can implement instead of creating from scratch.

If you're coding or doing anything like that, it's definitely worth taking a look.Vercel(the company behind it) has a strong track record. 👍`,
                    },
                    {
                        id: '21st-dev',
                        type: 'toolCard',
                        title: '21st.dev',
                        content: 'I typically use this for components. Like a grocery store for UI, browse community-made components, pick what looks good, customize to taste.',
                        url: 'https://21st.dev',
                        faviconPath: '/favicons/21st.png',
                        iconPath: '/icons/diamond.svg',
                        detailedContent: `I typically use 21st.dev for finding components. 🛒 \n\nInstead of generating everything from scratch, you browse a marketplace of community- made UI elements.

** Think of it like a grocery store for UI:** You pick what looks good and customize it to taste.Much faster than generating everything with AI when someone has already built something close to what you need.

It integrates nicely with Cursor and VS Code, so you can pull components directly into your project. ⚡`,
                    },
                    {
                        id: 'shadcn',
                        type: 'toolCard',
                        title: 'shadcn/ui',
                        content: 'Very popular, and it\'s a must. 21st.dev is also built from this library. Copy-paste components you actually own.',
                        url: 'https://ui.shadcn.com',
                        faviconPath: '/favicons/shadcn.png',
                        iconPath: '/icons/coding.svg',
                        detailedContent: `shadcn / ui is very popular, and it's a must-know for modern React development. 🧱 \n\n21st.dev is actually built from this library.

    ** What makes it different:** Unlike npm packages where you're dependent on external code, shadcn components are copied directly into YOUR project. You own the code completely.

It's like the difference between recipes and microwave meals. More work, but you control every ingredient. When you need to customize something specific, you're not fighting against library abstractions. 🍳`,
                    },
                    {
                        id: 'gamma',
                        type: 'toolCard',
                        title: 'Gamma.app',
                        content: 'I\'ve used it a few times. Really good for interactive presentations. The cool thing is the interactive features for super engaging decks.',
                        url: 'https://gamma.app',
                        faviconPath: '/favicons/gamma.png',
                        iconPath: '/icons/diamond.svg',
                        detailedContent: `I've used Gamma.app a few times. 📊 \n\nI think it's really good.

The cool thing is the interactive features you can add for super engaging presentations.

It's not just static slides, you can make things that feel more like mini-apps.

    ** How I think of it:** NotebookLM is for research and synthesis.Gamma.app is for presenting that research in a compelling way.They complement each other perfectly. ✨`,
                    },
                    {
                        id: 'vibesdk',
                        type: 'toolCard',
                        title: 'VibeSDK (Cloudflare)',
                        content: 'A complete hack. In 15 minutes you can set up your own coding agent. Cloudflare pushes updates weekly, I think they\'re planning something big.',
                        url: 'https://github.com/cloudflare/vibesdk',
                        faviconPath: '/favicons/cloudflare.png',
                        iconPath: '/icons/cloud-network.svg',
                        detailedContent: `VibeSDK from Cloudflare is a complete hack, and I think Cloudflare is something you should keep an eye on for the future. 🚀

** Why I'm excited:** 
They're going to surprise everybody with some cool AI features.

They already have Workers(serverless functions), cool backend infrastructure, and can deliver at edge. 25 % of the world's internet flows through Cloudflare.

I'm putting this up on my own site as a placeholder for when my next application is ready. You can literally set up your own coding agent in 15 minutes.

Looking at their GitHub, they push many updates every week.I think they're planning something big with this. 🔥`,
                    },
                ],
            },
            {
                id: 'ai-infrastructure',
                title: 'AI Powertools',
                intro: 'The advanced tools I use for autonomous AI workflows, the next frontier of developer productivity.',
                cards: [
                    {
                        id: 'antigravity',
                        type: 'toolCard',
                        title: 'Antigravity',
                        content: 'My daily driver now with Cursor. I believe Google will slingshot past everyone. They have a 20-year head start and own the entire stack.',
                        url: 'https://antigravity.google/',
                        faviconPath: '/favicons/antigravity.png',
                        iconPath: '/icons/ai.svg',
                        detailedContent: `Antigravity is among my daily drivers now. 🚀 \n\nAlthough there might be IDEs more tuned at the moment, I believe Antigravity will slingshot and catch up, then go far beyond on every parameter.

**Why I'm bullish on Google's ecosystem:**
- They own the entire stack already
- 20-year head start on infrastructure
- The transformer model that eventually created ChatGPT came from Google engineers
- You will eventually be able to integrate it with all google's services
- You can already integrate it with notebookLM
- It's DIRT CHEAP - you can start today for free

**Why you SHOULD be bullish and use it**
- listen you don't need to code or create apps, you can use it in combination with NotebookLM forexample and have antigravity carry out multiple tasks at once MUCH faster than you can!

MARK MY WORDS: 🔥
EVERYONE - and i mean EVERYONE - should download antigravity and learn how to use it - are you in Finance? Marketing? Sales? Hospitality? Leadership? Business Development? whatever industry you are in - Get it and learn how to use it!

It's not hype - get it and you will understand. 

It can be your guiding task manager. It can carry out work for you - yes autonomously - and if you want to level up completely connect clawdbot either to a VPS (hostinger) or get a second machine (mac mini/studio) and connect clawdbot to your computer and experience the closest thing to AI superpower on the planet right now - and if you are taken back and think "what are all these names?" go on youtube (I will also supply videos on my youtube and socials over time) and learn.

And believe me IT IS NOT HARD - it has NEVER been easier to work with technology! 💪 


I genuinely think the future of AI applications and coding will be strongest in the Google ecosystem. Using Antigravity is a real pleasure.

**Note:** 
It's compared to tools like Cursor or OpenCode, but the ecosystem integration is what sets it apart long-term.`,
                    },
                    {
                        id: 'opencode',
                        type: 'toolCard',
                        title: 'OpenCode',
                        content: 'I now use OpenCode with Antigravity. This is spectacular, becoming a favorite of AI-focused developers. The CLI is amazing.',
                        url: 'https://opencode.ai/',
                        faviconPath: '/favicons/opencode.png',
                        iconPath: '/icons/coding.svg',
                        detailedContent: `I now use OpenCode with Antigravity, and it's spectacular. 👍 \n\nIt's becoming a favorite of most AI-focused developers and growing quickly in popularity.

**What sets it apart:**
- Terminal-based, works with any LLM (local or cloud)
- Their CLI tool is amazing
- They also have a desktop app that is supreme

**My workflow:** 
I use Antigravity for planning and light execution, then I've coded a watcher bridge that sends multiple work orders to OpenCode. OpenCode then does the heavy lifting, following Claude Opus 4.5 directions to code.

I also code with Claude Opus 4.5 through OpenCode. If you want to avoid IDE lock-in or use custom models, this is the way.

**Insanity level**
Try and connect Clawdbot to your coding stack`,
                    },
                    {
                        id: 'jules',
                        type: 'toolCard',
                        title: 'Jules (Google)',
                        content: 'Simply amazing. Give it a GitHub issue, it clones your repo, fixes the bug, and opens a PR. Works great with Gemini CLI.',
                        url: 'https://jules.google/',
                        faviconPath: '/favicons/jules.png',
                        iconPath: '/icons/ai.svg',
                        detailedContent: `Jules is simply amazing. 🤖 \n\nGoogle's autonomous coding agent changes everything about how you can approach development.

**How it works:** 
Give Jules a GitHub issue. 

It clones your repo, understands the codebase, implements the fix, and opens a PR. Like a junior developer who works 24/7 and never gets tired.

**The combination with Gemini CLI:** 
When you pair Jules with Gemini CLI, you can orchestrate complex multi-step workflows. 

Gemini plans, Jules executes.

This is the kind of tool that makes you rethink what "productivity" means in software development. ⚡

**INSTANITY LEVEL** 
Try and connect Clawdbot to your coding stack and combine Jules into it 🤯
I am still testing it out and man oh man is it wild!`,
                    },
                    {
                        id: 'gemini-cli',
                        type: 'toolCard',
                        title: 'Gemini CLI',
                        content: 'Google\'s command-line AI assistant. Works beautifully with Jules for automated coding workflows.',
                        url: 'https://geminicli.com/',
                        faviconPath: '/favicons/geminicli.png',
                        iconPath: '/icons/ai.svg',
                        detailedContent: `Gemini CLI is Google's command-line interface for interacting with Gemini models. ⌨️ \n\nIt's powerful for automation and scripting.

**Why it matters:** 
It works beautifully with Jules for automated coding workflows. 

You can script multi-step processes where Gemini handles planning and Jules handles execution.

For developers comfortable with the terminal, this opens up workflows that aren't possible in GUI tools. 

Pipe outputs, chain commands, automate repetitive tasks.

Uses your $300 Google Cloud credits if you have them. 💰`,
                    },
                    {
                        id: 'beads',
                        type: 'toolCard',
                        title: 'Beads',
                        content: 'Fantastic for AI memory. Combined with my own ruleset, it\'s hard to lose a thread even if you\'re not meticulous.',
                        url: 'https://github.com/steveyegge/beads',
                        faviconPath: '/favicons/github.png',
                        iconPath: '/icons/artificial-intelligence.svg',
                        detailedContent: `Beads is fantastic for having a memory system for AI agents. 🧠 \n\nIt solves the "50 First Dates" problem. Agents remember previous sessions instead of starting fresh.

**My setup:** 
I use Beads alongside my own custom ruleset. The synergy is amazing.
This is for developers who wanna go beast mode!

**The benefit:** 
It gives the agent an expanded context, like a peripheral memory. 
This allows you to be much more precise with work orders and scope. 

Even if you're not meticulous about documentation, it becomes very difficult to lose a thread if Beads is set up correctly. The agent maintains continuity across sessions.

Highly recommend looking into it if you work with AI coding agents regularly. 🌟`,
                    },
                    {
                        id: 'cursor',
                        type: 'toolCard',
                        title: 'Cursor',
                        content: 'I\'ve coded myprofiles.biz, teklatoppings.com, grokly.ai (under works) all in Cursor. It\'s highly VC-backed and pushing for something great.',
                        url: 'https://cursor.sh',
                        faviconPath: '/favicons/cursor.png',
                        iconPath: '/icons/coding.svg',
                        detailedContent: `Cursor is an AI-first code editor. 🤌 \n\nLike VS Code, but AI is built into its DNA, not bolted on, they push updates sometimes multiple times a day.

I have 300k lines of code writtern in over 5 different projects and some smaller websites through cursor alone. 

It's GREAT! 

If you want to build apps, then I suggest cursor as a strong contender.
I'd also recommend no matter what that you get antigravity also and opencode and work between them.

I think it's supreme - better than claude code and still above Antigravity in certain ways for pure coding, for now. 

Unlike claude code you can switch different models - they also just launched a new cursor CLI with it and cursor is just SO reliable - it burns through token quick however, even on their max tier you can burn through half in two days if you sit non-stop (with premium models ofcause)! 💸

**Why cursor matters:** 
Cursor is highly VC-backed, and the people behind it are skilled and it shows in the product - and I think they're pushing for something great in the future that will take the market by storm - again. 

The experience of coding with AI on cursor feels more native than other solutions i've tried - and i've used everything worth talking about.

Cursor is really great for hard application building.

And it's also very approachable for beginners.`,
                    },
                    {
                        id: 'claude-code',
                        type: 'toolCard',
                        title: 'Claude Code (CLI)',
                        content: 'Developer-focused CLI turned popular for everyone - from Anthropic. Best coding models on the planet.',
                        url: 'https://claude.com/product/claude-code',
                        faviconPath: '/favicons/claudecode.png',
                        iconPath: '/icons/coding.svg',
                        detailedContent: `Claude Code is Anthropic's native CLI tool for coding. 💻 \n\nI don\'t use their CLI anymore, but many developers swear by it. \n\n I do however use their models in other Coders/Agents.\n\nThe UI is essentially a CLI, but don't let that intimidate you.

**For beginners:** 
Don't be afraid of these coding tools. They're very easy to learn. You literally have an expert LLM that you can ask how to use the tool itself.

It's a fan favorite by many developers. 

Claude has - without much dispute from anyone - the best coding models on the planet right now. 

If you want the best coding models in the environment they were built for, Claude Code is it.
(you can use them elsewhere too)

**My honest take:** ☝️
I don't use it anymore and I actually think Opnecodes CLI inside something like Antigravity is better.

But the hype is real. Many people have great success with it.

I would advice EVERYONE to at the very least, download it, install it, try it out for a day - even if you don't code, just to get into the DNA of ai in the world.

And if you are not a developer try and use it for something anyway - you can automate a bunch of stuff with it.

**Tip:** 🤌
OpenCode's CLI is way better in my opinion, and you can still use Claude models there via API or by connecting your Antigravity subscription through the opencode-antigravity-auth MCP server.`,
                    },
                    {
                        id: 'vertex',
                        type: 'toolCard',
                        title: 'Vertex AI',
                        content: 'I\'m upskilling myself here. 🚀 Learning to work with enterprise data, RAG, and ML operations. Critical for large-scale work.',
                        url: 'https://cloud.google.com/vertex-ai',
                        faviconPath: '/favicons/google-cloud.png',
                        usesCredits: true,
                        iconPath: '/icons/cloud-network.svg',
                        detailedContent: `I'm using Vertex AI for upskilling myself to work with enterprise data at scale. 🏭

**What I'm learning:**
- Connecting to and manipulating company data (emails, PDFs, databases)
- Pointing AI at Google Drives and websites
- Building RAG systems (retrieval-augmented generation) to answer questions from knowledge bases
- Machine learning operations (MLOps) for production systems

**Why this matters:** 
Vertex is the plumbing for large-scale AI operations. To be valuable for large corporations in the future, learning Vertex is going to be essential if you ask me. It offers enterprise-grade compliance, which matters for big companies and you can do some incredible things connecting across many things.

**The Model Garden:** 
One huge benefit: you can rent and run other people's models on Google's servers. Llama 3, Claude, Mistral, all inside Vertex. Companies that don't want to be locked into just Gemini can use multiple models, even their own trained models. ✅

**Analogy:** 
Think of Vertex as a professional kitchen. Gemini is one recipe. 

Vertex lets you run any recipe, at any scale, with the equipment and processes that professional operations need and you can do all sorts of things from training on data, analysicing data, segmenting data, training models, to video generation (use veo3 here, it's much better) and so much more - it's truly a powertool. 🤖`,
                    },
                ],
            },
            {
                id: 'backend-infrastructure',
                title: 'Backend Infrastructure',
                intro: 'The platforms and services I use for deploying, hosting, and scaling applications.',
                cards: [
                    {
                        id: 'cloudflare',
                        type: 'toolCard',
                        title: 'Cloudflare',
                        content: 'I mainly use Convex and Cloudflare for most things',
                        url: 'https://cloudflare.com',
                        faviconPath: '/favicons/cloudflare.png',
                        iconPath: '/icons/cloud-network.svg',
                        detailedContent: `25% of the world's internet flows through Cloudflare's network. 🌐 \n\n I'm very bullish on them.

**What I use:**
- Workers (serverless functions at the edge)
- Pages (static site hosting)
- R2 (S3-compatible storage with zero egress fees, perfect for video)
- VibeSDK for AI applications

**A good architecture:** 
Use Google Cloud Run for heavy backend processing, Cloudflare R2 for video/media storage (zero egress saves money), point DNS to Cloudflare's front door, and Convex for the light, real-time backend. 

This combination covers most use cases elegantly. ⚡️`,
                    },
                    {
                        id: 'google-cloud-run',
                        type: 'toolCard',
                        title: 'Google Cloud Run',
                        content: 'I\'m focusing here now, learning the Google Cloud ecosystem. You can connect MCP with Antigravity to configure it for you.',
                        url: 'https://cloud.google.com/run',
                        faviconPath: '/favicons/google-cloud.png',
                        usesCredits: true,
                        iconPath: '/icons/cloud-network.svg',
                        detailedContent: `I'm starting to focus on learning Google Cloud Run. ☁️ \n\nIt's serverless containers done right and BIG.

**What I'm excited about:**
- Deploy any Docker container
- Automatic scaling (including to zero)
- Pay only for what you use
- Connect MCP with Antigravity to essentially configure the whole thing for you

**Why learn this:** 
Having Google Cloud experience is valuable for anyone in tech. 

For heavy backend work that needs more power than serverless edge functions, Cloud Run is the place. 

It uses your $300 Google Cloud credits. 💪`,
                    },
                    {
                        id: 'convex',
                        type: 'toolCard',
                        title: 'Convex',
                        content: 'Convex is amazing. Real-time database that syncs automatically with your frontend. No manual API building.',
                        url: 'https://convex.dev',
                        faviconPath: '/favicons/convex.png',
                        iconPath: '/icons/database.svg',
                        detailedContent: `The database syncs automatically with your frontend. ⚡ \n\nNo manual API building required.

**What makes it special:**
- Database and frontend talk directly
- Real-time updates out of the box
- TypeScript end-to-end

For apps that need real-time features (chat, collaboration, dashboards), Convex can save you weeks of backend work. 

The developer experience is genuinely impressive.

However I build myprofiles.biz with Supabase as backend - but don't recommend it currently building on convex with all new apps under way, - much better - I am building a video member site and cloudflare has R2 which has zero egress fees, which is huge for video storage. 🎥
`,
                    },
                    {
                        id: 'clerk',
                        type: 'toolCard',
                        title: 'Clerk',
                        content: 'Authentication made easy. User management, sign-up flows, OAuth. Drop it in and it just works.',
                        url: 'https://clerk.com',
                        faviconPath: '/favicons/clerk.png',
                        iconPath: '/icons/login.svg',
                        detailedContent: `User management, sign-up flows, OAuth providers, all handled out of the box. 🔐

**Why developers love it:**
- Beautiful pre-built UI components
- Works with Next.js, React, and more
- User management dashboard included
- Social login (Google, GitHub, etc.) in minutes

Authentication is one of those things you don't want to build from scratch. 

I use it for projects where I need auth quickly without compromising on quality. ✅`,
                    },
                    {
                        id: 'github',
                        type: 'toolCard',
                        title: 'GitHub',
                        content: 'The home for all my code. Version control, CI/CD, project management. You probably already use it.',
                        url: 'https://github.com',
                        faviconPath: '/favicons/github.png',
                        iconPath: '/icons/coding.svg',
                        detailedContent: `If you're a developer, you probably already use it. It's foundational. 📁

**What I use it for:**
- Version control (obviously)
- GitHub Actions for CI/CD
- Issues for project management
- Copilot for AI assistance

**Tip:** 
Use Jules with GitHub. Jules can clone your repo, read issues, implement fixes, and open PRs automatically. The integration is seamless.`,
                    },
                    {
                        id: 'greptile',
                        type: 'toolCard',
                        title: 'Greptile ($30/dev/mo)',
                        content: 'AI that understands your ENTIRE codebase. Great for checks and balances on code.',
                        url: 'https://greptile.com',
                        faviconPath: '/favicons/greptile.png',
                        iconPath: '/icons/speedometer.svg',
                        detailedContent: `Ask "how does payment work?" and it finds the answer across 100 files. 🔍 \n\nLike having an engineer who's read every line of code.

**Why I'm using it:** 
It allows you to have checks and balances on your code and can help you become a better developer by having AI that reviews the work being done.

The ultimate workflow I'm building toward: Greptile with Graphite and Jules all working together. 🛠️`,
                    },
                    {
                        id: 'graphite',
                        type: 'toolCard',
                        title: 'Graphite',
                        content: 'Modern code review with "stacked PRs." Learning to integrate it with Greptile for a complete workflow.',
                        url: 'https://graphite.dev',
                        faviconPath: '/favicons/graphite.png',
                        iconPath: '/icons/diamond.svg',
                        detailedContent: `Break big changes into small, reviewable chunks. 📝 \n\nLike dividing a novel into chapters instead of submitting the whole book at once.

This leads to faster reviews, smaller bugs, and better code quality. 

The workflow changes how you think about version control.

My goal: Get Greptile + Graphite + Jules all working together for an automated, AI-powered development pipeline. 🎯`,
                    },
                ],
            },
        ],
    },
];

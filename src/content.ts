import type { Tab } from './types';

export const content: Tab[] = [
    // ===== TAB 1: OVERVIEW =====
    {
        id: 'overview',
        label: 'Overview',
        hero: {
            title: 'Welcome to AI Foundations',
            subtitle: 'Your guided path to mastering AI. From complete beginner to confident practitioner.',
            videoUrl: null, // O-V1: Placeholder for new welcome video - user to provide URL
        },
        sections: [
            {
                id: 'what-is-modern-ai',
                title: 'What is Modern AI Exactly?',
                sidebarTitle: 'What is AI?',
                intro: 'A short introduction to help you understand what you are about to learn.',
                cards: [
                    {
                        id: 'modern-ai-video',
                        type: 'videoEmbed',
                        title: 'Understanding Modern AI',
                        videoId: 'https://www.youtube.com/embed/2ePf9rue1Ao', // O-S1: Moved from old hero
                    },
                ],
            },
            {
                id: 'why-learn-ai',
                title: 'Why Learn AI Now?',
                sidebarTitle: 'Why AI Now?',
                intro: 'AI is transforming every industry.\nUnderstanding it is no longer optional - it is essential for career growth.',
                cards: [
                    {
                        id: 'ai-imperative',
                        type: 'alert',
                        alertType: 'important',
                        title: 'The AI Imperative',
                        content: 'By 2025, 97 million new roles will emerge adapted to human-machine collaboration. Those who understand AI will lead. Those who do not will follow.',
                        fullWidth: true,
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
                        videoId: undefined, // O-V2: Placeholder for instructional video - user to provide URL
                        fullWidth: true,
                    },
                    {
                        id: 'quick-wins-carousel',
                        type: 'actionCarousel',
                        actionItems: [
                            {
                                title: 'Sign Up for Google - Get $300 Free',
                                description: 'Your gateway to free AI learning and cloud credits.',
                                details: [
                                    '35 free learning points every month for Google Skills courses',
                                    '$300 in Google Cloud credits valid for 90 days',
                                    'Access to Google Labs for experimental AI features',
                                    'Free skill badges to add to your LinkedIn profile',
                                ],
                                url: 'https://developers.google.com/',
                                buttonText: 'Sign Up Free',
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
                            {
                                title: 'Explore NotebookLM',
                                description: 'Upload any document and have AI explain it to you.',
                                details: [
                                    'Upload PDFs, docs, or paste text for AI analysis',
                                    'Ask questions and get cited answers from your sources',
                                    'Generate summaries, outlines, and study guides',
                                    'Create AI-generated podcast discussions of your content',
                                ],
                                url: 'https://notebooklm.google.com/',
                                buttonText: 'Try NotebookLM',
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
                                title: 'Take a 45-Minute Free Course',
                                description: 'Complete your first AI certification in under an hour.',
                                details: [
                                    'Introduction to Generative AI - official Google course',
                                    'Earn a skill badge for your LinkedIn profile',
                                    'Uses your free Google Developer learning points',
                                    'No coding required - perfect for beginners',
                                ],
                                url: 'https://www.cloudskillsboost.google/course_templates/536',
                                buttonText: 'Start Learning',
                            },
                        ],
                    },
                ],
            },
            {
                id: 'physical-reality',
                title: 'Understanding AI\'s Physical Reality',
                sidebarTitle: 'AI Reality',
                intro: 'Before diving into tools, understand what AI actually is and how it works.',
                cards: [
                    {
                        id: 'physical-reality-video',
                        type: 'videoEmbed',
                        title: 'AI\'s Physical Reality Explained',
                        videoId: undefined, // O-V3: Placeholder for Zoom recording lecture video - user to provide URL
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
                        content: 'Start with Google Setup to get your accounts ready. Take the free courses to build foundations. Then explore tools and eventually pursue certifications for career advancement.',
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
            title: 'Set Up Your Google AI Workspace',
            subtitle: 'Google has SO much to offer. Let us unlock it all.',
            videoUrl: 'https://www.youtube.com/embed/sVj8_kHiguY', // G-V1: Existing - should explain Workspace + Gemini Plus alternative
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
                        content: 'Google\'s AI ecosystem is powerful but not always easy to navigate. They have many overlapping products with similar names. Do not worry - we will guide you through exactly what you need. Bookmark this page!',
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
                        videoId: undefined, // G-V2: Placeholder for Developer Account sign-up video
                        fullWidth: true,
                    },
                    {
                        id: 'why-developer',
                        type: 'callout',
                        title: 'Why Developer Account?',
                        content: 'Even if you are not a developer, this gives you 35 points per month for learning on Google Skills. Earn badges for your resume and access exclusive features in Google Labs - all for free!',
                    },
                    {
                        id: 'developer-links',
                        type: 'linksGrid',
                        title: 'Essential Links',
                        links: [
                            { label: 'Google Developer', url: 'https://developers.google.com/', description: 'Sign up for your developer account' },
                            { label: 'Google Skills', url: 'https://www.cloudskillsboost.google/', description: 'Earn badges with your 35 monthly points' },
                            { label: 'Google Labs', url: 'https://labs.google/', description: 'Experiment with cutting-edge AI' },
                        ],
                    },
                ],
            },
            {
                id: 'cloud-credits',
                title: 'Step 2: G$300 Free Cloud Credits',
                sidebarTitle: 'Step 2',
                intro: 'Google gives you G$300 to experiment with their cloud services.',
                cards: [
                    {
                        id: 'credits-video',
                        type: 'videoEmbed',
                        title: 'Understanding Your Credits',
                        videoId: undefined, // G-V3: Placeholder for Cloud Credits video - advise not to sign up until ready
                        fullWidth: true,
                    },
                    {
                        id: 'credits-alert',
                        type: 'alert',
                        alertType: 'tip',
                        title: '90 Days to Spend Your Credits',
                        content: 'Your G$300 credits expire in 90 days. Use them wisely! Great for experimenting with Gemini API, Vertex AI, and building real projects. Start small and scale up.',
                    },
                    {
                        id: 'credits-uses',
                        type: 'checklist',
                        title: 'What You Can Do With Credits',
                        checklistLinks: [
                            { label: 'Get a Gemini API key to use anywhere', url: 'https://aistudio.google.com/apikey' },
                            { label: 'Experiment with Vertex AI for ML projects', url: 'https://cloud.google.com/vertex-ai' },
                            { label: 'Generate videos with Veo 3', url: 'https://cloud.google.com/vertex-ai/generative-ai/docs/video/overview' },
                            { label: 'Design UIs with Google Stitch', url: 'https://stitch.withgoogle.com/' },
                            { label: 'Run BigQuery for data analysis', url: 'https://cloud.google.com/bigquery' },
                        ],
                    },
                    {
                        id: 'cloud-link',
                        type: 'linksGrid',
                        title: 'Get Started',
                        links: [
                            { label: 'Google Cloud Console', url: 'https://console.cloud.google.com/', description: 'Sign up and claim your G$300 credits' },
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
                        videoId: undefined, // G-V4: Placeholder for Why Google explanation video
                        fullWidth: true,
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
                        id: 'workspace-studio-video',
                        type: 'videoEmbed',
                        title: 'Introducing Workspace Studio',
                        videoId: undefined, // G-V5: Placeholder for Workspace Studio video
                        fullWidth: true,
                    },
                    {
                        id: 'n8n-obsolete',
                        type: 'callout',
                        title: 'N8N Will Be Obsolete', // G-T1
                        content: 'Google Workspace Studio brings powerful automation directly into your workspace. For Workspace account holders, this could replace external tools like N8N for many common workflows.',
                    },
                    {
                        id: 'workspace-studio-reel',
                        type: 'videoEmbed',
                        title: 'Workspace Studio in Action',
                        videoId: 'https://www.youtube.com/embed/Xy0r5fKwlVo?start=13', // G-V6: Google reel with timestamp
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
                title: 'Real-World AI Use Cases by Role',
                sidebarTitle: 'Use Cases',
                intro: 'Click any card to see how AI transforms real work scenarios with specific tools and workflows.\nWhen you see the G$ symbol, it means you can use your G$300 of free credits for that feature.',
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
                                primaryUrl: 'https://notebooklm.google.com/',
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
                                    tools: [{ name: 'Any Editor' }],
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
                                withAI: '$0 and 1 day',
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
            videoUrl: 'https://www.youtube.com/embed/G2fqAlgmoPo',
        },
        sections: [
            {
                id: 'google-free',
                title: 'Google Cloud Skills Boost',
                sidebarTitle: 'Google Skills',
                intro: 'Earn badges for your resume while learning AI fundamentals. Uses your free monthly points.',
                cards: [
                    {
                        id: 'intro-gen-ai',
                        type: 'courseCard',
                        title: 'Introduction to Generative AI',
                        provider: 'Google',
                        duration: '45 mins',
                        level: 'beginner',
                        content: 'Learn what Generative AI is, how it works, and how it differs from traditional ML. Perfect first course for beginners.',
                        url: 'https://www.cloudskillsboost.google/course_templates/536',
                    },
                    {
                        id: 'gemini-workspace',
                        type: 'courseCard',
                        title: 'Google Workspace with Gemini',
                        provider: 'Google',
                        duration: '2 hours',
                        level: 'beginner',
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
                        content: 'For managers: understand how to lead AI initiatives in your organization.',
                        url: 'https://www.cloudskillsboost.google/paths/118',
                    },
                    {
                        id: 'intro-llm',
                        type: 'courseCard',
                        title: 'Introduction to Large Language Models',
                        provider: 'Google',
                        duration: '30 mins',
                        level: 'beginner',
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
                        id: 'ai-for-everyone',
                        type: 'courseCard',
                        title: 'AI For Everyone',
                        provider: 'DeepLearning.AI',
                        duration: '4 weeks',
                        level: 'beginner',
                        content: 'Andrew Ng\'s famous course. No coding required. Understand what AI can and cannot do.',
                        url: 'https://www.coursera.org/learn/ai-for-everyone',
                    },
                    {
                        id: 'fast-ai',
                        type: 'courseCard',
                        title: 'Practical Deep Learning',
                        provider: 'fast.ai',
                        duration: 'Self-paced',
                        level: 'intermediate',
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
                        content: 'Free micro-courses on Python, ML, and data science. Great for hands-on practice.',
                        url: 'https://www.kaggle.com/learn',
                    },
                    {
                        id: 'microsoft-ai',
                        type: 'courseCard',
                        title: 'AI Fundamentals',
                        provider: 'Microsoft Learn',
                        duration: '5 hours',
                        level: 'beginner',
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
            videoUrl: 'https://www.youtube.com/embed/5NgNicANyqM',
        },
        sections: [
            {
                id: 'career-slide',
                title: 'Why Invest in AI Education?',
                sidebarTitle: 'Why Invest?',
                cards: [
                    {
                        id: 'cert-intro-video',
                        type: 'videoEmbed',
                        title: 'Understanding AI Certifications',
                        videoId: undefined, // C-V1: Placeholder for intro video about certifications
                        fullWidth: true,
                    },
                    {
                        id: 'slide-career',
                        type: 'slideViewer',
                        title: 'Future-Proofing Your Career',
                        pdfPath: '/slides/2. AI_Imperative_Future_Proofing_Your_Career.pdf',
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
                id: 'recommended-courses',
                title: 'Recommended Learning Path',
                sidebarTitle: 'Learning Path',
                intro: 'All courses below are included with Coursera Plus (50% off until Jan 26 - just $100/year). If you are dedicated, you could complete all 6 courses in 1-2 months and have certificates to add to your resume.',
                cards: [
                    {
                        id: 'coursera-link',
                        type: 'linksGrid',
                        title: 'Get Coursera Plus - 50% Off',
                        links: [
                            { label: 'Coursera Plus', url: 'https://www.coursera.org/courseraplus', description: 'Unlimited access to all courses. Annual: $100 (normally $200). Monthly: $20 (40% off).' },
                        ],
                    },
                    {
                        id: 'prompting-essentials',
                        type: 'courseCard',
                        title: 'Google Prompting Essentials',
                        provider: 'Google',
                        duration: '4 hours',
                        price: 'Included',
                        level: 'beginner',
                        content: 'Master the art of prompting. Learn to get exactly what you need from AI assistants.',
                        url: 'https://www.coursera.org/learn/google-prompting-essentials',
                    },
                    {
                        id: 'ai-essentials',
                        type: 'courseCard',
                        title: 'Google AI Essentials',
                        provider: 'Google',
                        duration: '4 weeks',
                        price: 'Included',
                        level: 'beginner',
                        content: 'Comprehensive AI fundamentals: productivity tools, responsible AI, staying current.',
                        url: 'https://www.coursera.org/learn/google-ai-essentials',
                    },
                    {
                        id: 'intro-ml',
                        type: 'courseCard',
                        title: 'Introduction to AI and Machine Learning',
                        provider: 'Google Cloud',
                        duration: '8 hours',
                        price: 'Included',
                        level: 'beginner',
                        content: 'Technical introduction to how AI and ML actually work under the hood.',
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
                        content: 'Learn to use Claude for coding assistance and complex reasoning tasks.',
                        url: 'https://www.coursera.org/learn/claude-code-in-action',
                    },
                    {
                        id: 'mcp-intro',
                        type: 'courseCard',
                        title: 'Introduction to Model Context Protocol',
                        provider: 'Anthropic',
                        duration: '3 hours',
                        price: 'Included',
                        level: 'intermediate',
                        content: 'Understand the future of AI integration with MCP - how AI connects to tools.',
                        url: 'https://www.coursera.org/learn/introduction-to-model-context-protocol-mcp',
                    },
                ],
            },
            {
                id: 'official-certs',
                title: 'Advanced: Official Google Certification',
                sidebarTitle: 'Official Cert',
                intro: 'Proctored exams for those who want industry-recognized credentials. Best for non-technical professionals wanting to demonstrate cloud understanding.',
                cards: [
                    {
                        id: 'cdl-cert',
                        type: 'courseCard',
                        title: 'Cloud Digital Leader',
                        provider: 'Google Cloud',
                        duration: '10-20 hours study',
                        price: '$99 exam',
                        level: 'beginner',
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
            videoUrl: 'https://www.youtube.com/embed/zy8n-gGgonk',
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
                        title: 'Use Your $300 Google Cloud Credits!',
                        content: 'Tools marked with a $ badge below can be accessed using your free $300 Google Cloud credits. Sign up at console.cloud.google.com to claim yours.',
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
                        title: 'Veo 3 ($300)',
                        content: 'Google\'s text-to-video AI. I\'ve created some cinematic clips with it, describe a scene in words, get footage with matching audio.',
                        url: 'https://cloud.google.com/vertex-ai/generative-ai/docs/video/overview',
                        faviconPath: '/favicons/google-cloud.png',
                        iconPath: '/icons/video.svg',
                        detailedContent: `Veo 3 is Google's flagship text-to-video model. It's not just about generating random video, it creates genuinely cinematic footage with synchronized audio.

I use it for creating short cinematic clips when I need high-quality B-roll or concept videos. The quality is impressive, especially for abstract or stylized content.

**Pro tip:** It uses your $300 Google Cloud credits, so you can experiment quite a bit before spending any real money. Access it through Vertex AI.

The technology has evolved rapidly. Videos I created in early 2025 look dated compared to what's possible now. If you're just starting, expect even better results than the examples you'll see online from a few months ago.`,
                    },
                    {
                        id: 'heygen',
                        type: 'toolCard',
                        title: 'HeyGen',
                        content: 'I\'m currently using this to create video avatars. Perfect for long-form speaking content, clone yourself or create a virtual presenter.',
                        url: 'https://heygen.com',
                        faviconPath: '/favicons/heygen.png',
                        iconPath: '/icons/ai.svg',
                        detailedContent: `HeyGen is arguably the future of content creation. I genuinely believe everyone should have an AI avatar of themselves.

I use it for creating long-form speaking content. Instead of recording myself for hours, I write a script, and my avatar delivers it naturally. The lip-sync is remarkably good, and it supports 175+ languages.

**My workflow:** I create the audio using NotebookLM (Google's audio quality is spectacular), then use that audio with my HeyGen avatar. The combination is powerful.

Whether you clone your own face or use one of their pre-made avatars, this is a game-changer for anyone creating educational or marketing content. Recording a 30-minute video now takes me 15 minutes of script writing instead of hours of filming, editing, and re-takes.`,
                    },
                    {
                        id: 'higgsfield',
                        type: 'toolCard',
                        title: 'Higgsfield',
                        content: 'Fantastic for UGC and ads. The control over motion is incredible, and it\'s genuinely fun to use.',
                        url: 'https://higgsfield.ai',
                        faviconPath: '/favicons/higgsfield.png',
                        iconPath: '/icons/lightning.svg',
                        detailedContent: `Higgsfield is spectacular for creating UGC (user-generated content) style videos and ads. The level of control you get over motion is amazing.

I use it for product placement concepts and short ad materials. You upload a photo and can precisely control how it animates, walking, turning, gesturing.

**The limitation:** Clips are typically 5-8 seconds max. For longer content, you need to generate multiple clips and edit them together. But for punchy social media ads or product showcases, that's often exactly what you need.

It's also genuinely fun to use. There's something satisfying about bringing a still image to life with realistic human motion.`,
                    },
                    {
                        id: 'klingai',
                        type: 'toolCard',
                        title: 'Kling AI',
                        content: 'Powerful Chinese video AI. Known for impressive motion quality and longer generations than many competitors.',
                        url: 'https://klingai.com/global/',
                        faviconPath: '/favicons/klingai.png',
                        iconPath: '/icons/video.svg',
                        detailedContent: `Kling AI is one of the most powerful video generation models available. Built by Kuaishou (a major Chinese tech company), it produces impressive motion quality.

What sets it apart is the ability to generate longer clips compared to many competitors. The motion is smooth and realistic, especially for human movements.

**Worth knowing:** While it originated in China, the global version is accessible. It's worth trying alongside Veo and other options to see which produces the best results for your specific use case.

The AI video space is evolving so fast that no single tool is "best" for everything. I recommend experimenting with multiple options.`,
                    },
                    {
                        id: 'nanabanana',
                        type: 'toolCard',
                        title: 'Nano Banana',
                        content: 'I use this constantly for quick video and image customizations. Spectacular for pinpointing and changing specific elements.',
                        url: 'https://gemini.google/overview/image-generation/',
                        faviconPath: '/favicons/gemini.png',
                        iconPath: '/icons/startup.svg',
                        detailedContent: `Nano Banana is fantastic for quick customizations. When I need to make precise changes to images or add specific camera movements, this is my go-to.

The tool excels at letting you pinpoint exactly what you want to change. Instead of regenerating entire images, you can modify specific elements directly.

**What I love:** The precision. When other tools give you broad strokes, Nano Banana lets you be surgical. Pan, zoom, rotation, you describe the camera move, and it brings the photo to life intelligently.

I haven't created sample videos to share yet, but I've used the tool extensively. It's become an essential part of my editing workflow.`,
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
                            { id: '5ZmKOMcWriA', title: 'Tech Demo' },
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
                        content: 'I use this every day. I rarely type anymore, even emails, iMessages, chat. Last week I saved 16 hours compared to typing.',
                        url: 'https://superwhisper.com',
                        faviconPath: '/favicons/superwhisper.png',
                        statImage: '/dication.png',
                        detailedContent: `Superwhisper has fundamentally changed how I work. I use it every single day, for everything, emails, personal messages, chat interfaces, even writing code comments.

The math is simple: I speak at around 150 words per minute. Typing is 60-80 WPM at best. That's a 2-3x speed increase on every piece of text I create.

**The real benefit:** It runs 100% locally on your Mac. Your voice data never leaves your machine. This is crucial for anyone working with sensitive information.

As you can see in my screenshot, I saved 16 hours last week compared to if I had typed everything out. That's almost two full workdays. Every week.

If you're on Mac and not using voice-to-text, you're working harder than you need to.`,
                    },
                    {
                        id: 'notebooklm',
                        type: 'toolCard',
                        title: 'NotebookLM',
                        content: 'I use it to create slides, generate audio for my HeyGen avatars, and research complex topics. Google\'s audio quality is spectacular.',
                        url: 'https://notebooklm.google.com',
                        faviconPath: '/favicons/notebooklm.png',
                        iconPath: '/icons/book.svg',
                        detailedContent: `NotebookLM has become central to my content workflow. It's not just a research tool, it's a production tool.

**How I use it:**
- Upload documents and research papers, then have conversations about the content
- Generate the audio I use for HeyGen avatar videos, Google's audio quality is genuinely spectacular
- Create slide presentations based on complex topics I've researched

The "podcast" feature that generates a natural conversation about your documents is remarkably good. The voices sound like two people genuinely discussing your content.

**Pro tip:** NotebookLM is for research and synthesis. Gamma.app is for presenting that research. They complement each other perfectly.`,
                    },
                    {
                        id: 'gemini-plus',
                        type: 'toolCard',
                        title: 'Gemini for Workspace',
                        content: 'I use it every day. Gemini for Gmail, Docs, and Sheets. This is potentially going to be the biggest AI ecosystem of the future.',
                        url: 'https://gemini.google/subscriptions/',
                        faviconPath: '/favicons/gemini.png',
                        iconPath: '/icons/ai.svg',
                        detailedContent: `I use Gemini for Workspace every single day. It's integrated into Gmail, Docs, Sheets, Drive, everywhere I already work.

There are two ways to use it:
- **Individual Gmail:** Gemini for your personal Google account
- **Workspace for domains:** Full integration across your organization's email and docs

**Why I'm bullish on this:** Google already owns the productivity stack that billions use. Adding native AI to that stack isn't just convenient, it's potentially the biggest AI ecosystem of the future.

I highly recommend learning everything you can about Gemini. Whether you end up using Claude, ChatGPT, or other tools for specific tasks, understanding Gemini's ecosystem will be valuable as AI becomes more integrated into how we work.`,
                    },
                    {
                        id: 'otter',
                        type: 'toolCard',
                        title: 'Otter.ai',
                        content: 'For those who do a lot of meetings. Unlike native transcribers in Zoom or Google Meet, this one integrates with ALL of them.',
                        url: 'https://otter.ai',
                        faviconPath: '/favicons/otter.png',
                        iconPath: '/icons/headphones.svg',
                        detailedContent: `I don't use Otter.ai personally, but for anyone who does a lot of recordings and needs comprehensive notes, this is the tool.

**The key advantage:** Unlike the native AI transcribers built into Zoom, Google Meet, or other calling platforms, Otter.ai integrates with all of them. One tool, universal access.

This means you get consistent transcription quality across all your meeting platforms, and all your meeting notes live in one place rather than scattered across different apps.

If you're in a role with lots of meetings, sales, consulting, project management, having a single source of truth for all meeting transcripts is genuinely valuable.`,
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
                        content: 'I use the regular Gemini Assistant daily. It knows my Gmail, Calendar, and Drive. Pro tip: install it as an app on your dock.',
                        url: 'https://gemini.google.com',
                        faviconPath: '/favicons/gemini.png',
                        iconPath: '/icons/ai.svg',
                        detailedContent: `The regular Gemini Assistant is great. I use it every day for quick questions and tasks.

**Pro tip:** If you use Google Chrome, click the three dots in the upper right corner, then "Cast, Save, and Share," then "Install Page as an app." It becomes an app on your dock (Mac). This works for any web app, I do it with all my favorites.

What makes Gemini special is the ecosystem integration. It already knows your Gmail, Calendar, and Drive. You're not copy-pasting context, it's already there.

Is it the "best" at everything? No. But for users in Google's ecosystem, the convenience factor is unmatched.`,
                    },
                    {
                        id: 'chatgpt',
                        type: 'toolCard',
                        title: 'ChatGPT',
                        content: 'I find it incredible for looking through code and finding critical issues. The most human-like of all LLMs to speak with. I use it every day.',
                        url: 'https://chat.openai.com',
                        faviconPath: '/favicons/chatgpt.png',
                        iconPath: '/icons/artificial-intelligence.svg',
                        detailedContent: `I use ChatGPT every day. It's genuinely great at so many things.

**What I use it for:**
- Looking through code to find critical issues, vulnerabilities, or better approaches
- Verifying plans from other AI models (even Claude Opus 4.5), ChatGPT is excellent at finding edge cases
- Natural conversation, it's the most human-like of all the LLMs

The comprehension and language quality are outstanding. When I need something explained in a clear, accessible way, ChatGPT consistently delivers.

**Pro tip:** Just like with Gemini, you can install the web app to your dock using Chrome's "Install Page as an app" feature.`,
                    },
                    {
                        id: 'claude',
                        type: 'toolCard',
                        title: 'Claude',
                        content: 'I use Claude for writing, copywriting, scripts, presentations. And for coding? Claude Opus 4.5 is arguably the best coding model on the planet.',
                        url: 'https://claude.ai',
                        faviconPath: '/favicons/claude.png',
                        iconPath: '/icons/artificial-intelligence.svg',
                        detailedContent: `I don't use the Claude AI assistant that often for general chat, to be honest. But for specific use cases, it's unmatched.

**Writing:** Copywriting, story writing, scriptwriting, Claude excels. I've used it for several presentations. The prose quality is noticeably better than other models.

**Coding:** This is where Claude really shines. I use Claude Opus 4.5 and Claude Sonnet 4.5 daily with my coding agents. It's arguably the best coding AI on the planet right now.

The model can read entire books (200K+ tokens). For long documents, research papers, or analyzing complex codebases, Claude handles context that would overwhelm other models.`,
                    },
                    {
                        id: 'grok',
                        type: 'toolCard',
                        title: 'Grok (xAI)',
                        content: 'I use Grok whenever I need sentiment analysis or want to know what people think about a topic. It scours X in real-time.',
                        url: 'https://x.ai/grok',
                        faviconPath: '/favicons/grok.png',
                        iconPath: '/icons/speedometer.svg',
                        detailedContent: `I use Grok often, specifically for one thing: understanding what people think.

**My use case:** Whenever I learn about something new, a tool, technology, or concept, I go to xAI and ask Grok to scour X and tell me what people are saying about it.

It's like having real-time sentiment analysis. What does the crowd think? What are the common complaints? What are people excited about?

Grok is an LLM like ChatGPT, it can do most of the same things. But the 24/7 access to X's data stream is the differentiator. For trends, breaking news, and public opinion, nothing else comes close.

**Note:** It also has API access if you want to build with it.`,
                    },
                    {
                        id: 'ai-studio',
                        type: 'toolCard',
                        title: 'Google AI Studio ($300)',
                        content: 'I don\'t use it that much since I spend most time in IDEs, but it\'s great for prototyping. Fast way to test prompts and take designs to functionality.',
                        url: 'https://aistudio.google.com',
                        faviconPath: '/favicons/aistudio.png',
                        iconPath: '/icons/lightning.svg',
                        detailedContent: `I don't use AI Studio that much since I mainly work in coding IDEs. But when I do use it, it's valuable.

**What it's good for:**
- Rapid prototyping with Gemini models
- Testing prompts before committing them to code
- Moving quickly from Stitch designs to initial functionality

Think of it as the playground before the real work. You can experiment with different Gemini models (Pro, Flash, Experimental), test system prompts, and export to code when you're happy.

It uses your $300 Google Cloud credits, so it's essentially free to experiment.`,
                    },
                ],
            },
            {
                id: 'developer-tools',
                title: 'Design & Developer Tools',
                intro: 'The tools I use for building interfaces and writing code with AI assistance.',
                cards: [
                    {
                        id: 'stitch',
                        type: 'toolCard',
                        title: 'Google Stitch ($300)',
                        content: 'Great for getting quick design concepts. I haven\'t used it for final designs yet, but it\'s very good for rapid mockups and exploring ideas.',
                        url: 'https://stitch.withgoogle.com/',
                        faviconPath: '/favicons/stitch.png',
                        iconPath: '/icons/diamond.svg',
                        detailedContent: `Google Stitch is great for getting quick concepts for design. If you're sitting with an idea, you can quickly go in and create mockups.

I haven't used it yet for final designs that I take directly to my coding agents, but it's very good for exploring ideas and getting visual direction quickly.

**How it works:** Describe a UI in plain English, get production-ready code. It's like having a designer and developer in one, you say what you want, it builds it.

It uses your $300 Google Cloud credits, so you can experiment freely.`,
                    },
                    {
                        id: 'v0',
                        type: 'toolCard',
                        title: 'v0.dev',
                        content: 'I haven\'t used v0.dev myself yet, but I\'m eyeing some cool designs there. Worth checking out for finished components and landing page templates.',
                        url: 'https://v0.dev',
                        faviconPath: '/favicons/v0.png',
                        iconPath: '/icons/startup.svg',
                        detailedContent: `I haven't actually used v0.dev yet, but I hear good things. In some circles, people are very happy with it.

I see there are some great components in there, and I typically use 21st.dev instead. But I'm eyeing some cool designs in v0 and might try some out in the coming weeks.

**What it offers:** Finished components, small applications, and full designs, even landing pages, that you can implement instead of creating from scratch.

If you're coding or doing anything like that, it's definitely worth taking a look. Vercel (the company behind it) has a strong track record.`,
                    },
                    {
                        id: '21st-dev',
                        type: 'toolCard',
                        title: '21st.dev',
                        content: 'I typically use this for components. Like a grocery store for UI, browse community-made components, pick what looks good, customize to taste.',
                        url: 'https://21st.dev',
                        faviconPath: '/favicons/21st.png',
                        iconPath: '/icons/diamond.svg',
                        detailedContent: `I typically use 21st.dev for finding components. Instead of generating everything from scratch, you browse a marketplace of community-made UI elements.

**Think of it like a grocery store for UI:** You pick what looks good and customize it to taste. Much faster than generating everything with AI when someone has already built something close to what you need.

It integrates nicely with Cursor and VS Code, so you can pull components directly into your project.`,
                    },
                    {
                        id: 'shadcn',
                        type: 'toolCard',
                        title: 'shadcn/ui',
                        content: 'Very popular, and it\'s a must. 21st.dev is also built from this library. Copy-paste components you actually own.',
                        url: 'https://ui.shadcn.com',
                        faviconPath: '/favicons/shadcn.png',
                        iconPath: '/icons/coding.svg',
                        detailedContent: `shadcn/ui is very popular, and it's a must-know for modern React development. 21st.dev is actually built from this library.

**What makes it different:** Unlike npm packages where you're dependent on external code, shadcn components are copied directly into YOUR project. You own the code completely.

It's like the difference between recipes and microwave meals. More work, but you control every ingredient. When you need to customize something specific, you're not fighting against library abstractions.`,
                    },
                    {
                        id: 'gamma',
                        type: 'toolCard',
                        title: 'Gamma.app',
                        content: 'I\'ve used it a few times. Really good for interactive presentations. The cool thing is the interactive features for super engaging decks.',
                        url: 'https://gamma.app',
                        faviconPath: '/favicons/gamma.png',
                        iconPath: '/icons/diamond.svg',
                        detailedContent: `I've used Gamma.app a few times. I think it's really good.

The cool thing is the interactive features you can add for super engaging presentations. It's not just static slides, you can make things that feel more like mini-apps.

**How I think of it:** NotebookLM is for research and synthesis. Gamma.app is for presenting that research in a compelling way. They complement each other perfectly.`,
                    },
                    {
                        id: 'vibesdk',
                        type: 'toolCard',
                        title: 'VibeSDK (Cloudflare)',
                        content: 'A complete hack. In 15 minutes you can set up your own coding agent. Cloudflare pushes updates weekly, I think they\'re planning something big.',
                        url: 'https://github.com/cloudflare/vibesdk',
                        faviconPath: '/favicons/cloudflare.png',
                        iconPath: '/icons/cloud-network.svg',
                        detailedContent: `VibeSDK from Cloudflare is a complete hack, and I think Cloudflare is something you should keep an eye on for the future.

**Why I'm excited:** They're going to surprise everybody with some cool AI features. They already have Workers (serverless functions), cool backend infrastructure, and can deliver at edge. 25% of the world's internet flows through Cloudflare.

I'm putting this up on my own site as a placeholder for when my next application is ready. You can literally set up your own coding agent in 15 minutes.

Looking at their GitHub, they push many updates every week. I think they're planning something big with this.`,
                    },
                    {
                        id: 'open-webui',
                        type: 'toolCard',
                        title: 'Open WebUI',
                        content: 'I\'ve used this for self-hosting LLMs with Ollama. You can also use it as a starting template for building your own LLM-powered app.',
                        url: 'https://openwebui.com',
                        faviconPath: '/favicons/openwebui.png',
                        iconPath: '/icons/ai.svg',
                        detailedContent: `I've used Open WebUI for self-hosting. I use Ollama to download AI models, and then I always have an LLM available directly on my machine.

**Important note:** Depending on your computer's specs, there's a limit to which models you can run locally. But it's really cool to have AI that never needs internet.

**Another use case:** You can use Open WebUI as a starting template for your own application instead of building the entire UI yourself. If you're building an LLM-powered app, starting from their codebase can save weeks.

There's also LM Studio, another popular option for running local models with a nice UI.`,
                    },
                ],
            },
            {
                id: 'ai-infrastructure',
                title: 'AI Infrastructure & Agents',
                intro: 'The advanced tools I use for autonomous AI workflows, the next frontier of developer productivity.',
                cards: [
                    {
                        id: 'antigravity',
                        type: 'toolCard',
                        title: 'Antigravity',
                        content: 'My daily driver now. I believe Google will slingshot past everyone. They have a 20-year head start and own the entire stack.',
                        url: 'https://antigravity.google/',
                        faviconPath: '/favicons/antigravity.png',
                        iconPath: '/icons/ai.svg',
                        detailedContent: `Antigravity is my daily driver now. Although there might be IDEs more tuned at the moment, I believe Antigravity will slingshot and catch up, then go far beyond on every parameter.

**Why I'm bullish on Google's ecosystem:**
- They own the entire stack already
- 20-year head start on infrastructure
- The transformer model that eventually created ChatGPT came from Google engineers

I genuinely think the future of AI applications and coding will be strongest in the Google ecosystem. Using Antigravity is a real pleasure.

**Note:** It's compared to tools like Cursor or OpenCode, but the ecosystem integration is what sets it apart long-term.`,
                    },
                    {
                        id: 'opencode',
                        type: 'toolCard',
                        title: 'OpenCode',
                        content: 'I now use OpenCode with Antigravity. This is spectacular, becoming a favorite of AI-focused developers. The CLI is amazing.',
                        url: 'https://opencode.ai/',
                        faviconPath: '/favicons/opencode.png',
                        iconPath: '/icons/coding.svg',
                        detailedContent: `I now use OpenCode with Antigravity, and it's spectacular. It's becoming a favorite of most AI-focused developers and growing quickly in popularity.

**What sets it apart:**
- Terminal-based, works with any LLM (local or cloud)
- Their CLI tool is amazing
- They also have a desktop app that is supreme

**My workflow:** I use Antigravity for planning and light execution, then I've coded a watcher bridge that sends multiple work orders to OpenCode. OpenCode then does the heavy lifting, following Claude Opus 4.5 directions to code.

I also code with Claude Opus 4.5 through OpenCode. If you want to avoid IDE lock-in or use custom models, this is the way.`,
                    },
                    {
                        id: 'jules',
                        type: 'toolCard',
                        title: 'Jules (Google)',
                        content: 'Simply amazing. Give it a GitHub issue, it clones your repo, fixes the bug, and opens a PR. Works great with Gemini CLI.',
                        url: 'https://jules.google/',
                        faviconPath: '/favicons/jules.png',
                        iconPath: '/icons/ai.svg',
                        detailedContent: `Jules is simply amazing. Google's autonomous coding agent changes everything about how you can approach development.

**How it works:** Give Jules a GitHub issue. It clones your repo, understands the codebase, implements the fix, and opens a PR. Like a junior developer who works 24/7 and never gets tired.

**The combination with Gemini CLI:** When you pair Jules with Gemini CLI, you can orchestrate complex multi-step workflows. Gemini plans, Jules executes.

This is the kind of tool that makes you rethink what "productivity" means in software development.`,
                    },
                    {
                        id: 'gemini-cli',
                        type: 'toolCard',
                        title: 'Gemini CLI',
                        content: 'Google\'s command-line AI assistant. Works beautifully with Jules for automated coding workflows.',
                        url: 'https://geminicli.com/',
                        faviconPath: '/favicons/geminicli.png',
                        iconPath: '/icons/ai.svg',
                        detailedContent: `Gemini CLI is Google's command-line interface for interacting with Gemini models. It's powerful for automation and scripting.

**Why it matters:** It works beautifully with Jules for automated coding workflows. You can script multi-step processes where Gemini handles planning and Jules handles execution.

For developers comfortable with the terminal, this opens up workflows that aren't possible in GUI tools. Pipe outputs, chain commands, automate repetitive tasks.

Uses your $300 Google Cloud credits if you have them.`,
                    },
                    {
                        id: 'beads',
                        type: 'toolCard',
                        title: 'Beads',
                        content: 'Fantastic for AI memory. Combined with my own ruleset, it\'s hard to lose a thread even if you\'re not meticulous.',
                        url: 'https://github.com/steveyegge/beads',
                        faviconPath: '/favicons/github.png',
                        iconPath: '/icons/artificial-intelligence.svg',
                        detailedContent: `Beads is fantastic for having a memory system for AI agents. It solves the "50 First Dates" problem. Agents remember previous sessions instead of starting fresh.

**My setup:** I use Beads alongside my own custom ruleset. The synergy is amazing.

**The benefit:** It gives the agent an expanded context, like a peripheral memory. This allows you to be much more precise with work orders and scope.

Even if you're not meticulous about documentation, it becomes very difficult to lose a thread if Beads is set up correctly. The agent maintains continuity across sessions.

Highly recommend looking into it if you work with AI coding agents regularly.`,
                    },
                    {
                        id: 'cursor',
                        type: 'toolCard',
                        title: 'Cursor',
                        content: 'I\'ve coded myprofiles.biz and teklatoppings.com all in Cursor. It\'s highly VC-backed and pushing for something great.',
                        url: 'https://cursor.sh',
                        faviconPath: '/favicons/cursor.png',
                        iconPath: '/icons/coding.svg',
                        detailedContent: `Cursor is an AI-first code editor. Like VS Code, but AI is built into its DNA, not bolted on.

I've coded several projects in Cursor, including myprofiles.biz and teklatoppings.com. Just describe what you want, and it writes the code.

**Why it matters:** Cursor is highly VC-backed, and I think they're pushing for something great in the future. The experience of coding with AI feels more native than other solutions.

For beginners, it's surprisingly approachable. You're literally just describing what you want in plain English.`,
                    },
                    {
                        id: 'claude-code',
                        type: 'toolCard',
                        title: 'Claude Code (CLI)',
                        content: 'Developer-focused CLI tool from Anthropic. Best coding models on the planet. I don\'t use it anymore, but many developers swear by it.',
                        url: 'https://claude.com/product/claude-code',
                        faviconPath: '/favicons/claudecode.png',
                        iconPath: '/icons/coding.svg',
                        detailedContent: `Claude Code is Anthropic's native CLI tool for coding. It's very developer-focused. The UI is essentially a CLI, but don't let that intimidate you.

**For beginners:** Don't be afraid of these coding tools. They're very easy to learn. You literally have an expert LLM that you can ask how to use the tool itself.

It's a fan favorite by many developers. Claude has arguably the best coding models on the planet right now. If you want the best coding models in the environment they were built for, Claude Code is it.

**My honest take:** I don't use it anymore since I'm focused on investing in ecosystems for the future. But the hype is real. Many people have great success with it.

**Pro tip:** OpenCode's CLI is way better in my opinion, and you can still use Claude models there via API or by connecting your Antigravity subscription through the opencode-antigravity-auth MCP server.`,
                    },
                    {
                        id: 'vertex',
                        type: 'toolCard',
                        title: 'Vertex AI ($300)',
                        content: 'I\'m upskilling myself here. Learning to work with enterprise data, RAG, and ML operations. Critical for large-scale work.',
                        url: 'https://cloud.google.com/vertex-ai',
                        faviconPath: '/favicons/google-cloud.png',
                        iconPath: '/icons/cloud-network.svg',
                        detailedContent: `I'm using Vertex AI for upskilling myself to work with enterprise data at scale.

**What I'm learning:**
- Connecting to and manipulating company data (emails, PDFs, databases)
- Pointing AI at Google Drives and websites
- Building RAG systems (retrieval-augmented generation) to answer questions from knowledge bases
- Machine learning operations (MLOps) for production systems

**Why this matters:** Vertex is the plumbing for large-scale AI operations. To be valuable for large corporations in the future, learning Vertex is essential. It offers enterprise-grade compliance, which matters for big companies.

**The Model Garden:** One huge benefit: you can rent and run other people's models on Google's servers. Llama 3, Claude, Mistral, all inside Vertex. Companies that don't want to be locked into just Gemini can use multiple models, even their own trained models.

**Analogy:** Think of Vertex as a professional kitchen. Gemini is one recipe. Vertex lets you run any recipe, at any scale, with the equipment and processes that professional operations need.`,
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
                        content: 'I mainly use Convex and Cloudflare for most things. R2 has zero egress fees, which is huge for video.',
                        url: 'https://cloudflare.com',
                        faviconPath: '/favicons/cloudflare.png',
                        iconPath: '/icons/cloud-network.svg',
                        detailedContent: `25% of the world's internet flows through Cloudflare's network. I'm very bullish on them.

**What I use:**
- Workers (serverless functions at the edge)
- Pages (static site hosting)
- R2 (S3-compatible storage with zero egress fees, perfect for video)
- VibeSDK for AI applications

**A good architecture:** Use Google Cloud Run for heavy backend processing, Cloudflare R2 for video/media storage (zero egress saves money), point DNS to Cloudflare's front door, and Convex for the light, real-time backend. This combination covers most use cases elegantly.`,
                    },
                    {
                        id: 'google-cloud-run',
                        type: 'toolCard',
                        title: 'Google Cloud Run ($300)',
                        content: 'I\'m focusing here now, learning the Google Cloud ecosystem. You can connect MCP with Antigravity to configure it for you.',
                        url: 'https://cloud.google.com/run',
                        faviconPath: '/favicons/google-cloud.png',
                        iconPath: '/icons/cloud-network.svg',
                        detailedContent: `I'm starting to focus on learning Google Cloud Run. It's serverless containers done right.

**What I'm excited about:**
- Deploy any Docker container
- Automatic scaling (including to zero)
- Pay only for what you use
- Connect MCP with Antigravity to essentially configure the whole thing for you

**Why learn this:** Having Google Cloud experience is valuable for anyone in tech. For heavy backend work that needs more power than serverless edge functions, Cloud Run is the place. It uses your $300 Google Cloud credits.`,
                    },
                    {
                        id: 'convex',
                        type: 'toolCard',
                        title: 'Convex',
                        content: 'Convex is amazing. Real-time database that syncs automatically with your frontend. No manual API building.',
                        url: 'https://convex.dev',
                        faviconPath: '/favicons/convex.png',
                        iconPath: '/icons/database.svg',
                        detailedContent: `The database syncs automatically with your frontend. No manual API building required.

**What makes it special:**
- Database and frontend talk directly
- Real-time updates out of the box
- TypeScript end-to-end

For apps that need real-time features (chat, collaboration, dashboards), Convex can save you weeks of backend work. The developer experience is genuinely impressive.`,
                    },
                    {
                        id: 'clerk',
                        type: 'toolCard',
                        title: 'Clerk',
                        content: 'Authentication made easy. User management, sign-up flows, OAuth. Drop it in and it just works.',
                        url: 'https://clerk.com',
                        faviconPath: '/favicons/clerk.png',
                        iconPath: '/icons/login.svg',
                        detailedContent: `User management, sign-up flows, OAuth providers, all handled out of the box.

**Why developers love it:**
- Beautiful pre-built UI components
- Works with Next.js, React, and more
- User management dashboard included
- Social login (Google, GitHub, etc.) in minutes

Authentication is one of those things you don't want to build from scratch. I use it for projects where I need auth quickly without compromising on quality.`,
                    },
                    {
                        id: 'github',
                        type: 'toolCard',
                        title: 'GitHub',
                        content: 'The home for all my code. Version control, CI/CD, project management. You probably already use it.',
                        url: 'https://github.com',
                        faviconPath: '/favicons/github.png',
                        iconPath: '/icons/coding.svg',
                        detailedContent: `If you're a developer, you probably already use it. It's foundational.

**What I use it for:**
- Version control (obviously)
- GitHub Actions for CI/CD
- Issues for project management
- Copilot for AI assistance

**Pro tip:** Use Jules with GitHub. Jules can clone your repo, read issues, implement fixes, and open PRs automatically. The integration is seamless.`,
                    },
                    {
                        id: 'greptile',
                        type: 'toolCard',
                        title: 'Greptile ($30/dev/mo)',
                        content: 'AI that understands your ENTIRE codebase. Great for checks and balances on code.',
                        url: 'https://greptile.com',
                        faviconPath: '/favicons/greptile.png',
                        iconPath: '/icons/speedometer.svg',
                        detailedContent: `Ask "how does payment work?" and it finds the answer across 100 files. Like having an engineer who's read every line of code.

**Why I'm using it:** It allows you to have checks and balances on your code and can help you become a better developer by having AI that reviews the work being done.

The ultimate workflow I'm building toward: Greptile with Graphite and Jules all working together.`,
                    },
                    {
                        id: 'graphite',
                        type: 'toolCard',
                        title: 'Graphite',
                        content: 'Modern code review with "stacked PRs." Learning to integrate it with Greptile for a complete workflow.',
                        url: 'https://graphite.dev',
                        faviconPath: '/favicons/graphite.png',
                        iconPath: '/icons/diamond.svg',
                        detailedContent: `Break big changes into small, reviewable chunks. Like dividing a novel into chapters instead of submitting the whole book at once.

This leads to faster reviews, smaller bugs, and better code quality. The workflow changes how you think about version control.

My goal: Get Greptile + Graphite + Jules all working together for an automated, AI-powered development pipeline.`,
                    },
                ],
            },
        ],
    },
];

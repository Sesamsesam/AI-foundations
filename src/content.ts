
import type { Tab } from './types';

export const content: Tab[] = [
    {
        id: 'overview',
        label: 'Overview',
        hero: {
            title: 'Welcome to AI Foundations',
            subtitle: 'Your cinematic guided path to mastering the basics of Artificial Intelligence.',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
        },
        sections: [
            {
                id: 'getting-started',
                title: 'Getting Started',
                intro: 'Begin your journey here with the fundamental concepts.',
                cards: [
                    {
                        id: 'what-is-ai',
                        type: 'callout',
                        title: 'What is AI?',
                        content: 'Artificial Intelligence is the simulation of human intelligence processes by machines, especially computer systems.',
                    },
                    {
                        id: 'checklist-1',
                        type: 'checklist',
                        title: 'Your First Steps',
                        items: [
                            'Understand the difference between AI and ML',
                            'Learn about Generative AI',
                            'Set up your development environment',
                        ],
                    },
                ],
            },
            {
                id: 'core-concepts',
                title: 'Core Concepts',
                cards: [
                    {
                        id: 'concepts-text',
                        type: 'text',
                        title: 'Neural Networks',
                        content: 'Neural networks are a set of algorithms, modeled loosely after the human brain, that are designed to recognize patterns.',
                    },
                ],
            },
        ],
    },
    {
        id: 'google-setup',
        label: 'Google Setup',
        hero: {
            title: 'Google Workspace for AI',
            subtitle: 'Optimize your Google environment for AI productivity.',
            videoUrl: null,
        },
        sections: [
            {
                id: 'setup-guide',
                title: 'Configuration Guide',
                cards: [
                    {
                        id: 'setup-links',
                        type: 'linksGrid',
                        title: 'Important Links',
                        links: [
                            { label: 'Google Cloud Console', url: 'https://console.cloud.google.com' },
                            { label: 'AI Studio', url: 'https://aistudio.google.com' },
                        ],
                    },
                ],
            },
        ],
    },
    { id: 'free-courses', label: 'Free Courses', hero: { title: 'Free AI Education', subtitle: 'High-quality resources at no cost.', videoUrl: null }, sections: [] },
    { id: 'paid-courses', label: 'Paid Courses', hero: { title: 'Premium AI Training', subtitle: 'In-depth paid resources for professionals.', videoUrl: null }, sections: [] },
    { id: 'certifications', label: 'Certifications', hero: { title: 'AI Certifications', subtitle: 'Validate your skills with industry-standard certs.', videoUrl: null }, sections: [] },
    { id: 'slides', label: 'Slides', hero: { title: 'Presentation Slides', subtitle: 'Visual aids and slide decks.', videoUrl: null }, sections: [] },
    { id: 'ai-tools', label: 'AI Tools', hero: { title: 'Essential AI Tools', subtitle: 'The best tools to boost your workflow.', videoUrl: null }, sections: [] },
];

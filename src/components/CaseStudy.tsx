import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';
import GDollarBadge from './GDollarBadge';

// Tool URL mapping for clickable tags
const TOOL_URLS: Record<string, string> = {
    'Gemini': 'https://gemini.google.com/',
    'Gemini API': 'https://aistudio.google.com/',
    'Google Stitch': 'https://stitch.withgoogle.com/',
    'HeyGen': 'https://www.heygen.com/',
    'Veo 3': 'https://cloud.google.com/vertex-ai/generative-ai/docs/video/overview',
    'NotebookLM': 'https://notebooklm.google/',
    'BigQuery': 'https://cloud.google.com/bigquery',
    'Sheets': 'https://docs.google.com/spreadsheets/',
    'Vertex AI': 'https://cloud.google.com/vertex-ai',
    'Vertex AI Agent Builder': 'https://cloud.google.com/products/agent-builder',
    'Gamma.app': 'https://gamma.app/',
};

interface CaseStudyStep {
    time: string;
    title: string;
    description: string;
    tools: { name: string; usesCredits?: boolean }[];
}

interface CaseStudyProps {
    title: string;
    context: string;
    steps: CaseStudyStep[];
    outcome: {
        summary: string;
        traditional: string;
        withAI: string;
    };
    darkMode?: boolean;
}

export default function CaseStudy({ title, context, steps, outcome, darkMode = false }: CaseStudyProps) {
    return (
        <div
            className="surface-elevated rounded-2xl overflow-hidden"
            style={{ boxShadow: '0 10px 40px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.08)' }}
        >
            {/* Header - Light gray in light mode, matches card bg in dark mode */}
            <div
                className="p-6"
                style={{
                    backgroundColor: darkMode ? 'var(--color-bg-card)' : '#f8fafc',
                    borderBottom: '1px solid var(--color-border)',
                }}
            >
                <span
                    className="text-sm font-medium uppercase tracking-wide"
                    style={{ color: darkMode ? 'rgba(255,255,255,0.8)' : 'var(--color-text-muted)' }}
                >
                    Case Study
                </span>
                <h3
                    className="text-2xl font-bold mt-2"
                    style={{ color: darkMode ? 'white' : 'var(--color-text-primary)' }}
                >
                    {title}
                </h3>
                <p
                    className="mt-2"
                    style={{ color: darkMode ? 'rgba(255,255,255,0.9)' : 'var(--color-text-secondary)' }}
                >
                    {context}
                </p>
            </div>

            {/* Banner Image - Light or dark version based on mode */}
            <div
                className="w-full"
                style={{
                    borderBottom: '1px solid var(--color-border)',
                }}
            >
                <img
                    src={darkMode ? '/images/case_study_banner_dark.png' : '/images/case_study_banner_light.png'}
                    alt="AI-powered journey from 8:00 AM to 2:00 PM"
                    className="w-full h-auto object-cover"
                    style={{ maxHeight: '240px', objectFit: 'cover' }}
                />
            </div>

            {/* Timeline */}
            <div className="p-6">
                <div className="relative">
                    {/* Vertical line */}
                    <div
                        className="absolute left-3 top-0 bottom-0 w-0.5"
                        style={{ backgroundColor: 'var(--color-border)' }}
                    />

                    {/* Steps */}
                    <div className="space-y-6">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                className="relative pl-10"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {/* Time dot */}
                                <div
                                    className="absolute left-0 w-6 h-6 rounded-full flex items-center justify-center"
                                    style={{
                                        backgroundColor: 'var(--color-bg-secondary)',
                                        color: darkMode ? 'white' : '#3B82F6',
                                    }}
                                >
                                    <Clock size={12} />
                                </div>

                                {/* Content */}
                                <div
                                    className="p-4 rounded-xl transition-shadow duration-300 hover:shadow-md"
                                    style={{
                                        backgroundColor: 'var(--color-bg-secondary)',
                                        border: '1px solid var(--color-border-subtle)',
                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
                                    }}
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <span
                                            className="text-sm font-medium"
                                            style={{ color: 'var(--color-accent)' }}
                                        >
                                            {step.time}
                                        </span>
                                        <ArrowRight size={14} style={{ color: 'var(--color-text-muted)' }} />
                                        <span
                                            className="font-semibold"
                                            style={{ color: 'var(--color-text-primary)' }}
                                        >
                                            {step.title}
                                        </span>
                                    </div>
                                    <p
                                        className="text-sm mb-3"
                                        style={{ color: 'var(--color-text-secondary)' }}
                                    >
                                        {step.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {step.tools.map((tool, j) => {
                                            const toolUrl = TOOL_URLS[tool.name];
                                            const TagComponent = toolUrl ? 'a' : 'span';
                                            const linkProps = toolUrl ? {
                                                href: toolUrl,
                                                target: '_blank',
                                                rel: 'noopener noreferrer',
                                            } : {};

                                            return (
                                                <TagComponent
                                                    key={j}
                                                    {...linkProps}
                                                    className={`text-xs px-2 py-1 rounded flex items-center gap-1 ${toolUrl ? 'hover:opacity-80 cursor-pointer' : ''}`}
                                                    style={{
                                                        backgroundColor: 'var(--color-bg-card)',
                                                        border: '1px solid var(--color-border)',
                                                        color: 'var(--color-text-secondary)',
                                                        textDecoration: 'none',
                                                    }}
                                                >
                                                    {tool.name}
                                                    {tool.usesCredits && <GDollarBadge />}
                                                    {toolUrl && (
                                                        <ExternalLink size={10} style={{ opacity: 0.6 }} />
                                                    )}
                                                </TagComponent>
                                            );
                                        })}
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Final completed dot */}
                        <div className="relative pl-10">
                            <div
                                className="absolute left-0 w-6 h-6 rounded-full flex items-center justify-center"
                                style={{
                                    backgroundColor: 'var(--color-bg-secondary)',
                                    color: darkMode ? 'white' : '#3B82F6',
                                }}
                            >
                                <CheckCircle2 size={14} />
                            </div>
                            <span
                                className="font-semibold"
                                style={{ color: 'var(--color-text-primary)' }}
                            >
                                Complete!
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Outcome */}
            <div
                className="p-6"
                style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    borderTop: '1px solid var(--color-border)',
                }}
            >
                <h4
                    className="font-semibold mb-4"
                    style={{ color: 'var(--color-text-primary)' }}
                >
                    Outcome
                </h4>
                <p
                    className="mb-4"
                    style={{ color: 'var(--color-text-secondary)' }}
                >
                    {outcome.summary}
                </p>
                <div className="grid grid-cols-2 gap-4">
                    {/* Traditional Box - Static styling */}
                    <div
                        className="p-4 rounded-xl text-center"
                        style={{
                            backgroundColor: 'var(--color-bg-card)',
                            border: '2px solid #ef4444',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                        }}
                    >
                        <span className="text-xs font-medium uppercase tracking-wide text-red-500">
                            Traditional
                        </span>
                        <p className="text-lg font-bold mt-1" style={{ color: 'var(--color-text-primary)' }}>
                            {outcome.traditional}
                        </p>
                    </div>
                    {/* With AI Box - Static styling */}
                    <div
                        className="p-4 rounded-xl text-center"
                        style={{
                            backgroundColor: 'var(--color-bg-card)',
                            border: '2px solid #22c55e',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                        }}
                    >
                        <span className="text-xs font-medium uppercase tracking-wide" style={{ color: '#22c55e' }}>
                            With AI
                        </span>
                        <p className="text-lg font-bold mt-1" style={{ color: 'var(--color-text-primary)' }}>
                            {outcome.withAI}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

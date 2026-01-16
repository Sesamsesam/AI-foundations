import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, ArrowRight, DollarSign } from 'lucide-react';

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
}

export default function CaseStudy({ title, context, steps, outcome }: CaseStudyProps) {
    return (
        <div
            className="rounded-2xl overflow-hidden"
            style={{
                backgroundColor: 'var(--color-bg-card)',
                border: '1px solid var(--color-border)',
            }}
        >
            {/* Header */}
            <div
                className="p-6"
                style={{
                    background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-hover))',
                }}
            >
                <span className="text-white/80 text-sm font-medium uppercase tracking-wide">
                    Case Study
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">
                    {title}
                </h3>
                <p className="text-white/90 mt-2">
                    {context}
                </p>
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
                                        backgroundColor: 'var(--color-accent)',
                                        color: 'white',
                                    }}
                                >
                                    <Clock size={12} />
                                </div>

                                {/* Content */}
                                <div
                                    className="p-4 rounded-xl"
                                    style={{
                                        backgroundColor: 'var(--color-bg-secondary)',
                                        border: '1px solid var(--color-border-subtle)',
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
                                        {step.tools.map((tool, j) => (
                                            <span
                                                key={j}
                                                className="text-xs px-2 py-1 rounded flex items-center gap-1"
                                                style={{
                                                    backgroundColor: 'var(--color-bg-card)',
                                                    border: '1px solid var(--color-border)',
                                                    color: 'var(--color-text-secondary)',
                                                }}
                                            >
                                                {tool.name}
                                                {tool.usesCredits && (
                                                    <DollarSign size={10} style={{ color: 'var(--color-success)' }} />
                                                )}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Final completed dot */}
                        <div className="relative pl-10">
                            <div
                                className="absolute left-0 w-6 h-6 rounded-full flex items-center justify-center"
                                style={{
                                    backgroundColor: 'var(--color-success)',
                                    color: 'white',
                                }}
                            >
                                <CheckCircle2 size={14} />
                            </div>
                            <span
                                className="font-semibold"
                                style={{ color: 'var(--color-success)' }}
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
                    <div
                        className="p-4 rounded-xl text-center"
                        style={{
                            backgroundColor: 'rgba(239, 68, 68, 0.1)',
                            border: '1px solid rgba(239, 68, 68, 0.3)',
                        }}
                    >
                        <span className="text-xs font-medium uppercase tracking-wide text-red-500">
                            Traditional
                        </span>
                        <p className="text-lg font-bold text-red-600 mt-1">
                            {outcome.traditional}
                        </p>
                    </div>
                    <div
                        className="p-4 rounded-xl text-center"
                        style={{
                            backgroundColor: 'rgba(34, 197, 94, 0.1)',
                            border: '1px solid var(--color-success)',
                        }}
                    >
                        <span className="text-xs font-medium uppercase tracking-wide" style={{ color: 'var(--color-success)' }}>
                            With AI
                        </span>
                        <p className="text-lg font-bold mt-1" style={{ color: 'var(--color-success)' }}>
                            {outcome.withAI}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

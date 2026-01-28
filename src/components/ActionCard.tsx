import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

interface ActionCardProps {
    number: number;
    title: string;
    description: string;
    details: string[];
    url: string;
    buttonText?: string;
}

export default function ActionCard({ number, title, description, details, url, buttonText = 'Get Started' }: ActionCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className="surface-card rounded-xl overflow-hidden transition-all h-full flex flex-col"
            style={{
                minHeight: '160px',
                zIndex: isExpanded ? 10 : 1,
                position: 'relative'
            }}
        >
            {/* Header - Always visible */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full p-5 text-left flex items-start gap-4 transition-colors"
                style={{ backgroundColor: isExpanded ? 'var(--color-bg-secondary)' : 'transparent' }}
            >
                {/* Number badge */}
                <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm gradient-circle"
                >
                    {number}
                </div>

                <div className="flex-1 min-w-0">
                    <h4
                        className="font-semibold text-base mb-1"
                        style={{ color: 'var(--color-text-primary)' }}
                    >
                        {title}
                    </h4>
                    <p
                        className="text-sm line-clamp-2"
                        style={{ color: 'var(--color-text-secondary)' }}
                    >
                        {description}
                    </p>
                </div>

                {/* Expand indicator */}
                <div style={{ color: 'var(--color-text-muted)' }} className="flex-shrink-0 mt-1">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
            </button>

            {/* Expanded content - with animation */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div
                            className="px-5 pb-5 pt-2 flex-1 flex flex-col"
                            style={{ borderTop: '1px solid var(--color-border-subtle)' }}
                        >
                            {/* Details list */}
                            <ul className="space-y-2 mb-4 flex-1">
                                {details.map((detail, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-2 text-sm"
                                        style={{ color: 'var(--color-text-secondary)' }}
                                    >
                                        <span style={{ color: 'var(--color-success)' }}>•</span>
                                        {detail}
                                    </li>
                                ))}
                            </ul>

                            {/* Action button */}
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors mt-auto gradient-bg"
                                style={{ color: 'white' }}
                            >
                                {buttonText}
                                <ExternalLink size={14} />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}


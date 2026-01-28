import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import GDollarBadge from './GDollarBadge';

interface ToolCardProps {
    title: string;
    content: string;
    iconPath?: string;
    faviconPath?: string;
    quickStart?: string;
    url?: string;
    statImage?: string;
    detailedContent?: string;
    usesCredits?: boolean;
    // Controlled mode props
    isExpanded?: boolean;
    onToggleExpand?: () => void;
}

export default function ToolCard({
    title,
    content,
    iconPath,
    faviconPath,
    quickStart,
    url,
    statImage,
    detailedContent,
    usesCredits,
    isExpanded: controlledExpanded,
    onToggleExpand
}: ToolCardProps) {
    const [internalExpanded, setInternalExpanded] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    // Use controlled or internal state
    const isExpanded = controlledExpanded !== undefined ? controlledExpanded : internalExpanded;
    const handleToggle = onToggleExpand || (() => setInternalExpanded(!internalExpanded));

    // Auto-scroll to center card in viewport - DESKTOP ONLY (runs on expand AND collapse)
    useEffect(() => {
        // Only run scroll on desktop (>= 768px)
        if (window.innerWidth < 768) return;

        if (cardRef.current) {
            // Wait for the layout animation to settle before scrolling
            const delay = isExpanded ? 350 : 300;
            setTimeout(() => {
                if (!cardRef.current) return;
                // Double-check we're still on desktop
                if (window.innerWidth < 768) return;

                const card = cardRef.current;
                const cardRect = card.getBoundingClientRect();
                const viewportHeight = window.innerHeight;

                // Calculate position to center the card in viewport
                const cardCenter = cardRect.top + cardRect.height / 2;
                const viewportCenter = viewportHeight / 2;
                const scrollOffset = cardCenter - viewportCenter;

                // Scroll to center the card
                window.scrollTo({
                    top: window.scrollY + scrollOffset,
                    behavior: 'smooth'
                });
            }, delay);
        }
    }, [isExpanded]);

    // Check if expandable content is available
    const hasExpandableContent = detailedContent && detailedContent.trim().length > 0;

    return (
        <motion.div
            ref={cardRef}
            layout
            className="surface-card rounded-xl overflow-hidden flex flex-col h-full"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <div className="p-5 flex-1 flex flex-col">
                {/* Header with Favicon */}
                <div className="flex items-start gap-3 mb-4">
                    {faviconPath && (
                        <img
                            src={faviconPath}
                            alt=""
                            className="w-8 h-8 rounded flex-shrink-0"
                            style={{ objectFit: 'contain' }}
                            loading="lazy"
                        />
                    )}
                    <div className="flex-1 min-w-0">
                        <h4
                            className="font-semibold text-lg flex items-center gap-2"
                            style={{ color: 'var(--color-text-primary)' }}
                        >
                            {title}
                            {usesCredits && <GDollarBadge />}
                        </h4>
                    </div>
                </div>

                {/* Short Description (always visible) */}
                <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--color-text-secondary)' }}
                >
                    {content.replace(/—/g, ' - ')}
                </p>

                {/* Expandable Detailed Content */}
                {hasExpandableContent && (
                    <>
                        <button
                            onClick={handleToggle}
                            className="flex items-center gap-1 text-xs font-medium mt-3 transition-colors hover:opacity-80"
                            style={{ color: 'var(--color-accent)' }}
                        >
                            {isExpanded ? 'Show less' : 'Learn more about how I use it'}
                            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </button>

                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div
                                        className="mt-4 pt-4 text-sm leading-relaxed space-y-3"
                                        style={{
                                            borderTop: '1px solid var(--color-border)',
                                            color: 'var(--color-text-secondary)',
                                        }}
                                    >
                                        {/* Split by double newlines for paragraph breaks */}
                                        {detailedContent.split('\n\n').map((paragraph, i) => (
                                            <p key={i} className="whitespace-pre-wrap">
                                                {paragraph.trim()}
                                            </p>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </>
                )}

                {/* Stat image */}
                {statImage && (
                    <div className="mt-4">
                        <img
                            src={statImage}
                            alt={`${title} stats`}
                            className="w-full rounded-lg"
                            style={{ border: '1px solid var(--color-border)' }}
                        />
                    </div>
                )}

                {/* Quick start */}
                {quickStart && (
                    <div
                        className="mt-4 p-3 rounded-lg"
                        style={{ backgroundColor: 'var(--color-bg-secondary)' }}
                    >
                        <p
                            className="text-xs font-medium mb-1"
                            style={{ color: 'var(--color-text-muted)' }}
                        >
                            Quick Start
                        </p>
                        <code
                            className="text-sm"
                            style={{ color: 'var(--color-text-primary)' }}
                        >
                            {quickStart}
                        </code>
                    </div>
                )}

                {/* Action */}
                {url && (
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 flex items-center gap-2 text-sm font-medium transition-colors"
                        style={{ color: 'var(--color-accent)' }}
                    >
                        Get Started
                        <ExternalLink size={14} />
                    </a>
                )}
            </div>
        </motion.div>
    );
}

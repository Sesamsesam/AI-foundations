import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Clock, ChevronDown, ChevronUp } from 'lucide-react';

interface MobileCourseCardProps {
    title: string;
    provider: string;
    duration?: string;
    price?: string;
    url: string;
    description?: string;
    thumbnailUrl?: string;
    level?: 'beginner' | 'intermediate' | 'advanced';
    iconPath?: string;
    isExpanded: boolean;
    onToggleExpand: () => void;
}

/**
 * Mobile Course Card - Compact with expandable description
 * Used on mobile viewports only (hidden on md+)
 */
export default function MobileCourseCard({
    title,
    provider,
    duration,
    url,
    description,
    level,
    iconPath,
    isExpanded,
    onToggleExpand
}: MobileCourseCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    const levelColors = {
        beginner: 'var(--color-success)',
        intermediate: 'var(--color-warning)',
        advanced: 'var(--color-error)',
    };

    // Auto-scroll to card when expanded or collapsed
    useEffect(() => {
        if (cardRef.current) {
            // Longer delay for collapse to let grid reflow animation complete
            const delay = isExpanded ? 150 : 200;
            setTimeout(() => {
                if (!cardRef.current) return;

                const card = cardRef.current;
                const cardRect = card.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                const tabBarHeight = 80; // Mobile tab bar height
                const margin = 16; // Extra margin below card

                // Calculate where card bottom should be (above tab bar with margin)
                const availableHeight = viewportHeight - tabBarHeight - margin;

                // If card is taller than available space, scroll to show as much as possible
                // Otherwise, try to center it in the available space
                if (cardRect.height > availableHeight) {
                    // Scroll so card top is near top of viewport with some padding
                    const scrollTop = window.scrollY + cardRect.top - 100;
                    window.scrollTo({ top: scrollTop, behavior: 'smooth' });
                } else {
                    // Center card in the available viewport space (above tab bar)
                    const desiredTop = (availableHeight - cardRect.height) / 2;
                    const scrollTop = window.scrollY + cardRect.top - desiredTop;
                    window.scrollTo({ top: Math.max(0, scrollTop), behavior: 'smooth' });
                }
            }, delay);
        }
    }, [isExpanded]);

    return (
        <motion.div
            ref={cardRef}
            layout
            className="surface-card rounded-xl overflow-hidden flex flex-col"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ scrollMarginBottom: '96px' }} // Extra scroll margin for tab bar
        >
            {/* Content */}
            <motion.div layout="position" className="p-3 flex-1 flex flex-col">
                {/* Header with inline badge */}
                <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-start gap-2 flex-1 min-w-0">
                        {/* Course icon */}
                        {iconPath && (
                            <img
                                src={iconPath}
                                alt=""
                                className="w-5 h-5 flex-shrink-0 mt-0.5"
                            />
                        )}
                        <div className="flex-1 min-w-0">
                            {/* Title first */}
                            <h4
                                className={`text-sm font-semibold leading-tight mb-0.5 ${!isExpanded ? 'line-clamp-1' : ''}`}
                                style={{ color: 'var(--color-text-primary)' }}
                            >
                                {title}
                            </h4>
                            {/* Provider + Level badge inline */}
                            <div className="flex items-center gap-2">
                                <p
                                    className="text-[10px] font-medium uppercase tracking-wide truncate max-w-[80px]"
                                    style={{ color: 'var(--color-accent)' }}
                                >
                                    {provider}
                                </p>
                                {level && (
                                    <span
                                        className="text-[8px] font-medium opacity-70"
                                        style={{ color: levelColors[level] }}
                                    >
                                        {level.charAt(0).toUpperCase() + level.slice(1)}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Duration */}
                {duration && (
                    <div
                        className="flex items-center gap-1 text-xs mb-2"
                        style={{ color: 'var(--color-text-muted)' }}
                    >
                        <Clock size={12} />
                        <span>{duration}</span>
                    </div>
                )}

                {/* Description - only when expanded */}
                <AnimatePresence mode="wait">
                    {isExpanded && description && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <p
                                className="text-xs leading-relaxed mb-3"
                                style={{ color: 'var(--color-text-secondary)' }}
                            >
                                {description.replace(/—/g, ' - ')}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Action Button */}
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg font-medium text-xs transition-all hover:opacity-90 gradient-bg ${isExpanded ? '' : 'mt-auto'}`}
                    style={{ color: 'white' }}
                >
                    {isExpanded ? 'Start Course' : 'Start'}
                    <ExternalLink size={12} />
                </a>
            </motion.div>

            {/* Expandable Footer - divider + See more */}
            {description && (
                <div>
                    <div
                        className="border-t"
                        style={{ borderColor: 'var(--color-border)' }}
                    />
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onToggleExpand();
                        }}
                        className="w-full py-2.5 flex items-center justify-center gap-1.5 text-xs font-medium transition-colors"
                        style={{ color: 'var(--color-text-muted)' }}
                    >
                        {isExpanded ? (
                            <>
                                <ChevronUp size={14} />
                                <span>See less</span>
                            </>
                        ) : (
                            <>
                                <ChevronDown size={14} />
                                <span>See more</span>
                            </>
                        )}
                    </button>
                </div>
            )}
        </motion.div>
    );
}

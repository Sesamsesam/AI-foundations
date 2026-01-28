import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import GDollarBadge from './GDollarBadge';

interface MobileToolCardProps {
    title: string;
    content: string;
    iconPath?: string;
    faviconPath?: string;
    url?: string;
    detailedContent?: string;
    usesCredits?: boolean;
    isExpanded: boolean;
    onToggleExpand: () => void;
}

/**
 * Mobile Tool Card - Compact with expandable description
 * Used on mobile viewports only (hidden on md+)
 */
export default function MobileToolCard({
    title,
    content,
    faviconPath,
    url,
    detailedContent,
    usesCredits,
    isExpanded,
    onToggleExpand
}: MobileToolCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to card when expanded or collapsed - MOBILE ONLY
    useEffect(() => {
        // Only run scroll on mobile (< 768px)
        if (window.innerWidth >= 768) return;

        if (cardRef.current) {
            const delay = isExpanded ? 150 : 200;
            setTimeout(() => {
                if (!cardRef.current) return;
                // Double-check we're still on mobile
                if (window.innerWidth >= 768) return;

                const card = cardRef.current;
                const cardRect = card.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                const tabBarHeight = 80;
                const margin = 16;

                const availableHeight = viewportHeight - tabBarHeight - margin;

                if (cardRect.height > availableHeight) {
                    const scrollTop = window.scrollY + cardRect.top - 100;
                    window.scrollTo({ top: scrollTop, behavior: 'smooth' });
                } else {
                    const desiredTop = (availableHeight - cardRect.height) / 2;
                    const scrollTop = window.scrollY + cardRect.top - desiredTop;
                    window.scrollTo({ top: Math.max(0, scrollTop), behavior: 'smooth' });
                }
            }, delay);
        }
    }, [isExpanded]);

    const hasExpandableContent = (detailedContent && detailedContent.trim().length > 0) || (content && content.length > 60);

    return (
        <motion.div
            ref={cardRef}
            layout
            className="surface-card rounded-xl overflow-hidden flex flex-col"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ scrollMarginBottom: '96px' }}
        >
            {/* Content */}
            <motion.div layout="position" className="p-3 flex-1 flex flex-col">
                {/* Header with Favicon */}
                <div className="flex items-start gap-2 mb-2">
                    {faviconPath && (
                        <img
                            src={faviconPath}
                            alt=""
                            className="w-5 h-5 rounded flex-shrink-0 mt-0.5"
                            style={{ objectFit: 'contain' }}
                            loading="lazy"
                        />
                    )}
                    <div className="flex-1 min-w-0">
                        <h4
                            className="text-sm font-semibold leading-tight flex items-center gap-1.5"
                            style={{ color: 'var(--color-text-primary)' }}
                        >
                            <span className={!isExpanded ? 'line-clamp-1' : ''}>{title}</span>
                            {usesCredits && <GDollarBadge />}
                        </h4>
                    </div>
                </div>

                {/* Expanded content: Short description + divider + Detailed content */}
                <AnimatePresence mode="wait">
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            {/* Short description */}
                            {content && (
                                <p
                                    className="text-xs leading-relaxed mb-3"
                                    style={{ color: 'var(--color-text-secondary)' }}
                                >
                                    {content.replace(/—/g, ' - ')}
                                </p>
                            )}

                            {/* Detailed content with divider */}
                            {detailedContent && detailedContent.trim().length > 0 && (
                                <>
                                    <div
                                        className="border-t my-3"
                                        style={{ borderColor: 'var(--color-border)' }}
                                    />
                                    <p
                                        className="text-[10px] font-medium uppercase tracking-wide mb-2"
                                        style={{ color: 'var(--color-accent)' }}
                                    >
                                        How I use it
                                    </p>
                                    <div
                                        className="text-xs leading-relaxed space-y-2 mb-3"
                                        style={{ color: 'var(--color-text-secondary)' }}
                                    >
                                        {detailedContent.split('\n\n').map((paragraph, i) => (
                                            <p key={i} className="whitespace-pre-wrap">
                                                {paragraph.trim()}
                                            </p>
                                        ))}
                                    </div>
                                </>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Action Button */}
                {url && (
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg font-medium text-xs transition-all hover:opacity-90 gradient-bg ${isExpanded ? '' : 'mt-auto'}`}
                        style={{ color: 'white' }}
                    >
                        {isExpanded ? 'Get Started' : 'Open'}
                        <ExternalLink size={12} />
                    </a>
                )}
            </motion.div>

            {/* Expandable Footer - divider + See more */}
            {hasExpandableContent && (
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

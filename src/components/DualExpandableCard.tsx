import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { ChevronDown, ChevronUp, Check, Lightbulb } from 'lucide-react';

interface DualExpandableCardProps {
    leftCard: {
        title: string;
        content: string;
        type: 'tip' | 'warning' | 'important';
    };
    rightCard: {
        title: string;
        items: { label: string; url?: string }[];
    };
}

export default function DualExpandableCard({ leftCard, rightCard }: DualExpandableCardProps) {
    const [leftExpanded, setLeftExpanded] = useState(false);
    const [rightExpanded, setRightExpanded] = useState(false);
    const leftCardRef = useRef<HTMLDivElement>(null);
    const rightCardRef = useRef<HTMLDivElement>(null);
    const hasMountedLeft = useRef(false);
    const hasMountedRight = useRef(false);

    // Icon and color mapping for alert types
    const alertStyles = {
        tip: {
            icon: <Lightbulb size={14} className="sm:w-4 sm:h-4" />,
            bg: 'rgba(34, 197, 94, 0.1)',
            border: 'var(--color-success)',
            iconBg: 'var(--color-success)',
        },
        warning: {
            icon: <Lightbulb size={14} className="sm:w-4 sm:h-4" />,
            bg: 'rgba(251, 191, 36, 0.1)',
            border: 'var(--color-warning)',
            iconBg: 'var(--color-warning)',
        },
        important: {
            icon: <Lightbulb size={14} className="sm:w-4 sm:h-4" />,
            bg: 'rgba(59, 130, 246, 0.1)',
            border: 'var(--color-accent)',
            iconBg: 'var(--color-accent)',
        },
    };

    const style = alertStyles[leftCard.type];
    const visibleItems = rightExpanded ? rightCard.items : rightCard.items.slice(0, 1);
    const hasMoreItems = rightCard.items.length > 1;

    // Auto-scroll to center card when expanded/collapsed
    const scrollToCenter = (cardRef: React.RefObject<HTMLDivElement | null>, delay: number) => {
        setTimeout(() => {
            if (!cardRef.current) return;
            const card = cardRef.current;
            const cardRect = card.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const tabBarHeight = 80;
            const availableHeight = viewportHeight - tabBarHeight;

            // Center card in available viewport
            const desiredTop = (availableHeight - cardRect.height) / 2;
            const scrollTop = window.scrollY + cardRect.top - desiredTop;
            window.scrollTo({ top: Math.max(0, scrollTop), behavior: 'smooth' });
        }, delay);
    };

    // Left card scroll effect
    useEffect(() => {
        if (!hasMountedLeft.current) {
            hasMountedLeft.current = true;
            return;
        }
        scrollToCenter(leftCardRef, leftExpanded ? 150 : 200);
    }, [leftExpanded]);

    // Right card scroll effect
    useEffect(() => {
        if (!hasMountedRight.current) {
            hasMountedRight.current = true;
            return;
        }
        scrollToCenter(rightCardRef, rightExpanded ? 150 : 200);
    }, [rightExpanded]);

    return (
        <LayoutGroup>
            <motion.div
                layout
                className="grid gap-2 sm:gap-4"
                style={{
                    gridTemplateColumns: leftExpanded || rightExpanded ? '1fr' : 'repeat(2, 1fr)',
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                {/* Left Card - Alert with expandable */}
                <motion.div
                    ref={leftCardRef}
                    layout
                    className="surface-card rounded-lg sm:rounded-xl overflow-hidden flex flex-col"
                    style={{
                        minHeight: '120px',
                        gridColumn: leftExpanded ? '1 / -1' : 'auto',
                        order: leftExpanded ? -1 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    <motion.div layout="position" className="p-3 sm:p-5 flex-1">
                        {/* Header with icon */}
                        <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                            <div
                                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0"
                                style={{ backgroundColor: style.iconBg, color: 'white' }}
                            >
                                {style.icon}
                            </div>
                            <h4
                                className="font-semibold text-xs sm:text-base leading-tight pt-0.5 sm:pt-1"
                                style={{ color: 'var(--color-text-primary)' }}
                            >
                                {leftCard.title}
                            </h4>
                        </div>

                        {/* Expandable content */}
                        <AnimatePresence initial={false}>
                            <motion.div
                                initial={false}
                                animate={{ height: leftExpanded ? 'auto' : '2.5rem' }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="overflow-hidden relative"
                            >
                                <p
                                    className={`leading-relaxed ${leftExpanded ? 'text-sm sm:text-base' : 'text-[11px] sm:text-sm'}`}
                                    style={{ color: 'var(--color-text-secondary)' }}
                                >
                                    {leftCard.content}
                                </p>
                                {!leftExpanded && (
                                    <div
                                        className="absolute bottom-0 left-0 right-0 h-5 pointer-events-none"
                                        style={{
                                            background: 'linear-gradient(transparent, var(--color-bg-card))',
                                        }}
                                    />
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                    {/* Expand toggle */}
                    <motion.button
                        layout="position"
                        onClick={() => {
                            setLeftExpanded(!leftExpanded);
                            // Collapse the other card if this one is expanding
                            if (!leftExpanded && rightExpanded) {
                                setRightExpanded(false);
                            }
                        }}
                        className="w-full py-2 sm:py-2.5 flex items-center justify-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-medium transition-colors border-t"
                        style={{
                            color: 'var(--color-text-muted)',
                            borderColor: 'var(--color-border)',
                        }}
                    >
                        {leftExpanded ? (
                            <>
                                <ChevronUp size={12} className="sm:w-3.5 sm:h-3.5" />
                                <span>Less</span>
                            </>
                        ) : (
                            <>
                                <ChevronDown size={12} className="sm:w-3.5 sm:h-3.5" />
                                <span>More</span>
                            </>
                        )}
                    </motion.button>
                </motion.div>

                {/* Right Card - Checklist with expandable */}
                <motion.div
                    ref={rightCardRef}
                    layout
                    className="surface-card rounded-lg sm:rounded-xl overflow-hidden flex flex-col"
                    style={{
                        minHeight: '120px',
                        gridColumn: rightExpanded ? '1 / -1' : 'auto',
                        order: rightExpanded ? -1 : 1,
                        display: leftExpanded ? 'none' : 'flex',
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    <motion.div layout="position" className="p-3 sm:p-5 flex-1">
                        <h4
                            className="font-semibold text-xs sm:text-base mb-2 sm:mb-4"
                            style={{ color: 'var(--color-text-primary)' }}
                        >
                            {rightCard.title}
                        </h4>

                        {/* Checklist items */}
                        <AnimatePresence initial={false}>
                            <motion.ul
                                className="space-y-1.5 sm:space-y-2.5"
                                initial={false}
                                animate={{ height: 'auto' }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                                {visibleItems.map((item, i) => (
                                    <motion.li
                                        key={item.label}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2, delay: i * 0.05 }}
                                        className="flex items-start gap-1.5 sm:gap-2.5"
                                    >
                                        <div
                                            className="mt-0.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center flex-shrink-0"
                                            style={{ backgroundColor: 'var(--color-success)', color: 'white' }}
                                        >
                                            <Check size={10} className="sm:w-3 sm:h-3" />
                                        </div>
                                        {item.url ? (
                                            <a
                                                href={item.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`font-medium transition-colors hover:underline ${rightExpanded ? 'text-sm sm:text-base' : 'text-[11px] sm:text-sm line-clamp-2'}`}
                                                style={{ color: 'var(--color-accent)' }}
                                            >
                                                {item.label}
                                            </a>
                                        ) : (
                                            <span
                                                className={`${rightExpanded ? 'text-sm sm:text-base' : 'text-[11px] sm:text-sm line-clamp-2'}`}
                                                style={{ color: 'var(--color-text-secondary)' }}
                                            >
                                                {item.label}
                                            </span>
                                        )}
                                    </motion.li>
                                ))}
                                {!rightExpanded && hasMoreItems && (
                                    <li
                                        className="text-[10px] sm:text-sm font-medium"
                                        style={{ color: 'var(--color-text-muted)' }}
                                    >
                                        …+{rightCard.items.length - 1} more
                                    </li>
                                )}
                            </motion.ul>
                        </AnimatePresence>
                    </motion.div>

                    {/* Expand toggle */}
                    {hasMoreItems && (
                        <motion.button
                            layout="position"
                            onClick={() => {
                                setRightExpanded(!rightExpanded);
                                // Collapse the other card if this one is expanding
                                if (!rightExpanded && leftExpanded) {
                                    setLeftExpanded(false);
                                }
                            }}
                            className="w-full py-2 sm:py-2.5 flex items-center justify-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-medium transition-colors border-t"
                            style={{
                                color: 'var(--color-text-muted)',
                                borderColor: 'var(--color-border)',
                            }}
                        >
                            {rightExpanded ? (
                                <>
                                    <ChevronUp size={12} className="sm:w-3.5 sm:h-3.5" />
                                    <span>Less</span>
                                </>
                            ) : (
                                <>
                                    <ChevronDown size={12} className="sm:w-3.5 sm:h-3.5" />
                                    <span>All {rightCard.items.length}</span>
                                </>
                            )}
                        </motion.button>
                    )}
                </motion.div>
            </motion.div>
        </LayoutGroup>
    );
}

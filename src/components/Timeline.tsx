
import React, { useEffect, useState, useRef, useCallback } from 'react';

interface TimelineNode {
    id: string;
    title: string;
}

interface TimelineProps {
    nodes: TimelineNode[];
}

export default function Timeline({ nodes }: TimelineProps) {
    const [activeId, setActiveId] = useState<string | null>(nodes[0]?.id || null);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const isAtBottomRef = useRef(false);

    // Reset to first node when nodes change (tab switch)
    useEffect(() => {
        setActiveId(nodes[0]?.id || null);
        isAtBottomRef.current = false;
    }, [nodes]);

    // Memoized function to check if at bottom of page
    const checkIfAtBottom = useCallback(() => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        // Consider "at bottom" if within 150px of the bottom
        return scrollTop + windowHeight >= documentHeight - 150;
    }, []);

    useEffect(() => {
        // Disconnect previous observer
        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        // Track which sections are currently visible
        const visibleSections = new Set<string>();

        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        visibleSections.add(entry.target.id);
                    } else {
                        visibleSections.delete(entry.target.id);
                    }
                });

                // If at bottom of page and last section exists, always activate it
                if (isAtBottomRef.current && nodes.length > 0) {
                    const lastNodeId = nodes[nodes.length - 1].id;
                    const lastEl = document.getElementById(lastNodeId);
                    if (lastEl) {
                        const rect = lastEl.getBoundingClientRect();
                        // If last section is visible at all (even partially)
                        if (rect.top < window.innerHeight && rect.bottom > 0) {
                            setActiveId(lastNodeId);
                            return;
                        }
                    }
                }

                // Otherwise, find the first visible section in DOM order
                if (visibleSections.size > 0) {
                    for (const node of nodes) {
                        if (visibleSections.has(node.id)) {
                            setActiveId(node.id);
                            break;
                        }
                    }
                }
            },
            {
                // Observe when element enters top 40% of viewport
                rootMargin: '-10% 0px -50% 0px',
                threshold: [0, 0.1]
            }
        );

        // Observe all sections
        nodes.forEach((node) => {
            const el = document.getElementById(node.id);
            if (el) observerRef.current?.observe(el);
        });

        // Scroll handler for bottom-of-page detection
        const handleScroll = () => {
            const wasAtBottom = isAtBottomRef.current;
            isAtBottomRef.current = checkIfAtBottom();

            // If we just reached the bottom, activate last node
            if (isAtBottomRef.current && nodes.length > 0) {
                setActiveId(nodes[nodes.length - 1].id);
            }
            // If we scrolled away from bottom, let observer take over
            // by triggering a re-check (the observer callback will run on next intersection change)
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            observerRef.current?.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, [nodes, checkIfAtBottom]);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const top = el.getBoundingClientRect().top + window.pageYOffset - 100;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <div className="sticky h-fit" style={{ top: '50%', transform: 'translateY(-50%)' }}>
            {/* The Rail - Gradient */}
            <div
                className="absolute left-[5px] top-1 bottom-1 w-[2px] gradient-bg-vertical"
            />

            <div className="relative space-y-4">
                {nodes.map((node) => {
                    const isActive = activeId === node.id;
                    return (
                        <button
                            key={node.id}
                            onClick={() => scrollToSection(node.id)}
                            className="flex items-start gap-3 group text-left outline-none w-full"
                        >
                            <div
                                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 relative z-10 flex-shrink-0 mt-0.5 ${isActive ? 'gradient-bg border-transparent' : ''
                                    }`}
                                style={{
                                    backgroundColor: !isActive ? 'var(--color-bg-card)' : undefined,
                                    borderColor: !isActive ? 'var(--color-border)' : 'transparent',
                                    transform: isActive ? 'scale(1.3)' : 'scale(1)',
                                    boxShadow: isActive ? '0 0 8px rgba(139, 92, 246, 0.5)' : 'none'
                                }}
                            />
                            <span
                                className="text-[10px] uppercase tracking-wider leading-tight font-semibold transition-all duration-300"
                                style={{
                                    color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
                                }}
                            >
                                {node.title}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

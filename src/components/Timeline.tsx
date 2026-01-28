
import React, { useEffect, useState, useRef } from 'react';

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

    useEffect(() => {
        // Reset to first node when nodes change (tab switch)
        setActiveId(nodes[0]?.id || null);
    }, [nodes]);

    useEffect(() => {
        // Disconnect previous observer
        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        // Track which sections are currently visible
        const visibleSections = new Map<string, number>();

        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Store the ratio for visible sections
                        visibleSections.set(entry.target.id, entry.intersectionRatio);
                    } else {
                        visibleSections.delete(entry.target.id);
                    }
                });

                // Find the first visible section in DOM order
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
                // Observe when element enters top half of the viewport
                rootMargin: '-10% 0px -50% 0px',
                threshold: [0, 0.1, 0.2]
            }
        );

        // Observe all sections
        nodes.forEach((node) => {
            const el = document.getElementById(node.id);
            if (el) observerRef.current?.observe(el);
        });

        return () => {
            observerRef.current?.disconnect();
        };
    }, [nodes]);

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

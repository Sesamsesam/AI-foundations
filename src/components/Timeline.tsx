
import React, { useEffect, useState } from 'react';

interface TimelineNode {
    id: string;
    title: string;
}

interface TimelineProps {
    nodes: TimelineNode[];
}

export default function Timeline({ nodes }: TimelineProps) {
    const [activeId, setActiveId] = useState<string | null>(nodes[0]?.id || null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntry = entries.find(entry => entry.isIntersecting);
                if (visibleEntry) {
                    setActiveId(visibleEntry.target.id);
                }
            },
            {
                rootMargin: '-20% 0px -70% 0px',
                threshold: 0
            }
        );

        nodes.forEach((node) => {
            const el = document.getElementById(node.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
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
            {/* The Rail */}
            <div
                className="absolute left-[5px] top-1 bottom-1 w-[2px]"
                style={{ backgroundColor: 'var(--color-border)' }}
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
                                className="w-3 h-3 rounded-full border-2 transition-all duration-300 relative z-10 flex-shrink-0 mt-0.5"
                                style={{
                                    backgroundColor: isActive ? 'var(--color-accent)' : 'var(--color-bg-card)',
                                    borderColor: isActive ? 'var(--color-accent)' : 'var(--color-border)',
                                    transform: isActive ? 'scale(1.3)' : 'scale(1)',
                                    boxShadow: isActive ? '0 0 8px var(--color-accent)' : 'none'
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


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
        let isAtBottom = false;

        const observer = new IntersectionObserver(
            (entries) => {
                // Only update from intersection if not at bottom of page
                if (!isAtBottom) {
                    const visibleEntry = entries.find(entry => entry.isIntersecting);
                    if (visibleEntry) {
                        setActiveId(visibleEntry.target.id);
                    }
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

        // Handle scrolled-to-bottom case: activate last node
        const handleScroll = () => {
            const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
            isAtBottom = scrolledToBottom;
            if (scrolledToBottom && nodes.length > 0) {
                setActiveId(nodes[nodes.length - 1].id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial state

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
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

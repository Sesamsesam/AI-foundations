
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

interface TimelineNode {
    id: string;
    title: string;
}

interface TimelineProps {
    nodes: TimelineNode[];
}

export default function Timeline({ nodes }: TimelineProps) {
    const [activeId, setActiveId] = useState<string | null>(nodes[0]?.id || null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Find the entry that's most prominent in the viewport
                const visibleEntry = entries.find(entry => entry.isIntersecting);
                if (visibleEntry) {
                    setActiveId(visibleEntry.target.id);
                }
            },
            {
                rootMargin: '-20% 0px -70% 0px', // Trigger when section hits middle-top
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
        <div className="hidden lg:block sticky top-32 h-fit ml-4">
            {/* The Rail */}
            <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gray-200">
                {/* Fill animation could be added here based on scroll progress */}
            </div>

            <div className="relative space-y-12">
                {nodes.map((node) => {
                    const isActive = activeId === node.id;
                    return (
                        <button
                            key={node.id}
                            onClick={() => scrollToSection(node.id)}
                            className="flex items-center gap-6 group text-left outline-none"
                        >
                            <div
                                className={`w-4 h-4 rounded-full border-2 transition-all duration-300 relative z-10 ${isActive
                                        ? 'bg-blue-600 border-blue-600 scale-125 shadow-[0_0_15px_rgba(37,99,235,0.5)]'
                                        : 'bg-white border-gray-300 group-hover:border-gray-400'
                                    }`}
                            />
                            <span
                                className={`text-sm font-bold transition-all duration-300 ${isActive ? 'text-gray-900 translate-x-1' : 'text-gray-400 group-hover:text-gray-600'
                                    }`}
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

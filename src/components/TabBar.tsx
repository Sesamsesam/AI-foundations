
import React from 'react';
import { motion } from 'framer-motion';

interface Tab {
    id: string;
    label: string;
}

interface TabBarProps {
    tabs: Tab[];
    activeTabId: string;
    onTabChange: (id: string) => void;
}

export default function TabBar({ tabs, activeTabId, onTabChange }: TabBarProps) {
    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <nav
                className="surface-elevated backdrop-blur-2xl p-1.5 rounded-full flex items-center gap-1 overflow-x-auto max-w-[95vw] no-scrollbar"
                style={{ boxShadow: '0 16px 40px rgba(0, 0, 0, 0.12)' }}
            >
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => onTabChange(tab.id)}
                        className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all relative whitespace-nowrap outline-none focus-visible:ring-2"
                        style={{
                            color: activeTabId === tab.id ? 'white' : 'var(--color-text-secondary)',
                        }}
                    >
                        <span className="relative z-10">{tab.label}</span>
                        {activeTabId === tab.id && (
                            <motion.div
                                layoutId="activeTabPill"
                                className="absolute inset-0"
                                style={{
                                    backgroundColor: 'var(--color-accent)',
                                    borderRadius: 9999,
                                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                                }}
                                transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                            />
                        )}
                    </button>
                ))}
            </nav>
        </div>
    );
}

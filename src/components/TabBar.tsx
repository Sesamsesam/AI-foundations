
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
            <nav className="bg-white/80 backdrop-blur-2xl border border-gray-200/50 p-1.5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center gap-1 overflow-x-auto max-w-[95vw] no-scrollbar">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => onTabChange(tab.id)}
                        className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all relative whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 ${activeTabId === tab.id ? 'text-white' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100/80'
                            }`}
                    >
                        <span className="relative z-10">{tab.label}</span>
                        {activeTabId === tab.id && (
                            <motion.div
                                layoutId="activeTabPill"
                                className="absolute inset-0 bg-blue-600 shadow-[0_4px_12px_rgba(37,99,235,0.3)]"
                                style={{ borderRadius: 9999 }}
                                transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                            />
                        )}
                    </button>
                ))}
            </nav>
        </div>
    );
}

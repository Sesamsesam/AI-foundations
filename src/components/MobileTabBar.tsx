import React from 'react';
import { motion } from 'framer-motion';

// Tab configuration with icons and short labels
const TAB_CONFIG: Record<string, { icon: string; shortLabel: string }> = {
    'overview': { icon: '/icons/Color/3d-house.svg', shortLabel: 'Home' },
    'google-setup': { icon: '/icons/Color/1google.svg', shortLabel: 'Setup' },
    'free-courses': { icon: '/icons/Color/aif.svg', shortLabel: 'Learn' },
    'certificates': { icon: '/icons/Color/certificate.1svg.svg', shortLabel: 'Certs' },
    'ai-tools': { icon: '/icons/Color/bot.svg', shortLabel: 'Tools' },
};

interface Tab {
    id: string;
    label: string;
}

interface MobileTabBarProps {
    tabs: Tab[];
    activeTabId: string;
    onTabChange: (id: string) => void;
}

export default function MobileTabBar({ tabs, activeTabId, onTabChange }: MobileTabBarProps) {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
            <nav
                className="surface-elevated backdrop-blur-xl border-t"
                style={{
                    borderColor: 'var(--color-border)',
                    paddingBottom: 'env(safe-area-inset-bottom)',
                }}
            >
                <div className="grid grid-cols-5 gap-1 px-2 py-2">
                    {tabs.map((tab) => {
                        const config = TAB_CONFIG[tab.id];
                        const isActive = activeTabId === tab.id;

                        return (
                            <button
                                key={tab.id}
                                onClick={() => onTabChange(tab.id)}
                                className="flex flex-col items-center justify-center py-2 px-1 rounded-lg transition-colors relative"
                                style={{
                                    backgroundColor: isActive ? 'var(--color-accent-subtle)' : 'transparent',
                                }}
                            >
                                {/* Icon */}
                                <div
                                    className="w-6 h-6 mb-1 flex items-center justify-center"
                                    style={{
                                        filter: isActive ? 'none' : 'grayscale(0.2) opacity(0.85)',
                                    }}
                                >
                                    {config?.icon && (
                                        <img
                                            src={config.icon}
                                            alt={tab.label}
                                            className="w-5 h-5 object-contain"
                                        />
                                    )}
                                </div>

                                {/* Label */}
                                <span
                                    className="text-[10px] font-medium leading-tight"
                                    style={{
                                        color: isActive ? 'var(--color-accent)' : 'var(--color-text-muted)',
                                    }}
                                >
                                    {config?.shortLabel || tab.label}
                                </span>

                                {/* Active indicator dot */}
                                {isActive && (
                                    <motion.div
                                        layoutId="mobileActiveTab"
                                        className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                                        style={{ backgroundColor: 'var(--color-accent)' }}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
}

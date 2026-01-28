import React from 'react';
import { motion } from 'framer-motion';

// Shared tab configuration - single source of truth for icons and labels
export const TAB_CONFIG: Record<string, { icon: string; shortLabel: string }> = {
    'overview': { icon: '/icons/Color/1rocket.svg', shortLabel: 'Home' },
    'google-setup': { icon: '/icons/Color/google-maps.svg', shortLabel: 'Setup' },
    'free-courses': { icon: '/icons/Color/brain (4).svg', shortLabel: 'Learn' },
    'certificates': { icon: '/icons/Color/qua1lity.svg', shortLabel: 'Certs' },
    'ai-tools': { icon: '/icons/Color/bot.svg', shortLabel: 'Tools' },
};

interface Tab {
    id: string;
    label: string;
}

interface UnifiedTabBarProps {
    tabs: Tab[];
    activeTabId: string;
    onTabChange: (id: string) => void;
}

export default function UnifiedTabBar({ tabs, activeTabId, onTabChange }: UnifiedTabBarProps) {
    return (
        <>
            {/* Desktop: Floating pill at bottom center */}
            <div className="hidden md:block fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
                <nav
                    className="surface-elevated backdrop-blur-2xl p-2 rounded-full flex items-center gap-1"
                    style={{ boxShadow: '0 16px 40px rgba(0, 0, 0, 0.15)' }}
                >
                    {tabs.map((tab) => {
                        const config = TAB_CONFIG[tab.id];
                        const isActive = activeTabId === tab.id;

                        return (
                            <button
                                key={tab.id}
                                onClick={() => onTabChange(tab.id)}
                                className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all relative whitespace-nowrap outline-none focus-visible:ring-2"
                                style={{
                                    color: isActive ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                                }}
                            >
                                {/* Background pill for active state */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTabPill"
                                        className="absolute inset-0"
                                        style={{
                                            borderRadius: 9999,
                                            backgroundColor: 'var(--color-accent-subtle)',
                                            boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.15), inset 0 -1px 2px rgba(255, 255, 255, 0.05)',
                                        }}
                                        transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                                    />
                                )}

                                {/* Icon */}
                                <span className="relative z-10 w-5 h-5 flex items-center justify-center">
                                    {config?.icon && (
                                        <img
                                            src={config.icon}
                                            alt=""
                                            className="w-5 h-5 object-contain"
                                        />
                                    )}
                                </span>

                                {/* Label */}
                                <span className="relative z-10">{config?.shortLabel || tab.label}</span>
                            </button>
                        );
                    })}
                </nav>
            </div>

            {/* Mobile: Full-width fixed bottom bar */}
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
                                            className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full gradient-dot"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </nav>
            </div>
        </>
    );
}

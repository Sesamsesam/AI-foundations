
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { content } from '../content';
import Hero from './Hero';
import UnifiedTabBar from './UnifiedTabBar';
import ContentSection from './ContentSection';
import Timeline from './Timeline';
import AnimatedGrid from './AnimatedGrid';
import ThemeToggle from './ThemeToggle';

export default function SamiApp() {
    const [activeTabId, setActiveTabId] = useState(content[0].id);
    const [darkMode, setDarkMode] = useState(true);  // Default to dark mode
    const activeTab = content.find(t => t.id === activeTabId) || content[0];

    useEffect(() => {
        const savedTab = localStorage.getItem('sami_active_tab');
        if (savedTab && content.some(t => t.id === savedTab)) {
            setActiveTabId(savedTab);
        }

        // Check for saved dark mode preference (default to dark)
        const savedDarkMode = localStorage.getItem('sami_dark_mode');
        if (savedDarkMode === 'false') {
            setDarkMode(false);
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('sami_dark_mode', String(darkMode));
    }, [darkMode]);

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.slice(1); // Remove #
            if (!hash) return;

            // Find which tab contains a section with this ID
            const targetTab = content.find(tab =>
                tab.sections.some(section => section.id === hash)
            );

            if (targetTab && targetTab.id !== activeTabId) {
                setActiveTabId(targetTab.id);
                // Wait for tab switch animation then scroll
                setTimeout(() => {
                    const element = document.getElementById(hash);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }, 100);
            } else if (targetTab && targetTab.id === activeTabId) {
                // Already on correct tab, just scroll
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        };

        // Handle initial hash on load
        handleHashChange();

        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, [activeTabId]); // Re-run if activeTabId changes to ensure scroll works

    const handleTabChange = (id: string) => {
        setActiveTabId(id);
        localStorage.setItem('sami_active_tab', id);
        // Clear hash to prevent conflict with hash-based navigation
        if (window.location.hash) {
            history.replaceState(null, '', window.location.pathname);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const hasSections = activeTab.sections.length > 0;

    return (
        <div className="min-h-screen flex flex-col relative pb-24 md:pb-32">
            {/* Animated Grid Background */}
            <AnimatedGrid darkMode={darkMode} />

            {/* Sticky Header - Glassmorphic */}
            <header
                className="sticky top-0 z-50 py-3 px-6 grid grid-cols-3 items-center"
                style={{
                    backgroundColor: darkMode ? 'rgba(10, 10, 10, 0.1)' : 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    borderBottom: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`
                }}
            >
                {/* Logo - Left */}
                <div className="flex items-center gap-3">
                    <img
                        src={darkMode ? "/Logos/Logo_text_light.svg" : "/Logos/Logo_text_dark.svg"}
                        alt="SamiHermes AI"
                        className="h-24 w-auto"
                    />
                </div>

                {/* Dark Mode Toggle - Center */}
                <div className="flex justify-center">
                    <ThemeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
                </div>

                {/* Spacer - Right (for balance) */}
                <div aria-hidden="true" />
            </header>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTabId}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1"
                >
                    {/* Hero Section - Full width */}
                    <Hero
                        title={activeTab.hero.title}
                        subtitle={activeTab.hero.subtitle}
                        videoUrl={activeTab.hero.videoUrl}
                        showSocials={true}
                    />

                    {/* Grid Layout Container - max-width centered */}
                    <div className="max-w-6xl mx-auto w-full px-4 py-12 md:py-20">
                        <div className={`grid gap-8 ${hasSections ? 'lg:grid-cols-[120px_1fr_120px]' : ''}`}>
                            {/* Timeline Sidebar - Left */}
                            {hasSections && (
                                <div className="hidden lg:block w-[120px]">
                                    <Timeline nodes={activeTab.sections.map(s => ({ id: s.id, title: s.sidebarTitle || s.title }))} />
                                </div>
                            )}

                            {/* Main Content */}
                            <div className="min-w-0">
                                {hasSections ? (
                                    activeTab.sections.map((section) => (
                                        <ContentSection key={section.id} section={section} darkMode={darkMode} />
                                    ))
                                ) : (
                                    <div
                                        className="py-20 text-center rounded-3xl border-2 border-dashed"
                                        style={{
                                            backgroundColor: 'var(--color-bg-secondary)',
                                            borderColor: 'var(--color-border)',
                                            color: 'var(--color-text-muted)'
                                        }}
                                    >
                                        <p className="font-medium">Coming soon: Resources for {activeTab.label}</p>
                                    </div>
                                )}
                            </div>

                            {/* Balancing Spacer - Right (Only visible on desktop to ensure centering) */}
                            {hasSections && (
                                <div className="hidden lg:block w-[120px]" aria-hidden="true" />
                            )}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Unified Tab Bar - Desktop floating pill, Mobile bottom bar */}
            <UnifiedTabBar
                tabs={content.map(t => ({ id: t.id, label: t.label }))}
                activeTabId={activeTabId}
                onTabChange={handleTabChange}
            />
        </div>
    );
}


import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { content } from '../content';
import Hero from './Hero';
import TabBar from './TabBar';
import ContentSection from './ContentSection';
import Timeline from './Timeline';

export default function SamiApp() {
    const [activeTabId, setActiveTabId] = useState(content[0].id);
    const [darkMode, setDarkMode] = useState(false);
    const activeTab = content.find(t => t.id === activeTabId) || content[0];

    useEffect(() => {
        const savedTab = localStorage.getItem('sami_active_tab');
        if (savedTab && content.some(t => t.id === savedTab)) {
            setActiveTabId(savedTab);
        }

        // Check for saved dark mode preference (default to light)
        const savedDarkMode = localStorage.getItem('sami_dark_mode');
        if (savedDarkMode === 'true') {
            setDarkMode(true);
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

    const handleTabChange = (id: string) => {
        setActiveTabId(id);
        localStorage.setItem('sami_active_tab', id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const hasSections = activeTab.sections.length > 0;

    return (
        <div className="min-h-screen flex flex-col relative pb-32" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
            {/* Sticky Header */}
            <header
                className="sticky top-0 z-50 backdrop-blur-md py-3 px-6 flex justify-between items-center"
                style={{
                    backgroundColor: darkMode ? 'rgba(10, 10, 10, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                    borderBottom: `1px solid var(--color-border)`
                }}
            >
                <div className="flex items-center gap-3">
                    <img
                        src="/sami_hermes_ai.png"
                        alt="SamiHermes AI"
                        className="h-16 w-auto"
                    />
                </div>

                <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-lg transition-colors"
                    style={{
                        backgroundColor: 'var(--color-bg-secondary)',
                        color: 'var(--color-text-secondary)'
                    }}
                    aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
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
                    />

                    {/* Grid Layout Container - max-width centered */}
                    <div className="max-w-6xl mx-auto w-full px-4 py-12 md:py-20">
                        <div className={`grid gap-8 ${hasSections ? 'lg:grid-cols-[160px_1fr]' : ''}`}>
                            {/* Timeline Sidebar - Part of grid, sticky */}
                            {hasSections && (
                                <div className="hidden lg:block">
                                    <Timeline nodes={activeTab.sections.map(s => ({ id: s.id, title: s.title }))} />
                                </div>
                            )}

                            {/* Main Content */}
                            <div className="min-w-0">
                                {hasSections ? (
                                    activeTab.sections.map((section) => (
                                        <ContentSection key={section.id} section={section} />
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
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Floating Pill Tab Bar */}
            <TabBar
                tabs={content.map(t => ({ id: t.id, label: t.label }))}
                activeTabId={activeTabId}
                onTabChange={handleTabChange}
            />
        </div>
    );
}

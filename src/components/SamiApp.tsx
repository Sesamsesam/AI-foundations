
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { content } from '../content';
import Hero from './Hero';
import TabBar from './TabBar';
import ContentSection from './ContentSection';
import Timeline from './Timeline';

export default function SamiApp() {
    const [activeTabId, setActiveTabId] = useState(content[0].id);
    const activeTab = content.find(t => t.id === activeTabId) || content[0];

    useEffect(() => {
        const savedTab = localStorage.getItem('sami_active_tab');
        if (savedTab && content.some(t => t.id === savedTab)) {
            setActiveTabId(savedTab);
        }
    }, []);

    const handleTabChange = (id: string) => {
        setActiveTabId(id);
        localStorage.setItem('sami_active_tab', id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen flex flex-col relative pb-32">
            {/* Sticky Header */}
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/50 py-4 px-6 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20">S</div>
                    <h1 className="text-xl font-bold text-gray-900 tracking-tight">SamiHermes <span className="text-blue-600">AI</span></h1>
                </div>
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
                    {/* Hero Section */}
                    <Hero
                        title={activeTab.hero.title}
                        subtitle={activeTab.hero.subtitle}
                        videoUrl={activeTab.hero.videoUrl}
                    />

                    {/* Main Content Area with Sidebar Timeline */}
                    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 md:py-24">
                        <div className="flex flex-col lg:flex-row gap-16">
                            {/* Vertical Timeline Rail - Only show if there are sections */}
                            {activeTab.sections.length > 0 && (
                                <div className="lg:w-64 flex-shrink-0">
                                    <Timeline nodes={activeTab.sections.map(s => ({ id: s.id, title: s.title }))} />
                                </div>
                            )}

                            {/* Component Sections */}
                            <div className="flex-1">
                                {activeTab.sections.length > 0 ? (
                                    activeTab.sections.map((section) => (
                                        <ContentSection key={section.id} section={section} />
                                    ))
                                ) : (
                                    <div className="py-20 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                                        <p className="text-gray-400 font-medium">Coming soon: Resources for {activeTab.label}</p>
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


import React, { useState } from 'react';
import type { Section } from '../types';
import Card from './Card';
import CourseCard from './CourseCard';
import MobileCourseCard from './MobileCourseCard';
import { motion, LayoutGroup } from 'framer-motion';
import Tooltip from './Tooltip';

interface SectionProps {
    section: Section;
    darkMode?: boolean;
}

// Card types that should span full width
const FULL_WIDTH_TYPES = ['slideViewer', 'videoEmbed', 'pdfCarousel', 'actionCarousel'];

export default function ContentSection({ section, darkMode = false }: SectionProps) {
    // Track which card is expanded (by ID) - only used for mobile
    const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

    // Check if this is the role-use-cases section
    const isRoleUseCases = section.id === 'role-use-cases';

    // Check if this is a course card section (Learn tab)
    const isCourseSection = section.id === 'google-free' || section.id === 'other-free';

    // Helper to check if a card should be full width
    const isFullWidth = (card: any) => FULL_WIDTH_TYPES.includes(card.type) || card.fullWidth;

    // Toggle expansion for a card (mobile only)
    const toggleCardExpansion = (cardId: string) => {
        setExpandedCardId(prev => prev === cardId ? null : cardId);
    };

    // Render course cards for MOBILE - compact with expansion
    const renderMobileCourseCards = () => {
        return (
            <div className="md:hidden">
                <LayoutGroup>
                    <div className="grid grid-cols-2 gap-3" style={{ alignItems: 'start' }}>
                        {section.cards.map((card, idx) => {
                            const isExpanded = expandedCardId === card.id;

                            return (
                                <motion.div
                                    key={card.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{
                                        opacity: { duration: 0.5, delay: idx * 0.1 },
                                        layout: { type: "spring", stiffness: 300, damping: 30 }
                                    }}
                                    className={isExpanded ? 'col-span-2' : ''}
                                >
                                    <MobileCourseCard
                                        title={card.title || ''}
                                        provider={card.provider || 'Course'}
                                        duration={card.duration}
                                        price={card.price}
                                        url={card.url || '#'}
                                        description={card.content}
                                        thumbnailUrl={card.thumbnailUrl}
                                        level={card.level}
                                        isExpanded={isExpanded}
                                        onToggleExpand={() => toggleCardExpansion(card.id)}
                                    />
                                </motion.div>
                            );
                        })}
                    </div>
                </LayoutGroup>
            </div>
        );
    };

    // Render course cards for DESKTOP - full-featured
    const renderDesktopCourseCards = () => {
        return (
            <div className="hidden md:grid md:grid-cols-2 gap-5" style={{ alignItems: 'stretch' }}>
                {section.cards.map((card, idx) => (
                    <motion.div
                        key={card.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="flex"
                    >
                        <div className="w-full">
                            <CourseCard
                                title={card.title || ''}
                                provider={card.provider || 'Course'}
                                duration={card.duration}
                                price={card.price}
                                url={card.url || '#'}
                                description={card.content}
                                thumbnailUrl={card.thumbnailUrl}
                                level={card.level}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        );
    };

    // Group consecutive non-fullWidth cards together for grid layout
    const renderCards = () => {
        // For course sections, use separate mobile/desktop rendering
        if (isCourseSection) {
            return (
                <>
                    {renderMobileCourseCards()}
                    {renderDesktopCourseCards()}
                </>
            );
        }

        const result: React.ReactNode[] = [];
        let currentGridCards: any[] = [];
        let gridStartIdx = 0;

        const flushGrid = () => {
            if (currentGridCards.length > 0) {
                result.push(
                    <div key={`grid-${gridStartIdx}`} className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6" style={{ alignItems: 'stretch' }}>
                        {currentGridCards.map((card, idx) => {
                            // Single card should span full width
                            const isSingleCard = currentGridCards.length === 1;
                            // Last card in odd-count row should span full width
                            const isLastOddCard = currentGridCards.length > 1 && currentGridCards.length % 2 === 1 && idx === currentGridCards.length - 1;
                            const shouldSpanFull = isSingleCard || isLastOddCard || (card.type === 'alert' && card.alertType === 'important');

                            return (
                                <motion.div
                                    key={card.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className={`flex ${shouldSpanFull ? 'lg:col-span-2' : ''}`}
                                >
                                    <div className="w-full">
                                        <Card card={card} darkMode={darkMode} />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                );
                currentGridCards = [];
            }
        };

        section.cards.forEach((card, idx) => {
            if (isFullWidth(card)) {
                // Flush any accumulated grid cards first
                flushGrid();
                // Render full-width card
                result.push(
                    <motion.div
                        key={card.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-6"
                    >
                        <Card card={card} darkMode={darkMode} />
                    </motion.div>
                );
            } else {
                if (currentGridCards.length === 0) {
                    gridStartIdx = idx;
                }
                currentGridCards.push(card);
            }
        });

        // Flush remaining grid cards
        flushGrid();

        return result;
    };

    return (
        <div
            id={section.id}
            className="py-14 first:pt-0"
            style={{ borderBottom: '1px solid var(--color-border-subtle)' }}
        >
            <div className={`mb-8 ${section.centered ? 'text-center' : ''}`}>
                <h3
                    className="text-2xl font-bold mb-3 flex items-center"
                    style={{ color: 'var(--color-text-primary)' }}
                >
                    {section.title}
                    {isRoleUseCases && (
                        <Tooltip content="When you see the G$ symbol, it means you can use your G$300 of free Google Cloud credits for that feature!" />
                    )}
                </h3>
                {section.intro && (
                    <p
                        className={`text-base whitespace-pre-wrap ${section.centered ? 'mx-auto' : ''}`}
                        style={{
                            color: 'var(--color-text-secondary)',
                            maxWidth: section.centered ? '32rem' : undefined
                        }}
                    >
                        {section.intro.replace(/—/g, ' - ')}
                    </p>
                )}
            </div>

            {renderCards()}
        </div>
    );
}

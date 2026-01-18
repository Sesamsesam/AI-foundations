
import React, { useState } from 'react';
import type { Section } from '../types';
import Card from './Card';
import { motion } from 'framer-motion';

interface SectionProps {
    section: Section;
    darkMode?: boolean;
}

// Card types that should span full width
const FULL_WIDTH_TYPES = ['slideViewer', 'videoEmbed', 'pdfCarousel', 'actionCarousel'];

// Help Indicator Component - Fixed positioning to prevent lift
function HelpIndicator({ tooltip }: { tooltip: string }) {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <span
            className="relative inline-flex items-center justify-center ml-2 cursor-pointer"
            style={{ width: '24px', height: '24px' }}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onClick={() => setShowTooltip(!showTooltip)}
        >
            {/* Main ? button - Gradient */}
            <span
                className="inline-flex items-center justify-center h-6 w-6 rounded-full text-xs font-bold shadow-lg"
                style={{
                    background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
                    color: 'white',
                    boxShadow: '0 0 12px rgba(59, 130, 246, 0.5)',
                }}
            >
                ?
            </span>

            {/* Tooltip */}
            {showTooltip && (
                <div
                    className="surface-elevated absolute z-50 left-8 top-0 w-64 p-3 rounded-lg shadow-lg text-sm"
                    style={{ color: 'var(--color-text-secondary)' }}
                >
                    {tooltip}
                </div>
            )}
        </span>
    );
}


export default function ContentSection({ section, darkMode = false }: SectionProps) {
    // Check if this is the role-use-cases section
    const isRoleUseCases = section.id === 'role-use-cases';

    // Helper to check if a card should be full width
    const isFullWidth = (card: any) => FULL_WIDTH_TYPES.includes(card.type) || card.fullWidth;

    // Group consecutive non-fullWidth cards together for grid layout
    const renderCards = () => {
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
                        <HelpIndicator
                            tooltip="When you see the G$ symbol, it means you can use your G$300 of free Google Cloud credits for that feature!"
                        />
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

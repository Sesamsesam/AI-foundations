
import React from 'react';
import type { Section } from '../types';
import Card from './Card';
import { motion } from 'framer-motion';

interface SectionProps {
    section: Section;
}

// Card types that should span full width
const FULL_WIDTH_TYPES = ['slideViewer', 'videoEmbed', 'pdfCarousel', 'actionCarousel'];

export default function ContentSection({ section }: SectionProps) {
    // Separate full-width cards from regular cards
    const fullWidthCards = section.cards.filter(c => FULL_WIDTH_TYPES.includes(c.type) || c.fullWidth);
    const regularCards = section.cards.filter(c => !FULL_WIDTH_TYPES.includes(c.type) && !c.fullWidth);

    return (
        <div
            id={section.id}
            className="py-14 first:pt-0"
            style={{ borderBottom: '1px solid var(--color-border-subtle)' }}
        >
            <div className={`mb-8 ${section.centered ? 'text-center' : ''}`}>
                <h3
                    className="text-2xl font-bold mb-3"
                    style={{ color: 'var(--color-text-primary)' }}
                >
                    {section.title}
                </h3>
                {section.intro && (
                    <p
                        className={`text-base ${section.centered ? 'mx-auto' : ''}`}
                        style={{
                            color: 'var(--color-text-secondary)',
                            maxWidth: section.centered ? '32rem' : undefined
                        }}
                    >
                        {section.intro.replace(/—/g, ' - ')}
                    </p>
                )}
            </div>

            {/* Full-width cards first */}
            {fullWidthCards.length > 0 && (
                <div className="space-y-6 mb-6">
                    {fullWidthCards.map((card, idx) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <Card card={card} />
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Regular cards in grid with consistent heights */}
            {regularCards.length > 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5" style={{ alignItems: 'stretch' }}>
                    {regularCards.map((card, idx) => {
                        // Single card should span full width
                        const isSingleCard = regularCards.length === 1;
                        // Last card in odd-count row should span full width
                        const isLastOddCard = regularCards.length > 1 && regularCards.length % 2 === 1 && idx === regularCards.length - 1;
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
                                    <Card card={card} />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}


import React from 'react';
import type { Section } from '../types';
import Card from './Card';
import { motion } from 'framer-motion';

interface SectionProps {
    section: Section;
}

export default function ContentSection({ section }: SectionProps) {
    return (
        <div id={section.id} className="py-20 first:pt-0">
            <div className="mb-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{section.title}</h3>
                {section.intro && (
                    <p className="text-lg text-gray-500 max-w-2xl">{section.intro}</p>
                )}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {section.cards.map((card, idx) => (
                    <motion.div
                        key={card.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                    >
                        <Card card={card} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}


import React from 'react';
import type { Card as CardType } from '../types';
import { Check, ExternalLink } from 'lucide-react';

interface CardProps {
    card: CardType;
}

const Card = ({ card }: CardProps) => {
    switch (card.type) {
        case 'callout':
            return (
                <div className="p-8 bg-blue-50/50 border border-blue-100 rounded-3xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Check size={48} className="text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold text-blue-900 mb-3">{card.title}</h4>
                    <p className="text-blue-800/80 leading-relaxed">{card.content}</p>
                </div>
            );
        case 'checklist':
            return (
                <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">{card.title}</h4>
                    <ul className="space-y-4">
                        {card.items?.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <div className="mt-1 bg-green-100 text-green-600 p-1 rounded-full flex-shrink-0">
                                    <Check size={14} />
                                </div>
                                <span className="text-gray-600 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        case 'linksGrid':
            return (
                <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">{card.title}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {card.links?.map((link, i) => (
                            <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 border border-gray-100 transition-colors group"
                            >
                                <span className="font-semibold text-gray-700">{link.label}</span>
                                <ExternalLink size={18} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                            </a>
                        ))}
                    </div>
                </div>
            );
        default:
            return (
                <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{card.content}</p>
                </div>
            );
    }
};

export default Card;

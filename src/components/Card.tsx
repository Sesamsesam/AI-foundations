
import React from 'react';
import type { Card as CardType } from '../types';
import { Check, ExternalLink } from 'lucide-react';
import AlertCard from './AlertCard';
import CourseCard from './CourseCard';
import ToolCard from './ToolCard';
import PDFCarousel from './PDFCarousel';
import VideoEmbed from './VideoEmbed';
import SlideViewer from './SlideViewer';
import ActionCardCarousel from './ActionCardCarousel';
import RoleUseCaseCard from './RoleUseCaseCard';
import CaseStudy from './CaseStudy';

interface CardProps {
    card: CardType;
}

const Card = ({ card }: CardProps) => {
    switch (card.type) {
        case 'alert':
            return (
                <AlertCard
                    type={card.alertType || 'tip'}
                    title={card.title}
                    content={card.content || ''}
                />
            );

        case 'courseCard':
            return (
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
            );

        case 'toolCard':
            return (
                <ToolCard
                    title={card.title || ''}
                    content={card.content || ''}
                    iconPath={card.iconPath}
                    quickStart={card.quickStart}
                    url={card.url}
                    statImage={card.statImage}
                />
            );

        case 'pdfCarousel':
            return (
                <PDFCarousel
                    pdfPaths={card.pdfPaths || []}
                    title={card.title}
                />
            );

        case 'slideViewer':
            return (
                <SlideViewer
                    pdfPath={card.pdfPath || ''}
                    title={card.title}
                />
            );

        case 'videoEmbed':
            return (
                <VideoEmbed
                    videoId={card.videoId || ''}
                    title={card.title}
                />
            );

        case 'actionCarousel':
            return (
                <ActionCardCarousel
                    items={card.actionItems || []}
                    title={card.title}
                />
            );

        case 'roleUseCases':
            return (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {card.roleUseCases?.map((useCase, i) => (
                        <RoleUseCaseCard key={i} useCase={useCase} />
                    ))}
                </div>
            );

        case 'caseStudy':
            return card.caseStudy ? (
                <CaseStudy
                    title={card.caseStudy.title}
                    context={card.caseStudy.context}
                    steps={card.caseStudy.steps}
                    outcome={card.caseStudy.outcome}
                />
            ) : null;

        case 'callout':
            return (
                <div
                    className="p-6 rounded-xl relative overflow-hidden h-full flex flex-col"
                    style={{
                        backgroundColor: 'var(--color-bg-card)',
                        border: '1px solid var(--color-border)',
                        borderLeft: '4px solid var(--color-accent)',
                        minHeight: '120px',
                    }}
                >
                    <h4
                        className="text-lg font-semibold mb-2"
                        style={{ color: 'var(--color-text-primary)' }}
                    >
                        {card.title}
                    </h4>
                    <p
                        className="leading-relaxed"
                        style={{ color: 'var(--color-text-secondary)' }}
                    >
                        {card.content?.replace(/—/g, ' - ')}
                    </p>
                </div>
            );

        case 'checklist':
            // Support both simple items and linked items
            const checklistItems: { label: string; url?: string }[] = card.checklistLinks || card.items?.map(item => ({ label: item })) || [];
            return (
                <div
                    className="p-6 rounded-xl h-full flex flex-col"
                    style={{
                        backgroundColor: 'var(--color-bg-card)',
                        border: '1px solid var(--color-border)',
                        minHeight: '140px',
                    }}
                >
                    <h4
                        className="text-lg font-semibold mb-5"
                        style={{ color: 'var(--color-text-primary)' }}
                    >
                        {card.title}
                    </h4>
                    <ul className="space-y-3">
                        {checklistItems.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <div
                                    className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                                    style={{ backgroundColor: 'var(--color-success)', color: 'white' }}
                                >
                                    <Check size={12} />
                                </div>
                                {item.url ? (
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-medium transition-colors hover:underline"
                                        style={{ color: 'var(--color-accent)' }}
                                    >
                                        {item.label}
                                    </a>
                                ) : (
                                    <span style={{ color: 'var(--color-text-secondary)' }}>
                                        {item.label}
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            );

        case 'linksGrid':
            return (
                <div
                    className="p-6 rounded-xl h-full flex flex-col"
                    style={{
                        backgroundColor: 'var(--color-bg-card)',
                        border: '1px solid var(--color-border)',
                        minHeight: '140px',
                    }}
                >
                    <h4
                        className="text-lg font-semibold mb-5"
                        style={{ color: 'var(--color-text-primary)' }}
                    >
                        {card.title}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {card.links?.map((link, i) => (
                            <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col p-4 rounded-lg transition-colors group"
                                style={{
                                    backgroundColor: 'var(--color-bg-secondary)',
                                    border: '1px solid var(--color-border-subtle)',
                                }}
                            >
                                <div className="flex items-center justify-between mb-1">
                                    <span
                                        className="font-medium"
                                        style={{ color: 'var(--color-text-primary)' }}
                                    >
                                        {link.label}
                                    </span>
                                    <ExternalLink
                                        size={16}
                                        style={{ color: 'var(--color-text-muted)' }}
                                    />
                                </div>
                                {link.description && (
                                    <span
                                        className="text-sm line-clamp-2"
                                        style={{ color: 'var(--color-text-muted)' }}
                                    >
                                        {link.description}
                                    </span>
                                )}
                            </a>
                        ))}
                    </div>
                </div>
            );

        default:
            return (
                <div
                    className="p-6 rounded-xl"
                    style={{
                        backgroundColor: 'var(--color-bg-card)',
                        border: '1px solid var(--color-border)',
                    }}
                >
                    <h4
                        className="text-lg font-semibold mb-3"
                        style={{ color: 'var(--color-text-primary)' }}
                    >
                        {card.title}
                    </h4>
                    <p
                        className="leading-relaxed"
                        style={{ color: 'var(--color-text-secondary)' }}
                    >
                        {card.content?.replace(/—/g, ' - ')}
                    </p>
                </div>
            );
    }
};

export default Card;

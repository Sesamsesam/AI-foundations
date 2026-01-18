import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import GDollarBadge from './GDollarBadge';

interface ToolCardProps {
    title: string;
    content: string;
    iconPath?: string;
    faviconPath?: string;
    quickStart?: string;
    url?: string;
    statImage?: string;
    detailedContent?: string;
    usesCredits?: boolean;
}

export default function ToolCard({ title, content, iconPath, faviconPath, quickStart, url, statImage, detailedContent, usesCredits }: ToolCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    // Check if expandable content is available
    const hasExpandableContent = detailedContent && detailedContent.trim().length > 0;

    return (
        <div className="surface-card rounded-xl overflow-hidden flex flex-col h-full">
            <div className="p-5 flex-1 flex flex-col">
                {/* Header with Favicon */}
                <div className="flex items-start gap-3 mb-4">
                    {faviconPath && (
                        <img
                            src={faviconPath}
                            alt=""
                            className="w-8 h-8 rounded flex-shrink-0"
                            style={{ objectFit: 'contain' }}
                        />
                    )}
                    <div className="flex-1 min-w-0">
                        <h4
                            className="font-semibold text-lg flex items-center gap-2"
                            style={{ color: 'var(--color-text-primary)' }}
                        >
                            {title}
                            {usesCredits && <GDollarBadge />}
                        </h4>
                    </div>
                </div>

                {/* Short Description (always visible) */}
                <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--color-text-secondary)' }}
                >
                    {content.replace(/—/g, ' - ')}
                </p>

                {/* Expandable Detailed Content */}
                {hasExpandableContent && (
                    <>
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="flex items-center gap-1 text-xs font-medium mt-3 transition-colors hover:opacity-80"
                            style={{ color: 'var(--color-accent)' }}
                        >
                            {isExpanded ? 'Show less' : 'Learn more about how I use it'}
                            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </button>

                        {isExpanded && (
                            <div
                                className="mt-4 pt-4 text-sm leading-relaxed space-y-3"
                                style={{
                                    borderTop: '1px solid var(--color-border)',
                                    color: 'var(--color-text-secondary)',
                                }}
                            >
                                {/* Custom icon at top of expanded content */}
                                {iconPath && (
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                        style={{ backgroundColor: 'var(--color-bg-secondary)' }}
                                    >
                                        <img
                                            src={iconPath}
                                            alt=""
                                            className="w-6 h-6"
                                            style={{ filter: 'var(--icon-filter, none)' }}
                                        />
                                    </div>
                                )}
                                {/* Split by double newlines for paragraph breaks */}
                                {detailedContent.split('\n\n').map((paragraph, i) => (
                                    <p key={i} className="whitespace-pre-wrap">
                                        {paragraph.trim()}
                                    </p>
                                ))}
                            </div>
                        )}
                    </>
                )}

                {/* Stat image */}
                {statImage && (
                    <div className="mt-4">
                        <img
                            src={statImage}
                            alt={`${title} stats`}
                            className="w-full rounded-lg"
                            style={{ border: '1px solid var(--color-border)' }}
                        />
                    </div>
                )}

                {/* Quick start */}
                {quickStart && (
                    <div
                        className="mt-4 p-3 rounded-lg"
                        style={{ backgroundColor: 'var(--color-bg-secondary)' }}
                    >
                        <p
                            className="text-xs font-medium mb-1"
                            style={{ color: 'var(--color-text-muted)' }}
                        >
                            Quick Start
                        </p>
                        <code
                            className="text-sm"
                            style={{ color: 'var(--color-text-primary)' }}
                        >
                            {quickStart}
                        </code>
                    </div>
                )}

                {/* Action */}
                {url && (
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 flex items-center gap-2 text-sm font-medium transition-colors"
                        style={{ color: 'var(--color-accent)' }}
                    >
                        Get Started
                        <ExternalLink size={14} />
                    </a>
                )}
            </div>
        </div>
    );
}

import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

interface ToolCardProps {
    title: string;
    content: string;
    iconPath?: string;
    quickStart?: string;
    url?: string;
    statImage?: string;
}

export default function ToolCard({ title, content, iconPath, quickStart, url, statImage }: ToolCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className="rounded-xl overflow-hidden flex flex-col h-full"
            style={{
                backgroundColor: 'var(--color-bg-card)',
                border: '1px solid var(--color-border)',
            }}
        >
            <div className="p-5 flex-1 flex flex-col">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                    {iconPath && (
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
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
                    <div className="flex-1 min-w-0">
                        <h4
                            className="font-semibold text-lg mb-1"
                            style={{ color: 'var(--color-text-primary)' }}
                        >
                            {title}
                        </h4>
                    </div>
                </div>

                {/* Description */}
                <p
                    className={`text-sm leading-relaxed flex-1 ${!isExpanded && content.length > 150 ? 'line-clamp-3' : ''}`}
                    style={{ color: 'var(--color-text-secondary)' }}
                >
                    {content.replace(/—/g, ' - ')}
                </p>

                {content.length > 150 && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center gap-1 text-xs font-medium mt-2 transition-colors"
                        style={{ color: 'var(--color-accent)' }}
                    >
                        {isExpanded ? 'Show less' : 'Read more'}
                        {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                    </button>
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

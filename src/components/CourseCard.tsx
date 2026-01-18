import React, { useState } from 'react';
import { ExternalLink, Clock, ChevronDown, ChevronUp } from 'lucide-react';

interface CourseCardProps {
    title: string;
    provider: string;
    duration?: string;
    price?: string;
    url: string;
    description?: string;
    thumbnailUrl?: string;
    level?: 'beginner' | 'intermediate' | 'advanced';
}

export default function CourseCard({
    title,
    provider,
    duration,
    price,
    url,
    description,
    thumbnailUrl,
    level
}: CourseCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const levelColors = {
        beginner: 'var(--color-success)',
        intermediate: 'var(--color-warning)',
        advanced: 'var(--color-error)',
    };

    return (
        <div className="surface-card rounded-xl overflow-hidden flex flex-col h-full">
            {/* Thumbnail */}
            {thumbnailUrl && (
                <div
                    className="aspect-video bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${thumbnailUrl})`,
                        backgroundColor: 'var(--color-bg-secondary)'
                    }}
                />
            )}

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col">
                {/* Header with badges */}
                <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex-1 min-w-0">
                        <p
                            className="text-xs font-medium uppercase tracking-wide mb-1"
                            style={{ color: 'var(--color-accent)' }}
                        >
                            {provider}
                        </p>
                        <h4
                            className="font-semibold leading-tight"
                            style={{ color: 'var(--color-text-primary)' }}
                        >
                            {title}
                        </h4>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-col items-end gap-1 flex-shrink-0">
                        {price && (
                            <span
                                className="text-xs font-medium px-2 py-1 rounded"
                                style={{
                                    backgroundColor: 'var(--color-accent-subtle)',
                                    color: 'var(--color-accent-text)'
                                }}
                            >
                                {price}
                            </span>
                        )}
                        {level && (
                            <span
                                className="text-xs font-medium px-2 py-1 rounded"
                                style={{
                                    backgroundColor: 'var(--color-bg-secondary)',
                                    color: levelColors[level]
                                }}
                            >
                                {level.charAt(0).toUpperCase() + level.slice(1)}
                            </span>
                        )}
                    </div>
                </div>

                {/* Duration */}
                {duration && (
                    <div
                        className="flex items-center gap-1 text-sm mb-3"
                        style={{ color: 'var(--color-text-muted)' }}
                    >
                        <Clock size={14} />
                        <span>{duration}</span>
                    </div>
                )}

                {/* Description - truncated with expand */}
                {description && (
                    <div className="flex-1">
                        <p
                            className={`text-sm leading-relaxed ${!isExpanded ? 'line-clamp-3' : ''}`}
                            style={{ color: 'var(--color-text-secondary)' }}
                        >
                            {description.replace(/—/g, ' - ')}
                        </p>
                        {description.length > 150 && (
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="flex items-center gap-1 text-xs font-medium mt-2 transition-colors"
                                style={{ color: 'var(--color-accent)' }}
                            >
                                {isExpanded ? 'Show less' : 'Read more'}
                                {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                            </button>
                        )}
                    </div>
                )}

                {/* Action */}
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm transition-all hover:opacity-90"
                    style={{
                        backgroundColor: 'var(--color-accent)',
                        color: 'white'
                    }}
                >
                    Start Course
                    <ExternalLink size={14} />
                </a>
            </div>
        </div>
    );
}

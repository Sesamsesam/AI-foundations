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
    iconPath?: string;
}

/**
 * Desktop Course Card - Full-featured card with description visible
 * Used on md+ viewports
 */
export default function CourseCard({
    title,
    provider,
    duration,
    price,
    url,
    description,
    thumbnailUrl,
    level,
    iconPath
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
                {/* Header with icon and metadata */}
                <div className="flex items-start gap-2.5 mb-3">
                    {/* Course icon */}
                    {iconPath && (
                        <img
                            src={iconPath}
                            alt=""
                            className="w-7 h-7 flex-shrink-0 mt-0.5"
                        />
                    )}
                    <div className="flex-1 min-w-0">
                        <h4
                            className="font-semibold leading-tight mb-1"
                            style={{ color: 'var(--color-text-primary)' }}
                        >
                            {title}
                        </h4>
                        {/* Consolidated metadata line with dot dividers */}
                        <p
                            className="text-xs font-medium"
                            style={{ color: 'var(--color-text-muted)' }}
                        >
                            <span style={{ color: 'var(--color-accent)' }}>{provider}</span>
                            {duration && (
                                <>
                                    <span className="mx-1.5 opacity-50">•</span>
                                    <span>{duration}</span>
                                </>
                            )}
                            {level && (
                                <>
                                    <span className="mx-1.5 opacity-50">•</span>
                                    <span style={{ color: levelColors[level] }}>
                                        {level.charAt(0).toUpperCase() + level.slice(1)}
                                    </span>
                                </>
                            )}
                            {price && (
                                <>
                                    <span className="mx-1.5 opacity-50">•</span>
                                    <span style={{ color: 'var(--color-accent-text)' }}>{price}</span>
                                </>
                            )}
                        </p>
                    </div>
                </div>

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
                    className="mt-4 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm transition-all hover:opacity-90 gradient-bg"
                    style={{ color: 'white' }}
                >
                    Start Course
                    <ExternalLink size={14} />
                </a>
            </div>
        </div>
    );
}

import React from 'react';

interface AlertCardProps {
    type: 'tip' | 'warning' | 'important';
    title?: string;
    content: string;
}

export default function AlertCard({ type, title, content }: AlertCardProps) {
    const borderColors = {
        tip: 'var(--color-success)',
        warning: 'var(--color-warning)',
        important: 'var(--color-accent)',
    };

    const icons = {
        tip: '💡',
        warning: '⚠️',
        important: '📌',
    };

    return (
        <div
            className="surface-accent p-6 rounded-xl h-full"
            style={{ borderLeft: `4px solid ${borderColors[type]}` }}
        >
            <div className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0">{icons[type]}</span>
                <div className="flex-1 min-w-0">
                    {title && (
                        <h4
                            className="font-semibold mb-2 text-lg"
                            style={{ color: 'var(--color-text-primary)' }}
                        >
                            {title}
                        </h4>
                    )}
                    <p
                        className="leading-relaxed"
                        style={{ color: 'var(--color-text-secondary)' }}
                    >
                        {/* Replace em-dashes with regular dashes and render G$ in blue */}
                        {content.replace(/—/g, ' - ').split(/(G\$)/g).map((part, i) =>
                            part === 'G$' ? (
                                <span key={i} style={{ color: 'var(--color-accent)', fontWeight: 600 }}>G$</span>
                            ) : (
                                part
                            )
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
}

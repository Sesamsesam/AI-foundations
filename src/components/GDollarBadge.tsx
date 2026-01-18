import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface GDollarBadgeProps {
    className?: string;
}

export default function GDollarBadge({ className = '' }: GDollarBadgeProps) {
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
    const badgeRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (showTooltip && badgeRef.current) {
            const rect = badgeRef.current.getBoundingClientRect();
            setTooltipPosition({
                top: rect.top - 8, // Position above the badge
                left: rect.left + rect.width / 2, // Center horizontally
            });
        }
    }, [showTooltip]);

    return (
        <>
            <span
                ref={badgeRef}
                className={`font-bold cursor-help ${className}`}
                style={{ color: '#3B82F6' }}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                G$
            </span>
            {showTooltip && typeof document !== 'undefined' && createPortal(
                <div
                    className="fixed z-[9999] px-3 py-2 rounded-lg shadow-xl text-sm whitespace-nowrap pointer-events-none"
                    style={{
                        top: tooltipPosition.top,
                        left: tooltipPosition.left,
                        transform: 'translate(-50%, -100%)',
                        backgroundColor: 'var(--color-bg-card)',
                        border: '1px solid var(--color-border)',
                        color: 'var(--color-text-secondary)',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    }}
                >
                    You can use your $300 free Google Cloud credit for this tool.
                </div>,
                document.body
            )}
        </>
    );
}

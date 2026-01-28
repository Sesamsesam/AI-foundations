import React, { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

interface GDollarBadgeProps {
    className?: string;
}

export default function GDollarBadge({ className = '' }: GDollarBadgeProps) {
    const [showTooltip, setShowTooltip] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
    const badgeRef = useRef<HTMLSpanElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);

    const calculatePosition = useCallback(() => {
        if (badgeRef.current) {
            const rect = badgeRef.current.getBoundingClientRect();
            const tooltipWidth = 280; // max-width of tooltip
            const padding = 12; // viewport padding

            let left = rect.left + rect.width / 2;

            // Prevent overflow on left edge
            if (left - tooltipWidth / 2 < padding) {
                left = padding + tooltipWidth / 2;
            }
            // Prevent overflow on right edge
            if (left + tooltipWidth / 2 > window.innerWidth - padding) {
                left = window.innerWidth - padding - tooltipWidth / 2;
            }

            setTooltipPosition({
                top: rect.top - 8,
                left: left,
            });
        }
    }, []);

    useEffect(() => {
        if (showTooltip) {
            calculatePosition();
        }
    }, [showTooltip, calculatePosition]);

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        // On touch devices, use the mobile bottom sheet
        if ('ontouchstart' in window) {
            setMobileOpen(true);
        }
    };

    return (
        <>
            <span
                ref={badgeRef}
                className={`font-bold cursor-help ${className}`}
                style={{ color: '#3B82F6' }}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                onClick={handleClick}
            >
                G$
            </span>

            {/* Desktop tooltip - with viewport boundary detection */}
            {showTooltip && typeof document !== 'undefined' && createPortal(
                <div
                    ref={tooltipRef}
                    className="fixed z-[9999] px-4 py-3 rounded-lg shadow-xl text-sm pointer-events-none hidden md:block"
                    style={{
                        top: tooltipPosition.top,
                        left: tooltipPosition.left,
                        transform: 'translate(-50%, -100%)',
                        backgroundColor: 'var(--color-bg-card)',
                        border: '1px solid var(--color-border)',
                        color: 'var(--color-text-secondary)',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                        maxWidth: '280px',
                        lineHeight: '1.5',
                    }}
                >
                    You can use your $300 free<br />Google Cloud credit for this tool.
                </div>,
                document.body
            )}

            {/* Mobile bottom sheet */}
            {mobileOpen && typeof document !== 'undefined' && createPortal(
                <div
                    className="fixed inset-0 z-[9999] flex items-end justify-center md:hidden"
                    onClick={() => setMobileOpen(false)}
                >
                    <div className="absolute inset-0 bg-black/50" />
                    <div
                        className="relative z-10 w-full max-w-md mx-4 mb-6 p-5 rounded-2xl shadow-2xl border border-white/10"
                        style={{ backgroundColor: 'var(--color-bg-card)' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-text-primary)' }}>
                            You can use your $300 free Google Cloud credit for this tool.
                        </p>
                        <button
                            className="w-full py-2.5 rounded-xl font-medium text-sm"
                            style={{
                                backgroundColor: 'var(--color-bg-secondary)',
                                color: 'var(--color-text-primary)',
                            }}
                            onClick={() => setMobileOpen(false)}
                        >
                            Got it
                        </button>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}


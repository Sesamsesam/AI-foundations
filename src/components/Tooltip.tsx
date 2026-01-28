import React, { useState } from 'react';

interface TooltipProps {
    content: string;
}

/**
 * Reusable Tooltip Component
 * - Desktop: CSS hover (no JS state)
 * - Mobile: Click toggle with bottom card
 */
export default function Tooltip({ content }: TooltipProps) {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            {/* Desktop: CSS-only hover */}
            <span className="hidden md:inline-block relative group ml-2">
                <span
                    className="inline-flex items-center justify-center h-6 w-6 rounded-full text-xs font-bold shadow-lg cursor-help transition-transform hover:scale-110 gradient-bg"
                    style={{
                        color: 'white',
                        boxShadow: '0 0 12px rgba(139, 92, 246, 0.5)',
                    }}
                >
                    ?
                </span>
                <span
                    className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-150 absolute z-50 right-0 top-full mt-2 w-72 max-w-[calc(100vw-2rem)] p-3 rounded-lg shadow-xl text-sm font-medium leading-relaxed border border-white/10"
                    style={{
                        backgroundColor: 'var(--color-bg-card)',
                        color: 'var(--color-text-primary)',
                    }}
                >
                    {content}
                </span>
            </span>

            {/* Mobile: Click toggle */}
            <span className="md:hidden inline-block relative ml-2">
                <span
                    className="inline-flex items-center justify-center h-6 w-6 rounded-full text-xs font-bold shadow-lg cursor-pointer active:scale-95 transition-transform gradient-bg"
                    style={{
                        color: 'white',
                        boxShadow: '0 0 12px rgba(139, 92, 246, 0.5)',
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                        setMobileOpen(true);
                    }}
                >
                    ?
                </span>

                {mobileOpen && (
                    <div
                        className="fixed inset-0 z-[9999] flex items-end justify-center"
                        onClick={() => setMobileOpen(false)}
                    >
                        <div className="absolute inset-0 bg-black/50" />
                        <div
                            className="relative z-10 w-full max-w-md mx-4 mb-6 p-5 rounded-2xl shadow-2xl border border-white/10"
                            style={{ backgroundColor: 'var(--color-bg-card)' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-text-primary)' }}>
                                {content}
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
                    </div>
                )}
            </span>
        </>
    );
}

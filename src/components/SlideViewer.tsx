import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Download, Maximize2, Minimize2 } from 'lucide-react';

interface SlideViewerProps {
    pdfPath: string;
    title?: string;
}

export default function SlideViewer({ pdfPath, title }: SlideViewerProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const pdfName = pdfPath.split('/').pop()?.replace('.pdf', '').replace(/_/g, ' ').replace(/^\d+\.\s*/, '') || 'Presentation';

    // Navigate slides by sending keyboard events to iframe
    const navigate = useCallback((direction: 'prev' | 'next') => {
        if (iframeRef.current) {
            iframeRef.current.focus();
            // Dispatch keyboard event
            const keyCode = direction === 'prev' ? 37 : 39; // Left or Right arrow
            const event = new KeyboardEvent('keydown', {
                key: direction === 'prev' ? 'ArrowLeft' : 'ArrowRight',
                keyCode: keyCode,
                code: direction === 'prev' ? 'ArrowLeft' : 'ArrowRight',
                bubbles: true,
            });
            iframeRef.current.contentWindow?.document.dispatchEvent(event);
        }
    }, []);

    // Keyboard navigation for expanded mode
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (isExpanded && e.key === 'Escape') {
            setIsExpanded(false);
        }
    }, [isExpanded]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    // Block wheel scroll on container but allow clicking
    const handleWheel = (e: React.WheelEvent) => {
        e.preventDefault();
        e.stopPropagation();
    };

    // Focus iframe when clicking container
    const handleContainerClick = () => {
        if (iframeRef.current) {
            iframeRef.current.focus();
        }
    };

    return (
        <>
            <div
                className={`rounded-xl overflow-hidden ${isExpanded ? 'fixed inset-4 z-50 flex flex-col' : ''}`}
                style={{
                    backgroundColor: 'var(--color-bg-card)',
                    border: '1px solid var(--color-border)',
                }}
            >
                {/* Header with title and controls */}
                <div
                    className="flex items-center justify-between px-4 py-3"
                    style={{
                        borderBottom: '1px solid var(--color-border)',
                        backgroundColor: 'var(--color-bg-secondary)'
                    }}
                >
                    {/* Navigation + Title */}
                    <div className="flex items-center gap-3">
                        {/* Prev button */}
                        <button
                            onClick={() => navigate('prev')}
                            className="p-2 rounded-lg transition-colors hover:opacity-70"
                            style={{
                                backgroundColor: 'var(--color-bg-card)',
                                border: '1px solid var(--color-border)',
                                color: 'var(--color-text-secondary)'
                            }}
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={18} />
                        </button>

                        {/* Next button */}
                        <button
                            onClick={() => navigate('next')}
                            className="p-2 rounded-lg transition-colors hover:opacity-70"
                            style={{
                                backgroundColor: 'var(--color-bg-card)',
                                border: '1px solid var(--color-border)',
                                color: 'var(--color-text-secondary)'
                            }}
                            aria-label="Next slide"
                        >
                            <ChevronRight size={18} />
                        </button>

                        {/* Title */}
                        <div className="ml-2">
                            {title && (
                                <h4
                                    className="font-semibold text-sm"
                                    style={{ color: 'var(--color-text-primary)' }}
                                >
                                    {title}
                                </h4>
                            )}
                            <p
                                className="text-xs"
                                style={{ color: 'var(--color-text-muted)' }}
                            >
                                {pdfName}
                            </p>
                        </div>
                    </div>

                    {/* Right controls */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="p-2 rounded-lg transition-colors hover:opacity-70"
                            style={{ color: 'var(--color-text-secondary)' }}
                            aria-label={isExpanded ? 'Exit fullscreen' : 'Fullscreen'}
                        >
                            {isExpanded ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                        </button>

                        <a
                            href={pdfPath}
                            download
                            className="p-2 rounded-lg transition-colors hover:opacity-70"
                            style={{ color: 'var(--color-text-secondary)' }}
                            aria-label="Download PDF"
                        >
                            <Download size={18} />
                        </a>
                    </div>
                </div>

                {/* PDF Viewer Container */}
                <div
                    ref={containerRef}
                    className={`relative ${isExpanded ? 'flex-1' : 'aspect-[16/9]'}`}
                    style={{
                        backgroundColor: 'var(--color-bg-secondary)',
                        overflow: 'hidden',
                    }}
                    onClick={handleContainerClick}
                    onWheel={handleWheel}
                >
                    {/* PDF iframe - scaled to hide browser chrome/borders */}
                    <iframe
                        ref={iframeRef}
                        src={`${pdfPath}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                        className="slide-iframe"
                        title={pdfName}
                        tabIndex={0}
                        style={{
                            border: 'none',
                            position: 'absolute',
                            top: '-3%',
                            left: '-2%',
                            width: '104%',
                            height: '106%',
                        }}
                    />
                </div>

                {/* Footer tip */}
                <div
                    className="px-4 py-2 text-center"
                    style={{
                        backgroundColor: 'var(--color-bg-secondary)',
                        borderTop: '1px solid var(--color-border)'
                    }}
                >
                    <p
                        className="text-xs"
                        style={{ color: 'var(--color-text-muted)' }}
                    >
                        Use buttons or click inside and press ← → arrow keys
                    </p>
                </div>
            </div>

            {/* Backdrop for expanded mode */}
            {isExpanded && (
                <div
                    className="fixed inset-0 z-40"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
                    onClick={() => setIsExpanded(false)}
                />
            )}
        </>
    );
}

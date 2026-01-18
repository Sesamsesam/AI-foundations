import React, { useState, useCallback, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Download, Maximize2, Minimize2 } from 'lucide-react';

interface SlideViewerProps {
    pdfPath: string;
    title?: string;
}

// Dynamic import types
type DocumentType = typeof import('react-pdf').Document;
type PageType = typeof import('react-pdf').Page;

export default function SlideViewer({ pdfPath, title }: SlideViewerProps) {
    const [isClient, setIsClient] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [containerWidth, setContainerWidth] = useState<number | null>(null);
    const [PdfComponents, setPdfComponents] = useState<{ Document: DocumentType; Page: PageType } | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const pdfName = pdfPath.split('/').pop()?.replace('.pdf', '').replace(/_/g, ' ').replace(/^\d+\.\s*/, '') || 'Presentation';

    // Load react-pdf on client only
    useEffect(() => {
        setIsClient(true);
        import('react-pdf').then((mod) => {
            // Configure worker
            mod.pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${mod.pdfjs.version}/build/pdf.worker.min.mjs`;
            setPdfComponents({ Document: mod.Document, Page: mod.Page });
        });
    }, []);

    // Handle document load success
    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
        setPageNumber(1);
    };

    // Navigation functions
    const goToPrevPage = useCallback(() => {
        setPageNumber(prev => Math.max(prev - 1, 1));
    }, []);

    const goToNextPage = useCallback(() => {
        setPageNumber(prev => Math.min(prev + 1, numPages || prev));
    }, [numPages]);

    // Keyboard navigation
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape' && isExpanded) {
            setIsExpanded(false);
        } else if (e.key === 'ArrowLeft') {
            goToPrevPage();
        } else if (e.key === 'ArrowRight') {
            goToNextPage();
        }
    }, [isExpanded, goToPrevPage, goToNextPage]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    // Measure container width for responsive scaling
    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
        };
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, [isExpanded]);

    return (
        <>
            <div
                className={`rounded-xl overflow-hidden ${isExpanded ? 'surface-overlay fixed inset-4 z-50 flex flex-col' : 'surface-card'}`}
            >
                {/* Header with title and controls */}
                <div
                    className="surface-secondary flex items-center justify-between px-4 py-3"
                    style={{ borderBottom: '1px solid var(--color-border)' }}
                >
                    {/* Navigation + Title */}
                    <div className="flex items-center gap-3">
                        {/* Prev button */}
                        <button
                            onClick={goToPrevPage}
                            disabled={pageNumber <= 1}
                            className="surface-button p-2 rounded-lg transition-colors hover:opacity-70 disabled:opacity-30 disabled:cursor-not-allowed"
                            style={{ color: 'var(--color-text-secondary)' }}
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={18} />
                        </button>

                        {/* Next button */}
                        <button
                            onClick={goToNextPage}
                            disabled={pageNumber >= (numPages || 1)}
                            className="surface-button p-2 rounded-lg transition-colors hover:opacity-70 disabled:opacity-30 disabled:cursor-not-allowed"
                            style={{ color: 'var(--color-text-secondary)' }}
                            aria-label="Next slide"
                        >
                            <ChevronRight size={18} />
                        </button>

                        {/* Title and page counter */}
                        <div className="flex flex-col">
                            <span
                                className="font-semibold text-base leading-tight"
                                style={{ color: 'var(--color-text-primary)' }}
                            >
                                {title || pdfName}
                            </span>
                            {numPages && (
                                <span
                                    className="text-xs"
                                    style={{ color: 'var(--color-text-muted)' }}
                                >
                                    Slide {pageNumber} of {numPages}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="p-2 rounded-lg transition-colors hover:opacity-70"
                            style={{ color: 'var(--color-text-secondary)' }}
                            aria-label={isExpanded ? "Exit fullscreen" : "Fullscreen"}
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
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {!isClient || !PdfComponents ? (
                        // Loading state / SSR fallback
                        <div
                            className="flex items-center justify-center h-full"
                            style={{ color: 'var(--color-text-muted)' }}
                        >
                            Loading presentation...
                        </div>
                    ) : (
                        // Client-side PDF rendering - pre-render adjacent pages to avoid flash
                        <PdfComponents.Document
                            file={pdfPath}
                            onLoadSuccess={onDocumentLoadSuccess}
                            loading={
                                <div
                                    className="flex items-center justify-center h-full"
                                    style={{ color: 'var(--color-text-muted)' }}
                                >
                                    Loading presentation...
                                </div>
                            }
                            error={
                                <div
                                    className="flex items-center justify-center h-full text-red-400"
                                >
                                    Failed to load PDF
                                </div>
                            }
                        >
                            {/* Pre-render prev, current, and next pages to eliminate flash */}
                            {[pageNumber - 1, pageNumber, pageNumber + 1]
                                .filter(p => p >= 1 && p <= (numPages || 1))
                                .map(p => (
                                    <div
                                        key={p}
                                        style={{
                                            display: p === pageNumber ? 'block' : 'none',
                                            position: p === pageNumber ? 'relative' : 'absolute',
                                        }}
                                    >
                                        <PdfComponents.Page
                                            pageNumber={p}
                                            width={containerWidth ? containerWidth - 32 : undefined}
                                            renderTextLayer={false}
                                            renderAnnotationLayer={false}
                                        />
                                    </div>
                                ))
                            }
                        </PdfComponents.Document>
                    )}
                </div>

                {/* Footer tip */}
                <div
                    className="surface-secondary px-4 py-2 text-center"
                    style={{ borderTop: '1px solid var(--color-border)' }}
                >
                    <span
                        className="text-xs"
                        style={{ color: 'var(--color-text-muted)' }}
                    >
                        Use ← → arrow keys to navigate • Click buttons or tap sides
                    </span>
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

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';

interface PDFCarouselProps {
    pdfPaths: string[];
    title?: string;
}

export default function PDFCarousel({ pdfPaths, title }: PDFCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? pdfPaths.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === pdfPaths.length - 1 ? 0 : prev + 1));
    };

    const currentPdf = pdfPaths[currentIndex];
    const pdfName = currentPdf.split('/').pop()?.replace('.pdf', '').replace(/_/g, ' ') || 'Slide';

    return (
        <div className="surface-card rounded-2xl overflow-hidden shadow-sm">
            {title && (
                <div
                    className="px-6 py-4"
                    style={{ borderBottom: '1px solid var(--color-border)' }}
                >
                    <h4 className="font-bold" style={{ color: 'var(--color-text-primary)' }}>{title}</h4>
                </div>
            )}

            {/* PDF Viewer - pre-load all iframes to eliminate flash */}
            <div
                className="relative aspect-[16/10]"
                style={{ backgroundColor: 'var(--color-bg-secondary)' }}
            >
                {pdfPaths.map((pdf, index) => (
                    <iframe
                        key={pdf}
                        src={`${pdf}#view=FitH`}
                        className="absolute inset-0 w-full h-full"
                        style={{
                            visibility: index === currentIndex ? 'visible' : 'hidden',
                            zIndex: index === currentIndex ? 1 : 0,
                        }}
                        title={pdf.split('/').pop()?.replace('.pdf', '').replace(/_/g, ' ') || 'Slide'}
                    />
                ))}
            </div>

            {/* Navigation */}
            <div
                className="flex items-center justify-between px-6 py-4"
                style={{ backgroundColor: 'var(--color-bg-secondary)' }}
            >
                <button
                    onClick={goToPrev}
                    className="surface-button p-2 rounded-full transition-colors hover:opacity-70"
                    style={{ color: 'var(--color-text-secondary)' }}
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex flex-col items-center gap-1">
                    <span
                        className="text-sm font-medium text-center max-w-xs truncate"
                        style={{ color: 'var(--color-text-primary)' }}
                    >
                        {pdfName}
                    </span>
                    <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                        {currentIndex + 1} of {pdfPaths.length}
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <a
                        href={currentPdf}
                        download
                        className="surface-button p-2 rounded-full transition-colors hover:opacity-70"
                        style={{ color: 'var(--color-text-secondary)' }}
                        aria-label="Download PDF"
                    >
                        <Download className="w-5 h-5" />
                    </a>
                    <button
                        onClick={goToNext}
                        className="surface-button p-2 rounded-full transition-colors hover:opacity-70"
                        style={{ color: 'var(--color-text-secondary)' }}
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 pb-4">
                {pdfPaths.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className="w-2 h-2 rounded-full transition-colors"
                        style={{
                            backgroundColor: index === currentIndex ? 'var(--color-accent)' : 'var(--color-border)',
                        }}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

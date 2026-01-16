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
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            {title && (
                <div className="px-6 py-4 border-b border-gray-100">
                    <h4 className="font-bold text-gray-900">{title}</h4>
                </div>
            )}

            {/* PDF Viewer */}
            <div className="relative bg-gray-100 aspect-[16/10]">
                <iframe
                    src={`${currentPdf}#view=FitH`}
                    className="w-full h-full"
                    title={pdfName}
                />
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between px-6 py-4 bg-gray-50">
                <button
                    onClick={goToPrev}
                    className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-colors"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>

                <div className="flex flex-col items-center gap-1">
                    <span className="text-sm font-medium text-gray-900 text-center max-w-xs truncate">
                        {pdfName}
                    </span>
                    <span className="text-xs text-gray-500">
                        {currentIndex + 1} of {pdfPaths.length}
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <a
                        href={currentPdf}
                        download
                        className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-colors"
                        aria-label="Download PDF"
                    >
                        <Download className="w-5 h-5 text-gray-600" />
                    </a>
                    <button
                        onClick={goToNext}
                        className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-colors"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 pb-4">
                {pdfPaths.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

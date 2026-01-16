import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ActionCard from './ActionCard';

interface ActionItem {
    title: string;
    description: string;
    details: string[];
    url: string;
    buttonText?: string;
}

interface ActionCardCarouselProps {
    items: ActionItem[];
    title?: string;
}

export default function ActionCardCarousel({ items, title }: ActionCardCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(3);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateCardsPerView = () => {
            if (window.innerWidth < 640) {
                setCardsPerView(1);
            } else if (window.innerWidth < 1024) {
                setCardsPerView(2);
            } else {
                setCardsPerView(3);
            }
        };

        updateCardsPerView();
        window.addEventListener('resize', updateCardsPerView);
        return () => window.removeEventListener('resize', updateCardsPerView);
    }, []);

    const maxIndex = Math.max(0, items.length - cardsPerView);

    const goToPrev = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    };

    return (
        <div className="space-y-4">
            {title && (
                <h4
                    className="text-xl font-bold"
                    style={{ color: 'var(--color-text-primary)' }}
                >
                    {title}
                </h4>
            )}

            {/* Carousel container */}
            <div className="relative">
                {/* Navigation arrows */}
                {currentIndex > 0 && (
                    <button
                        onClick={goToPrev}
                        className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-lg transition-colors"
                        style={{
                            backgroundColor: 'var(--color-bg-card)',
                            border: '1px solid var(--color-border)',
                            color: 'var(--color-text-secondary)'
                        }}
                        aria-label="Previous"
                    >
                        <ChevronLeft size={20} />
                    </button>
                )}

                {currentIndex < maxIndex && (
                    <button
                        onClick={goToNext}
                        className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-lg transition-colors"
                        style={{
                            backgroundColor: 'var(--color-bg-card)',
                            border: '1px solid var(--color-border)',
                            color: 'var(--color-text-secondary)'
                        }}
                        aria-label="Next"
                    >
                        <ChevronRight size={20} />
                    </button>
                )}

                {/* Cards container */}
                <div
                    ref={containerRef}
                    className="overflow-hidden"
                >
                    <div
                        className="flex transition-transform duration-300 ease-out"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                            gap: '1rem'
                        }}
                    >
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 h-full"
                                style={{ width: `calc(${100 / cardsPerView}% - ${(cardsPerView - 1) / cardsPerView}rem)` }}
                            >
                                <ActionCard
                                    number={index + 1}
                                    title={item.title}
                                    description={item.description}
                                    details={item.details}
                                    url={item.url}
                                    buttonText={item.buttonText}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Dot indicators */}
            {items.length > cardsPerView && (
                <div className="flex justify-center gap-2 pt-2">
                    {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className="w-2 h-2 rounded-full transition-colors"
                            style={{
                                backgroundColor: index === currentIndex
                                    ? 'var(--color-accent)'
                                    : 'var(--color-border)'
                            }}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

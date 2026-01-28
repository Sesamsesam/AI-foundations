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
        setCurrentIndex((prev) => Math.max(0, prev - cardsPerView));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + cardsPerView));
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
                {/* Cards container - padding prevents shadow/corner clipping */}
                <div
                    ref={containerRef}
                    className="overflow-hidden py-2 px-1 -mx-1"
                >
                    <div
                        className="flex items-stretch"
                        style={{
                            // Calculate translateX accounting for card width + gap
                            // Each card is (100/cardsPerView)% wide, gap is 1rem
                            // For page transitions, multiply by the page number (index/cardsPerView)
                            transform: `translateX(calc(-${currentIndex} * (${100 / cardsPerView}% + ${1 / cardsPerView}rem)))`,
                            gap: '1rem',
                            transition: 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)'
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
                <div className="flex justify-center gap-2 pt-4">
                    {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'gradient-dot' : ''
                                }`}
                            style={{
                                backgroundColor: index !== currentIndex
                                    ? 'var(--color-border)'
                                    : undefined
                            }}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}

            {/* Navigation arrows - below dots */}
            {items.length > cardsPerView && (
                <div className="flex justify-center gap-4 pt-2">
                    <button
                        onClick={goToPrev}
                        disabled={currentIndex === 0}
                        className="surface-button p-2 rounded-full shadow-lg transition-colors disabled:opacity-30"
                        style={{ color: 'var(--color-text-secondary)' }}
                        aria-label="Previous"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={goToNext}
                        disabled={currentIndex >= maxIndex}
                        className="surface-button p-2 rounded-full shadow-lg transition-colors disabled:opacity-30"
                        style={{ color: 'var(--color-text-secondary)' }}
                        aria-label="Next"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            )}
        </div>
    );
}

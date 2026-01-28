import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { InfoItem } from '../types';

interface InfoCardCarouselProps {
    items: InfoItem[];
    title?: string;
}

export default function InfoCardCarousel({ items, title }: InfoCardCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

    const goToNext = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % items.length);
    }, [items.length]);

    const goToPrev = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    }, [items.length]);

    // Rapid fire: Auto-advance every 3.5 seconds
    useEffect(() => {
        if (isPaused || items.length <= 1) return;

        const interval = setInterval(goToNext, 4200);
        return () => clearInterval(interval);
    }, [isPaused, goToNext, items.length]);

    const currentItem = items[currentIndex];

    // Snappier slide variants
    const slideVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 60 : -60,
            opacity: 0,
            scale: 0.95,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (dir: number) => ({
            x: dir > 0 ? -60 : 60,
            opacity: 0,
            scale: 0.95,
        }),
    };

    return (
        <div
            className="relative w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Main Card Container */}
            <div
                className="relative overflow-hidden rounded-2xl surface-card"
                style={{
                    // Fixed height to prevent layout shift - Increased to accommodate stats
                    minHeight: '420px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {/* Left Accent Strip */}
                <div
                    className="absolute left-0 top-0 bottom-0 w-1.5 z-10"
                    style={{
                        background: 'linear-gradient(180deg, var(--color-accent), #8B5CF6)',
                    }}
                />

                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="p-8 w-full h-full flex flex-col justify-center items-center text-center"
                    >
                        {/* Icon - Scaled Up (2x) - No Background */}
                        <div className="mb-6">
                            {currentItem.iconPath ? (
                                <div className="inline-flex items-center justify-center">
                                    <img
                                        src={currentItem.iconPath}
                                        alt=""
                                        className="w-20 h-20 object-contain"
                                    />
                                </div>
                            ) : (
                                <div
                                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-sm"
                                    style={{
                                        background: 'rgba(59, 130, 246, 0.1)',
                                        color: 'var(--color-accent)'
                                    }}
                                >
                                    {/* Default Icon fallback if needed */}
                                    📌
                                </div>
                            )}
                        </div>

                        {/* Title */}
                        <h4
                            className="text-2xl md:text-3xl font-bold mb-4"
                            style={{ color: 'var(--color-text-primary)' }}
                        >
                            {currentItem.title}
                        </h4>

                        {/* Content */}
                        <p
                            className="text-lg leading-relaxed max-w-3xl mx-auto whitespace-pre-line"
                            style={{ color: 'var(--color-text-secondary)' }}
                        >
                            {currentItem.content}
                        </p>

                        {/* Stat Badge (Centered below content if present) */}
                        {currentItem.stat && (
                            <div className="mt-4 inline-block">
                                <div
                                    className="text-3xl font-black tracking-tight"
                                    style={{
                                        background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                    }}
                                >
                                    {currentItem.stat}
                                </div>
                                {currentItem.statLabel && (
                                    <div
                                        className="text-xs uppercase tracking-widest font-bold mt-1"
                                        style={{ color: 'var(--color-text-muted)' }}
                                    >
                                        {currentItem.statLabel}
                                    </div>
                                )}
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Right Accent Strip */}
                <div
                    className="absolute right-0 top-0 bottom-0 w-1.5 z-10"
                    style={{
                        background: 'linear-gradient(180deg, #8B5CF6, var(--color-accent))',
                    }}
                />
            </div>

            {/* Controls */}
            {items.length > 1 && (
                <div className="flex items-center justify-center gap-6 mt-6">
                    <button
                        onClick={goToPrev}
                        className="p-2 rounded-full transition-all hover:bg-white/5 active:scale-95"
                        style={{ color: 'var(--color-text-secondary)' }}
                        aria-label="Previous"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Progress Dots */}
                    <div className="flex gap-2">
                        {items.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8' : 'w-2 hover:w-3'
                                    }`}
                                style={{
                                    backgroundColor:
                                        index === currentIndex
                                            ? 'var(--color-accent)'
                                            : 'var(--color-text-muted)',
                                    opacity: index === currentIndex ? 1 : 0.3,
                                }}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={goToNext}
                        className="p-2 rounded-full transition-all hover:bg-white/5 active:scale-95"
                        style={{ color: 'var(--color-text-secondary)' }}
                        aria-label="Next"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            )}
        </div>
    );
}

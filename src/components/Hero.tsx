
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
    title: string;
    subtitle: string;
    videoUrl?: string | null;
}

export default function Hero({ title, subtitle, videoUrl }: HeroProps) {
    return (
        <section className="py-12 md:py-20 flex flex-col items-center text-center relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-4xl px-4"
            >
                <h2
                    className="text-4xl md:text-5xl font-bold tracking-tight mb-5"
                    style={{ color: 'var(--color-text-primary)' }}
                >
                    {title}
                </h2>
                <p
                    className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                    style={{ color: 'var(--color-text-secondary)' }}
                >
                    {subtitle.replace(/—/g, ' - ')}
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mt-10 w-full max-w-4xl px-4"
            >
                <div
                    className="relative aspect-video rounded-2xl overflow-hidden"
                    style={{
                        backgroundColor: 'var(--color-bg-secondary)',
                        border: '1px solid var(--color-border)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)'
                    }}
                >
                    {videoUrl ? (
                        <div className="absolute inset-0 video-container bg-black">
                            <iframe
                                src={videoUrl}
                                className="absolute inset-0 w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    ) : (
                        <div
                            className="absolute inset-0 flex items-center justify-center"
                            style={{ backgroundColor: 'var(--color-bg-secondary)' }}
                        >
                            <div className="flex flex-col items-center gap-4">
                                <div
                                    className="w-14 h-14 rounded-full animate-pulse"
                                    style={{ backgroundColor: 'var(--color-border)' }}
                                />
                                <span
                                    className="text-sm font-medium"
                                    style={{ color: 'var(--color-text-muted)' }}
                                >
                                    Video Placeholder
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        </section>
    );
}

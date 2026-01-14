
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroProps {
    title: string;
    subtitle: string;
    videoUrl?: string | null;
}

export default function Hero({ title, subtitle, videoUrl }: HeroProps) {
    return (
        <section className="py-12 md:py-20 flex flex-col items-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-4xl px-4"
            >
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                    {title}
                </h2>
                <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mt-12 w-full max-w-5xl px-4"
            >
                <div className="relative aspect-video rounded-3xl overflow-hidden bg-gray-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-200">
                    {videoUrl ? (
                        <iframe
                            src={videoUrl}
                            className="absolute inset-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200">
                            <div className="flex flex-col items-center gap-4 text-gray-400">
                                <div className="w-16 h-16 rounded-full bg-white/50 animate-pulse" />
                                <span className="text-sm font-medium">Video Placeholder</span>
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        </section>
    );
}

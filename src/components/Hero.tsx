
import React from 'react';
import { motion } from 'framer-motion';
import VideoThumbnail from './VideoThumbnail';

interface HeroProps {
    title: string;
    subtitle: string;
    videoUrl?: string | null;
    showSocials?: boolean;
}

export default function Hero({ title, subtitle, videoUrl, showSocials = false }: HeroProps) {
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
                    className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed whitespace-pre-line"
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
                {videoUrl ? (
                    <VideoThumbnail videoUrl={videoUrl} />
                ) : (
                    <div
                        className="relative aspect-video rounded-2xl overflow-hidden"
                        style={{
                            backgroundColor: 'var(--color-bg-secondary)',
                            border: '1px solid var(--color-border)',
                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)'
                        }}
                    >
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
                    </div>
                )}

                {/* Social Icons - Below video */}
                {showSocials && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex items-center justify-center gap-5 mt-5"
                    >
                        {/* Instagram - Accurate gradient with shine */}
                        <a
                            href="https://www.instagram.com/cultivated_savage"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-[1.35] relative overflow-hidden"
                            style={{
                                background: 'radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)',
                                boxShadow: '0 3px 10px rgba(188, 49, 143, 0.5)',
                            }}
                            title="Instagram"
                        >
                            {/* Shine overlay */}
                            <div
                                className="absolute inset-0 rounded-full pointer-events-none"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 40%, transparent 60%)',
                                }}
                            />
                            <svg
                                width="13"
                                height="13"
                                viewBox="0 0 24 24"
                                fill="white"
                                className="relative z-10 transition-transform duration-300 group-hover:scale-105"
                                style={{ filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.2))' }}
                            >
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>

                        {/* X (Twitter) - with shine */}
                        <a
                            href="https://x.com/samihermes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-[1.35] relative overflow-hidden"
                            style={{
                                background: 'linear-gradient(145deg, #2a2a2a 0%, #000000 100%)',
                                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.5)',
                            }}
                            title="X"
                        >
                            {/* Shine overlay */}
                            <div
                                className="absolute inset-0 rounded-full pointer-events-none"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 40%, transparent 60%)',
                                }}
                            />
                            <svg
                                width="11"
                                height="11"
                                viewBox="0 0 24 24"
                                fill="white"
                                className="relative z-10 transition-transform duration-300 group-hover:scale-105"
                                style={{ filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.3))' }}
                            >
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>

                        {/* LinkedIn - with shine */}
                        <a
                            href="https://www.linkedin.com/in/sami-hermes/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-[1.35] relative overflow-hidden"
                            style={{
                                background: 'linear-gradient(145deg, #0088cc 0%, #0A66C2 50%, #004d7a 100%)',
                                boxShadow: '0 3px 10px rgba(10, 102, 194, 0.5)',
                            }}
                            title="LinkedIn"
                        >
                            {/* Shine overlay */}
                            <div
                                className="absolute inset-0 rounded-full pointer-events-none"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.1) 40%, transparent 60%)',
                                }}
                            />
                            <svg
                                width="13"
                                height="13"
                                viewBox="0 0 24 24"
                                fill="white"
                                className="relative z-10 transition-transform duration-300 group-hover:scale-105"
                                style={{ filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.2))' }}
                            >
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>

                        {/* YouTube - with shine */}
                        <a
                            href="https://www.youtube.com/@Sami-Hermes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-[1.35] relative overflow-hidden"
                            style={{
                                background: 'linear-gradient(145deg, #ff3333 0%, #FF0000 50%, #cc0000 100%)',
                                boxShadow: '0 3px 10px rgba(255, 0, 0, 0.45)',
                            }}
                            title="YouTube"
                        >
                            {/* Shine overlay */}
                            <div
                                className="absolute inset-0 rounded-full pointer-events-none"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.1) 40%, transparent 60%)',
                                }}
                            />
                            <svg
                                width="13"
                                height="13"
                                viewBox="0 0 24 24"
                                fill="white"
                                className="relative z-10 transition-transform duration-300 group-hover:scale-105"
                                style={{ filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.2))' }}
                            >
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </a>
                    </motion.div>
                )}
            </motion.div>
        </section>
    );
}


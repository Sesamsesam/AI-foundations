import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl: string;
}

export default function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
    // Extract video ID and build embed URL
    const getEmbedUrl = (url: string): string => {
        try {
            // If it's already an embed URL, add autoplay
            if (url.includes('youtube.com/embed/')) {
                const separator = url.includes('?') ? '&' : '?';
                return `${url}${separator}autoplay=1`;
            }

            const parsed = new URL(url);
            let videoId = '';

            if (parsed.hostname.includes('youtu.be')) {
                videoId = parsed.pathname.slice(1);
            } else if (parsed.hostname.includes('youtube.com')) {
                videoId = parsed.searchParams.get('v') || '';
            }

            if (videoId) {
                return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            }

            return url;
        } catch {
            return url;
        }
    };

    // Close on escape key
    React.useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

                    {/* Modal content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-5xl z-10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors"
                            aria-label="Close video"
                        >
                            <X size={28} />
                        </button>

                        {/* Video container */}
                        <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-2xl">
                            <iframe
                                src={getEmbedUrl(videoUrl)}
                                title="Video"
                                className="absolute inset-0 w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

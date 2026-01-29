import React, { useState, lazy, Suspense } from 'react';
import { Play } from 'lucide-react';

const VideoModal = lazy(() => import('./VideoModal'));

interface VideoEmbedProps {
    videoId: string;
    title?: string;
    isVertical?: boolean;
}

export default function VideoEmbed({ videoId, title, isVertical = false }: VideoEmbedProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [thumbnailAttempt, setThumbnailAttempt] = useState(0);

    // Extract video ID if full URL is provided
    const extractVideoId = (input: string): string => {
        if (input.includes('youtube.com/watch')) {
            const url = new URL(input);
            return url.searchParams.get('v') || input;
        }
        if (input.includes('youtu.be/')) {
            return input.split('youtu.be/')[1]?.split('?')[0] || input;
        }
        if (input.includes('youtube.com/embed/')) {
            return input.split('youtube.com/embed/')[1]?.split('?')[0] || input;
        }
        if (input.includes('youtube.com/shorts/')) {
            return input.split('youtube.com/shorts/')[1]?.split('?')[0] || input;
        }
        return input;
    };

    const id = extractVideoId(videoId);
    const videoUrl = `https://www.youtube.com/embed/${id}`;

    // Get thumbnail URL with fallback chain
    const getThumbnailUrl = (attempt: number): string => {
        const qualities = ['maxresdefault', 'hqdefault', 'mqdefault'];
        const quality = qualities[attempt] || 'mqdefault';
        return `https://img.youtube.com/vi/${id}/${quality}.jpg`;
    };

    const [thumbnailSrc, setThumbnailSrc] = useState(getThumbnailUrl(0));

    const handleImageError = () => {
        if (thumbnailAttempt < 2) {
            const nextAttempt = thumbnailAttempt + 1;
            setThumbnailAttempt(nextAttempt);
            setThumbnailSrc(getThumbnailUrl(nextAttempt));
            return;
        }
        setHasError(true);
    };

    // For vertical videos (Shorts), use inline iframe - no thumbnail overlay
    if (isVertical) {
        return (
            <div className="surface-card rounded-2xl overflow-hidden shadow-sm">
                {title && (
                    <div className="px-6 py-4" style={{ borderBottom: '1px solid var(--color-border)' }}>
                        <h4 className="font-bold" style={{ color: 'var(--color-text-primary)' }}>{title}</h4>
                    </div>
                )}
                <div className="vertical-video-container">
                    <iframe
                        src={videoUrl}
                        title={title || 'Video'}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                    />
                </div>
            </div>
        );
    }

    // For horizontal videos, use thumbnail + modal pattern
    return (
        <>
            <div className="surface-card rounded-2xl overflow-hidden shadow-sm">
                {title && (
                    <div className="px-6 py-4" style={{ borderBottom: '1px solid var(--color-border)' }}>
                        <h4 className="font-bold" style={{ color: 'var(--color-text-primary)' }}>{title}</h4>
                    </div>
                )}

                <div
                    className="relative aspect-video group cursor-pointer transition-all duration-300 hover:opacity-95"
                    onClick={() => setIsModalOpen(true)}
                >
                    {/* Thumbnail image */}
                    {!hasError && (
                        <img
                            src={thumbnailSrc}
                            alt={title || 'Video thumbnail'}
                            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-[1.02]"
                            onError={handleImageError}
                        />
                    )}

                    {/* Error fallback */}
                    {hasError && (
                        <div className="w-full h-full bg-black flex items-center justify-center">
                            <div className="text-center text-white/80">
                                <Play className="w-10 h-10 mx-auto mb-2" />
                                <p className="text-sm">Play Video</p>
                            </div>
                        </div>
                    )}

                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div
                            className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                backdropFilter: 'blur(8px)',
                                border: '1px solid rgba(255, 255, 255, 0.25)',
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                            }}
                        >
                            <Play
                                className="w-5 h-5 md:w-6 md:h-6 text-white fill-white ml-1"
                                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
                            />
                        </div>
                    </div>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />
                </div>
            </div>

            {isModalOpen && (
                <Suspense fallback={<div />}>
                    <VideoModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        videoUrl={videoUrl}
                    />
                </Suspense>
            )}
        </>
    );
}

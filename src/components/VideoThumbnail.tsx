import React, { useState, lazy, Suspense } from 'react';
import { Play } from 'lucide-react';

const VideoModal = lazy(() => import('./VideoModal'));

interface VideoThumbnailProps {
    videoUrl: string;
    thumbnailUrl?: string;
    className?: string;
}

export default function VideoThumbnail({ videoUrl, thumbnailUrl, className = '' }: VideoThumbnailProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [thumbnailAttempt, setThumbnailAttempt] = useState(0);

    // Extract video ID from various YouTube URL formats
    const getYouTubeVideoId = (url: string): string | null => {
        try {
            // Handle embed URLs
            if (url.includes('youtube.com/embed/')) {
                const match = url.match(/embed\/([^?&]+)/);
                return match?.[1] || null;
            }

            const parsed = new URL(url);
            if (parsed.hostname.includes('youtu.be')) {
                return parsed.pathname.slice(1);
            } else if (parsed.hostname.includes('youtube.com')) {
                return parsed.searchParams.get('v');
            }
        } catch {
            // Ignore errors
        }
        return null;
    };

    // Generate thumbnail URL from video URL
    const getVideoThumbnail = (url: string): string => {
        const videoId = getYouTubeVideoId(url);
        if (videoId) {
            return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        }
        return 'https://via.placeholder.com/640x360/000000/FFFFFF?text=Video';
    };

    const [thumbnailSrc, setThumbnailSrc] = useState(thumbnailUrl || getVideoThumbnail(videoUrl));

    const handleImageError = () => {
        const youtubeId = getYouTubeVideoId(videoUrl);
        if (youtubeId && thumbnailAttempt === 0) {
            // Try hqdefault as fallback
            setThumbnailSrc(`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`);
            setThumbnailAttempt(1);
            return;
        } else if (youtubeId && thumbnailAttempt === 1) {
            // Try mqdefault as final fallback
            setThumbnailSrc(`https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`);
            setThumbnailAttempt(2);
            return;
        }

        setHasError(true);
    };

    return (
        <>
            <div
                className={`rainbow-glow-btn relative group cursor-pointer transition-all duration-500 ease-out hover:scale-[1.03] ${className}`}
                onClick={() => setIsModalOpen(true)}
            >
                {/* Video thumbnail container */}
                <div
                    className="surface-card relative aspect-video w-full rounded-2xl overflow-hidden"
                    style={{
                        backgroundColor: 'var(--color-bg-secondary)',
                        border: '1px solid var(--color-border)'
                    }}
                >
                    {/* Thumbnail image */}
                    {!hasError && (
                        <img
                            src={thumbnailSrc}
                            alt="Video thumbnail"
                            className="w-full h-full object-cover"
                            onError={handleImageError}
                        />
                    )}

                    {/* Error fallback */}
                    {hasError && (
                        <div
                            className="w-full h-full flex items-center justify-center"
                            style={{ backgroundColor: 'var(--color-bg-secondary)' }}
                        >
                            <div className="text-center" style={{ color: 'var(--color-text-muted)' }}>
                                <Play className="w-12 h-12 mx-auto mb-2" />
                                <p className="text-sm">Play Video</p>
                            </div>
                        </div>
                    )}

                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div
                            className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110"
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                backdropFilter: 'blur(8px)',
                                border: '1px solid rgba(255, 255, 255, 0.25)',
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                            }}
                        >
                            <Play
                                className="w-6 h-6 md:w-8 md:h-8 text-white fill-white ml-1"
                                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
                            />
                        </div>
                    </div>

                    {/* Gradient overlay for better visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
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

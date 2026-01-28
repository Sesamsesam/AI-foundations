import React, { useState, useEffect, useCallback } from 'react';
import { Play, X } from 'lucide-react';

interface VideoGridProps {
    videos: { id: string; title: string }[];
}

export default function VideoGrid({ videos }: VideoGridProps) {
    const [activeVideo, setActiveVideo] = useState<{ id: string; title: string } | null>(null);
    const [thumbnailQuality, setThumbnailQuality] = useState<Record<string, string>>({});

    const getThumbnailUrl = (videoId: string) => {
        // Try maxresdefault first, then hqdefault, then mqdefault
        const quality = thumbnailQuality[videoId] || 'maxresdefault';
        return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
    };

    const handleThumbnailError = (videoId: string) => {
        setThumbnailQuality(prev => {
            const current = prev[videoId] || 'maxresdefault';
            if (current === 'maxresdefault') {
                return { ...prev, [videoId]: 'hqdefault' };
            } else if (current === 'hqdefault') {
                return { ...prev, [videoId]: 'mqdefault' };
            }
            // Already at lowest quality, keep as is
            return prev;
        });
    };

    const openModal = (video: { id: string; title: string }) => {
        setActiveVideo(video);
    };

    const closeModal = useCallback(() => {
        setActiveVideo(null);
    }, []);

    // Handle escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && activeVideo) {
                closeModal();
            }
        };

        if (activeVideo) {
            document.addEventListener('keydown', handleKeyDown);
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [activeVideo, closeModal]);

    return (
        <>
            <div className="surface-card rounded-xl overflow-hidden">
                {/* Grid: always 3 columns, even on mobile */}
                <div className="grid grid-cols-3 gap-1 p-1">
                    {videos.map((video) => (
                        <div
                            key={video.id}
                            className="relative aspect-square overflow-hidden cursor-pointer group"
                            onClick={() => openModal(video)}
                        >
                            {/* Thumbnail with play button overlay */}
                            <img
                                src={getThumbnailUrl(video.id)}
                                alt={video.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                onError={() => handleThumbnailError(video.id)}
                            />
                            {/* Dark overlay on hover */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                            {/* Play button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                                    }}
                                >
                                    <Play
                                        size={16}
                                        className="ml-0.5"
                                        style={{ color: '#000' }}
                                        fill="#000"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Modal */}
            {activeVideo && (
                <div
                    className="video-modal-backdrop"
                    onClick={closeModal}
                >
                    <div
                        className="video-modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            className="video-modal-close"
                            onClick={closeModal}
                            aria-label="Close video"
                        >
                            <X size={24} />
                        </button>

                        {/* Video title */}
                        <h3 className="video-modal-title">{activeVideo.title}</h3>

                        {/* YouTube embed */}
                        <div className="video-modal-player">
                            <iframe
                                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                                className="video-modal-iframe"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={activeVideo.title}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

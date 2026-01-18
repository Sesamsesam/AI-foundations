import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface VideoGridProps {
    videos: { id: string; title: string }[];
}

export default function VideoGrid({ videos }: VideoGridProps) {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);
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

    return (
        <div className="surface-card rounded-xl overflow-hidden">
            {/* Grid: always 3 columns, even on mobile */}
            <div className="grid grid-cols-3 gap-1 p-1">
                {videos.map((video) => (
                    <div
                        key={video.id}
                        className="relative aspect-square overflow-hidden cursor-pointer group"
                        onClick={() => setActiveVideo(activeVideo === video.id ? null : video.id)}
                    >
                        {activeVideo === video.id ? (
                            // Embedded YouTube player - solid black background
                            <div className="absolute inset-0 video-container bg-black">
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                                    className="absolute inset-0 w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title={video.title}
                                />
                            </div>
                        ) : (
                            // Thumbnail with play button overlay
                            <>
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
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

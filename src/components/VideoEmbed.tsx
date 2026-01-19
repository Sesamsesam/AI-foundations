import React from 'react';

interface VideoEmbedProps {
    videoId: string;
    title?: string;
}

export default function VideoEmbed({ videoId, title }: VideoEmbedProps) {
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
        return input;
    };

    const id = extractVideoId(videoId);

    return (
        <div className="surface-card rounded-2xl overflow-hidden shadow-sm">
            {title && (
                <div className="px-6 py-4" style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <h4 className="font-bold" style={{ color: 'var(--color-text-primary)' }}>{title}</h4>
                </div>
            )}
            <div className="aspect-video video-container bg-black">
                <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    className="w-full h-full"
                    title={title || 'Video'}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                />
            </div>
        </div>
    );
}

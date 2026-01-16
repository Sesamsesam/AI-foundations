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
        return input;
    };

    const id = extractVideoId(videoId);

    return (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            {title && (
                <div className="px-6 py-4 border-b border-gray-100">
                    <h4 className="font-bold text-gray-900">{title}</h4>
                </div>
            )}
            <div className="aspect-video">
                <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    className="w-full h-full"
                    title={title || 'Video'}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    );
}

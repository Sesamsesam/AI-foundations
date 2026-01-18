import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
    darkMode: boolean;
    onToggle: () => void;
}

export default function ThemeToggle({ darkMode, onToggle }: ThemeToggleProps) {
    return (
        <button
            onClick={onToggle}
            className="theme-toggle relative flex items-center p-1 rounded-full"
            style={{
                backgroundColor: darkMode ? 'var(--color-bg-secondary)' : '#f9fafb',
                width: '72px',
                height: '36px',
                border: 'none',
                boxShadow: darkMode
                    ? 'inset 0 2px 4px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2)'
                    : 'inset 0 2px 4px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.1)',
                outline: 'none',
                cursor: 'pointer'
            }}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {/* 1. Background icons Layer (Z-index 1) */}
            <div
                className="absolute inset-x-0 inset-y-0 flex items-center justify-between px-2.5 pointer-events-none"
                style={{ zIndex: 1 }}
            >
                <Sun
                    size={16}
                    className="transition-opacity duration-200"
                    style={{
                        color: 'var(--color-text-muted)',
                        opacity: darkMode ? 1 : 0, // Show sun in background when moon is active
                    }}
                />
                <Moon
                    size={16}
                    className="transition-opacity duration-200"
                    style={{
                        color: 'var(--color-text-muted)',
                        opacity: darkMode ? 0 : 1, // Show moon in background when sun is active
                    }}
                />
            </div>

            {/* 2. Sliding Circle Layer (Z-index 2) */}
            <div
                className="absolute flex items-center justify-center rounded-full transition-transform duration-300 ease-out"
                style={{
                    zIndex: 2,
                    width: '24px',
                    height: '24px',
                    backgroundColor: darkMode ? '#1a1a1a' : '#ffffff',
                    transform: darkMode ? 'translateX(36px)' : 'translateX(2px)',
                }}
            >
                {darkMode ? (
                    <Moon size={16} fill="#facc15" color="#facc15" />
                ) : (
                    <Sun size={16} color="#facc15" />
                )}
            </div>
        </button>
    );
}

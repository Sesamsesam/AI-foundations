import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, X } from 'lucide-react';
import GDollarBadge from './GDollarBadge';

export interface RoleUseCase {
    role: string;
    scenario: string;
    tools: { name: string; usesCredits?: boolean }[];
    workflow: string[];
    result: string;
    primaryUrl?: string;
    businessContext?: string;
}

interface RoleUseCaseCardProps {
    useCase: RoleUseCase;
    darkMode?: boolean;
}

export default function RoleUseCaseCard({ useCase, darkMode = false }: RoleUseCaseCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showModal, setShowModal] = useState(false);

    // Lock body scroll when sidebar is open
    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [showModal]);

    return (
        <>
            {/* Card */}
            <div
                className="surface-card rounded-xl cursor-pointer transition-all hover:shadow-lg overflow-hidden"
                onClick={() => setShowModal(true)}
            >
                {/* Solid Header Bar with Role */}
                <div
                    className="surface-secondary px-5 py-3 flex items-center justify-between"
                    style={{ borderBottom: '1px solid var(--color-border)' }}
                >
                    <span
                        className="font-medium"
                        style={{ color: 'var(--color-text-primary)' }}
                    >
                        {useCase.role}
                    </span>
                    <ChevronDown size={18} style={{ color: 'var(--color-text-muted)' }} />
                </div>

                {/* Content - Centered */}
                <div className="p-5 text-center">
                    {/* Scenario Preview */}
                    <h4
                        className="font-semibold mb-3 line-clamp-2"
                        style={{ color: 'var(--color-text-primary)' }}
                    >
                        {useCase.scenario}
                    </h4>

                    {/* Tools Used - Centered */}
                    <div className="flex flex-wrap gap-2 justify-center mt-3">
                        {useCase.tools.slice(0, 3).map((tool, i) => (
                            <span
                                key={i}
                                className="text-xs px-2 py-1 rounded flex items-center gap-1"
                                style={{
                                    backgroundColor: 'var(--color-bg-secondary)',
                                    color: 'var(--color-text-secondary)',
                                }}
                            >
                                {tool.name}
                                {tool.usesCredits && <GDollarBadge />}
                            </span>
                        ))}
                        {useCase.tools.length > 3 && (
                            <span
                                className="text-xs px-2 py-1"
                                style={{ color: 'var(--color-text-muted)' }}
                            >
                                +{useCase.tools.length - 3} more
                            </span>
                        )}
                    </div>

                    {/* Result Preview */}
                    <p
                        className="text-sm mt-4 font-medium"
                        style={{ color: '#3B82F6' }}
                    >
                        {useCase.result}
                    </p>
                </div>
            </div>

            {/* Slide-out Sidebar */}
            <AnimatePresence>
                {showModal && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 z-50"
                            style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowModal(false)}
                        />

                        {/* Sidebar Content - Slides in from right */}
                        <motion.div
                            className="fixed top-0 right-0 bottom-0 z-50 overflow-y-auto overflow-x-hidden"
                            style={{
                                backgroundColor: 'var(--color-bg-card)',
                                width: 'min(600px, 90vw)',
                                boxShadow: '-4px 0 30px rgba(0, 0, 0, 0.3)',
                                overscrollBehavior: 'contain',
                            }}
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
                        >
                            {/* Inner content wrapper with proper padding - pb-24 accounts for tab bar */}
                            <div className="p-6 pr-4 pb-24" style={{ width: '100%', boxSizing: 'border-box' }}>
                                {/* Close Button */}
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="absolute top-4 right-4 p-2 rounded-lg transition-colors hover:opacity-70"
                                    style={{ color: 'var(--color-text-secondary)' }}
                                >
                                    <X size={24} />
                                </button>

                                {/* Role Badge */}
                                <span
                                    className="px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-4"
                                    style={{
                                        backgroundColor: 'var(--color-bg-secondary)',
                                        color: darkMode ? 'white' : '#3B82F6',
                                    }}
                                >
                                    {useCase.role}
                                </span>

                                {/* Scenario */}
                                <h3
                                    className="text-2xl font-bold mb-4"
                                    style={{ color: 'var(--color-text-primary)' }}
                                >
                                    {useCase.scenario}
                                </h3>

                                {/* Tools Section */}
                                <div className="mb-6">
                                    <h4
                                        className="text-sm font-semibold uppercase tracking-wide mb-3"
                                        style={{ color: 'var(--color-text-muted)' }}
                                    >
                                        Tools Used
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {useCase.tools.map((tool, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1.5 rounded-lg flex items-center gap-2"
                                                style={{
                                                    backgroundColor: 'var(--color-bg-secondary)',
                                                    border: '1px solid var(--color-border)',
                                                    color: 'var(--color-text-primary)',
                                                }}
                                            >
                                                {tool.name}
                                                {tool.usesCredits && <GDollarBadge />}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Workflow Section */}
                                <div className="mb-6">
                                    <h4
                                        className="text-sm font-semibold uppercase tracking-wide mb-3"
                                        style={{ color: 'var(--color-text-muted)' }}
                                    >
                                        Workflow
                                    </h4>
                                    <ol className="space-y-3">
                                        {useCase.workflow.map((step, i) => (
                                            <li key={i} className="flex gap-3">
                                                <span
                                                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium"
                                                    style={{
                                                        backgroundColor: 'var(--color-bg-secondary)',
                                                        color: darkMode ? 'white' : '#3B82F6',
                                                    }}
                                                >
                                                    {i + 1}
                                                </span>
                                                <span style={{ color: 'var(--color-text-secondary)' }}>
                                                    {step}
                                                </span>
                                            </li>
                                        ))}
                                    </ol>
                                </div>

                                {/* Result - Moved up */}
                                <div
                                    className="p-4 rounded-xl mb-4"
                                    style={{
                                        backgroundColor: 'var(--color-bg-card)',
                                        border: '2px solid #3B82F6',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                                    }}
                                >
                                    <h4
                                        className="text-sm font-semibold uppercase tracking-wide mb-2"
                                        style={{ color: '#3B82F6' }}
                                    >
                                        Result
                                    </h4>
                                    <p
                                        className="text-lg font-medium"
                                        style={{ color: 'var(--color-text-primary)' }}
                                    >
                                        {useCase.result}
                                    </p>
                                </div>

                                {/* CTA - Moved up */}
                                {useCase.primaryUrl && (
                                    <a
                                        href={useCase.primaryUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-opacity hover:opacity-90 mb-6"
                                        style={{
                                            backgroundColor: darkMode ? 'var(--color-bg-secondary)' : '#3B82F6',
                                            color: 'white',
                                        }}
                                    >
                                        Get Started
                                        <ExternalLink size={18} />
                                    </a>
                                )}

                                {/* Business Context Section - Now at bottom */}
                                {useCase.businessContext && (
                                    <div className="mt-6 pt-6" style={{ borderTop: '1px solid var(--color-border)' }}>
                                        <h4
                                            className="text-sm font-semibold uppercase tracking-wide mb-3"
                                            style={{ color: 'var(--color-text-muted)' }}
                                        >
                                            Why This Matters
                                        </h4>
                                        <div className="flex w-full">
                                            <div
                                                className="text-sm leading-relaxed"
                                                style={{
                                                    color: 'var(--color-text-secondary)',
                                                    width: '90%',
                                                    flex: '0 0 90%',
                                                    maxWidth: '90% !important',
                                                    overflowWrap: 'break-word',
                                                    wordWrap: 'break-word',
                                                }}
                                            >
                                                {useCase.businessContext.split('\n\n').map((paragraph, i) => (
                                                    <p key={i} className="mb-4 leading-relaxed">
                                                        {paragraph}
                                                    </p>
                                                ))}
                                            </div>
                                            {/* Spacer div to ensure the remaining 10% is empty */}
                                            <div style={{ flex: '0 0 10%', minWidth: '10%' }} />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}



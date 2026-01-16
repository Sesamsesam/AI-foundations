import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, X, DollarSign } from 'lucide-react';

export interface RoleUseCase {
    role: string;
    scenario: string;
    tools: { name: string; usesCredits?: boolean }[];
    workflow: string[];
    result: string;
    primaryUrl?: string;
}

interface RoleUseCaseCardProps {
    useCase: RoleUseCase;
}

export default function RoleUseCaseCard({ useCase }: RoleUseCaseCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {/* Card */}
            <div
                className="p-5 rounded-xl cursor-pointer transition-all hover:shadow-lg"
                style={{
                    backgroundColor: 'var(--color-bg-card)',
                    border: '1px solid var(--color-border)',
                }}
                onClick={() => setShowModal(true)}
            >
                {/* Role Badge */}
                <div className="flex items-center justify-between mb-3">
                    <span
                        className="px-3 py-1 rounded-full text-sm font-medium"
                        style={{
                            backgroundColor: 'var(--color-accent)',
                            color: 'white',
                        }}
                    >
                        {useCase.role}
                    </span>
                    <ChevronDown
                        size={20}
                        style={{ color: 'var(--color-text-muted)' }}
                    />
                </div>

                {/* Scenario Preview */}
                <h4
                    className="font-semibold mb-2 line-clamp-2"
                    style={{ color: 'var(--color-text-primary)' }}
                >
                    {useCase.scenario}
                </h4>

                {/* Tools Used */}
                <div className="flex flex-wrap gap-2 mt-3">
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
                            {tool.usesCredits && (
                                <DollarSign size={12} style={{ color: 'var(--color-success)' }} />
                            )}
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
                    className="text-sm mt-3 font-medium"
                    style={{ color: 'var(--color-success)' }}
                >
                    → {useCase.result}
                </p>
            </div>

            {/* Modal */}
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

                        {/* Modal Content */}
                        <motion.div
                            className="fixed inset-4 md:inset-x-auto md:inset-y-8 md:left-1/2 md:w-full md:max-w-2xl z-50 overflow-y-auto rounded-2xl p-6"
                            style={{
                                backgroundColor: 'var(--color-bg-card)',
                                transform: 'translateX(-50%)',
                            }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                        >
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
                                    backgroundColor: 'var(--color-accent)',
                                    color: 'white',
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
                                            {tool.usesCredits && (
                                                <span
                                                    className="text-xs px-1.5 py-0.5 rounded"
                                                    style={{
                                                        backgroundColor: 'var(--color-success)',
                                                        color: 'white',
                                                    }}
                                                >
                                                    $300
                                                </span>
                                            )}
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
                                                    backgroundColor: 'var(--color-accent)',
                                                    color: 'white',
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

                            {/* Result */}
                            <div
                                className="p-4 rounded-xl mb-6"
                                style={{
                                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                                    border: '1px solid var(--color-success)',
                                }}
                            >
                                <h4
                                    className="text-sm font-semibold uppercase tracking-wide mb-2"
                                    style={{ color: 'var(--color-success)' }}
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

                            {/* CTA */}
                            {useCase.primaryUrl && (
                                <a
                                    href={useCase.primaryUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-opacity hover:opacity-90"
                                    style={{
                                        backgroundColor: 'var(--color-accent)',
                                        color: 'white',
                                    }}
                                >
                                    Get Started
                                    <ExternalLink size={18} />
                                </a>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

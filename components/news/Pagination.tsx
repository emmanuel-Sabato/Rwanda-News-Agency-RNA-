'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
    currentPage?: number;
    totalPages?: number;
    onPageChange?: (page: number) => void;
}

export default function Pagination({
    currentPage = 1,
    totalPages = 10,
    onPageChange,
}: PaginationProps) {
    const pages = Array.from({ length: Math.min(5, totalPages) }, (_, i) => i + 1);

    const handlePageChange = (page: number) => {
        if (onPageChange) {
            onPageChange(page);
        }
    };

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-12">
            {/* Page Info */}
            <p className="text-sm text-[var(--color-text-muted)] order-2 sm:order-1">
                Page <span className="text-white font-medium">{currentPage}</span> of{' '}
                <span className="text-white font-medium">{totalPages}</span>
            </p>

            {/* Pagination Controls */}
            <div className="flex items-center gap-2 order-1 sm:order-2">
                {/* Previous Button */}
                <button
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="flex items-center gap-1 px-4 py-2.5 rounded-lg bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-elevated)] hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline text-sm font-medium">Prev</span>
                </button>

                {/* Page Numbers */}
                <div className="flex items-center gap-1">
                    {pages.map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${currentPage === page
                                    ? 'bg-[var(--color-gold)] text-[var(--color-bg-dark)] shadow-lg shadow-[var(--color-gold)]/20'
                                    : 'bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-elevated)] hover:text-white'
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                    {totalPages > 5 && (
                        <>
                            <span className="w-10 h-10 flex items-center justify-center text-[var(--color-text-muted)]">
                                ...
                            </span>
                            <button
                                onClick={() => handlePageChange(totalPages)}
                                className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${currentPage === totalPages
                                        ? 'bg-[var(--color-gold)] text-[var(--color-bg-dark)] shadow-lg shadow-[var(--color-gold)]/20'
                                        : 'bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-elevated)] hover:text-white'
                                    }`}
                            >
                                {totalPages}
                            </button>
                        </>
                    )}
                </div>

                {/* Next Button */}
                <button
                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-1 px-4 py-2.5 rounded-lg bg-[var(--color-gold)] text-[var(--color-bg-dark)] font-semibold hover:shadow-lg hover:shadow-[var(--color-gold)]/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <span className="hidden sm:inline text-sm">Next</span>
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}

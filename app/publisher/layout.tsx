'use client';

import PublisherSidebar from '@/components/publisher/PublisherSidebar';
import { Bell } from 'lucide-react';

export default function PublisherLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-[#0a0a0a] text-white overflow-hidden">
            <PublisherSidebar />

            <div className="flex-1 flex flex-col min-w-0">
                {/* Simple Top Bar */}
                <header className="h-16 px-8 border-b border-[#2a2a2a] bg-[#0f0f0f] flex items-center justify-between sticky top-0 z-30">
                    <h2 className="text-sm font-medium text-gray-400">
                        {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </h2>
                    <div className="flex items-center gap-4">
                        <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-[var(--color-gold)] rounded-full"></span>
                        </button>
                    </div>
                </header>

                <main className="flex-1 p-8 overflow-y-auto">
                    <div className="max-w-5xl mx-auto animate-fade-in">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}

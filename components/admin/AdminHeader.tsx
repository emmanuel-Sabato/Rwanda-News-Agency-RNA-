'use client';

import { Bell, Search, User } from 'lucide-react';
import Image from 'next/image';

export default function AdminHeader() {
    return (
        <header className="h-16 px-6 lg:px-8 border-b border-[#2a2a2a] bg-[#0f0f0f] flex items-center justify-between sticky top-0 z-30">
            {/* Left: Search (Global) */}
            <div className="relative w-64 hidden sm:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)] transition-all"
                />
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-4">
                {/* Notifications */}
                <button className="relative p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-[#0f0f0f]"></span>
                </button>

                <div className="h-8 w-px bg-[#2a2a2a]" />

                {/* User Profile */}
                <div className="flex items-center gap-3 cursor-pointer group">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-medium text-white group-hover:text-[var(--color-gold)] transition-colors">Admin User</p>
                        <p className="text-xs text-gray-500">Super Admin</p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[var(--color-gold)]/20 border border-[var(--color-gold)] overflow-hidden flex items-center justify-center">
                        <User className="w-5 h-5 text-[var(--color-gold)]" />
                    </div>
                </div>
            </div>
        </header>
    );
}

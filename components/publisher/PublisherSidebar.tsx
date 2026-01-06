'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    PenTool,
    BookOpen,
    BarChart2,
    Settings,
    LogOut,
    User,
    ChevronRight,
    ChevronLeft
} from 'lucide-react';

export default function PublisherSidebar() {
    const pathname = usePathname();
    const [collapsed, setCollapsed] = useState(false);

    const navItems = [
        { name: 'Overview', href: '/publisher', icon: LayoutDashboard },
        { name: 'Write Story', href: '/publisher/create', icon: PenTool },
        { name: 'My Stories', href: '/publisher/stories', icon: BookOpen },
        { name: 'Analytics', href: '/publisher/analytics', icon: BarChart2 },
        { name: 'Profile', href: '/publisher/profile', icon: User },
    ];

    return (
        <aside
            className={`relative h-screen bg-[#0f0f0f] border-r border-[#2a2a2a] transition-all duration-300 flex flex-col ${collapsed ? 'w-20' : 'w-64'
                }`}
        >
            {/* Toggle Button */}
            <button
                onClick={() => setCollapsed(!collapsed)}
                className="absolute -right-3 top-6 bg-[var(--color-gold)] text-black rounded-full p-1 shadow-lg hover:bg-[var(--color-gold-light)] transition-colors z-20"
            >
                {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </button>

            {/* Brand */}
            <div className={`p-6 flex items-center ${collapsed ? 'justify-center' : 'justify-start'}`}>
                {collapsed ? (
                    <span className="font-serif text-2xl font-bold text-[var(--color-gold)]">P</span>
                ) : (
                    <div className="flex flex-col">
                        <h1 className="font-serif text-xl font-bold text-white whitespace-nowrap">
                            <span className="text-[var(--color-gold)]">RNA</span> Publisher
                        </h1>
                        <span className="text-xs text-gray-500 uppercase tracking-wider">Writer's Suite</span>
                    </div>
                )}
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 py-4 space-y-2 overflow-y-auto scrollbar-hide">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group ${isActive
                                    ? 'bg-[var(--color-gold)]/10 text-[var(--color-gold)]'
                                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                } ${collapsed ? 'justify-center' : ''}`}
                        >
                            <item.icon size={20} className={isActive ? 'text-[var(--color-gold)]' : ''} />

                            {!collapsed && (
                                <span className="font-medium text-sm whitespace-nowrap">
                                    {item.name}
                                </span>
                            )}

                            {/* Tooltip */}
                            {collapsed && (
                                <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 whitespace-nowrap">
                                    {item.name}
                                </div>
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* User Info */}
            <div className="p-4 border-t border-[#2a2a2a]">
                <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--color-gold)] to-[#b8860b] flex items-center justify-center text-black font-bold text-sm">
                        JM
                    </div>
                    {!collapsed && (
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate">John Mueller</p>
                            <p className="text-xs text-gray-500 truncate">Senior Editor</p>
                        </div>
                    )}
                </div>
            </div>
        </aside>
    );
}

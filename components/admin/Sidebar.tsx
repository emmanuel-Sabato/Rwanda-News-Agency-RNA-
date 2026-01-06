'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    FileText,
    Users,
    Settings,
    BarChart,
    Image as ImageIcon,
    MessageSquare,
    LogOut,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

export default function Sidebar() {
    const pathname = usePathname();
    const [collapsed, setCollapsed] = useState(false);

    const navItems = [
        { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
        { name: 'Articles', href: '/admin/articles', icon: FileText },
        { name: 'Media Library', href: '/admin/media', icon: ImageIcon },
        { name: 'Users', href: '/admin/users', icon: Users },
        { name: 'Comments', href: '/admin/comments', icon: MessageSquare },
        { name: 'Analytics', href: '/admin/analytics', icon: BarChart },
        { name: 'Settings', href: '/admin/settings', icon: Settings },
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

            {/* Logo */}
            <div className={`p-6 flex items-center ${collapsed ? 'justify-center' : 'justify-start'}`}>
                {collapsed ? (
                    <span className="font-serif text-2xl font-bold text-[var(--color-gold)]">R</span>
                ) : (
                    <Link href="/admin">
                        <h1 className="font-serif text-xl font-bold text-white whitespace-nowrap">
                            <span className="text-[var(--color-gold)]">RNA</span> Admin
                        </h1>
                    </Link>
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

                            {/* Tooltip for collapsed state */}
                            {collapsed && (
                                <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 whitespace-nowrap">
                                    {item.name}
                                </div>
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* User & Logout */}
            <div className="p-4 border-t border-[#2a2a2a]">
                <button className={`flex items-center gap-3 w-full px-3 py-3 text-red-400 hover:bg-red-500/10 rounded-lg transition-all duration-200 ${collapsed ? 'justify-center' : ''
                    }`}>
                    <LogOut size={20} />
                    {!collapsed && <span className="font-medium text-sm">Sign Out</span>}
                </button>
            </div>
        </aside>
    );
}

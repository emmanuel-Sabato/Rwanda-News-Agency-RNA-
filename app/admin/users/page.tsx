'use client';

import { Search, UserPlus, MoreHorizontal, Shield, ShieldAlert, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const users = [
    { id: 1, name: 'John Mueller', email: 'john.m@rna.rw', role: 'admin', status: 'Active', lastActive: '2 mins ago', avatar: null },
    { id: 2, name: 'Sarah Johnson', email: 's.johnson@rna.rw', role: 'editor', status: 'Active', lastActive: '15 mins ago', avatar: null },
    { id: 3, name: 'David Kim', email: 'david.kim@rna.rw', role: 'author', status: 'Active', lastActive: '1 hour ago', avatar: null },
    { id: 4, name: 'Amanda Lee', email: 'amanda.lee@example.com', role: 'subscriber', status: 'Inactive', lastActive: '3 days ago', avatar: null },
    { id: 5, name: 'Guest User 242', email: 'guest242@example.com', role: 'subscriber', status: 'Active', lastActive: '5 hours ago', avatar: null },
];

export default function UsersPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-serif font-bold text-white">Users</h1>
                    <p className="text-gray-400">Manage user roles and permissions</p>
                </div>
                <button className="flex items-center gap-2 bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] text-black font-semibold px-4 py-2.5 rounded-lg transition-colors">
                    <UserPlus size={18} />
                    <span>Add User</span>
                </button>
            </div>

            <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl overflow-hidden">
                {/* Toolbar */}
                <div className="p-4 border-b border-[#2a2a2a] flex items-center justify-between gap-4">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search users by name or email..."
                            className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[var(--color-gold)]"
                        />
                    </div>
                    <select className="bg-[#1a1a1a] border border-[#2a2a2a] text-white text-sm rounded-lg px-3 py-2 focus:outline-none">
                        <option>All Roles</option>
                        <option>Admin</option>
                        <option>Editor</option>
                        <option>Author</option>
                        <option>Subscriber</option>
                    </select>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#1a1a1a]/50 text-sm text-gray-500 uppercase tracking-wider">
                                <th className="px-6 py-4 font-medium">User</th>
                                <th className="px-6 py-4 font-medium">Role</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                                <th className="px-6 py-4 font-medium">Last Active</th>
                                <th className="px-6 py-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#2a2a2a]">
                            {users.map((user) => (
                                <tr key={user.id} className="group hover:bg-[#1a1a1a] transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-[var(--color-gold)] font-bold text-lg">
                                                {user.avatar ? (
                                                    <Image src={user.avatar} alt={user.name} width={40} height={40} className="rounded-full" />
                                                ) : (
                                                    user.name.charAt(0)
                                                )}
                                            </div>
                                            <div>
                                                <p className="text-white font-medium">{user.name}</p>
                                                <p className="text-xs text-gray-500">{user.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            {user.role === 'admin' && <ShieldAlert size={16} className="text-red-500" />}
                                            {user.role === 'editor' && <ShieldCheck size={16} className="text-[var(--color-gold)]" />}
                                            {user.role === 'author' && <Shield size={16} className="text-blue-500" />}
                                            <span className="capitalize text-sm text-gray-300">{user.role}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`text-xs px-2 py-1 rounded-full border ${user.status === 'Active'
                                                ? 'bg-green-500/10 text-green-500 border-green-500/20'
                                                : 'bg-gray-500/10 text-gray-500 border-gray-500/20'
                                            }`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-400">
                                        {user.lastActive}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-gray-500 hover:text-white p-1 hover:bg-[#2a2a2a] rounded">
                                            <MoreHorizontal size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

'use client';

import { Save } from 'lucide-react';

export default function SettingsPage() {
    return (
        <div className="max-w-4xl">
            <h1 className="text-3xl font-serif font-bold text-white mb-8">Settings</h1>

            <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl overflow-hidden">
                {/* Settings Tabs */}
                <div className="flex border-b border-[#2a2a2a] bg-[#1a1a1a]">
                    {['General', 'Brand & Logo', 'SEO', 'Social Media', 'API'].map((tab, i) => (
                        <button
                            key={tab}
                            className={`px-6 py-3 text-sm font-medium border-b-2 hover:bg-[#222] transition-colors ${i === 0 ? 'border-[var(--color-gold)] text-[var(--color-gold)] bg-[#141414]' : 'border-transparent text-gray-400 hover:text-white'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="p-8 space-y-8">
                    {/* General Settings Section */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">General Information</h3>
                            <p className="text-gray-500 text-sm">Basic details about your publication.</p>
                        </div>

                        <div className="grid gap-6">
                            <div className="grid gap-2">
                                <label className="text-sm font-medium text-gray-300">Site Title</label>
                                <input type="text" defaultValue="Rwanda News Agency" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[var(--color-gold)]" />
                            </div>

                            <div className="grid gap-2">
                                <label className="text-sm font-medium text-gray-300">Tagline</label>
                                <input type="text" defaultValue="Independent. Trustworthy. Timely." className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[var(--color-gold)]" />
                            </div>

                            <div className="grid gap-2">
                                <label className="text-sm font-medium text-gray-300">Description</label>
                                <textarea rows={4} defaultValue="Your trusted source for news and information from Rwanda and around the world." className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[var(--color-gold)]" />
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-[#2a2a2a] w-full" />

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">Contact Details</h3>
                            <p className="text-gray-500 text-sm">Public contact information shown in the footer.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="grid gap-2">
                                <label className="text-sm font-medium text-gray-300">Email Address</label>
                                <input type="email" defaultValue="contact@rna.rw" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[var(--color-gold)]" />
                            </div>
                            <div className="grid gap-2">
                                <label className="text-sm font-medium text-gray-300">Phone Number</label>
                                <input type="tel" defaultValue="+250 788 000 000" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[var(--color-gold)]" />
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <label className="text-sm font-medium text-gray-300">Physical Address</label>
                            <input type="text" defaultValue="KG 7 Ave, Kigali, Rwanda" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[var(--color-gold)]" />
                        </div>
                    </div>

                    <div className="flex justify-end pt-4">
                        <button className="flex items-center gap-2 bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] text-black font-bold px-6 py-3 rounded-lg transition-colors">
                            <Save size={18} />
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

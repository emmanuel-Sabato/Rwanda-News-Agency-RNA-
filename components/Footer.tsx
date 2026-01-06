'use client';

import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
    sections: [
        { name: 'Politics', href: '/category/politics' },
        { name: 'Economy', href: '/category/economy' },
        { name: 'Sports', href: '/category/sports' },
        { name: 'Entertainment', href: '/category/entertainment' },
        { name: 'Technology', href: '/category/technology' },
        { name: 'Health', href: '/category/health' },
    ],
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Advertise', href: '/advertise' },
        { name: 'Contact', href: '/contact' },
    ],
    legal: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'Editorial Guidelines', href: '/guidelines' },
    ],
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[var(--color-bg-card)] border-t border-[var(--color-border)]">
            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid gap-12 lg:grid-cols-4">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-6">
                            <h3 className="font-serif text-2xl">
                                <span className="text-gradient">Rwanda</span>
                                <span className="text-white"> News Agency</span>
                            </h3>
                            <span className="text-[10px] tracking-[0.2em] text-[var(--color-text-muted)] uppercase">
                                Since 2010
                            </span>
                        </Link>
                        <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">
                            Your trusted source for accurate, timely, and independent news from Rwanda and around the world.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-3 text-[var(--color-text-muted)]">
                                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                <span>KG 7 Ave, Kigali, Rwanda</span>
                            </div>
                            <div className="flex items-center gap-3 text-[var(--color-text-muted)]">
                                <Phone className="w-4 h-4 flex-shrink-0" />
                                <span>+250 788 000 000</span>
                            </div>
                            <div className="flex items-center gap-3 text-[var(--color-text-muted)]">
                                <Mail className="w-4 h-4 flex-shrink-0" />
                                <span>contact@rna.rw</span>
                            </div>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-3 grid gap-8 sm:grid-cols-3">
                        {/* Sections */}
                        <div>
                            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
                                Sections
                            </h4>
                            <ul className="space-y-3">
                                {footerLinks.sections.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors inline-flex items-center gap-1 group"
                                        >
                                            {link.name}
                                            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
                                Company
                            </h4>
                            <ul className="space-y-3">
                                {footerLinks.company.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors inline-flex items-center gap-1 group"
                                        >
                                            {link.name}
                                            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
                                Legal
                            </h4>
                            <ul className="space-y-3">
                                {footerLinks.legal.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors inline-flex items-center gap-1 group"
                                        >
                                            {link.name}
                                            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[var(--color-border)]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        {/* Copyright */}
                        <p className="text-sm text-[var(--color-text-muted)] text-center sm:text-left">
                            © {currentYear} Rwanda News Agency. All rights reserved.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
                                Follow Us
                            </span>
                            <div className="flex items-center gap-2">
                                <a
                                    href="#"
                                    className="p-2 bg-white/5 rounded-lg hover:bg-[var(--color-gold)]/20 hover:text-[var(--color-gold)] transition-colors text-[var(--color-text-muted)]"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="w-4 h-4" />
                                </a>
                                <a
                                    href="#"
                                    className="p-2 bg-white/5 rounded-lg hover:bg-[var(--color-gold)]/20 hover:text-[var(--color-gold)] transition-colors text-[var(--color-text-muted)]"
                                    aria-label="Twitter"
                                >
                                    <Twitter className="w-4 h-4" />
                                </a>
                                <a
                                    href="#"
                                    className="p-2 bg-white/5 rounded-lg hover:bg-[var(--color-gold)]/20 hover:text-[var(--color-gold)] transition-colors text-[var(--color-text-muted)]"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-4 h-4" />
                                </a>
                                <a
                                    href="#"
                                    className="p-2 bg-white/5 rounded-lg hover:bg-[var(--color-gold)]/20 hover:text-[var(--color-gold)] transition-colors text-[var(--color-text-muted)]"
                                    aria-label="YouTube"
                                >
                                    <Youtube className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

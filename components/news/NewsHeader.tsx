'use client';

import { useState, useEffect } from 'react';
import { Menu, Search, X, ChevronRight, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function NewsHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatDate = () => {
    const date = new Date();
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const navLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Advertise', href: '/advertise' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'glass-dark shadow-lg shadow-black/20' : 'bg-[var(--color-bg-dark)]'}`}>
      {/* Top Utility Bar */}
      <div className="hidden lg:block border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs text-[var(--color-text-muted)]">
            {/* Left: Date */}
            <span>{formatDate()}</span>

            {/* Right: Social + Language */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-[var(--color-gold)] transition-colors" aria-label="Facebook">
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a href="#" className="hover:text-[var(--color-gold)] transition-colors" aria-label="Twitter">
                  <Twitter className="w-3.5 h-3.5" />
                </a>
                <a href="#" className="hover:text-[var(--color-gold)] transition-colors" aria-label="Instagram">
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a href="#" className="hover:text-[var(--color-gold)] transition-colors" aria-label="YouTube">
                  <Youtube className="w-3.5 h-3.5" />
                </a>
              </div>
              <span className="w-px h-4 bg-[var(--color-border)]" />
              <select className="bg-transparent text-[var(--color-text-muted)] outline-none cursor-pointer hover:text-white">
                <option value="en">English</option>
                <option value="rw">Kinyarwanda</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Left: Menu Button */}
          <div className="flex items-center gap-4 min-w-[120px]">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-white/5 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
            <span className="hidden lg:block text-sm text-[var(--color-text-muted)]">
              Menu
            </span>
          </div>

          {/* Center: Logo */}
          <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 group">
            <div className="text-center">
              <h1 className="font-serif text-xl sm:text-2xl lg:text-3xl font-normal tracking-tight">
                <span className="text-gradient">Rwanda</span>
                <span className="text-white"> News Agency</span>
              </h1>
              <span className="hidden sm:block text-[10px] tracking-[0.3em] text-[var(--color-text-muted)] uppercase mt-0.5">
                Independent • Trustworthy • Timely
              </span>
            </div>
          </Link>

          {/* Right: Search + Subscribe */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-[120px] justify-end">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-white" />
              </button>

              {/* Expandable Search */}
              {searchOpen && (
                <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 animate-fade-in">
                  <div className="glass rounded-lg p-2">
                    <div className="flex items-center gap-2 bg-white/5 rounded-lg px-4 py-2.5">
                      <Search className="w-4 h-4 text-[var(--color-text-muted)]" />
                      <input
                        type="text"
                        placeholder="Search articles..."
                        className="bg-transparent border-none outline-none text-sm text-white placeholder-[var(--color-text-muted)] w-full"
                        autoFocus
                      />
                      <button
                        onClick={() => setSearchOpen(false)}
                        className="p-1 hover:bg-white/10 rounded"
                      >
                        <X className="w-4 h-4 text-[var(--color-text-muted)]" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Subscribe Button */}
            <button className="btn-primary text-xs sm:text-sm px-3 sm:px-5 py-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Slide-out Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-[var(--color-bg-dark)] z-50 animate-slide-in-left shadow-2xl">
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-[var(--color-border)]">
                <span className="text-lg font-semibold text-white">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Menu Links */}
              <nav className="flex-1 overflow-y-auto p-6">
                <ul className="space-y-1">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="flex items-center justify-between py-3 px-4 text-white hover:text-[var(--color-gold)] hover:bg-white/5 rounded-lg transition-colors group"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="text-base">{link.name}</span>
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-[var(--color-border)]">
                  <h4 className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-4">
                    Follow Us
                  </h4>
                  <div className="flex items-center gap-4">
                    <a href="#" className="p-3 bg-white/5 rounded-lg hover:bg-[var(--color-gold)]/20 hover:text-[var(--color-gold)] transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-3 bg-white/5 rounded-lg hover:bg-[var(--color-gold)]/20 hover:text-[var(--color-gold)] transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-3 bg-white/5 rounded-lg hover:bg-[var(--color-gold)]/20 hover:text-[var(--color-gold)] transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-3 bg-white/5 rounded-lg hover:bg-[var(--color-gold)]/20 hover:text-[var(--color-gold)] transition-colors">
                      <Youtube className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </nav>

              {/* Menu Footer */}
              <div className="p-6 border-t border-[var(--color-border)]">
                <button className="btn-primary w-full text-sm">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

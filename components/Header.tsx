// components/Header.tsx

import Link from 'next/link';
import { ThemeProvider } from '@/components/ThemeProvider'; // if you need it here

// You can keep your existing imports and types

export default function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white dark:bg-neutral-900 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Title */}
          <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            RNA
          </Link>

          {/* Navigation (add your links here) */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/news" className="text-neutral-700 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-blue-400">
              News
            </Link>
            <Link href="/category/politics" className="text-neutral-700 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-blue-400">
              Politics
            </Link>
            <Link href="/category/economy" className="text-neutral-700 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-blue-400">
              Economy
            </Link>
            <Link href="/category/sports" className="text-neutral-700 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-blue-400">
              Sports
            </Link>
            {/* Add more as needed */}
          </nav>

          {/* Search Button */}
          <Link
            href="/search"
            className="p-2 hover:bg-neutral-100 rounded-lg transition-colors dark:hover:bg-neutral-800"
            aria-label="Search"
          >
            <svg
              className="w-5 h-5 text-neutral-700 dark:text-neutral-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
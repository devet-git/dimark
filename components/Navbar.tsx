'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import { Sun, Moon, Menu, X, ArrowRight, PhoneCall, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Giới thiệu', href: '/gioi-thieu' },
    { name: 'Dịch vụ', href: '/dich-vu' },
    { name: 'Dự án tiêu biểu', href: '/du-an' },
    { name: 'Bảng giá & ROI', href: '/bang-gia' },
    { name: 'Đánh giá', href: '/danh-gia' },
    { name: 'Kiến thức', href: '/blog' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-md shadow-sm border-b border-slate-200/60 dark:border-slate-800/80 py-3.5'
          : 'bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm py-4 border-b border-slate-200/30 dark:border-slate-800/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 via-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <span className="text-white font-extrabold text-lg tracking-tighter">D</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
                Dimark<span className="text-cyan-500 font-black">.</span>
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-500 dark:text-slate-400 -mt-1">
                Digital Agency
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    active
                      ? 'text-cyan-600 dark:text-cyan-400 font-semibold'
                      : 'text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400'
                  }`}
                >
                  {link.name}
                  {active && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-500 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Dark mode switcher */}
            <button
              onClick={toggleTheme}
              aria-label="Chuyển đổi giao diện sáng/tối"
              className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Quick phone hotline */}
            <a
              href="tel:0813839079"
              className="hidden xl:flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-cyan-500" />
              <span>0813 839 079</span>
            </a>

            {/* CTA Audit button */}
            <Link
              href="/tu-van"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg shadow-sm shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Đăng Ký Tư Vấn</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Đổi giao diện"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-base font-medium py-1 border-b border-slate-100 dark:border-slate-900 ${
                        active
                          ? 'text-cyan-600 dark:text-cyan-400 font-semibold'
                          : 'text-slate-700 hover:text-cyan-600 dark:text-slate-200 dark:hover:text-cyan-400'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-2 flex flex-col gap-3">
                <Link
                  href="/tu-van"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-center font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg shadow-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Đăng ký Audit Marketing 1-1</span>
                </Link>
                <a
                  href="tel:0813839079"
                  className="flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded-lg"
                >
                  <PhoneCall className="w-4 h-4 text-cyan-500" />
                  <span>Hotline: 0813 839 079 (Tư vấn 24/7)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

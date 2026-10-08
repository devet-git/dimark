'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Zap,
  BarChart3,
  Target,
  Sparkles,
  CheckCircle2,
  Users2,
  Award
} from 'lucide-react';

export default function HeroSection() {
  const brandLogos = [
    { name: 'Coolmate', label: 'D2C Fashion' },
    { name: 'Juno', label: 'Retail Chain' },
    { name: 'Sun World', label: 'Travel & Leisure' },
    { name: 'Techcom', label: 'Financial Services' },
    { name: 'Vinamilk Eco', label: 'FMCG Brand' },
    { name: 'KiotViet', label: 'B2B Software' },
    { name: 'Medix Health', label: 'Healthcare & Clinic' }
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradients for subtle modern atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl" />
        <div className="absolute -top-32 right-1/4 w-[550px] h-[550px] bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-3xl" />
        <div className="absolute top-60 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-7">
            {/* Unboxed subtle kicker (anti-slop compliant) */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span>Performance Marketing & SEO Thống Trị Ngành</span>
              <span aria-hidden="true">·</span>
              <span>Cam Kết ROAS & Doanh Thu</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]"
            >
              Bứt Phá Doanh Thu Bằng{' '}
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-300 bg-clip-text text-transparent">
                Digital Marketing
              </span>{' '}
              Dẫn Đầu Dữ Liệu
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal"
            >
              Dimark kết hợp <strong className="font-semibold text-slate-900 dark:text-white">Performance Ads đa kênh</strong>,{' '}
              <strong className="font-semibold text-slate-900 dark:text-white">SEO Tổng thể bền vững</strong> và{' '}
              <strong className="font-semibold text-slate-900 dark:text-white">Tối ưu tỷ lệ chuyển đổi (CRO)</strong> để biến từng đồng ngân sách marketing thành cỗ máy sinh lời thực chiến cho doanh nghiệp.
            </motion.p>

            {/* CTAs & Trust bullet */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 pt-1"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  href="/tu-van"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-cyan-600/20 hover:shadow-cyan-600/35 transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Đăng Ký Audit Miễn Phí (5.000.000đ)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/du-an"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-base font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl transition-all"
                >
                  <BarChart3 className="w-4 h-4 text-cyan-500" />
                  <span>Xem Case Study Thực Chiến</span>
                </Link>
              </div>

              {/* Trust checklist */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500 dark:text-slate-400 pt-1">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  Hợp đồng cam kết KPI minh bạch
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  Báo cáo Real-time qua Looker Studio
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  Tài khoản quảng cáo do khách hàng sở hữu 100%
                </span>
              </div>
            </motion.div>

            {/* Quick stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800/80">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  +340%
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                  Tăng trưởng ROAS trung bình
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  180+
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                  Doanh nghiệp tăng trưởng
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  -42%
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                  Tối ưu chi phí CPA/Lead
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  98.6%
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                  Khách hàng tiếp tục gia hạn
                </p>
              </div>
            </div>
          </div>

          {/* Right Hero Visual: Real-time Live Dashboard Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative rounded-2xl bg-white dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-7 space-y-6"
            >
              {/* Header inside card */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      Báo Cáo Tăng Trưởng Live
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Tài khoản chiến dịch Q1/2026
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-800/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>Hoạt động 24/7</span>
                </div>
              </div>

              {/* Main Metric Highlight */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800/80">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">
                    Doanh thu chuyển đổi
                  </span>
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    2.84 Tỷ đ
                  </div>
                  <div className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>+41.8% so với kỳ trước</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800/80">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">
                    Chỉ số ROAS thực tế
                  </span>
                  <div className="text-xl sm:text-2xl font-extrabold text-cyan-600 dark:text-cyan-400 tracking-tight">
                    5.42x
                  </div>
                  <div className="flex items-center gap-1 text-xs text-cyan-600 dark:text-cyan-400 font-semibold mt-1">
                    <Target className="w-3.5 h-3.5" />
                    <span>Mục tiêu cam kết: 3.8x</span>
                  </div>
                </div>
              </div>

              {/* Visual simulated channel bar breakdown */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <span>Phân bổ hiệu quả đa kênh</span>
                  <span className="text-slate-400 dark:text-slate-500">Cập nhật 5 phút trước</span>
                </div>

                {/* Progress channels */}
                <div className="space-y-2.5">
                  <div>
                    <div className="flex justify-between text-xs text-slate-600 dark:text-slate-300 mb-1">
                      <span className="font-medium">Meta Ads (Reels & Advantage+)</span>
                      <span className="font-semibold">ROAS 5.8x · 1,420 đơn</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full w-[85%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-600 dark:text-slate-300 mb-1">
                      <span className="font-medium">Google Ads (Search & Shopping)</span>
                      <span className="font-semibold">ROAS 6.1x · 980 đơn</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-[74%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-600 dark:text-slate-300 mb-1">
                      <span className="font-medium">TikTok GMV & Shop Ads</span>
                      <span className="font-semibold">ROAS 4.6x · 1,890 đơn</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full w-[68%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-600 dark:text-slate-300 mb-1">
                      <span className="font-medium">SEO Organic & Inbound Traffic</span>
                      <span className="font-semibold">+185% Khách tự nhiên</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full w-[92%]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom quick prompt to trigger audit */}
              <div className="pt-2">
                <Link
                  href="/tu-van"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <span>Nhận phân tích hiệu quả kênh cho ngành hàng của bạn</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Client Brands Bar */}
        <div className="mt-20 pt-10 border-t border-slate-200/80 dark:border-slate-800/80">
          <p className="text-center text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-8">
            Được tin cậy bởi các doanh nghiệp và thương hiệu hàng đầu
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-center">
            {brandLogos.map((brand) => (
              <div
                key={brand.name}
                className="flex flex-col items-center justify-center p-3 rounded-lg hover:bg-slate-100/60 dark:hover:bg-slate-900/60 transition-colors"
              >
                <span className="text-base font-bold text-slate-700 dark:text-slate-300 tracking-tight">
                  {brand.name}
                </span>
                <span className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                  {brand.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

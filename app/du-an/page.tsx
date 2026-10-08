import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import Footer from '@/components/Footer';
import LiveChatWidget from '@/components/LiveChatWidget';
import Link from 'next/link';
import { Award, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dự Án Tiêu Biểu & Case Studies Thực Chiến | Dimark Agency',
  description: 'Khám phá các case study tăng trưởng doanh số thực tế tại Dimark: CoolStyle (+380% ROAS), Medix Dental (280+ lịch hẹn/tháng), SmartFlow SaaS (giảm 42% CPL).',
  openGraph: {
    title: 'Dự Án Tiêu Biểu & Case Studies Thực Chiến | Dimark Agency',
    description: 'Các câu chuyện tăng trưởng doanh số thực tế từ hơn 180+ khách hàng đồng hành cùng Dimark.',
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      <Navbar />

      <main className="flex-1 pt-24">
        {/* Page Hero Header */}
        <div className="py-16 md:py-20 bg-gradient-to-b from-blue-500/10 via-slate-50 to-slate-50 dark:from-blue-950/30 dark:via-slate-950 dark:to-slate-950 border-b border-slate-200/60 dark:border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              <Award className="w-4 h-4" />
              <span>Chứng Thực Dữ Liệu · Kết Quả Đo Lường Minh Bạch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Dự Án Tiêu Biểu & Case Studies
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Mỗi dự án là một bài toán cụ thể về tối ưu chi phí, vượt qua bão hòa tệp khách hàng và nhân rộng quy mô doanh thu bền vững.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/tu-van"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-md shadow-cyan-600/20"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Nhận Tư Vấn Kế Hoạch Cho Ngành Của Bạn</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Featured Case Studies Grid */}
        <CaseStudiesSection />

        {/* Industry Benchmarks Callout */}
        <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-200/60 dark:border-slate-800/60">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="flex items-center justify-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <TrendingUp className="w-4 h-4" />
              <span>Thành Tích Tổng Kết 2024 - 2026</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Sẵn Sàng Để Trở Thành Câu Chuyện Thành Công Tiếp Theo?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Đội ngũ Dimark đã chuẩn bị sẵn các Framework chiến lược đã được kiểm chứng cho từng phân khúc ngành hàng. Chỉ cần một buổi phân tích 1-1 để tìm ra đòn bẩy bứt phá cho bạn.
            </p>
            <div className="pt-2">
              <Link
                href="/tu-van"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 transition-colors"
              >
                <span>Đăng Ký Buổi Khám Bệnh Kênh 1-1 Miễn Phí</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <LiveChatWidget />
      <Footer />
    </div>
  );
}

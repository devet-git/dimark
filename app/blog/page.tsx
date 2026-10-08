import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';
import LiveChatWidget from '@/components/LiveChatWidget';
import Link from 'next/link';
import { BookOpen, Sparkles, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog Kiến Thức Digital Marketing Thực Chiến | Dimark',
  description: 'Kho kiến thức chuyên môn về Performance Ads 2026, SEO Topic Cluster, Kịch bản video ngắn TikTok/Reels và Tối ưu tỷ lệ chuyển đổi CRO cập nhật mới nhất từ Dimark.',
  openGraph: {
    title: 'Blog Kiến Thức Digital Marketing Thực Chiến | Dimark',
    description: 'Chiến lược, phân tích thuật toán và cẩm nang tăng trưởng được đúc kết từ 180+ chiến dịch thực tế.',
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      <Navbar />

      <main className="flex-1 pt-24">
        {/* Page Hero Header */}
        <div className="py-16 md:py-20 bg-gradient-to-b from-teal-500/10 via-slate-50 to-slate-50 dark:from-teal-950/20 dark:via-slate-950 dark:to-slate-950 border-b border-slate-200/60 dark:border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              <BookOpen className="w-4 h-4" />
              <span>Góc Nhìn Chuyên Gia · Kiến Thức Thực Chiến</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Blog Kiến Thức Digital Marketing
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Những bài viết chuyên sâu, phân tích thuật toán Meta/Google/TikTok và hướng dẫn từng bước nâng cao hiệu quả quảng cáo cho doanh nghiệp.
            </p>
          </div>
        </div>

        {/* Blog Component */}
        <BlogSection />

        {/* Bottom Editorial Callout */}
        <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-200/60 dark:border-slate-800/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Bạn Muốn Áp Dụng Ngay Những Chiến Lược Này Cho Doanh Nghiệp?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
              Đừng để kiến thức chỉ dừng lại trên lý thuyết. Hãy để đội ngũ Dimark giúp bạn thiết lập và vận hành hệ thống tăng trưởng bài bản ngay hôm nay.
            </p>
            <div className="pt-2">
              <Link
                href="/tu-van"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-md shadow-cyan-600/20"
              >
                <Sparkles className="w-4 h-4" />
                <span>Đặt Lịch Trao Đổi Chiến Lược 1-1</span>
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

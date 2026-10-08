import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import LiveChatWidget from '@/components/LiveChatWidget';
import Link from 'next/link';
import { Star, ShieldCheck, ArrowRight, Sparkles, Building2, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Đánh Giá Từ Khách Hàng Thực Tế | Dimark Agency',
  description: 'Khám phá ý kiến đánh giá và phản hồi của hơn 180+ nhà sáng lập, CEO và CMO doanh nghiệp đã cùng Dimark bứt phá doanh số Digital Marketing.',
  openGraph: {
    title: 'Đánh Giá Từ Khách Hàng Thực Tế | Dimark Agency',
    description: 'Hơn 98.6% khách hàng tiếp tục gia hạn hợp đồng và đạt chỉ số ROAS vượt mong đợi.',
  },
};

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      <Navbar />

      <main className="flex-1 pt-24">
        {/* Page Hero Header */}
        <div className="py-16 md:py-20 bg-gradient-to-b from-amber-500/10 via-slate-50 to-slate-50 dark:from-amber-950/20 dark:via-slate-950 dark:to-slate-950 border-b border-slate-200/60 dark:border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span>Được Tin Chọn Bởi 180+ Doanh Nghiệp Hàng Đầu</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Đánh Giá & Phản Hồi Từ Khách Hàng
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Sự hài lòng và tăng trưởng doanh thu thực tế của các đối tác chính là thước đo giá trị cao nhất cho năng lực thực thi của Dimark.
            </p>
          </div>
        </div>

        {/* Testimonials Component */}
        <TestimonialsSection />

        {/* Commitment Statement Section */}
        <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-200/60 dark:border-slate-800/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-800 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mx-auto">
              <ShieldCheck className="w-7 h-7" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Cam Kết &quot;Không Rủi Ro&quot; Dành Cho Đối Tác Mới
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Chúng tôi hiểu việc thay đổi agency hoặc bắt đầu hợp tác với một đối tác mới luôn đi kèm những băn khoăn về ngân sách. Đó là lý do Dimark luôn bắt đầu bằng buổi <strong className="font-semibold text-slate-900 dark:text-white">Audit Toàn Diện Miễn Phí</strong> để chứng minh năng lực chuyên môn trước khi ký kết bất kỳ hợp đồng kinh tế nào.
            </p>

            <div className="pt-2">
              <Link
                href="/tu-van"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-md shadow-cyan-600/20 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Trải Nghiệm Buổi Khám Bệnh Kênh 1-1 Miễn Phí Ngay</span>
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

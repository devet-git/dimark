import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';
import LiveChatWidget from '@/components/LiveChatWidget';
import Link from 'next/link';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dịch Vụ Digital Marketing Chuyên Nghiệp | Dimark Agency',
  description: 'Trọn gói dịch vụ Digital Marketing: Performance Ads (Meta, Google, TikTok), SEO Tổng Thể Top 1 Google, Sáng tạo Video Ngắn, Tối ưu chuyển đổi CRO & Marketing Automation tại Dimark.',
  openGraph: {
    title: 'Dịch Vụ Digital Marketing Chuyên Nghiệp | Dimark Agency',
    description: 'Hệ sinh thái Digital Marketing toàn diện cam kết KPI và ROAS thực chiến cho doanh nghiệp.',
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      <Navbar />

      <main className="flex-1 pt-24">
        {/* Page Hero Header */}
        <div className="py-16 md:py-20 bg-gradient-to-b from-cyan-500/10 via-slate-50 to-slate-50 dark:from-cyan-950/30 dark:via-slate-950 dark:to-slate-950 border-b border-slate-200/60 dark:border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              <Zap className="w-4 h-4" />
              <span>Giải Pháp Toàn Diện · Cam Kết KPI Định Lượng</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Dịch Vụ Digital Marketing Thực Chiến
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Từ thu hút tệp khách hàng tiềm năng, tối ưu chi phí quảng cáo đến nuôi dưỡng giá trị vòng đời khách hàng (LTV) khép kín cho thương hiệu của bạn.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/tu-van"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-md shadow-cyan-600/20"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Nhận Tư Vấn Gói Dịch Vụ Phù Hợp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/bang-gia"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
              >
                <span>Xem Bảng Giá & Dự Báo ROI</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Detailed Services Component */}
        <ServicesSection />

        {/* Why Choose Dimark Workflow */}
        <section className="py-20 bg-slate-50 dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Nguyên Tắc Triển Khai Tại Dimark
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Khác biệt của một Agency định hướng dữ liệu và bảo đảm kết quả
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/50 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-bold">
                  01
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Không &quot;Đốt Ngân Sách Mù Quáng&quot;
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Mọi chiến dịch đều bắt đầu từ việc chuẩn hóa Tracking Pixel & Conversion API để đo lường chính xác từng đồng chi tiêu tạo ra bao nhiêu doanh thu.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/50 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-bold">
                  02
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Nội Dung Creative Là Vũ Khí
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Đội ngũ sản xuất Video ngắn và Creative liên tục thử nghiệm các góc tiếp cận mới để giữ CPM thấp và tỷ lệ chuyển đổi cao nhất.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/50 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-bold">
                  03
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Cam Kết Hợp Đồng Pháp Lý
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Có điều khoản phạt hoặc hoàn trả phí dịch vụ nếu không đạt các mốc KPI thỏa thuận ban đầu, mang lại sự an tâm tuyệt đối cho khách hàng.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/tu-van"
                className="inline-flex items-center gap-2 text-sm font-bold text-cyan-600 dark:text-cyan-400 hover:underline"
              >
                <span>Cần tư vấn một gói kết hợp riêng biệt cho thương hiệu của bạn? Đặt lịch ngay</span>
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

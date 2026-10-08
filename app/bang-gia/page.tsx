import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import PricingSection from '@/components/PricingSection';
import RoiCalculator from '@/components/RoiCalculator';
import Footer from '@/components/Footer';
import LiveChatWidget from '@/components/LiveChatWidget';
import Link from 'next/link';
import { DollarSign, ShieldCheck, ArrowRight, Sparkles, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Bảng Giá Dịch Vụ Digital Marketing & Dự Báo ROI | Dimark',
  description: 'Bảng giá minh bạch các gói Starter, Pro Scaling và Enterprise tại Dimark. Tích hợp công cụ tính toán dự báo ngân sách và doanh thu ROAS theo từng ngành hàng.',
  openGraph: {
    title: 'Bảng Giá Dịch Vụ Digital Marketing & Dự Báo ROI | Dimark',
    description: 'Minh bạch chi phí, không phí ẩn, cam kết KPI và ROAS theo hợp đồng pháp lý.',
  },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      <Navbar />

      <main className="flex-1 pt-24">
        {/* Page Hero Header */}
        <div className="py-16 md:py-20 bg-gradient-to-b from-indigo-500/10 via-slate-50 to-slate-50 dark:from-indigo-950/30 dark:via-slate-950 dark:to-slate-950 border-b border-slate-200/60 dark:border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              <DollarSign className="w-4 h-4" />
              <span>Đầu Tư Thông Minh · Đo Lường Chuẩn Xác</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Bảng Giá Dịch Vụ & Dự Báo Doanh Thu
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Mọi gói giải pháp đều được thiết kế tối ưu hóa tỷ lệ sinh lời trên chi phí (ROI), có điều khoản cam kết chỉ số KPI rõ ràng trên hợp đồng.
            </p>
          </div>
        </div>

        {/* Pricing Tiers Section */}
        <PricingSection />

        {/* Interactive ROI Forecaster Calculator Section */}
        <RoiCalculator />

        {/* Package Comparison Summary Table */}
        <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200/60 dark:border-slate-800/60">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Bảng So Sánh Quyền Lợi Chi Tiết
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Lựa chọn phương án phù hợp nhất với giai đoạn phát triển hiện tại của doanh nghiệp
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 uppercase font-bold text-[11px]">
                  <tr>
                    <th className="p-4">Hạng mục quyền lợi</th>
                    <th className="p-4">Starter Growth</th>
                    <th className="p-4 text-cyan-600 dark:text-cyan-400">Pro Scaling (Khuyên Dùng)</th>
                    <th className="p-4">Enterprise Dominance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/70 dark:divide-slate-800">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-slate-900 dark:text-white">Kênh triển khai</td>
                    <td className="p-4 text-slate-600 dark:text-slate-300">1 Kênh chính (Meta/Google)</td>
                    <td className="p-4 text-cyan-600 dark:text-cyan-300 font-semibold">Đa kênh Meta + Google + TikTok</td>
                    <td className="p-4 text-slate-900 dark:text-white font-bold">Không giới hạn mọi kênh</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-slate-900 dark:text-white">Sản xuất Creative & Hook</td>
                    <td className="p-4 text-slate-600 dark:text-slate-300">12 mẫu / tháng</td>
                    <td className="p-4 text-cyan-600 dark:text-cyan-300 font-semibold">24 mẫu + 6 Video ngắn TikTok</td>
                    <td className="p-4 text-slate-900 dark:text-white font-bold">35+ mẫu + 15 Video ngắn</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-slate-900 dark:text-white">Landing Page High-Converting</td>
                    <td className="p-4 text-slate-400">-</td>
                    <td className="p-4 text-emerald-500 font-bold">Bao gồm 1 Landing Page trọn gói</td>
                    <td className="p-4 text-emerald-500 font-bold">Bao gồm 3 Landing Pages</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-slate-900 dark:text-white">SEO Tổng Thể Trang 1 Google</td>
                    <td className="p-4 text-slate-400">-</td>
                    <td className="p-4 text-slate-600 dark:text-slate-300">Tùy chọn nâng cao</td>
                    <td className="p-4 text-emerald-500 font-bold">Cam kết Top 1-3 cho 100+ từ khóa</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-slate-900 dark:text-white">Cam kết KPI pháp lý</td>
                    <td className="p-4 text-slate-600 dark:text-slate-300">Cam kết chuẩn hóa tài khoản</td>
                    <td className="p-4 text-cyan-600 dark:text-cyan-300 font-semibold">Cam kết ROAS trung bình 4x - 6x</td>
                    <td className="p-4 text-slate-900 dark:text-white font-bold">Cam kết mốc Doanh thu & CPL</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-slate-900 dark:text-white">Báo cáo & Dashboard</td>
                    <td className="p-4 text-slate-600 dark:text-slate-300">Cập nhật hàng tuần</td>
                    <td className="p-4 text-cyan-600 dark:text-cyan-300 font-semibold">Real-time Looker Studio 24/7</td>
                    <td className="p-4 text-slate-900 dark:text-white font-bold">Custom BI Analytics + Server CAPI</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="pt-10 text-center">
              <Link
                href="/tu-van"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-md shadow-cyan-600/25 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Đăng Ký Nhận Báo Giá Tùy Chỉnh & Lịch Tư Vấn 1-1</span>
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

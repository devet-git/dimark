import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ConsultationForm from '@/components/ConsultationForm';
import Footer from '@/components/Footer';
import LiveChatWidget from '@/components/LiveChatWidget';
import { Sparkles, PhoneCall, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Đăng Ký Tư Vấn & Nhận Audit Marketing 1-1 Miễn Phí | Dimark',
  description: 'Đặt lịch tư vấn chiến lược Digital Marketing 1-1 với Chuyên gia Trưởng Dimark (Trị giá 5.000.000đ). Nhận báo cáo phân tích tài khoản ads, website và lộ trình 90 ngày.',
  openGraph: {
    title: 'Đăng Ký Tư Vấn & Nhận Audit Marketing 1-1 Miễn Phí | Dimark',
    description: 'Chuyên gia Trưởng trực tiếp phân tích hiện trạng marketing của bạn trong 45 phút hoàn toàn miễn phí.',
  },
};

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      <Navbar />

      <main className="flex-1 pt-24">
        {/* Page Hero Header */}
        <div className="py-16 md:py-20 bg-gradient-to-b from-cyan-500/10 via-slate-50 to-slate-50 dark:from-cyan-950/20 dark:via-slate-950 dark:to-slate-950 border-b border-slate-200/60 dark:border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              <Sparkles className="w-4 h-4" />
              <span>Đặc Quyền Dành Cho Doanh Nghiệp Mới · Trị Giá 5.000.000đ</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Đăng Ký Tư Vấn & Nhận Audit 1-1 Miễn Phí
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Điền thông tin bên dưới để chuyên gia trưởng của chúng tôi nghiên cứu trước số liệu đối thủ và chuẩn bị buổi họp chiến lược riêng cho bạn.
            </p>
          </div>
        </div>

        {/* The Complete Consultation Form */}
        <ConsultationForm />

        {/* Office Contact Info Cards */}
        <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-200/60 dark:border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Văn Phòng Làm Việc Trực Tiếp
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Quý đối tác có thể ghé thăm trực tiếp văn phòng Dimark hoặc kết nối tư vấn online 1-1 qua Google Meet
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-600/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Địa Chỉ Văn Phòng</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">308 Nguyễn Thị Minh Khai</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-200/60 dark:border-slate-700">
                  308 Nguyễn Thị Minh Khai, Quy Nhơn, Gia Lai
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-600/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Quy Mô & Thành Lập</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Thành lập tháng 6/2021</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-200/60 dark:border-slate-700">
                  Boutique Agency tinh gọn · Tập trung chuyên sâu từng dự án với chuyên gia trưởng
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-600/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Hotline & Zalo 24/7</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">0813 839 079</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-200/60 dark:border-slate-700">
                  Email: contact@dimark.vn · Làm việc: Thứ 2 – Thứ 7 (8:00 – 18:00)
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <LiveChatWidget />
      <Footer />
    </div>
  );
}

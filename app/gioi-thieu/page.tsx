import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import LiveChatWidget from '@/components/LiveChatWidget';
import Link from 'next/link';
import {
  Calendar,
  Building2,
  MapPin,
  PhoneCall,
  Mail,
  CheckCircle2,
  Users,
  Target,
  ShieldCheck,
  TrendingUp,
  Award,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Giới Thiệu Về Dimark | Boutique Digital Agency Thành Lập 06/2021',
  description: 'Khám phá câu chuyện hình thành từ tháng 6/2021 của Dimark – công ty boutique digital marketing quy mô nhỏ, chuyên sâu và thực chiến tại 308 Nguyễn Thị Minh Khai, Quy Nhơn, Gia Lai.',
  openGraph: {
    title: 'Giới Thiệu Về Dimark Digital Agency',
    description: 'Thành lập từ 06/2021. Mô hình Boutique Agency tinh gọn, chuyên sâu Performance Ads, SEO và CRO cho doanh nghiệp.',
  },
};

export default function GioiThieuPage() {
  const milestones = [
    {
      time: 'Tháng 06/2021',
      title: 'Thành Lập Dimark Digital Agency',
      desc: 'Bắt đầu với nhóm 3 chuyên gia Media Buying và SEO kỳ cựu với mong muốn mang lại dịch vụ tăng trưởng dựa trên dữ liệu thực tế và cam kết hiệu quả cho các thương hiệu SME.'
    },
    {
      time: 'Năm 2022',
      title: 'Định Hình Mô Hình Boutique Agency Tinh Gọn',
      desc: 'Quyết định không mở rộng nhân sự đại trà mà tập trung nâng cao năng lực chuyên sâu, giới hạn số lượng đối tác để mỗi khách hàng đều được Chuyên gia Trưởng trực tiếp theo sát.'
    },
    {
      time: 'Năm 2023 - 2024',
      title: 'Tiên Phong Video Ngắn & Conversion Rate Optimization (CRO)',
      desc: 'Triển khai thành công hệ thống sản xuất kịch bản TikTok/Reels thực chiến và tối ưu phễu Landing Page cho hơn 120+ chiến dịch E-commerce và B2B.'
    },
    {
      time: 'Năm 2025 - 2026',
      title: 'Cột Mốc 180+ Doanh Nghiệp Đồng Hành',
      desc: 'Duy trì tỷ lệ khách hàng gia hạn hợp đồng trên 92%, tiếp tục đặt trụ sở làm việc tại 308 Nguyễn Thị Minh Khai, Quy Nhơn, Gia Lai và hỗ trợ khách hàng toàn quốc.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      <Navbar />

      <main className="flex-1 pt-24">
        {/* Page Hero Header */}
        <div className="py-16 md:py-20 bg-gradient-to-b from-cyan-500/10 via-slate-50 to-slate-50 dark:from-cyan-950/30 dark:via-slate-950 dark:to-slate-950 border-b border-slate-200/60 dark:border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-100/60 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800">
              <Sparkles className="w-4 h-4" />
              <span>Câu Chuyện & Sứ Mệnh Thương Hiệu</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Chúng Tôi Là <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Dimark</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Thành lập từ <strong className="text-cyan-600 dark:text-cyan-400 font-semibold">tháng 6/2021</strong>, Dimark là công ty 
              <strong className="text-slate-900 dark:text-white font-semibold"> Boutique Digital Marketing quy mô nhỏ</strong> nhưng tinh gọn và sắc bén. Chúng tôi chọn chất lượng chuyển đổi thực chiến thay vì mở rộng số lượng dàn trải.
            </p>
          </div>
        </div>

        {/* Company Quick Summary Specs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <Calendar className="w-8 h-8 text-cyan-500 shrink-0" />
              <div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Thời điểm thành lập</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">Tháng 06/2021</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <Building2 className="w-8 h-8 text-blue-500 shrink-0" />
              <div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Mô hình hoạt động</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">Boutique Agency (Quy mô nhỏ)</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <MapPin className="w-8 h-8 text-indigo-500 shrink-0" />
              <div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Địa chỉ văn phòng</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white truncate">308 Nguyễn Thị Minh Khai, Quy Nhơn</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <PhoneCall className="w-8 h-8 text-emerald-500 shrink-0" />
              <div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Hotline & Zalo hỗ trợ</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">0813 839 079</div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed About Section Component */}
        <AboutSection />

        {/* Development Timeline */}
        <section className="py-20 bg-slate-50 dark:bg-slate-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-16">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Hành Trình Phát Triển Của Dimark
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Gần 5 năm đồng hành cùng sự tăng trưởng doanh số của các doanh nghiệp đối tác
              </p>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 sm:before:left-1/2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
              {milestones.map((m, idx) => (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex items-center justify-center w-7 h-7 rounded-full bg-cyan-600 text-white font-bold text-xs ring-4 ring-white dark:ring-slate-900 absolute left-0 sm:left-1/2 -translate-x-1/2 z-10">
                    {idx + 1}
                  </div>

                  <div className={`w-full sm:w-1/2 pl-10 sm:pl-0 ${
                    idx % 2 === 0 ? 'sm:pr-10 sm:text-right' : 'sm:pl-10'
                  }`}>
                    <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                      <span className="inline-block px-2.5 py-0.5 text-xs font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 rounded-md">
                        {m.time}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {m.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Office Contact Info Section */}
        <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-indigo-900/20 rounded-3xl p-8 sm:p-12 border border-cyan-500/20 text-center space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Ghé Thăm Hoặc Kết Nối Trực Tiếp Với Dimark
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Đội ngũ chuyên gia Dimark luôn sẵn sàng lắng nghe bài toán kinh doanh của bạn, dù bạn đến trực tiếp văn phòng tại <strong>308 Nguyễn Thị Minh Khai, Quy Nhơn, Gia Lai</strong> hay trao đổi online 1-1 qua Google Meet.
              </p>

              <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
                <Link
                  href="/tu-van"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg shadow-cyan-600/25 flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Đăng Ký Tư Vấn Audit Miễn Phí</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:0813839079"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm text-slate-900 dark:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-all flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-cyan-500" />
                  <span>Gọi 0813 839 079 (Hỗ trợ 24/7)</span>
                </a>
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

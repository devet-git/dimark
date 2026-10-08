'use client';

import React from 'react';
import Link from 'next/link';
import {
  Calendar,
  Building2,
  MapPin,
  PhoneCall,
  CheckCircle2,
  Users,
  Target,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Award
} from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    {
      icon: Calendar,
      title: 'Thành Lập Từ Tháng 6/2021',
      desc: 'Gần 5 năm thực chiến đồng hành cùng hơn 180+ nhãn hàng, thương hiệu SME và E-commerce bứt phá tăng trưởng.',
      highlight: '06/2021'
    },
    {
      icon: Building2,
      title: 'Mô Hình Boutique Agency Tinh Gọn',
      desc: 'Công ty quy mô nhỏ nhưng chuyên sâu. Không tầng nấc cồng kềnh, đối tác làm việc trực tiếp với Chuyên gia Trưởng.',
      highlight: 'Quy mô tinh gọn'
    },
    {
      icon: MapPin,
      title: 'Văn Phòng Tại Quy Nhơn, Gia Lai',
      desc: 'Tọa lạc tại 308 Nguyễn Thị Minh Khai, Quy Nhơn, Gia Lai. Sẵn sàng đón tiếp và tư vấn chiến lược trực tiếp.',
      highlight: '308 Nguyễn Thị Minh Khai'
    },
    {
      icon: PhoneCall,
      title: 'Hotline / Zalo Trực Tiếp',
      desc: 'Kết nối nhanh chóng 24/7 qua 0813 839 079. Hỗ trợ phản hồi và xử lý vấn đề trong vòng 15-30 phút.',
      highlight: '0813 839 079'
    }
  ];

  const coreValues = [
    {
      title: '1. Chuyên Gia Trưởng Trực Tiếp Triển Khai',
      desc: 'Tại các agency lớn, chiến dịch của bạn thường được giao cho thực tập sinh hay junior. Tại Dimark, các Senior Strategist với hơn 7 năm kinh nghiệm trực tiếp lên media plan và tối ưu tài khoản.'
    },
    {
      title: '2. Giới Hạn Số Lượng Dự Án Tiếp Nhận',
      desc: 'Dimark chủ động duy trì quy mô boutique và chỉ nhận tối đa 5 đối tác mới mỗi tháng. Chúng tôi ưu tiên chất lượng chuyển đổi và tỷ lệ ROAS thay vì mở rộng dàn trải số lượng.'
    },
    {
      title: '3. Dữ Liệu Thực Chiến & Minh Bạch 100%',
      desc: '100% tài khoản quảng cáo, pixel, fanpage và tệp khách hàng thuộc quyền sở hữu của doanh nghiệp. Chúng tôi chỉ nhận quyền phân tích và tối ưu, cung cấp dashboard báo cáo realtime minh bạch.'
    },
    {
      title: '4. Cam Kết KPI Bằng Hợp Đồng Pháp Lý',
      desc: 'Mọi chiến dịch đều có phụ lục cam kết chỉ số đo lường rõ ràng (ROAS, Lead chất lượng, Doanh số, Thứ hạng từ khóa). Nếu không đạt, chúng tôi áp dụng chính sách triển khai bù miễn phí.'
    }
  ];

  return (
    <section id="gioi-thieu" className="py-20 sm:py-24 bg-white dark:bg-slate-900 border-b border-slate-200/60 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            <span>Về Dimark Digital Agency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Đối Tác Tăng Trưởng Thực Chiến Cho Doanh Nghiệp
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Thành lập từ <strong className="text-cyan-600 dark:text-cyan-400">tháng 6/2021</strong>, Dimark hoạt động theo mô hình 
            <strong className="text-slate-900 dark:text-white"> Boutique Agency quy mô nhỏ</strong> nhưng sắc bén, mang tới giải pháp Digital Marketing thực chiến, chuyên sâu và đo lường minh bạch.
          </p>
        </div>

        {/* 4 Key Pillars Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 text-white flex items-center justify-center mb-4 shadow-md shadow-cyan-600/20 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-[11px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-1">
                  {item.highlight}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Story & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              <Award className="w-3.5 h-3.5" />
              <span>Triết lý vận hành của Dimark</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug">
              Tại sao chúng tôi chọn giữ <span className="text-cyan-400">quy mô nhỏ & tinh gọn</span>?
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              Từ khi thành lập vào <strong className="text-white">tháng 6/2021</strong>, Dimark chủ trương không mở rộng ồ ạt nhân sự để nhận hàng trăm hợp đồng. Chúng tôi nhận thấy phần lớn sự thất vọng của doanh nghiệp khi thuê ngoài marketing đến từ việc bị bỏ rơi sau khi ký hợp đồng.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed">
              Mô hình <strong className="text-white">Boutique Agency</strong> cho phép đội ngũ sáng lập và các chuyên gia cấp cao của Dimark dành 100% tâm huyết và chất xám cho từng chiến dịch của bạn, theo dõi từng biến động ROAS hàng ngày và chủ động điều chỉnh kịch bản sáng tạo ngay khi có cơ hội.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link
                href="/tu-van"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
              >
                <span>Đặt Lịch Audit 1-1 Cùng Chuyên Gia</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:0813839079"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-all border border-white/20"
              >
                <PhoneCall className="w-4 h-4 text-cyan-400" />
                <span>Hotline: 0813 839 079</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-300">
                4 Cam Kết Vàng Từ Đội Ngũ Dimark
              </h4>
              <div className="space-y-4 text-xs text-slate-200">
                {coreValues.map((v, i) => (
                  <div key={i} className="space-y-1 pb-3 border-b border-white/10 last:border-none last:pb-0">
                    <div className="font-bold text-white text-sm flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{v.title}</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed pl-6">
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

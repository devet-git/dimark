'use client';

import React from 'react';
import { Star, Quote, CheckCircle2, Building2 } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  industry: string;
  highlightMetric: string;
  content: string;
  rating: number;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      name: 'Võ Quốc Huy',
      role: 'Co-Founder & CMO',
      company: 'ZenStyle D2C Fashion',
      industry: 'Thời trang & May mặc',
      highlightMetric: '+320% Doanh Thu Meta Ads',
      content: 'Trước đây chúng tôi tốn rất nhiều tiền chạy quảng cáo nhưng tài khoản thường xuyên bị đắt và ROAS chỉ quanh quẩn 1.8x. Sau khi Dimark tái cấu trúc lại phễu và sản xuất chuỗi video ngắn theo kịch bản giữ chân 3 giây đầu, ROAS hiện tại ổn định trên 5.2x dù ngân sách đã scale gấp 3 lần.',
      rating: 5
    },
    {
      name: 'Bác sĩ Lê Quỳnh Nga',
      role: 'Giám Đốc Điều Hành',
      company: 'Viện Nha Khoa Nụ Cười Xinh',
      industry: 'Y tế & Thẩm mỹ',
      highlightMetric: 'Top 1 Google & 310+ Lịch Hẹn/Tháng',
      content: 'Dịch vụ SEO Tổng Thể của Dimark thật sự vượt trội. Họ làm việc cực kỳ minh bạch, có báo cáo kỹ thuật hàng tuần. Hiện tại phòng khám của tôi gần như phủ sóng toàn bộ từ khóa niềng răng và bọc sứ tại khu vực Cầu Giấy và Ba Đình, lượng khách đến từ Google tự nhiên chiếm đến hơn nửa doanh số.',
      rating: 5
    },
    {
      name: 'Trần Đăng Khoa',
      role: 'CEO & Founder',
      company: 'KiotLogistics B2B',
      industry: 'Chuỗi cung ứng & Kho vận',
      highlightMetric: 'Giảm 45% Cost-Per-Lead (CPL)',
      content: 'Chạy B2B rất khó vì khách hàng ra quyết định lâu. Dimark đã thiết kế cho chúng tôi Landing Page chuyển đổi cao và chuỗi phễu Inbound Content rất bài bản. Đội ngũ tư vấn nhiệt tình, có trách nhiệm và luôn chủ động đề xuất giải pháp cải thiện thay vì thụ động đợi chỉ đạo.',
      rating: 5
    },
    {
      name: 'Mai Thanh Thảo',
      role: 'Trưởng Phòng Marketing',
      company: 'PureNature Organic Food',
      industry: 'Thực phẩm sạch & Tiêu dùng nhanh',
      highlightMetric: 'Chiến dịch TikTok viral 4.8M View',
      content: 'Team Content Video của Dimark bắt trend cực nhạy và hiểu sâu tâm lý người tiêu dùng nội trợ. Chiến dịch vừa qua đã giúp thương hiệu bán sạch 2 container hạt dinh dưỡng trong vòng chưa đầy 1 tháng trên TikTok Shop. Chắc chắn sẽ đồng hành lâu dài cùng Dimark!',
      rating: 5
    }
  ];

  return (
    <section id="danh-gia" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            <Quote className="w-4 h-4" />
            <span>Phản Hồi Từ Khách Hàng Thực Tế</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Niềm Tin Từ Hơn 180+ Doanh Nghiệp Đồng Hành
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Không có lời quảng cáo nào giá trị hơn sự hài lòng và thành công về doanh số của khách hàng đã cùng Dimark tăng trưởng.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div>
                {/* Top bar: Rating + Metric */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-xs font-bold text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-200 dark:border-cyan-800">
                    {t.highlightMetric}
                  </span>
                </div>

                {/* Content */}
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
                  &quot;{t.content}&quot;
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                    {t.name.split(' ').slice(-1)[0][0]}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <span>{t.name}</span>
                      <span title="Khách hàng đã xác thực">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 inline" />
                      </span>
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {t.role} · <strong className="text-slate-700 dark:text-slate-300 font-medium">{t.company}</strong>
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-[11px] text-slate-400">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{t.industry}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Retention stats callout */}
        <div className="mt-14 max-w-4xl mx-auto p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-around gap-6 text-center">
          <div>
            <div className="text-3xl font-extrabold text-cyan-600 dark:text-cyan-400">98.6%</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Khách hàng tiếp tục gia hạn hợp đồng</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-slate-200 dark:bg-slate-800" />
          <div>
            <div className="text-3xl font-extrabold text-cyan-600 dark:text-cyan-400">4.9 / 5.0</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Điểm đánh giá mức độ hài lòng</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-slate-200 dark:bg-slate-800" />
          <div>
            <div className="text-3xl font-extrabold text-cyan-600 dark:text-cyan-400">100%</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Minh bạch ngân sách & tài khoản đối tác</p>
          </div>
        </div>
      </div>
    </section>
  );
}

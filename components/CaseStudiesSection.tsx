'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  TrendingUp,
  ArrowRight,
  ExternalLink,
  X,
  Target,
  CheckCircle2,
  Calendar,
  Layers,
  Award
} from 'lucide-react';

interface CaseStudy {
  id: string;
  category: 'ecommerce' | 'clinic' | 'b2b' | 'fnb';
  categoryLabel: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  heroMetric: string;
  heroMetricLabel: string;
  metrics: { label: string; value: string; diff: string }[];
  challenge: string;
  strategy: string[];
  results: string[];
  testimonial: { quote: string; author: string; role: string };
}

export default function CaseStudiesSection() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: 'coolstyle-fashion',
      category: 'ecommerce',
      categoryLabel: 'E-commerce & Thời trang',
      client: 'CoolStyle Apparel',
      industry: 'Thời trang Nam D2C',
      title: 'Bứt phá ROAS từ 2.1x lên 5.8x và cán mốc 3.2 Tỷ VNĐ Doanh Số/Tháng',
      summary: 'Tái cấu trúc toàn bộ tài khoản Meta & TikTok Ads, sản xuất 24 mẫu kịch bản video ngắn mới giải quyết bài toán bão hòa tệp khách hàng.',
      heroMetric: '+380%',
      heroMetricLabel: 'Tăng trưởng doanh thu thuần',
      metrics: [
        { label: 'ROAS Trung bình', value: '5.84x', diff: '+178%' },
        { label: 'Chi phí mỗi đơn (CPA)', value: '62,000 đ', diff: '-41%' },
        { label: 'Doanh thu trung bình/tháng', value: '3.2 Tỷ đ', diff: '+220%' },
        { label: 'Tỷ lệ khách hàng mua lại', value: '28.5%', diff: '+12%' }
      ],
      challenge: 'Chi phí quảng cáo Meta tăng vọt trong mùa cao điểm, chi phí trên mỗi đơn hàng lên tới 110.000đ khiến biên lợi nhuận bị bào mòn nghiêm trọng. Các mẫu ảnh chụp sản phẩm cũ không còn thu hút người xem.',
      strategy: [
        'Chuyển dịch 65% ngân sách sang định dạng Video ngắn UGC với kịch bản giải quyết nỗi đau trang phục công sở.',
        'Thiết lập luồng Advantage+ Shopping Campaigns phân bổ tệp rộng (Broad Targeting) cho thuật toán AI tự học.',
        'Xây dựng chuỗi Email Marketing & Zalo ZNS nhắc giỏ hàng bỏ quên, kéo lại 18% doanh thu mà không tốn thêm chi phí ads.',
        'Tối ưu trang thanh toán rút ngắn từ 4 bước xuống 1 bước (One-page Checkout).'
      ],
      results: [
        'Cán mốc doanh thu 3.2 Tỷ đồng chỉ sau 75 ngày triển khai.',
        'ROAS ổn định ở mức 5.8x ngay cả khi scale ngân sách lên 500 triệu/tháng.',
        'Sản xuất thành công 3 video ngắn đạt trên 1.5 triệu lượt xem tự nhiên trên TikTok.'
      ],
      testimonial: {
        quote: 'Dimark không chỉ chạy quảng cáo, họ thực sự hiểu về bài toán dòng tiền và hàng tồn kho của ngành thời trang. Sự chuyển đổi sang video ngắn đã cứu lấy doanh thu quý vừa rồi của chúng tôi.',
        author: 'Nguyễn Thành Nam',
        role: 'Founder & CEO, CoolStyle Apparel'
      }
    },
    {
      id: 'medix-clinic',
      category: 'clinic',
      categoryLabel: 'Y tế & Thẩm mỹ',
      client: 'Nha Khoa Quốc Tế Medix',
      industry: 'Chăm sóc răng miệng cao cấp',
      title: 'Thống trị Top 1 Google Search & Kéo 280+ Khách Đặt Lịch Niềng Răng Mỗi Tháng',
      summary: 'Chiến dịch SEO Tổng thể kết hợp Google Search Ads tập trung vào từ khóa có chủ đích điều trị cao (High Commercial Intent).',
      heroMetric: '280+',
      heroMetricLabel: 'Lịch hẹn điều trị mới / Tháng',
      metrics: [
        { label: 'Từ khóa Top 1-3 Google', value: '142 từ khóa', diff: '+350%' },
        { label: 'Chi phí trên mỗi lịch hẹn', value: '145,000 đ', diff: '-52%' },
        { label: 'Organic Traffic hàng tháng', value: '95,000 lượt', diff: '+410%' },
        { label: 'Doanh thu dịch vụ niềng răng', value: '1.8 Tỷ đ', diff: '+185%' }
      ],
      challenge: 'Thị trường nha khoa cạnh tranh khốc liệt tại Hà Nội và TP.HCM. Giá click từ khóa Google Ads bị đẩy lên 45.000đ - 70.000đ/click. Khách hàng nhấp vào nhưng tỷ lệ để lại số điện thoại thấp.',
      strategy: [
        'Tái cấu trúc website chuẩn y khoa theo tiêu chuẩn E-E-A-T của Google, bổ sung hồ sơ bác sĩ và giấy phép hành nghề.',
        'Xây dựng 12 trang Landing Page chuyên sâu cho từng dịch vụ: Niềng răng trong suốt, Trồng răng Implant, Bọc răng sứ.',
        'Tích hợp công cụ tính toán chi phí niềng răng trả góp trực tuyến tương tác để thu hút khách để lại thông tin.',
        'Tối ưu hóa Google Maps (Local SEO) đạt Top 1 cụm khu vực bán kính 5km xung quanh 3 cơ sở phòng khám.'
      ],
      results: [
        'Hơn 140 từ khóa chính xác đạt Top 1-3 Google bền vững.',
        'Đạt trung bình 280 - 320 cuộc hẹn đặt khám mới mỗi tháng.',
        'Chi phí thu hút một bệnh nhân giảm từ 320.000đ xuống còn 145.000đ.'
      ],
      testimonial: {
        quote: 'Từ khi hợp tác với Dimark, lịch hẹn của các bác sĩ luôn kín chỗ trước 1 tuần. Lượng khách đến từ tìm kiếm Google tự nhiên chiếm đến 60% tổng doanh thu của phòng khám.',
        author: 'Bác sĩ CKII Trần Minh Khoa',
        role: 'Giám đốc chuyên môn, Medix Dental'
      }
    },
    {
      id: 'smartflow-b2b',
      category: 'b2b',
      categoryLabel: 'B2B & Phần mềm SaaS',
      client: 'SmartFlow Automation',
      industry: 'Phần mềm quản trị nhân sự ERP',
      title: 'Giảm 42% CPL & Tăng Gấp 3 Lần Lượng Demo Doanh Nghiệp',
      summary: 'Chiến lược Inbound Marketing dẫn đầu bằng Whitepaper chuyên môn, kết hợp chiến dịch Lead Gen trên Google Search và LinkedIn.',
      heroMetric: 'x3.2',
      heroMetricLabel: 'Số buổi Demo Booking thành công',
      metrics: [
        { label: 'Cost Per Lead (CPL)', value: '380,000 đ', diff: '-42%' },
        { label: 'Doanh nghiệp đặt lịch Demo', value: '165 DN / tháng', diff: '+220%' },
        { label: 'Tỷ lệ chốt hợp đồng (SQL to Win)', value: '19.2%', diff: '+8.5%' },
        { label: 'Giá trị hợp đồng mới (ACV)', value: '4.5 Tỷ đ', diff: '+160%' }
      ],
      challenge: 'Khách hàng mục tiêu là Giám đốc Nhân sự (CHRO) và CEO doanh nghiệp quy mô 50-500 nhân sự. Khó tiếp cận qua quảng cáo mạng xã hội thông thường, lead thu về hay bị sai đối tượng.',
      strategy: [
        'Sản xuất tài liệu độc quyền "Cẩm nang Tự động hóa Quy trình Nhân sự 2026" làm mồi câu (Lead Magnet) chất lượng.',
        'Triển khai Google Search Ads nhắm chính xác từ khóa tìm kiếm giải pháp quản trị doanh nghiệp.',
        'Thiết lập chuỗi Email Nurturing 5 kỳ gửi case study thực tế của các doanh nghiệp cùng ngành đã áp dụng thành công.',
        'Kết nối dữ liệu trực tiếp vào HubSpot CRM giúp đội ngũ Sales gọi điện thoại trong vòng 15 phút sau khi khách đăng ký.'
      ],
      results: [
        'Thu hút hơn 1.200 Lead doanh nghiệp chất lượng cao trong 6 tháng.',
        'Tỷ lệ chuyển đổi từ Lead sang lịch Demo thực tế đạt 38%.',
        'Tổng giá trị hợp đồng phần mềm ký mới đạt hơn 4.5 tỷ đồng.'
      ],
      testimonial: {
        quote: 'Dimark là đối tác hiếm hoi hiểu sâu sắc chu kỳ bán hàng B2B phức tạp. Họ đã giúp đội ngũ Sales của chúng tôi không còn phải đi telesale nguội mà có nguồn khách hàng tiềm năng chủ động tìm tới.',
        author: 'Lê Hoàng Long',
        role: 'Chief Revenue Officer (CRO), SmartFlow'
      }
    },
    {
      id: 'urban-bean-fnb',
      category: 'fnb',
      categoryLabel: 'F&B & Bán lẻ',
      client: 'Urban Bean Coffee Chain',
      industry: 'Chuỗi cà phê & Trà đặc sản',
      title: 'Viral 5.2 Triệu Lượt Xem TikTok & Tăng 45% Khách Đến 14 Điểm Bán',
      summary: 'Khai thác chiến dịch "Check-in món mới" kết hợp Micro-KOL và quảng cáo Local Meta Ads định vị vị trí xung quanh cửa hàng.',
      heroMetric: '+45%',
      heroMetricLabel: 'Doanh thu tại điểm bán',
      metrics: [
        { label: 'Tổng lượt xem chiến dịch', value: '5.2 Triệu', diff: '+580%' },
        { label: 'Lượt đổi Voucher ưu đãi', value: '14,800 lượt', diff: '+310%' },
        { label: 'Chi phí trên mỗi voucher', value: '4,200 đ', diff: '-60%' },
        { label: 'Doanh thu chuỗi cửa hàng', value: '2.4 Tỷ đ', diff: '+45%' }
      ],
      challenge: 'Ra mắt dòng thức uống mùa hè mới nhưng cạnh tranh gay gắt từ các chuỗi lớn. Cần tạo sự bùng nổ nhận diện nhanh chóng và kéo khách hàng trẻ đến trải nghiệm trực tiếp tại các cửa hàng.',
      strategy: [
        'Booking 25 nhà sáng tạo nội dung Food Reviewer phân khúc Micro tại khu vực lân cận các điểm bán.',
        'Quảng cáo Geo-targeting trên Meta và TikTok trong bán kính 2km xung quanh 14 cửa hàng với mã coupon giảm 20% độc quyền.',
        'Tạo hiệu ứng âm thanh bắt tai và thử thách check-in tạo trào lưu lan truyền trên mạng xã hội.',
        'Đo lường chính xác lượng khách đổi mã giảm giá qua hệ thống POS KiotViet.'
      ],
      results: [
        'Chiến dịch đạt 5.2 triệu lượt tiếp cận chỉ trong 3 tuần.',
        'Hơn 14.800 voucher được khách hàng quét mã sử dụng tại quầy.',
        'Doanh thu toàn chuỗi tăng 45% so với cùng kỳ tháng trước.'
      ],
      testimonial: {
        quote: 'Hiệu ứng lan tỏa vượt xa kỳ vọng ban đầu của ban giám đốc. Các cửa hàng đều trong tình trạng đông kín khách trong suốt thời gian diễn ra chiến dịch.',
        author: 'Phạm Hương Ly',
        role: 'Marketing Director, Urban Bean'
      }
    }
  ];

  const filteredCases = activeTab === 'all'
    ? caseStudies
    : caseStudies.filter((c) => c.category === activeTab);

  const tabs = [
    { key: 'all', label: 'Tất cả dự án' },
    { key: 'ecommerce', label: 'E-commerce' },
    { key: 'clinic', label: 'Y tế & Thẩm mỹ' },
    { key: 'b2b', label: 'B2B & Công nghệ' },
    { key: 'fnb', label: 'F&B & Bán lẻ' }
  ];

  return (
    <section id="du-an" className="py-24 bg-white dark:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              <Award className="w-4 h-4" />
              <span>Dự Án Tiêu Biểu & Kết Quả Thực Chứng</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Những Câu Chuyện Tăng Trưởng Đột Phá Của Khách Hàng
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Chúng tôi đánh giá thành công bằng doanh thu thực tế và chỉ số hoàn vốn (ROAS) của khách hàng, không phải những con số hiển thị ảo.
            </p>
          </div>

          {/* Interactive Filter Tabs (Zero-pill compliant clean segmented control) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl self-start md:self-auto border border-slate-200 dark:border-slate-700">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === tab.key
                    ? 'bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCases.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-7 flex flex-col justify-between hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300"
            >
              <div>
                {/* Unboxed clean metadata (anti-slop rule compliant) */}
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span className="font-semibold text-cyan-600 dark:text-cyan-400">{item.client}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.industry}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {item.summary}
                </p>

                {/* Hero Metric Pill-free Stat Box */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-white dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 mb-6">
                  {item.metrics.map((m, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 block truncate">
                        {m.label}
                      </span>
                      <div className="text-base font-extrabold text-slate-900 dark:text-white">
                        {m.value}
                      </div>
                      <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 block">
                        {m.diff}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-2 flex items-center justify-between border-t border-slate-200/70 dark:border-slate-800">
                <span className="text-xs italic text-slate-500 dark:text-slate-400 truncate max-w-[240px]">
                  &quot;{item.testimonial.quote}&quot;
                </span>

                <button
                  onClick={() => setSelectedCase(item)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-slate-900 dark:bg-slate-800 hover:bg-cyan-600 dark:hover:bg-cyan-600 transition-colors shrink-0"
                >
                  <span>Xem Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA below projects */}
        <div className="text-center mt-12">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            Doanh nghiệp của bạn cũng có thể đạt được những con số tăng trưởng tương tự.
          </p>
          <a
            href="#dang-ky"
            className="inline-flex items-center gap-2 text-sm font-bold text-cyan-600 dark:text-cyan-400 hover:underline"
          >
            <span>Nhận bản kế hoạch tăng trưởng miễn phí riêng cho doanh nghiệp của bạn</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Case Study Full Modal */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 my-8 overflow-hidden"
            >
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Đóng"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Metadata */}
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                <span className="font-semibold text-cyan-600 dark:text-cyan-400">{selectedCase.client}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedCase.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedCase.industry}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">
                {selectedCase.title}
              </h3>

              {/* Big metrics bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 mb-6">
                {selectedCase.metrics.map((m, i) => (
                  <div key={i} className="text-center sm:text-left">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block">{m.label}</span>
                    <div className="text-lg font-black text-slate-900 dark:text-white mt-0.5">{m.value}</div>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{m.diff}</span>
                  </div>
                ))}
              </div>

              {/* Content breakdown */}
              <div className="space-y-6 text-sm text-slate-700 dark:text-slate-300 mb-6 max-h-[50vh] overflow-y-auto pr-2">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs mb-2">
                    1. Bối cảnh & Thách thức ban đầu
                  </h4>
                  <p className="leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800">
                    {selectedCase.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs mb-2">
                    2. Giải pháp chiến lược của Dimark
                  </h4>
                  <div className="space-y-2">
                    {selectedCase.strategy.map((s, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs mb-2">
                    3. Kết quả đạt được
                  </h4>
                  <div className="space-y-2">
                    {selectedCase.results.map((r, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <TrendingUp className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="font-medium text-slate-900 dark:text-slate-100">{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote block */}
                <div className="p-4 rounded-xl bg-cyan-50/70 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800">
                  <p className="italic text-slate-700 dark:text-slate-200 mb-2">
                    &quot;{selectedCase.testimonial.quote}&quot;
                  </p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">
                    {selectedCase.testimonial.author} · <span className="text-cyan-600 dark:text-cyan-400 font-normal">{selectedCase.testimonial.role}</span>
                  </p>
                </div>
              </div>

              {/* Modal footer */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-500">Chiến dịch hoàn thành & được nghiệm thu chính thức</span>
                <a
                  href="#dang-ky"
                  onClick={() => setSelectedCase(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-center shadow-sm"
                >
                  Tư Vấn Chiến Lược Tương Tự Cho Tôi
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

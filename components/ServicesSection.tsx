'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Zap,
  Search,
  Video,
  BarChart2,
  Cpu,
  Layers,
  ArrowRight,
  CheckCircle2,
  X,
  Clock,
  Sparkles,
  ShieldCheck,
  Flame
} from 'lucide-react';

interface ServiceItem {
  id: string;
  icon: React.ElementType;
  title: string;
  tagline: string;
  description: string;
  kpiHighlight: string;
  deliverables: string[];
  techStack: string[];
  timeline: string;
  process: { phase: string; title: string; desc: string }[];
}

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: 'performance-ads',
      icon: Zap,
      title: 'Performance Ads Đa Kênh',
      tagline: 'Meta Ads · Google Search & Shopping · TikTok Shop Ads',
      description: 'Chiến dịch quảng cáo tập trung vào kết quả chuyển đổi thực tế (ROAS & CPL), kết hợp tối ưu thuật toán AI, kiểm thử Creative liên tục và phễu retargeting sâu.',
      kpiHighlight: 'Trung bình +340% ROAS và giảm 38% chi phí trên mỗi đơn hàng',
      deliverables: [
        'Cấu trúc tài khoản Advantage+ & Smart Bidding tối ưu',
        'Sản xuất 15 - 30 creative góc nhìn mới (Hooks) mỗi tháng',
        'Phễu Remarketing đa điểm chạm theo hành vi khách hàng',
        'Chống click tặc & tối ưu điểm chất lượng Google Quality Score'
      ],
      techStack: ['Meta Business Suite', 'Google Ads Editor', 'TikTok Ads Manager', 'Triple Whale', 'AppsFlyer'],
      timeline: 'Triển khai trong 5 ngày làm việc · Báo cáo tối ưu hàng ngày',
      process: [
        { phase: 'Giai đoạn 1', title: 'Audit & Cài đặt Tracking', desc: 'Kiểm toán tài khoản cũ, gắn Conversion API và chuẩn hóa phễu đo lường.' },
        { phase: 'Giai đoạn 2', title: 'Sản xuất Creative & Testing', desc: 'Thử nghiệm đa dạng mẫu hook, kịch bản đau/sướng và visual thu hút.' },
        { phase: 'Giai đoạn 3', title: 'Scaling Ngân sách', desc: 'Tăng ngân sách các adset thắng mà không làm tăng CPA.' }
      ]
    },
    {
      id: 'seo-tong-the',
      icon: Search,
      title: 'SEO Tổng Thể Bền Vững',
      tagline: 'Technical SEO · Entity Building · Content chuẩn Search Intent',
      description: 'Chiến lược SEO white-hat đưa hàng trăm từ khóa thương mại lên Top 1 Google, mang lại nguồn khách hàng tự nhiên ổn định, không phụ thuộc chi phí quảng cáo tăng cao.',
      kpiHighlight: 'Top 1-3 cho 80%+ từ khóa mục tiêu · Tăng x3.5 Traffic sau 90-180 ngày',
      deliverables: [
        'Technical Audit khắc phục 100% lỗi Core Web Vitals & Indexation',
        'Xây dựng Topical Map & Topic Clusters phủ kín ngành hàng',
        'Tối ưu Entity doanh nghiệp chuẩn schema định danh Google Knowledge Graph',
        'Hệ thống liên kết nội bộ (Internal Link) và Backlink báo chí chính thống uy tín'
      ],
      techStack: ['Ahrefs', 'Semrush', 'Google Search Console', 'Screaming Frog', 'SurferSEO'],
      timeline: 'Lộ trình 3 - 6 tháng cam kết tăng trưởng organic traffic theo hợp đồng',
      process: [
        { phase: 'Tháng 1', title: 'Khám bệnh Website & Nghiên cứu Từ khóa', desc: 'Audit kỹ thuật, phân tích Intent của khách hàng và đối thủ cạnh tranh.' },
        { phase: 'Tháng 2-3', title: 'Triển khai Content Hub & Onpage', desc: 'Sản xuất bài viết chuyên sâu giải quyết trọn vẹn thắc mắc của người tìm kiếm.' },
        { phase: 'Tháng 4-6', title: 'Thúc đẩy Authority & Chuyển đổi', desc: 'Gia tăng thẩm quyền thương hiệu, tối ưu tỷ lệ click thành lead mua hàng.' }
      ]
    },
    {
      id: 'content-short-video',
      icon: Video,
      title: 'Sáng Tạo Video Ngắn & Viral Content',
      tagline: 'Kịch bản TikTok/Reels giữ chân 3s · Visual Storytelling Chuyển Đổi',
      description: 'Nội dung không chỉ để xem mà để chốt đơn. Chúng tôi nghiên cứu insight sâu sắc, sáng tạo kịch bản bám sát thuật toán phân phối của TikTok và Meta Reels.',
      kpiHighlight: 'Hơn 45 triệu lượt xem tự nhiên đạt được cho các đối tác năm qua',
      deliverables: [
        'Bộ kịch bản video ngắn chuẩn công thức Hook - Story - Offer',
        'Quay dựng chuyên nghiệp bắt kịp âm thanh và xu hướng thị trường',
        'Thiết kế bộ nhận diện social đồng bộ phong cách thương hiệu cao cấp',
        'Đào tạo và định hướng phong cách cho nhà sáng lập hoặc reviewer nội bộ'
      ],
      techStack: ['CapCut Pro', 'Adobe Premiere', 'After Effects', 'Figma', 'TikTok Trend Insight'],
      timeline: 'Bàn giao 12 - 24 video chất lượng cao định dạng dọc mỗi tháng',
      process: [
        { phase: 'Bước 1', title: 'Khai thác Insight & Góc tiếp cận mới', desc: 'Lắng nghe nỗi đau của tệp khách hàng tiềm năng để tìm ra điểm chạm đắt giá.' },
        { phase: 'Bước 2', title: 'Kịch bản chi tiết từng giây', desc: 'Tập trung giữ chân ở 3 giây đầu tiên với hình ảnh và âm thanh kịch tính.' },
        { phase: 'Bước 3', title: 'Hậu kỳ & Thử nghiệm CTA', desc: 'Cắt dựng nhịp độ nhanh, phụ đề động bắt mắt và lời kêu gọi hành động tự nhiên.' }
      ]
    },
    {
      id: 'cro-landing-page',
      icon: BarChart2,
      title: 'Tối Ưu Chuyển Đổi (CRO) & Landing Page',
      tagline: 'Thiết kế UX/UI Bán Hàng · Tốc độ siêu tốc · A/B Testing Chuyên Sâu',
      description: 'Gấp đôi doanh số mà không cần tăng một đồng ngân sách quảng cáo bằng cách tối ưu hóa từng bước trong hành trình trải nghiệm người dùng trên trang.',
      kpiHighlight: 'Nâng tỷ lệ chuyển đổi trung bình từ 1.4% lên 3.8% – 5.2%',
      deliverables: [
        'Phân tích Heatmap bản đồ nhiệt và Video Session Recordings hành vi người dùng',
        'Thiết kế Landing Page chuẩn UX thương mại điện tử hoặc trang lấy Lead B2B',
        'Tối ưu tốc độ tải trang dưới 1.2s trên mọi thiết bị di động',
        'Thiết lập các biến thể A/B Testing tiêu đề, nút bấm và bằng chứng xã hội'
      ],
      techStack: ['Hotjar', 'Microsoft Clarity', 'Next.js', 'Tailwind CSS', 'Google Optimize / VWO'],
      timeline: 'Bàn giao Landing Page hoàn thiện trong 7 ngày · Tối ưu A/B testing định kỳ',
      process: [
        { phase: 'Phân tích', title: 'Phát hiện điểm rơi rớt người dùng', desc: 'Tìm ra vị trí người dùng bỏ cuộc trong giỏ hàng hoặc form liên hệ.' },
        { phase: 'Thiết kế', title: 'Wireframe tâm lý học mua hàng', desc: 'Bố cục nội dung tạo sự an tâm, giải tỏa rào cản do dự và thúc giục hành động.' },
        { phase: 'Kiểm thử', title: 'A/B Testing liên tục', desc: 'Đo lường trực tiếp tỷ lệ hoàn tất đơn hàng giữa các phiên bản.' }
      ]
    },
    {
      id: 'automation-crm',
      icon: Cpu,
      title: 'Marketing Automation & Phễu Chăm Sóc',
      tagline: 'Lead Nurturing Tự Động · Email Marketing Flow · Tăng LTV Khách Hàng',
      description: 'Xây dựng cỗ máy bán hàng tự động 24/7. Tự động phân loại lead nóng/nguội, gửi chuỗi email cá nhân hóa và kích hoạt lại khách hàng cũ không tốn thêm chi phí.',
      kpiHighlight: 'Gia tăng 35% giá trị vòng đời khách hàng (LTV) và cứu 22% giỏ hàng bị bỏ rơi',
      deliverables: [
        'Thiết lập chuỗi Welcome Series, Abandoned Cart và Win-back Flows',
        'Phân đoạn tệp khách hàng theo lịch sử mua sắm và mức độ tương tác',
        'Tích hợp Chatbot AI chăm sóc khách hàng tức thì ngoài giờ hành chính',
        'Đồng bộ dữ liệu hai chiều giữa Website, Ads và phần mềm CRM'
      ],
      techStack: ['Klaviyo', 'HubSpot', 'ActiveCampaign', 'Make.com', 'Zapier'],
      timeline: 'Thiết lập trọn gói trong 10 ngày · Chạy tự động vĩnh viễn',
      process: [
        { phase: 'Mapping', title: 'Vẽ sơ đồ luồng khách hàng', desc: 'Xác định các điểm chạm kích hoạt tin nhắn và ưu đãi đúng thời điểm.' },
        { phase: 'Setup', title: 'Soạn nội dung & Cài đặt trigger', desc: 'Viết nội dung cá nhân hóa kích thích cảm xúc và nhu cầu mua lặp lại.' },
        { phase: 'Optimize', title: 'Tối ưu Open Rate & Click-Through', desc: 'Liên tục tinh chỉnh tiêu đề email và thời gian gửi để tối đa doanh số.' }
      ]
    },
    {
      id: 'data-analytics',
      icon: Layers,
      title: 'Data Analytics & Báo Cáo Real-Time',
      tagline: 'Báo cáo đa kênh Looker Studio · Attribution Modeling · Minh Bạch Tuyệt Đối',
      description: 'Chấm dứt việc đốt tiền quảng cáo trong bóng tối. Mọi quyết định tăng/giảm ngân sách đều dựa trên số liệu thực tế đo lường theo thời gian thực.',
      kpiHighlight: 'Tiết kiệm 20% ngân sách bị phân bổ sai kênh nhờ mô hình Attribution',
      deliverables: [
        'Dashboard trực quan hóa Looker Studio kết nối tự động tất cả các kênh',
        'Theo dõi doanh thu, ROAS, CPA, CAC và LTV theo từng ngày, từng chiến dịch',
        'Cài đặt Server-side Tracking chuẩn xác vượt qua rào cản chặn cookie iOS',
        'Buổi họp chiến lược hàng tuần phân tích sâu insight và đề xuất giải pháp'
      ],
      techStack: ['Google Looker Studio', 'GA4 Server-side', 'Google Tag Manager', 'BigQuery'],
      timeline: 'Bàn giao Dashboard riêng biệt ngay trong tuần đầu tiên làm việc',
      process: [
        { phase: 'Kết nối', title: 'Tích hợp nguồn dữ liệu', desc: 'Đồng bộ hóa dữ liệu từ Meta, Google, TikTok, CRM và nền tảng bán hàng.' },
        { phase: 'Dashboard', title: 'Xây dựng giao diện báo cáo chuyên biệt', desc: 'Bố cục trực quan giúp Ban giám đốc nắm bắt tình hình chỉ trong 60 giây.' },
        { phase: 'Quyết định', title: 'Đánh giá & Tái phân bổ ngân sách', desc: 'Dồn lực ngân sách vào kênh sinh lời cao nhất để nhân rộng doanh thu.' }
      ]
    }
  ];

  return (
    <section id="dich-vu" className="py-24 bg-white dark:bg-slate-900/60 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            <span>Dịch Vụ Nòng Cốt</span>
            <span aria-hidden="true">·</span>
            <span>Tối Đa Hóa Lợi Nhuận Doanh Nghiệp</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Hệ Sinh Thái Digital Marketing Toàn Diện & Thực Chiến
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Chúng tôi không bán dịch vụ đơn lẻ, chúng tôi đồng hành cùng doanh nghiệp xây dựng phễu tăng trưởng doanh số khép kín và bền vững.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-7 flex flex-col justify-between hover:border-cyan-500/60 dark:hover:border-cyan-500/60 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300"
              >
                <div>
                  {/* Top Bar with Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:scale-105 group-hover:bg-cyan-500/10 dark:group-hover:bg-cyan-500/20 transition-all">
                      <Icon className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-cyan-600 dark:text-cyan-400 mb-3">
                    {item.tagline}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Deliverables snippet */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-200/70 dark:border-slate-800">
                    {item.deliverables.slice(0, 3).map((d, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 mt-0.5 shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA to view details */}
                <div className="pt-2">
                  <button
                    onClick={() => setSelectedService(item)}
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
                  >
                    <span>Xem chi tiết & lộ trình</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-500 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-lg font-bold">Cam Kết Hiệu Quả & Minh Bạch Tuyệt Đối</h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Mọi chiến dịch đều có hợp đồng cam kết KPI rõ ràng. Nếu không đạt mục tiêu đã thỏa thuận, Dimark hoàn phí dịch vụ hoặc hỗ trợ triển khai bù miễn phí.
              </p>
            </div>
          </div>

          <a
            href="#dang-ky"
            className="shrink-0 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all hover:scale-105 shadow-md shadow-cyan-500/30"
          >
            Đăng Ký Khám Bệnh Kênh Ngay
          </a>
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 my-8 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Đóng"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-800 flex items-center justify-center">
                  <selectedService.icon className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {selectedService.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                    {selectedService.tagline}
                  </p>
                </div>
              </div>

              {/* Highlight callout */}
              <div className="p-3.5 rounded-xl bg-cyan-50/60 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800/60 mb-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-cyan-900 dark:text-cyan-300">
                  <Flame className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span>Chỉ số mục tiêu: {selectedService.kpiHighlight}</span>
                </div>
              </div>

              {/* Scope & Deliverables */}
              <div className="space-y-4 mb-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Hạng mục bàn giao chi tiết (Deliverables)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sprint Phases */}
              <div className="space-y-3 mb-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Quy trình triển khai tiêu chuẩn
                </h4>
                <div className="space-y-2">
                  {selectedService.process.map((step, i) => (
                    <div key={i} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                      <div>
                        <span className="font-bold text-cyan-600 dark:text-cyan-400 mr-2">{step.phase}:</span>
                        <strong className="text-slate-900 dark:text-white font-semibold">{step.title}</strong>
                        <p className="text-slate-500 dark:text-slate-400 mt-0.5">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Stack */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Công cụ chuyên dụng:</span>
                {selectedService.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <Clock className="w-4 h-4 text-cyan-500" />
                  <span>{selectedService.timeline}</span>
                </div>

                <a
                  href="#dang-ky"
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Đăng ký tư vấn gói này</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

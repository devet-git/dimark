'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Check,
  Zap,
  Sparkles,
  ShieldCheck,
  HelpCircle,
  ArrowRight,
  ChevronDown
} from 'lucide-react';

interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  tagline: string;
  monthlyPrice: number;
  description: string;
  features: string[];
  notIncluded?: string[];
  kpiCommitment: string;
}

export default function PricingSection({
  onSelectPlan,
}: {
  onSelectPlan?: (planName: string) => void;
}) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('quarterly');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tiers: PricingTier[] = [
    {
      id: 'starter',
      name: 'Gói Starter Growth',
      tagline: 'Phù hợp SME hoặc thương hiệu mới bắt đầu bứt tốc digital',
      monthlyPrice: 18000000,
      description: 'Tối ưu tập trung vào 1-2 kênh sinh lời nhanh nhất để kiểm chứng sản phẩm và tạo dòng tiền ổn định.',
      kpiCommitment: 'Cam kết chuẩn hóa cấu trúc tài khoản, tăng ít nhất 30% ROAS sau 30 ngày.',
      features: [
        'Quản lý 1 kênh chính (Meta Ads hoặc Google Ads)',
        'Sản xuất 12 mẫu Creative / Hooks quảng cáo/tháng',
        'Tối ưu hóa phễu chuyển đổi & Cài đặt chuẩn Conversion API',
        'Báo cáo hiệu quả Looker Studio cập nhật hàng tuần',
        'Họp đánh giá và tối ưu 2 tuần/lần cùng Account Manager',
        'Tài khoản quảng cáo thuộc sở hữu của khách hàng'
      ],
      notIncluded: [
        'Sản xuất video ngắn TikTok Studio chuyên nghiệp',
        'SEO Tổng thể trang 1 Google',
        'Hệ thống Marketing Automation CRM'
      ]
    },
    {
      id: 'pro-scaling',
      name: 'Gói Pro Scaling',
      badge: 'Lựa Chọn Phổ Biến Nhất',
      isPopular: true,
      tagline: 'Dành cho doanh nghiệp muốn mở rộng quy mô đa kênh & tăng gấp đôi doanh số',
      monthlyPrice: 38000000,
      description: 'Phối hợp nhịp nhàng giữa Performance Ads (Meta + Google + TikTok) và Tối ưu hóa chuyển đổi Landing Page toàn diện.',
      kpiCommitment: 'Cam kết ROAS trung bình từ 4.0x - 6.0x hoặc đạt mốc Lead thỏa thuận.',
      features: [
        'Triển khai đa kênh: Meta Ads + Google Ads + TikTok Shop Ads',
        'Sản xuất 24 mẫu Creative & 6 Video ngắn TikTok/Reels/tháng',
        'Thiết kế & Tối ưu 1 Landing Page High-Converting chuẩn UX',
        'Tối ưu tỷ lệ chuyển đổi CRO liên tục qua A/B Testing',
        'Xây dựng hệ thống Email/ZNS chăm sóc giỏ hàng tự động',
        'Báo cáo Real-time 24/7 qua Dashboard Looker Studio riêng biệt',
        'Họp chiến lược hàng tuần & Nhóm Zalo hỗ trợ phản hồi trong 15 phút'
      ]
    },
    {
      id: 'enterprise',
      name: 'Gói Enterprise Dominance',
      badge: 'Giải Pháp Toàn Diện 360°',
      tagline: 'Dành cho tập đoàn, chuỗi bán lẻ & thương hiệu dẫn đầu ngành',
      monthlyPrice: 75000000,
      description: 'Đội ngũ chuyên trách in-house (CMO fractional, Media Buyer, Content Lead, SEO Specialist, Data Analyst) vận hành toàn bộ phòng marketing số.',
      kpiCommitment: 'Hợp đồng bảo lãnh cam kết KPI doanh thu & hoàn phí dịch vụ nếu không đạt.',
      features: [
        'Quản lý không giới hạn kênh: Meta, Google, TikTok, Youtube, Cốc Cốc',
        'Gói SEO Tổng Thể cam kết Top 1-3 Google cho 100+ từ khóa',
        'Sản xuất trọn gói 35+ Creative & 15 Video ngắn định dạng dọc/tháng',
        'Thiết lập toàn diện Marketing Automation CRM (Klaviyo / HubSpot)',
        'Server-side Tracking First-party Data chống chặn cookie iOS',
        'Giám đốc Chiến lược (Fractional CMO) trực tiếp dẫn dắt dự án',
        'Đội ngũ 5 chuyên viên phụ trách riêng biệt (Dedicated Team)'
      ]
    }
  ];

  const faqs = [
    {
      q: 'Ngân sách quảng cáo trả cho nền tảng (Meta, Google) đã bao gồm trong phí dịch vụ chưa?',
      a: 'Chưa, phí dịch vụ trên là chi phí quản lý, nghiên cứu chiến lược, sản xuất sáng tạo nội dung, tối ưu kỹ thuật và báo cáo của đội ngũ Dimark. Ngân sách quảng cáo do doanh nghiệp thanh toán trực tiếp cho Facebook/Google từ thẻ thanh toán của bạn, đảm bảo tính minh bạch 100%.'
    },
    {
      q: 'Sau bao lâu thì doanh nghiệp bắt đầu thấy kết quả tăng trưởng rõ rệt?',
      a: 'Với các chiến dịch Performance Ads, kết quả đơn hàng và số liệu ROAS/CPA sẽ bắt đầu có dữ liệu sau 3-5 ngày sau khi hoàn tất giai đoạn kiểm thử. Với SEO Tổng Thể, sự tăng trưởng về Organic Traffic và thứ hạng Google sẽ thể hiện rõ nét từ tháng thứ 2-3.'
    },
    {
      q: 'Dimark có hợp đồng cam kết KPI rõ ràng không?',
      a: 'Có. Tất cả các hợp đồng hợp tác tại Dimark đều có phụ lục cam kết chỉ số KPI định lượng (ROAS, Số lượng Lead chất lượng, Chi phí CPA tối đa, Thứ hạng từ khóa). Nếu không đạt cam kết, chúng tôi áp dụng chính sách làm bù miễn phí hoặc hoàn trả phí quản lý theo điều khoản hợp đồng.'
    },
    {
      q: 'Doanh nghiệp có được sở hữu tài khoản quảng cáo và dữ liệu khách hàng không?',
      a: '100% tài khoản quảng cáo, fanpage, pixel, conversion api và tệp dữ liệu khách hàng đều nằm trên Business Manager (BM) do doanh nghiệp sở hữu. Dimark chỉ nhận quyền đối tác (Partner access) để quản trị và tối ưu, bạn toàn quyền kiểm soát mọi lúc.'
    }
  ];

  const handleChoosePlan = (name: string) => {
    if (onSelectPlan) {
      onSelectPlan(name);
    }
    const form = document.getElementById('dang-ky');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="bang-gia" className="py-24 bg-white dark:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Bảng Giá Dịch Vụ Minh Bạch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Gói Giải Pháp Tăng Trưởng Linh Hoạt Cho Mọi Quy Mô
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Chi phí rõ ràng, không phụ phí phát sinh, cam kết chỉ số đo lường thực tế trên hợp đồng kinh tế.
          </p>

          {/* Billing Cycle Switcher (Zero-pill compliant segmented control) */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Thanh toán theo tháng
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('quarterly')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                  billingCycle === 'quarterly'
                    ? 'bg-cyan-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>Hợp đồng theo quý</span>
                <span className="text-[10px] bg-amber-400 text-slate-950 px-1.5 py-0.5 rounded font-extrabold uppercase">
                  Tiết kiệm 15%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {tiers.map((tier) => {
            const finalPrice = billingCycle === 'quarterly'
              ? Math.round(tier.monthlyPrice * 0.85)
              : tier.monthlyPrice;

            return (
              <div
                key={tier.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 p-7 sm:p-8 ${
                  tier.isPopular
                    ? 'bg-slate-900 text-white shadow-2xl ring-2 ring-cyan-500 scale-100 lg:-translate-y-2'
                    : 'bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800'
                }`}
              >
                {/* Popular ribbon */}
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-2xl font-extrabold tracking-tight">
                      {tier.name}
                    </h3>
                    <p className={`text-xs mt-1 ${tier.isPopular ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>
                      {tier.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="my-6 pb-6 border-b border-slate-200/40 dark:border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black tracking-tight">
                        {(finalPrice / 1000000).toLocaleString('vi-VN')}
                      </span>
                      <span className="text-lg font-bold">Triệu đ</span>
                      <span className={`text-xs ml-1 ${tier.isPopular ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'}`}>
                        / tháng
                      </span>
                    </div>
                    {billingCycle === 'quarterly' && (
                      <span className="text-[11px] text-emerald-400 font-semibold block mt-1">
                        Tiết kiệm {((tier.monthlyPrice * 0.15 * 3) / 1000000).toFixed(1)} Triệu đ cho hợp đồng 3 tháng
                      </span>
                    )}
                  </div>

                  {/* KPI commitment card */}
                  <div className={`p-3 rounded-xl text-xs mb-6 ${
                    tier.isPopular
                      ? 'bg-slate-800/80 border border-slate-700 text-cyan-300'
                      : 'bg-cyan-50 dark:bg-slate-800/50 border border-cyan-100 dark:border-slate-800 text-cyan-900 dark:text-cyan-300'
                  }`}>
                    <span className="font-bold block mb-0.5">Cam kết hiệu quả:</span>
                    <p>{tier.kpiCommitment}</p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <span className={`text-xs font-bold uppercase tracking-wider block ${
                      tier.isPopular ? 'text-slate-300' : 'text-slate-700 dark:text-slate-300'
                    }`}>
                      Hạng mục bao gồm:
                    </span>
                    {tier.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs">
                        <Check className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                        <span className={tier.isPopular ? 'text-slate-200' : 'text-slate-600 dark:text-slate-300'}>
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <button
                    onClick={() => handleChoosePlan(tier.name)}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      tier.isPopular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 shadow-lg shadow-cyan-500/25'
                        : 'bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Chọn Gói Này & Nhận Kế Hoạch 1-1</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing FAQs */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Câu Hỏi Thường Gặp Về Chi Phí & Hợp Tác
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Giải đáp minh bạch mọi băn khoăn trước khi triển khai
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 text-sm font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-cyan-500' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-slate-800 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Calculator,
  TrendingUp,
  DollarSign,
  Users,
  Target,
  ArrowRight,
  Sparkles,
  Info
} from 'lucide-react';

interface IndustryConfig {
  name: string;
  cpc: number; // cost per click (VND)
  cvr: number; // conversion rate %
  aov: number; // average order value (VND)
  avgRoas: number;
}

const INDUSTRIES: Record<string, IndustryConfig> = {
  ecommerce: {
    name: 'E-commerce & Thời trang',
    cpc: 2800,
    cvr: 0.032,
    aov: 480000,
    avgRoas: 5.4,
  },
  clinic: {
    name: 'Thẩm mỹ & Nha khoa & Y tế',
    cpc: 12500,
    cvr: 0.055,
    aov: 4500000,
    avgRoas: 4.8,
  },
  b2b: {
    name: 'B2B & Phần mềm SaaS',
    cpc: 16000,
    cvr: 0.042,
    aov: 12000000,
    avgRoas: 4.2,
  },
  fnb: {
    name: 'F&B & Chuỗi Nhà hàng',
    cpc: 2200,
    cvr: 0.038,
    aov: 320000,
    avgRoas: 5.1,
  },
  education: {
    name: 'Giáo dục & Khóa học',
    cpc: 9500,
    cvr: 0.048,
    aov: 3500000,
    avgRoas: 4.5,
  },
};

export default function RoiCalculator({
  onSelectBudget,
}: {
  onSelectBudget?: (budget: number, industry: string) => void;
}) {
  const [budgetMillion, setBudgetMillion] = useState<number>(50); // in millions VNĐ
  const [industryKey, setIndustryKey] = useState<string>('ecommerce');

  const industry = INDUSTRIES[industryKey] || INDUSTRIES.ecommerce;
  const budgetVnd = budgetMillion * 1000000;

  // Calculations
  const estimatedClicks = Math.round(budgetVnd / industry.cpc);
  const estimatedImpressions = Math.round(estimatedClicks * 28);
  const estimatedConversions = Math.round(estimatedClicks * industry.cvr);
  const estimatedRevenue = Math.round(budgetVnd * industry.avgRoas);

  const formatVnd = (num: number) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(2) + ' Tỷ đ';
    }
    return (num / 1000000).toFixed(0) + ' Triệu đ';
  };

  const handleApplyToForm = () => {
    if (onSelectBudget) {
      onSelectBudget(budgetMillion, industry.name);
    }
    const formEl = document.getElementById('dang-ky');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="roi-calculator" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            <Calculator className="w-4 h-4" />
            <span>Công Cụ Dự Báo Doanh Thu Thực Chiến</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Ước Tính Hiệu Quả & ROAS Cho Ngành Hàng Của Bạn
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Kéo chọn mức ngân sách dự kiến hàng tháng để xem mô hình dự báo lượt hiển thị, số lượng lead/đơn hàng và doanh thu tiềm năng dựa trên dữ liệu 180+ chiến dịch thực tế của Dimark.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Controls column */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-lg space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                1. Chọn ngành hàng của bạn
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {Object.entries(INDUSTRIES).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setIndustryKey(key)}
                    className={`px-3.5 py-2.5 rounded-lg text-xs font-medium text-left transition-all ${
                      industryKey === key
                        ? 'bg-cyan-600 text-white font-semibold shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  2. Ngân sách Digital Marketing / Tháng
                </label>
                <span className="text-lg font-extrabold text-cyan-600 dark:text-cyan-400">
                  {budgetMillion} Triệu VNĐ
                </span>
              </div>

              <input
                type="range"
                min="15"
                max="250"
                step="5"
                value={budgetMillion}
                onChange={(e) => setBudgetMillion(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-600"
              />

              <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 mt-2">
                <span>15 Triệu đ (Thử nghiệm)</span>
                <span>100 Triệu đ (Scale nhanh)</span>
                <span>250 Triệu đ+ (Thống trị)</span>
              </div>
            </div>

            {/* Quick Industry Parameter Info */}
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 space-y-1.5">
              <div className="flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white">
                <Info className="w-3.5 h-3.5 text-cyan-500" />
                <span>Chỉ số chuẩn đối chuẩn ngành {industry.name}:</span>
              </div>
              <p>• Giá mỗi click mục tiêu (CPC trung bình): ~{industry.cpc.toLocaleString('vi-VN')} đ</p>
              <p>• Tỷ lệ chuyển đổi phễu kỳ vọng: {(industry.cvr * 100).toFixed(1)}%</p>
            </div>

            <button
              onClick={handleApplyToForm}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-md shadow-cyan-600/20 transition-all hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>Nhận Kế Hoạch Chi Tiết Theo Mức Ngân Sách Này</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Forecast Results Column */}
          <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-cyan-400">
                  Dự Báo Lợi Nhuận & Tăng Trưởng
                </span>
                <h3 className="text-xl font-bold mt-0.5">Kết Quả Phân Tích Mô Phỏng</h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block">ROAS Kỳ Vọng</span>
                <span className="text-2xl font-black text-cyan-400">
                  {industry.avgRoas.toFixed(1)}x
                </span>
              </div>
            </div>

            {/* Projected Revenue Big Card */}
            <div className="p-5 rounded-xl bg-cyan-950/40 border border-cyan-800/60">
              <span className="text-xs text-cyan-300 font-medium block mb-1">
                Doanh thu ước tính mang lại / Tháng
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {formatVnd(estimatedRevenue)}
              </div>
              <p className="text-xs text-emerald-400 font-medium mt-1.5 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>
                  Lợi nhuận gộp vượt trội sau khi trừ chi phí quảng cáo: {formatVnd(estimatedRevenue - budgetVnd)}
                </span>
              </p>
            </div>

            {/* Metrics Breakdown Grid */}
            <div className="grid grid-cols-2 gap-3.5">
              <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                  <Users className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Lượt tiếp cận mục tiêu</span>
                </div>
                <div className="text-lg font-bold text-white">
                  ~{estimatedImpressions.toLocaleString('vi-VN')}
                </div>
                <span className="text-[11px] text-slate-400">Độ phủ thương hiệu</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                  <Target className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Traffic chất lượng cao</span>
                </div>
                <div className="text-lg font-bold text-white">
                  ~{estimatedClicks.toLocaleString('vi-VN')} clicks
                </div>
                <span className="text-[11px] text-slate-400">Tỷ lệ CTR tối ưu &gt; 3.5%</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 col-span-2">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                  <DollarSign className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Số Lead hoặc Đơn hàng thành công ước tính</span>
                </div>
                <div className="text-xl font-bold text-cyan-300">
                  ~{estimatedConversions.toLocaleString('vi-VN')} chuyển đổi
                </div>
                <span className="text-[11px] text-slate-400">
                  Giá mỗi chuyển đổi (CPA): ~{Math.round(budgetVnd / (estimatedConversions || 1)).toLocaleString('vi-VN')} đ
                </span>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 text-center italic">
              * Dự báo tính toán dựa trên dữ liệu trung bình các chiến dịch thực tế do Dimark tối ưu. Kết quả thực tế có thể cao hơn tùy thuộc vào độ uy tín thương hiệu và giá bán sản phẩm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

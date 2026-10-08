'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Send,
  CheckCircle2,
  PhoneCall,
  Clock,
  ShieldCheck,
  Calendar,
  Building,
  Mail,
  User,
  Globe,
  DollarSign,
  AlertCircle
} from 'lucide-react';

interface ConsultationFormProps {
  initialPlan?: string;
  initialBudget?: number;
  initialIndustry?: string;
}

export default function ConsultationForm({
  initialPlan,
  initialBudget,
  initialIndustry,
}: ConsultationFormProps) {
  const [formData, setFormData] = useState(() => ({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    websiteUrl: '',
    budgetRange: initialBudget ? `${initialBudget} Triệu VNĐ / tháng` : '30 - 70 triệu / tháng',
    services: [] as string[],
    notes: [
      initialPlan ? `Quan tâm gói: ${initialPlan}` : '',
      initialIndustry ? `Ngành hàng: ${initialIndustry}. Ngân sách dự kiến: ${initialBudget} Triệu VNĐ` : '',
    ]
      .filter(Boolean)
      .join('\n'),
  }));

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceOptions = [
    'Performance Ads (Meta & Google & TikTok)',
    'SEO Tổng Thể Bền Vững Top 1-3 Google',
    'Sáng Tạo Video Ngắn TikTok/Reels Giữ Chân 3s',
    'Tối Ưu Chuyển Đổi (CRO) & Thiết Kế Landing Page',
    'Marketing Automation & CRM Phễu Bán Hàng',
    'Tư Vấn Chiến Lược Tổng Thể & Audit Toàn Diện'
  ];

  const budgetOptions = [
    'Dưới 30 triệu / tháng (Khởi động thử nghiệm)',
    '30 - 70 triệu / tháng (Scale đa kênh)',
    '70 - 150 triệu / tháng (Tăng trưởng bứt phá)',
    'Trên 150 triệu / tháng (Thống lĩnh ngành)'
  ];

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service]
      };
    });
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Vui lòng nhập họ và tên của bạn.';
    if (!formData.phone.trim()) {
      errs.phone = 'Vui lòng nhập số điện thoại liên hệ.';
    } else if (!/^[0-9+ ]{9,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Số điện thoại không đúng định dạng.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Vui lòng nhập địa chỉ email.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Email không hợp lệ.';
    }
    if (!formData.company.trim()) errs.company = 'Vui lòng nhập tên công ty hoặc thương hiệu.';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section id="dang-ky" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left information column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              <Sparkles className="w-4 h-4" />
              <span>Đặc Quyền Dành Riêng Cho Doanh Nghiệp</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Nhận Buổi Audit Marketing 1-1 Miễn Phí{' '}
              <span className="text-cyan-600 dark:text-cyan-400 font-black">
                (Trị Giá 5.000.000đ)
              </span>
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Chuyên gia Trưởng của Dimark sẽ trực tiếp phân tích hiện trạng tài khoản quảng cáo, kiểm tra sức khỏe SEO website và phễu chuyển đổi của bạn trong 45 phút qua Google Meet.
            </p>

            {/* Value checklist */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Kiểm toán lãng phí ngân sách
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Chỉ ra các điểm rò rỉ ngân sách quảng cáo không tạo ra chuyển đổi.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Phân tích đối thủ cạnh tranh trực tiếp
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Khám phá mẫu quảng cáo và từ khóa mà đối thủ top 1 ngành đang chiếm lĩnh.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Lộ trình tăng trưởng 90 ngày cá nhân hóa
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Bàn giao tài liệu Action Plan chi tiết từng tuần để áp dụng ngay.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick contact contact cards */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-cyan-500" />
                Phản hồi trong vòng 30 phút
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                Bảo mật thông tin NDA 100%
              </span>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-7 sm:p-9 shadow-xl relative">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        Đăng Ký Thành Công!
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                        Cảm ơn <strong>{formData.fullName}</strong>. Chuyên gia phụ trách ngành hàng của Dimark sẽ liên hệ qua số điện thoại <strong>{formData.phone}</strong> trong vòng 30 phút để xác nhận lịch họp Google Meet.
                      </p>
                    </div>

                    {/* Summary confirmation receipt */}
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-left max-w-md mx-auto space-y-1.5">
                      <div className="font-bold text-slate-900 dark:text-white mb-1">
                        Tóm tắt thông tin đăng ký:
                      </div>
                      <p>• Doanh nghiệp: {formData.company}</p>
                      <p>• Email nhận tài liệu: {formData.email}</p>
                      <p>• Mức ngân sách dự kiến: {formData.budgetRange}</p>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href="tel:0813839079"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-colors"
                      >
                        <PhoneCall className="w-4 h-4" />
                        <span>Gọi Ngay Hotline 0813 839 079</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            fullName: '',
                            phone: '',
                            email: '',
                            company: '',
                            websiteUrl: '',
                            budgetRange: '30 - 70 triệu / tháng',
                            services: [],
                            notes: '',
                          });
                        }}
                        className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold transition-colors"
                      >
                        Đăng ký thêm thông tin khác
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Phiếu Khảo Sát & Đặt Lịch Tư Vấn Chiến Lược
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Điền thông tin để chúng tôi chuẩn bị dữ liệu phân tích trước buổi gặp
                      </p>
                    </div>

                    {/* Row 1: Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                          Họ và tên người liên hệ <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            placeholder="Ví dụ: Nguyễn Văn A"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className={`w-full pl-9 pr-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/80 border ${
                              errors.fullName ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200 dark:border-slate-700'
                            } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                          />
                        </div>
                        {errors.fullName && (
                          <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.fullName}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                          Số điện thoại (Zalo) <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <PhoneCall className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="tel"
                            placeholder="Ví dụ: 0988 123 456"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className={`w-full pl-9 pr-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/80 border ${
                              errors.phone ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200 dark:border-slate-700'
                            } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Email & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                          Email công việc <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="email"
                            placeholder="name@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={`w-full pl-9 pr-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/80 border ${
                              errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200 dark:border-slate-700'
                            } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                          Tên thương hiệu / Công ty <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <Building className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            placeholder="Ví dụ: CoolStyle Fashion"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className={`w-full pl-9 pr-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/80 border ${
                              errors.company ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200 dark:border-slate-700'
                            } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                          />
                        </div>
                        {errors.company && (
                          <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.company}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Website / Fanpage link */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Link Website hoặc Fanpage hiện tại (Nếu có)
                      </label>
                      <div className="relative">
                        <Globe className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="https://yourwebsite.vn hoặc fb.com/yourpage"
                          value={formData.websiteUrl}
                          onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                          className="w-full pl-9 pr-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                      </div>
                    </div>

                    {/* Budget selection */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Ngân sách Marketing dự kiến / Tháng
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Services interested (Checkboxes) */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Dịch vụ mong muốn triển khai (Chọn nhiều)
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {serviceOptions.map((srv) => {
                          const isChecked = formData.services.includes(srv);
                          return (
                            <button
                              key={srv}
                              type="button"
                              onClick={() => handleServiceToggle(srv)}
                              className={`p-2.5 rounded-lg text-left text-xs font-medium flex items-center gap-2 border transition-colors ${
                                isChecked
                                  ? 'bg-cyan-50 dark:bg-cyan-950/60 border-cyan-400 dark:border-cyan-700 text-cyan-900 dark:text-cyan-200'
                                  : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                              }`}
                            >
                              <div className={`w-4 h-4 rounded flex items-center justify-center border shrink-0 ${
                                isChecked ? 'bg-cyan-600 border-cyan-600 text-white' : 'border-slate-300 dark:border-slate-600'
                              }`}>
                                {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                              </div>
                              <span className="truncate">{srv}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Mục tiêu tăng trưởng hoặc khó khăn hiện tại của bạn
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Ví dụ: Đang chạy ads nhưng ROAS chỉ 1.5x, cần audit lại creative và phễu landing page..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 shadow-lg shadow-cyan-600/25 transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Gửi Đăng Ký & Nhận Lịch Audit 1-1 Miễn Phí</span>
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[11px] text-center text-slate-500 dark:text-slate-400">
                      Dimark cam kết bảo mật 100% dữ liệu kinh doanh và không gửi tin nhắn spam.
                    </p>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

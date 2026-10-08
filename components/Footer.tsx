'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Send,
  PhoneCall,
  Mail,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Award,
  ArrowUp
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-800">
          {/* Brand & Address Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center font-black text-white text-lg">
                D
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Dimark<span className="text-cyan-400">.</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Dimark Digital Agency – Thành lập từ <strong className="text-slate-200">tháng 6/2021</strong>. Là đơn vị chuyên môn quy mô tinh gọn (Boutique Agency), tập trung tối đa nguồn lực vào từng đối tác để xây dựng cỗ máy tăng trưởng doanh số thực chiến và bền vững.
            </p>

            <div className="space-y-2.5 text-xs text-slate-300 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Địa chỉ văn phòng:</strong> 308 Nguyễn Thị Minh Khai, Quy Nhơn, Gia Lai
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Hotline / Zalo: <a href="tel:0813839079" className="text-white font-semibold hover:text-cyan-400 transition-colors">0813 839 079</a> (Hỗ trợ 24/7)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Email: contact@dimark.vn</span>
              </div>
            </div>

            {/* Partner certification badges */}
            <div className="pt-3 flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-900 border border-slate-800 text-cyan-300 px-2.5 py-1 rounded-md">
                Google Premier Partner
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-900 border border-slate-800 text-blue-300 px-2.5 py-1 rounded-md">
                Meta Business Partner
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-900 border border-slate-800 text-teal-300 px-2.5 py-1 rounded-md">
                TikTok Shop Partner
              </span>
            </div>
          </div>

          {/* Quick links: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Dịch Vụ Nổi Bật
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/dich-vu" className="hover:text-cyan-400 transition-colors">
                  Performance Ads (Meta & Google & TikTok)
                </Link>
              </li>
              <li>
                <Link href="/dich-vu" className="hover:text-cyan-400 transition-colors">
                  Dịch Vụ SEO Tổng Thể Trang 1 Google
                </Link>
              </li>
              <li>
                <Link href="/dich-vu" className="hover:text-cyan-400 transition-colors">
                  Sáng Tạo Video Ngắn TikTok/Reels Triệu View
                </Link>
              </li>
              <li>
                <Link href="/dich-vu" className="hover:text-cyan-400 transition-colors">
                  Tối Ưu Tỷ Lệ Chuyển Đổi (CRO) & Landing Page
                </Link>
              </li>
              <li>
                <Link href="/dich-vu" className="hover:text-cyan-400 transition-colors">
                  Marketing Automation & CRM Nuôi Dưỡng Lead
                </Link>
              </li>
              <li>
                <Link href="/dich-vu" className="hover:text-cyan-400 transition-colors">
                  Báo Cáo Dashboard Looker Studio Real-time
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick links: Case Studies & Resources */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Về Dimark & Dự Án
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/gioi-thieu" className="text-cyan-300 font-semibold hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <span>→ Giới thiệu Dimark (06/2021)</span>
                </Link>
              </li>
              <li>
                <Link href="/du-an" className="hover:text-cyan-400 transition-colors">
                  Case Study E-commerce (+380% ROAS)
                </Link>
              </li>
              <li>
                <Link href="/du-an" className="hover:text-cyan-400 transition-colors">
                  Case Study Nha Khoa & Y Tế
                </Link>
              </li>
              <li>
                <Link href="/du-an" className="hover:text-cyan-400 transition-colors">
                  Case Study Phần Mềm B2B SaaS
                </Link>
              </li>
              <li>
                <Link href="/bang-gia" className="hover:text-cyan-400 transition-colors">
                  Bảng Giá & Công Cụ Dự Báo ROI
                </Link>
              </li>
              <li>
                <Link href="/danh-gia" className="hover:text-cyan-400 transition-colors">
                  Đánh Giá Từ 180+ Khách Hàng
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-cyan-400 transition-colors">
                  Blog Kiến Thức Chuyên Sâu
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Bản Tin Chiến Lược Digital
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Nhận bản tin phân tích thuật toán Facebook, Google mới nhất và các case study thực chiến vào mỗi sáng thứ 2 hàng tuần.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email của bạn..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 px-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Đăng Ký Nhận Bản Tin Miễn Phí</span>
              </button>
            </form>

            {subscribed && (
              <p className="text-[11px] text-emerald-400 flex items-center gap-1.5 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Đăng ký thành công! Hãy kiểm tra hòm thư của bạn nhé.</span>
              </p>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Dimark Digital Solutions. Thành lập từ tháng 6/2021. Bản quyền đã được đăng ký.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">
              Chính sách bảo mật
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Điều khoản dịch vụ
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Quy chế hoạt động
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors flex items-center gap-1"
              aria-label="Lên đầu trang"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

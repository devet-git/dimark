'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import RoiCalculator from '@/components/RoiCalculator';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogSection from '@/components/BlogSection';
import ConsultationForm from '@/components/ConsultationForm';
import LiveChatWidget from '@/components/LiveChatWidget';
import Footer from '@/components/Footer';
import { ArrowRight, Layers, Award, DollarSign, BookOpen, MessageSquare } from 'lucide-react';

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [selectedBudget, setSelectedBudget] = useState<number | undefined>(undefined);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
  };

  const handleBudgetSelect = (budget: number, industry: string) => {
    setSelectedBudget(budget);
    setSelectedIndustry(industry);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200 selection:bg-cyan-500 selection:text-white">
      {/* Sticky & Responsive Header */}
      <Navbar />

      {/* Main Landing Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. About Dimark Section */}
        <div className="relative">
          <AboutSection />
          <div className="bg-white dark:bg-slate-900 pb-12 text-center -mt-6">
            <Link
              href="/gioi-thieu"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/50 hover:bg-cyan-100 dark:hover:bg-cyan-900/50 border border-cyan-200 dark:border-cyan-800 transition-colors shadow-sm"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Xem Câu Chuyện Thương Hiệu & Hành Trình Phát Triển Chi Tiết</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 3. Core Digital Marketing Services */}
        <div className="relative">
          <ServicesSection />
          <div className="bg-white dark:bg-slate-900/60 pb-12 text-center">
            <Link
              href="/dich-vu"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/50 hover:bg-cyan-100 dark:hover:bg-cyan-900/50 border border-cyan-200 dark:border-cyan-800 transition-colors"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Xem Toàn Bộ 6 Dịch Vụ & Lộ Trình Triển Khai Chi Tiết</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 3. Interactive ROI & Budget Forecaster */}
        <RoiCalculator onSelectBudget={handleBudgetSelect} />

        {/* 4. Featured Case Studies & Client Proof */}
        <div className="relative">
          <CaseStudiesSection />
          <div className="bg-white dark:bg-slate-900/60 pb-12 text-center">
            <Link
              href="/du-an"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/50 hover:bg-cyan-100 dark:hover:bg-cyan-900/50 border border-cyan-200 dark:border-cyan-800 transition-colors"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Xem Tất Cả Các Case Study Dự Án Thực Chiến</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 5. Transparent Pricing Packages */}
        <div className="relative">
          <PricingSection onSelectPlan={handlePlanSelect} />
          <div className="bg-white dark:bg-slate-900/60 pb-12 text-center">
            <Link
              href="/bang-gia"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/50 hover:bg-cyan-100 dark:hover:bg-cyan-900/50 border border-cyan-200 dark:border-cyan-800 transition-colors"
            >
              <DollarSign className="w-3.5 h-3.5" />
              <span>Xem Bảng So Sánh Quyền Lợi Các Gói Chi Tiết</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 6. Client Testimonials */}
        <div className="relative">
          <TestimonialsSection />
          <div className="bg-slate-50 dark:bg-slate-950 pb-12 text-center">
            <Link
              href="/danh-gia"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-cyan-600 dark:text-cyan-400 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Xem Thêm Đánh Giá Từ 180+ Doanh Nghiệp Đồng Hành</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 7. Marketing Knowledge & Insights Blog */}
        <div className="relative">
          <BlogSection />
          <div className="bg-white dark:bg-slate-900/60 pb-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/50 hover:bg-cyan-100 dark:hover:bg-cyan-900/50 border border-cyan-200 dark:border-cyan-800 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Khám Phá Toàn Bộ Thư Viện Kiến Thức Digital Marketing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 8. Free Audit & Consultation Booking Form */}
        <ConsultationForm
          key={`${selectedPlan}-${selectedBudget}-${selectedIndustry}`}
          initialPlan={selectedPlan}
          initialBudget={selectedBudget}
          initialIndustry={selectedIndustry}
        />
      </main>

      {/* Floating Live Chat Consultant */}
      <LiveChatWidget />

      {/* Comprehensive SEO & Company Footer */}
      <Footer />
    </div>
  );
}

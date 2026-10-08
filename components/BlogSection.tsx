'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  Search,
  Clock,
  ArrowRight,
  X,
  Share2,
  CheckCircle2,
  Sparkles,
  Bookmark
} from 'lucide-react';

interface BlogPost {
  id: string;
  tag: string;
  tagCategory: 'ads' | 'seo' | 'content' | 'cro';
  title: string;
  summary: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  keyTakeaways: string[];
  contentParagraphs: { heading: string; body: string }[];
}

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: 'meta-ads-roas-2026',
      tag: 'Performance Ads',
      tagCategory: 'ads',
      title: 'Chiến Lược Tối Ưu ROAS Meta Ads Năm 2026: Tư Duy Creative-First Thay Thế Kỹ Thuật Lách',
      summary: 'Tại sao việc nhắm mục tiêu (Targeting) hẹp đã lỗi thời? Cách cấu trúc chiến dịch Advantage+ Shopping và sản xuất phễu Creative đa góc nhìn để giữ ROAS trên 4.5x bền vững.',
      readTime: '6 phút đọc',
      date: 'Tháng 3, 2026',
      author: 'Lê Hoàng Minh',
      authorRole: 'Head of Media Buying tại Dimark',
      keyTakeaways: [
        'Broad Targeting (nhắm tệp rộng) hoạt động hiệu quả hơn nhắm tệp sở thích nhỏ hẹp nhờ thuật toán máy học Meta.',
        '70% kết quả chiến dịch phụ thuộc vào Creative (Hook 3s đầu, góc nhìn giải quyết nỗi đau, Call to action).',
        'Cài đặt Server-side Conversion API (CAPI) là bắt buộc để khôi phục 20-30% dữ liệu chuyển đổi bị mất do iOS.'
      ],
      contentParagraphs: [
        {
          heading: '1. Thuật toán Meta 2026 đã thay đổi cách chúng ta chạy ads như thế nào?',
          body: 'Trong kỷ nguyên AI hiện nay, các kỹ thuật "lách tut", "chạy tệp ẩn" hay chia nhỏ hàng chục adset hẹp đã trở nên kém hiệu quả và tốn kém. Thuật toán của Meta hiện đã đủ thông minh để tự động nhận diện nội dung video/hình ảnh của bạn đang nói về điều gì và phân phối chính xác tới người dùng có khả năng chuyển đổi cao nhất.'
        },
        {
          heading: '2. Quy tắc 3 giây vàng của Creative quảng cáo',
          body: 'Khách hàng lướt qua hàng trăm nội dung mỗi ngày. Nếu trong 3 giây đầu tiên video của bạn không tạo ra sự tò mò (Visual Hook) hoặc nêu bật trực tiếp vấn đề họ đang gặp phải (Pain Point), chi phí CPM của bạn sẽ bị đội lên gấp đôi. Đừng bắt đầu bằng lời giới thiệu thương hiệu lê thê, hãy đi thẳng vào giải pháp!'
        },
        {
          heading: '3. Ma trận thử nghiệm Creative (Creative Testing Matrix)',
          body: 'Mỗi tuần doanh nghiệp cần thử nghiệm ít nhất 4 góc tiếp cận mới: 1. Góc so sánh trước/sau; 2. Góc phản bác quan niệm sai lầm phổ biến; 3. Góc trải nghiệm thực tế của người dùng (UGC); 4. Góc khuyến mãi độc quyền có giới hạn thời gian. Khi tìm ra mẫu thắng (Winner), hãy nhân bản và mở rộng ngân sách từ từ 15-20% mỗi ngày.'
        }
      ]
    },
    {
      id: 'seo-entity-topical-authority',
      tag: 'SEO Tổng Thể',
      tagCategory: 'seo',
      title: 'Bí Quyết SEO Tổng Thể Bền Vững: Thống Lĩnh Top 1 Google Bằng Topic Cluster & Entity',
      summary: 'Hướng dẫn toàn diện cách xây dựng bản đồ chủ đề (Topical Map) và định danh thực thể doanh nghiệp trên Google Knowledge Graph để leo top vững vàng mà không sợ các đợt cập nhật thuật toán.',
      readTime: '8 phút đọc',
      date: 'Tháng 3, 2026',
      author: 'Đặng Thanh Tùng',
      authorRole: 'Senior SEO Strategist tại Dimark',
      keyTakeaways: [
        'Google không xếp hạng từng bài viết riêng lẻ mà đánh giá thẩm quyền tổng thể của toàn bộ website đối với chủ đề đó.',
        'Mô hình Topic Cluster giúp liên kết các bài viết vệ tinh chặt chẽ về bài viết trụ cột (Pillar Page).',
        'Tối ưu chuẩn E-E-A-T (Trải nghiệm, Chuyên môn, Thẩm quyền, Đáng tin cậy) là yếu tố sống còn cho ngành Y tế, Tài chính và Giáo dục.'
      ],
      contentParagraphs: [
        {
          heading: '1. Thời kỳ spam từ khóa và backlink rác đã hoàn toàn chấm dứt',
          body: 'Các bản cập nhật thuật toán cốt lõi (Core Updates) liên tục của Google nhắm thẳng vào các website tạo nội dung máy móc, xào xáo thông tin từ người khác. Để tồn tại và dẫn đầu, nội dung của bạn phải cung cấp giá trị bổ sung độc nhất (Information Gain) mà đối thủ chưa có.'
        },
        {
          heading: '2. Cách thiết kế Topic Cluster cho ngành hàng',
          body: 'Bắt đầu từ một bài Pillar Page dài 3.000 - 5.000 từ bao quát toàn cảnh vấn đề lớn. Sau đó tạo 8-15 bài Cluster vệ tinh giải quyết từng thắc mắc ngách. Tất cả các bài này đều liên kết nội bộ theo cấu trúc 2 chiều. Điều này gửi tín hiệu rõ ràng đến Google rằng trang web của bạn là chuyên gia số 1 trong lĩnh vực này.'
        },
        {
          heading: '3. Định danh Entity thương hiệu với Schema Markup',
          body: 'Sử dụng Schema Organization, MedicalClinic, LocalBusiness hoặc Product kết hợp với liên kết `sameAs` trỏ về các trang mạng xã hội chính thức, hồ sơ báo chí và mã số thuế doanh nghiệp. Điều này giúp Google xác minh website thuộc về một tổ chức có thật và uy tín ngoài đời thực.'
        }
      ]
    },
    {
      id: 'short-form-video-formula',
      tag: 'Sáng Tạo Video',
      tagCategory: 'content',
      title: 'Công Thức Video Ngắn TikTok & Reels Giữ Chân Khách Hàng 3s Đầu và Chuyển Đổi',
      summary: 'Giải mã kịch bản Hook - Story - Offer đã tạo ra hơn 45 triệu lượt xem và hàng chục nghìn đơn hàng cho các nhãn hàng D2C và chuỗi bán lẻ.',
      readTime: '5 phút đọc',
      date: 'Tháng 2, 2026',
      author: 'Trần Thảo Ly',
      authorRole: 'Creative & Video Producer tại Dimark',
      keyTakeaways: [
        'Tỷ lệ xem hết video (Completion Rate) là chỉ số quan trọng nhất quyết định video có được đẩy vào luồng xu hướng triệu view.',
        'Kịch bản 30-45 giây lý tưởng: 3s mở đầu giật gân, 20s nội dung bất ngờ/hài hước/thấu cảm, 10s lời kêu gọi hành động tự nhiên.',
        'Âm thanh nền trending và phụ đề to rõ ràng chiếm 40% khả năng giữ chân người xem.'
      ],
      contentParagraphs: [
        {
          heading: '1. Khái niệm Hook trong video ngắn',
          body: 'Hook không chỉ là lời nói, nó là sự kết hợp giữa: 1. Hình ảnh bất thường (Visual Hook); 2. Câu nói khơi gợi tò mò (Verbal Hook); 3. Chữ chạy tiêu đề giật tít trên màn hình (Text Hook). Khi cả 3 yếu tố này đồng điệu trong 1.5 giây đầu, tỷ lệ lướt qua sẽ giảm đi hơn 60%.'
        },
        {
          heading: '2. Xây dựng câu chuyện tự nhiên, không "mùi quảng cáo"',
          body: 'Người dùng lên TikTok để giải trí và học hỏi, họ sẽ bấm bỏ qua ngay nếu thấy video giống một đoạn TVC truyền hình bóng bẩy. Phong cách quay đời thường, chân thực, quay bằng điện thoại nhưng có ánh sáng tốt và âm thanh rõ ràng luôn mang lại tỷ lệ chuyển đổi cao hơn gấp nhiều lần.'
        },
        {
          heading: '3. Nghệ thuật kêu gọi hành động (Call To Action - CTA)',
          body: 'Đừng chỉ bảo "Hãy mua ngay". Hãy đưa ra lý do thôi thúc hành động: "Số lượng ưu đãi chỉ còn 50 suất cho những ai để lại bình luận", "Bấm vào giỏ hàng góc trái để nhận mã giảm 30% hôm nay".'
        }
      ]
    },
    {
      id: 'cro-landing-page-guide',
      tag: 'Tối Ưu CRO',
      tagCategory: 'cro',
      title: 'Chiến Lược Tối Ưu Tỷ Lệ Chuyển Đổi (CRO): Gấp Đôi Doanh Thu Mà Không Tốn Thêm Phí Ads',
      summary: '10 nguyên tắc tâm lý học hành vi và bố cục giao diện giúp nâng tỷ lệ chuyển đổi từ 1.2% lên trên 4.0% cho Landing Page bán hàng.',
      readTime: '7 phút đọc',
      date: 'Tháng 2, 2026',
      author: 'Nguyễn Quốc Bảo',
      authorRole: 'UX Lead & CRO Specialist tại Dimark',
      keyTakeaways: [
        'Mỗi giây tải trang chậm trễ làm sụt giảm 7% tỷ lệ chuyển đổi trên các thiết bị di động.',
        'Quy tắc Một Mục Tiêu Duy Nhất (Single Goal): Loại bỏ mọi thanh menu và đường dẫn gây phân tâm trên Landing Page.',
        'Bằng chứng xã hội (Social Proof) như ảnh chụp khách hàng thực tế và số liệu chứng thực giúp xóa tan rào cản do dự.'
      ],
      contentParagraphs: [
        {
          heading: '1. Phễu chuyển đổi đang bị thủng ở đâu?',
          body: 'Hầu hết các doanh nghiệp đổ lỗi cho quảng cáo đắt khi doanh số không tăng. Nhưng khi phân tích Heatmap và Session Recording, chúng tôi phát hiện 50% người dùng thoát ngay trong 5 giây đầu vì trang tải quá chậm, hoặc form đăng ký quá dài dòng với 8-10 ô bắt buộc điền.'
        },
        {
          heading: '2. Tối giản hóa biểu mẫu (Frictionless Forms)',
          body: 'Chỉ yêu cầu những thông tin thực sự cần thiết cho bước tiếp theo (Ví dụ: Tên và Số điện thoại). Mọi câu hỏi thêm về địa chỉ chi tiết hay mã số thuế hãy để dành sau khi chuyên viên tư vấn gọi điện thoại chốt lịch hẹn.'
        },
        {
          heading: '3. Hiệu ứng FOMO và Đảm bảo rủi ro bằng 0',
          body: 'Khách hàng luôn sợ bị lừa khi mua sắm online. Việc gắn thêm cam kết hoàn tiền 100%, bảo hành chính hãng và các video đánh giá từ khách hàng cũ sẽ tạo ra tấm khiên tâm lý an tâm tuyệt đối.'
        }
      ]
    }
  ];

  const categories = [
    { key: 'all', label: 'Tất cả bài viết' },
    { key: 'ads', label: 'Performance Ads' },
    { key: 'seo', label: 'SEO Tổng Thể' },
    { key: 'content', label: 'Sáng Tạo Video' },
    { key: 'cro', label: 'Tối Ưu Chuyển Đổi' }
  ];

  const filteredPosts = posts.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.tagCategory === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="py-24 bg-white dark:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              <BookOpen className="w-4 h-4" />
              <span>Góc Nhìn Chuyên Môn & Chiến Lược Thực Chiến</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Kiến Thức Digital Marketing Hàng Đầu
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Cập nhật những chiến lược mới nhất, phân tích thuật toán chuyên sâu và cẩm nang tăng trưởng được đúc kết từ thực chiến của đội ngũ Dimark.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Tìm kiếm chủ đề..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200/60 dark:border-slate-800">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setSelectedCategory(c.key)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                selectedCategory === c.key
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-7 flex flex-col justify-between hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 cursor-pointer"
              onClick={() => setReadingPost(post)}
            >
              <div>
                {/* Unboxed clean metadata (anti-slop rule compliant) */}
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span className="font-semibold text-cyan-600 dark:text-cyan-400">{post.tag}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.date}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-3 leading-snug">
                  {post.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 line-clamp-3">
                  {post.summary}
                </p>

                {/* Key takeaway bullet preview */}
                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 mb-6 space-y-1.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                    <span>Điểm cốt lõi:</span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 line-clamp-2">
                    {post.keyTakeaways[0]}
                  </p>
                </div>
              </div>

              {/* Author & Read button */}
              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white block">
                    {post.author}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    {post.authorRole}
                  </span>
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400 group-hover:translate-x-1 transition-transform">
                  <span>Đọc bài viết</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Full Article Reader Modal */}
      <AnimatePresence>
        {readingPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-10 my-8 overflow-hidden"
            >
              <button
                onClick={() => setReadingPost(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Đóng"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Unboxed Metadata */}
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                <span className="font-semibold text-cyan-600 dark:text-cyan-400">{readingPost.tag}</span>
                <span aria-hidden="true">·</span>
                <span>{readingPost.readTime}</span>
                <span aria-hidden="true">·</span>
                <span>Xuất bản {readingPost.date}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">
                {readingPost.title}
              </h2>

              {/* Author byline */}
              <div className="flex items-center gap-3 pb-6 mb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 rounded-full bg-cyan-600 text-white font-bold text-sm flex items-center justify-center">
                  {readingPost.author.split(' ').slice(-1)[0][0]}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {readingPost.author}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {readingPost.authorRole}
                  </div>
                </div>
              </div>

              {/* Takeaways Card */}
              <div className="p-4 sm:p-5 rounded-xl bg-cyan-50/70 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800 mb-8 space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-900 dark:text-cyan-300 flex items-center gap-1.5">
                  <Bookmark className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>Tóm Tắt Ý Chính Cần Nắm:</span>
                </h4>
                <div className="space-y-2">
                  {readingPost.keyTakeaways.map((t, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-cyan-950 dark:text-cyan-100">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Article Content */}
              <div className="space-y-6 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-h-[50vh] overflow-y-auto pr-3">
                {readingPost.contentParagraphs.map((para, i) => (
                  <div key={i} className="space-y-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {para.heading}
                    </h3>
                    <p>{para.body}</p>
                  </div>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Cần hỗ trợ áp dụng chiến lược này cho doanh nghiệp của bạn?
                </div>

                <a
                  href="#dang-ky"
                  onClick={() => setReadingPost(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-center shadow-sm"
                >
                  Đăng Ký Audit Miễn Phí Với Chuyên Gia
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

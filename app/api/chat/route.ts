import { GoogleGenAI } from '@google/genai';
import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_INSTRUCTION = `Bạn là Chuyên gia Tư vấn Chiến lược Digital Marketing Cấp cao tại Dimark Digital Agency (Việt Nam).
Tôn chỉ làm việc của bạn:
- Thành lập từ tháng 6/2021, mô hình Boutique Agency quy mô nhỏ, tinh gọn, cam kết chất lượng sâu sát.
- Địa chỉ văn phòng: 308 Nguyễn Thị Minh Khai, Quy Nhơn, Gia Lai. Hotline: 0813 839 079.
- Chuyên nghiệp, nhạy bén với số liệu (ROAS, CPA, CAC, LTV, CTR, CVR), hiện đại, thực chiến.
- Tư vấn giải pháp phù hợp với ngân sách và ngành hàng của khách hàng (E-commerce, B2B SaaS, F&B, Thẩm mỹ / Phòng khám, Bất động sản, Giáo dục...).
- Các dịch vụ chính của Dimark:
  1. Performance Advertising (Meta Ads, Google Search & Shopping, TikTok Ads)
  2. SEO Tổng Thể bền vững (Entity, Topic Cluster, Content chuẩn Search Intent)
  3. Content Marketing & Sản xuất Video ngắn TikTok/Shorts giữ chân 3s
  4. Tối ưu Tỷ lệ Chuyển đổi (CRO & Thiết kế Landing Page chuyển đổi cao)
  5. Marketing Automation & CRM (Phễu nuôi dưỡng lead, Email Marketing, Chatbot)
  6. Data Attribution & Báo cáo Real-time (Looker Studio)
- Phong cách giao tiếp: Lịch sự, ngắn gọn súc tích, có gạch đầu dòng rõ ràng, đề xuất bước đi cụ thể.
- Khuyến khích khách hàng đăng ký buổi Audit Marketing 1-1 Miễn phí trị giá 5.000.000đ hoặc để lại số điện thoại/website để đội ngũ chuyên gia phân tích trực tiếp.
- Trả lời hoàn toàn bằng tiếng Việt chuẩn mực.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Vui lòng cung cấp nội dung tin nhắn.' },
        { status: 400 }
      );
    }

    const lastUserMessage = messages[messages.length - 1]?.content || '';

    // If GEMINI_API_KEY is available, use GoogleGenAI
    if (process.env.GEMINI_API_KEY) {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        
        // Prepare context prompt
        const conversationHistory = messages
          .slice(-6)
          .map((m: { role: string; content: string }) => `${m.role === 'user' ? 'Khách hàng' : 'Dimark'}: ${m.content}`)
          .join('\n');

        const prompt = `${SYSTEM_INSTRUCTION}\n\nLịch sử trò chuyện:\n${conversationHistory}\n\nDimark hãy trả lời súc tích, thực chiến và đưa ra lời khuyên giá trị nhất:`;

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
        });

        const replyText = response.text || '';
        if (replyText.trim()) {
          return NextResponse.json({ reply: replyText });
        }
      } catch (geminiError) {
        console.warn('Gemini API call failed, falling back to smart heuristic rule:', geminiError);
      }
    }

    // High quality intelligent heuristic fallback if Gemini is offline or without key
    const lower = lastUserMessage.toLowerCase();
    let reply = '';

    if (lower.includes('ngân sách') || lower.includes('triệu') || lower.includes('chi phí') || lower.includes('giá')) {
      reply = `Chào bạn! Về phân bổ ngân sách Digital Marketing tối ưu:
• **Giai đoạn Test & Validation (15 - 30 triệu/tháng):** 60% Performance Ads (Meta/Google), 25% Sáng tạo Content/Video ngắn, 15% Landing page & Tracking.
• **Giai đoạn Scaling (50 - 150 triệu/tháng):** Đa kênh Meta + TikTok + Google Search, kết hợp SEO tổng thể để giảm dần chi phí phụ thuộc vào ads.
• **Cam kết Dimark:** Tối ưu hóa CPA thấp hơn 25-35% so với trung bình ngành.

Bạn có thể để lại link Website hoặc Fanpage trong form bên dưới để chuyên gia của chúng tôi gửi bảng phân bổ ngân sách chi tiết kèm dự báo doanh thu nhé!`;
    } else if (lower.includes('seo') || lower.includes('google') || lower.includes('từ khóa') || lower.includes('thứ hạng')) {
      reply = `Chào bạn! Chiến lược SEO Tổng Thể của Dimark tập trung vào tăng trưởng Traffic chuyển đổi (Commercial Intent) thay vì chỉ đua thứ hạng từ khóa vô nghĩa:
1. **Technical SEO Audit:** Tối ưu Core Web Vitals, tốc độ tải trang dưới 1.5s và cấu trúc Schema.
2. **Topic Clusters & Entity:** Xây dựng thẩm quyền chuyên gia cho thương hiệu trong mắt thuật toán Google.
3. **Chuyển đổi on-page:** Tối ưu CTA và form đăng ký trên từng bài viết Top 1.

Thời gian thông thường để thấy tăng trưởng traffic rõ rệt là từ tháng thứ 2-3. Bạn muốn Dimark quét audit nhanh trang web hiện tại không?`;
    } else if (lower.includes('ads') || lower.includes('quảng cáo') || lower.includes('facebook') || lower.includes('meta') || lower.includes('tiktok')) {
      reply = `Dạ chào bạn! Để bứt phá ROAS trên Meta và TikTok trong năm 2026:
• **Kỷ nguyên Creative-first:** 70% thành bại của Ads nằm ở Creative (Video ngắn giữ chân 3 giây đầu, Hook mạnh mẽ và Storytelling đánh trúng Pain Point).
• **Cấu trúc tài khoản tinh gọn:** Tận dụng thuật toán Advantage+ / Smart Performance Campaign của nền tảng, tập trung ngân sách thử nghiệm A/B Testing creatives liên tục.
• **Phễu Retargeting đa điểm chạm:** Tiếp cận lại khách hàng đã xem video, tương tác fanpage hoặc bỏ giỏ hàng.

Dimark (thành lập từ tháng 6/2021) hiện có gói bảo đảm ROAS cam kết theo hợp đồng. Bạn đang quan tâm chạy ngành hàng nào ạ?`;
    } else if (lower.includes('audit') || lower.includes('tư vấn') || lower.includes('gặp') || lower.includes('liên hệ')) {
      reply = `Dạ rất sẵn lòng hỗ trợ bạn! Dimark đang tặng gói **Audit Toàn Diện 360°** (Phân tích phễu chuyển đổi, đánh giá quảng cáo, đối thủ cạnh tranh & SEO):
• Thời lượng: 45 phút qua Google Meet cùng Chuyên gia Trưởng.
• Hoàn toàn miễn phí và nhận báo cáo dạng Slide PDF hành động ngay.

Bạn vui lòng điền thông tin ở mục **"Đăng ký tư vấn"** hoặc nhắn trực tiếp Hotline/Zalo: **0813 839 079** nhé!`;
    } else {
      reply = `Xin chào! Cảm ơn bạn đã kết nối với Dimark Digital Agency (thành lập 06/2021). 

Chúng tôi là boutique agency chuyên sâu giải quyết các bài toán tăng trưởng:
1. **Tăng đơn hàng & Doanh số E-commerce** qua Performance Ads (Meta, Google, TikTok).
2. **Kéo Lead B2B chất lượng cao** qua Inbound Content & SEO Tổng thể.
3. **Tối ưu Tỷ lệ Chuyển đổi (CRO)** và thiết kế Landing Page bán hàng đỉnh cao.

Bạn đang quan tâm đến mục tiêu hoặc dịch vụ nào để tôi tư vấn cụ thể nhất cho doanh nghiệp mình ạ?`;
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { reply: 'Chào bạn, hiện hệ thống đang bận. Bạn vui lòng điền form tư vấn bên dưới hoặc gọi hotline 0813 839 079 để được hỗ trợ tức thì nhé!' },
      { status: 200 }
    );
  }
}

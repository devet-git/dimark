import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Dimark – Giải Pháp Digital Marketing Tăng Trưởng Doanh Thu Hàng Đầu',
  description: 'Dịch vụ Digital Marketing chuyên nghiệp từ Dimark (thành lập 06/2021): Performance Ads, SEO Tổng Thể, Content Sáng Tạo & Tối ưu tỷ lệ chuyển đổi (CRO) bứt phá doanh số cho doanh nghiệp.',
  keywords: [
    'dimark',
    'dimark marketing',
    'digital marketing',
    'dịch vụ digital marketing',
    'công ty marketing',
    'chạy quảng cáo facebook',
    'quảng cáo google ads',
    'dịch vụ seo tổng thể',
    'tối ưu chuyển đổi cro',
    'tư vấn marketing doanh nghiệp'
  ],
  authors: [{ name: 'Dimark Digital' }],
  creator: 'Dimark Digital Solutions',
  metadataBase: new URL(process.env.APP_URL || 'https://dimark.vn'),
  openGraph: {
    title: 'Dimark – Giải Pháp Digital Marketing Tăng Trưởng Doanh Thu Hàng Đầu',
    description: 'Bứt phá ROAS, tối ưu chuyển đổi và mở rộng quy mô kinh doanh cùng đội ngũ chuyên gia Digital Marketing thực chiến tại Dimark.',
    url: '/',
    siteName: 'Dimark Digital Agency',
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dimark – Giải Pháp Digital Marketing Tăng Trưởng Doanh Thu',
    description: 'Performance Ads, SEO Tổng Thể, Content Sáng Tạo & CRO bứt phá doanh số cho doanh nghiệp.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://dimark.vn/#organization',
      'name': 'Dimark Digital Marketing Agency',
      'url': 'https://dimark.vn',
      'logo': 'https://dimark.vn/logo.png',
      'description': 'Công ty Digital Marketing chuyên nghiệp thành lập từ tháng 6/2021.',
      'foundingDate': '2021-06-01',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '308 Nguyễn Thị Minh Khai',
        'addressLocality': 'Quy Nhơn',
        'addressRegion': 'Gia Lai',
        'postalCode': '590000',
        'addressCountry': 'VN'
      },
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+84-813-839-079',
        'contactType': 'customer service',
        'areaServed': 'VN',
        'availableLanguage': ['Vietnamese', 'English']
      },
      'sameAs': [
        'https://facebook.com/dimark.vn',
        'https://linkedin.com/company/dimark-digital'
      ]
    },
    {
      '@type': 'WebSite',
      '@id': 'https://dimark.vn/#website',
      'url': 'https://dimark.vn',
      'name': 'Dimark Digital',
      'publisher': {
        '@id': 'https://dimark.vn/#organization'
      },
      'inLanguage': 'vi-VN'
    },
    {
      '@type': 'Service',
      'name': 'Dịch vụ Digital Marketing Tổng Thể',
      'serviceType': 'Digital Marketing & Growth Strategy',
      'provider': {
        '@id': 'https://dimark.vn/#organization'
      },
      'areaServed': {
        '@type': 'Country',
        'name': 'Vietnam'
      },
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Dịch vụ Marketing',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Performance Advertising (Meta, Google, TikTok Ads)'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'SEO Tổng Thể Bền Vững'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Tối ưu Tỷ lệ Chuyển đổi (CRO & Landing Page)'
            }
          }
        ]
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 antialiased selection:bg-cyan-500 selection:text-white transition-colors duration-200">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}


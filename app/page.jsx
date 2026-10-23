import HeroSection from '@/components/sections/HeroSection';
import HeroSearch from '@/components/sections/HeroSearch';
import StatsSection from '@/components/sections/StatsSection';
import EmployerLogosSection from '@/components/sections/EmployerLogosSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import FeaturedJobsSection from '@/components/sections/FeaturedJobsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FaqSection from '@/components/sections/FaqSection';
import FooterCtaSection from '@/components/sections/FooterCtaSection';
import { faqs } from '@/data/faqs';

/**
 * Unique SEO Metadata for Surhires Home Page.
 */
export const metadata = {
  title: 'Hire Faster. Get Hired Sooner | Surhires',
  description:
    'Every month, 120,000+ job seekers and 3,400 hiring teams use Surhires to turn open tech roles into verified hires with transparent salary benchmarks.',
  openGraph: {
    title: 'Hire Faster. Get Hired Sooner | Surhires',
    description:
      'Every month, 120,000+ job seekers and 3,400 hiring teams use Surhires to turn open tech roles into verified hires with transparent salary benchmarks.',
    url: 'https://surhires.com',
    siteName: 'Surhires',
    locale: 'en_US',
    type: 'website',
  },
};

export default function HomePage() {
  // Schema.org FAQPage structured data
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      {/* FAQPage JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 1. Hero with the single <h1> on the page & transparent artwork */}
      <HeroSection />

      {/* 2. Floating Search Card overlapping hero bottom */}
      <HeroSearch />

      {/* 3. 4-column Stats Row beneath search card (2x2 on mobile) */}
      <StatsSection />

      {/* 4. Employer Logos Strip: 6 fictional company wordmarks in muted grey */}
      <EmployerLogosSection />

      {/* 5. How It Works (id="how-it-works"): 3 numbered steps with connecting line */}
      <HowItWorksSection />

      {/* 6. Featured Roles Grid: 6 cards from data/jobs.js */}
      <FeaturedJobsSection />

      {/* 7. Testimonials: 3 outcome stories with mobile snap row */}
      <TestimonialsSection />

      {/* 8. FAQ (id="faq"): Two-column layout with accessible accordion */}
      <FaqSection />

      {/* 9. Footer CTA Band: Rounded blue panel placed directly above Footer */}
      <FooterCtaSection />
    </>
  );
}

import EmployersHero from '@/components/sections/employers/EmployersHero';
import WhyEmployers from '@/components/sections/employers/WhyEmployers';
import HiringTimeline from '@/components/sections/employers/HiringTimeline';
import PricingPlans from '@/components/sections/employers/PricingPlans';
import ComparePlans from '@/components/sections/employers/ComparePlans';
import PostJobSection from '@/components/sections/employers/PostJobSection';
import FooterCtaSection from '@/components/sections/FooterCtaSection';
import MobileStickyCta from '@/components/sections/employers/MobileStickyCta';

/**
 * Server Component: Exports unique SEO metadata and renders Employers landing page.
 * Follows Surhires visual language: Source Serif 4 blue headings, Outfit body text,
 * crisp borders, soft shadows, 48px CTA buttons, and high-contrast accessibility.
 */
export const metadata = {
  title: 'Hire Pre-Vetted Tech Talent in 14 Days | Surhires for Employers',
  description:
    'Scale your engineering team with pre-screened senior software engineers, designers, and tech leaders. 72-hour delivery and 90-day replacement guarantee.',
  openGraph: {
    title: 'Hire Pre-Vetted Tech Talent in 14 Days | Surhires for Employers',
    description:
      'Connect directly with calibrated tech talent. Save 80% of technical screening time with guaranteed 72-hour candidate delivery.',
    url: 'https://surhires.com/employers',
    siteName: 'Surhires',
    locale: 'en_US',
    type: 'website',
  },
};

export default function EmployersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section with 72h Candidate Composition */}
      <EmployersHero />

      {/* 2. 3 Equal-Height Why Choose Cards */}
      <WhyEmployers />

      {/* 3. 4-Step Brief to Shortlist Timeline */}
      <HiringTimeline />

      {/* 4. Pricing Plans with Equal Heights & Mobile-First Ordering */}
      <PricingPlans />

      {/* 5. Compare Plans Table with Sticky First Column */}
      <ComparePlans />

      {/* 6. Post a Job Section (Two-Column Layout with Sticky Left Column) */}
      <PostJobSection />

      {/* 7. Footer CTA Band */}
      <FooterCtaSection />

      {/* 8. Mobile Sticky Bottom Action Bar */}
      <MobileStickyCta />
    </div>
  );
}

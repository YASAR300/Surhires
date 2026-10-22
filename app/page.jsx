import HeroSection from '@/components/sections/HeroSection';
import HeroSearch from '@/components/sections/HeroSearch';
import StatsSection from '@/components/sections/StatsSection';
import EmployerLogosSection from '@/components/sections/EmployerLogosSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import FeaturedJobsSection from '@/components/sections/FeaturedJobsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FaqSection from '@/components/sections/FaqSection';
import EmployerCtaSection from '@/components/sections/EmployerCtaSection';

/**
 * Unique page-level metadata for Surhires Home.
 */
export const metadata = {
  title: 'Hire Faster. Get Hired Sooner | Surhires',
  description:
    'Every month, 120,000+ job seekers and 3,400 hiring teams use Surhires to turn open roles into real hires with verified salary transparency.',
  openGraph: {
    title: 'Hire Faster. Get Hired Sooner | Surhires',
    description:
      'Every month, 120,000+ job seekers and 3,400 hiring teams use Surhires to turn open roles into real hires with verified salary transparency.',
    url: 'https://surhires.com',
  },
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero with the only <h1> on the page & original isometric SVG */}
      <HeroSection />

      {/* 2. Floating Search Card overlapping hero bottom */}
      <HeroSearch />

      {/* 3. 4-column Stats Row beneath search card (2x2 on mobile) */}
      <StatsSection />

      {/* 4. Employer Logos Strip: 6 fictional company wordmarks */}
      <EmployerLogosSection />

      {/* 5. How It Works (id="how-it-works"): 3 numbered steps with connecting line */}
      <HowItWorksSection />

      {/* 6. Featured Roles Grid: 6 cards from data/jobs.js with initial avatars & View role */}
      <FeaturedJobsSection />

      {/* Supporting Sections */}
      <TestimonialsSection />
      <FaqSection />
      <EmployerCtaSection />
    </>
  );
}

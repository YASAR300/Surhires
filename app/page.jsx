import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import FeaturedJobsSection from '@/components/sections/FeaturedJobsSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FaqSection from '@/components/sections/FaqSection';
import EmployerCtaSection from '@/components/sections/EmployerCtaSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturedJobsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FaqSection />
      <EmployerCtaSection />
    </>
  );
}

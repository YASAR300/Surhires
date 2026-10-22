import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import HeroSearch from '@/components/ui/HeroSearch';
import HeroIllustration from './HeroIllustration';

export default function HeroSection() {
  return (
    <section className="relative z-20 pt-8 pb-14 md:pt-12 md:pb-22 lg:pt-16 lg:pb-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines, CTAs, and Unified Premium Search Bar */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Display Headline in Royal Blue matching reference design */}
            <h1 className="text-display font-extrabold text-[#2563EB] tracking-tight leading-[1.1]">
              Find Jobs,<br />
              <span className="text-[#1D4ED8]">Hire Top Tech Talent</span>
            </h1>

            {/* Subtitle paragraph */}
            <p className="text-body-lg text-[#64748B] max-w-xl leading-relaxed">
              Each month, high-growth companies and verified engineering, product, and AI leaders connect
              directly on Surhires for transparent salaries and guaranteed 14-day placements.
            </p>

            {/* Action Buttons: Get Started + Learn more */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Button href="/jobs" variant="primary" size="md" className="px-6 shadow-sm shadow-[#2563EB]/20">
                Get Started
              </Button>
              <Button href="/#how-it-works" variant="secondary" size="md" className="px-6">
                Learn more
              </Button>
            </div>

            {/* Unified Floating Search Bar with interactive suggestions & custom dropdown */}
            <div className="pt-4 relative z-30">
              <HeroSearch />
            </div>
          </div>

          {/* Right Column: Isometric Illustration from Reference Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroIllustration />
          </div>
        </div>
      </Container>
    </section>
  );
}

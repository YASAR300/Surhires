import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import HeroIllustration from './HeroIllustration';

/**
 * Hero Section for Surhires.
 * Features the ONLY <h1> on the page, two-column layout on desktop, stacked on mobile.
 */
export default function HeroSection() {
  return (
    <section className="relative z-10 pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-20 lg:pb-24 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Claim, and Action Buttons */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* The ONLY <h1> on the page: Two-line Serif Headline in Brand Blue */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#2563EB] tracking-tight leading-[1.15]">
              Hire faster.<br />
              <span className="text-[#1D4ED8]">Get hired sooner.</span>
            </h1>

            {/* 2-line muted paragraph with specific claim */}
            <p className="font-body text-base sm:text-lg text-[#475569] max-w-xl leading-relaxed">
              Every month, 120,000+ job seekers and 3,400 hiring teams use Surhires to turn open roles into real hires.
            </p>

            {/* Two buttons side by side: Filled "Hire faster" & Outlined "Find a job" */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button
                href="/employers"
                variant="primary"
                size="lg"
                className="px-7 shadow-sm shadow-[#2563EB]/20 text-sm font-semibold"
              >
                Hire faster
              </Button>
              <Button
                href="/jobs"
                variant="secondary"
                size="lg"
                className="px-7 text-sm font-semibold"
              >
                Find a job
              </Button>
            </div>
          </div>

          {/* Right Column: Original Isometric Illustration */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroIllustration />
          </div>
        </div>
      </Container>
    </section>
  );
}

import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, Users, Sparkles } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 lg:pt-20 lg:pb-28">
      {/* Background subtle radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-gradient-to-b from-[#14B8A6]/10 via-[#FAF8F5]/0 to-transparent pointer-events-none -z-10" />

      <Container>
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Announcement pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CCFBF1]/70 border border-[#14B8A6]/30 text-xs font-semibold text-[#0F766E] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0F766E]" />
            <span>Q1 2026 Tech Hiring Report: 94% interview-to-offer rate</span>
          </div>

          {/* Main Display Headline */}
          <h1 className="text-display text-[#0B1F3A]">
            Where High-Growth Teams Hire{' '}
            <span className="text-[#0F766E] underline decoration-[#14B8A6]/40 underline-offset-8">
              Pre-Vetted
            </span>{' '}
            Tech Talent.
          </h1>

          {/* Body subhead */}
          <p className="text-body-lg text-[#475569] max-w-2xl mx-auto">
            Say goodbye to endless resume noise and transactional headhunters. Surhires matches verified
            software engineers, product managers, and design leads with world-class companies.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-3">
            <Button
              href="/jobs"
              variant="primary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              className="w-full sm:w-auto"
            >
              Explore Verified Roles
            </Button>
            <Button
              href="/employers"
              variant="teal"
              size="lg"
              className="w-full sm:w-auto"
            >
              Hire Top Talent
            </Button>
          </div>

          {/* Key Value Proposition Badges */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#475569] border-t border-[#E2E8F0]/80">
            <div className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#0F766E]" />
              <span>Rigorous Technical Vetting</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Zap className="w-4 h-4 text-[#0F766E]" />
              <span>First Candidates in 72 Hours</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Users className="w-4 h-4 text-[#0F766E]" />
              <span>90-Day Replacement Guarantee</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function EmployerCtaSection() {
  return (
    <section className="bg-gradient-to-r from-[#1E40AF] via-[#2563EB] to-[#1D4ED8] text-white py-16 md:py-22 relative overflow-hidden">
      {/* Decorative ambient radial lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0B1F3A]/20 rounded-full blur-2xl pointer-events-none" />

      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-xs font-bold text-white uppercase tracking-wider">
            For Hiring Managers & Founders
          </span>

          <h2 className="text-display font-extrabold text-white leading-tight">
            Ready to Build Your Engineering Dream Team?
          </h2>

          <p className="text-body-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Get your first calibrated candidates within 72 hours. Pay only when you successfully hire,
            backed by our comprehensive 90-day replacement guarantee.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <Button
              href="/employers"
              variant="navy"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              className="w-full sm:w-auto font-bold px-8 shadow-md"
            >
              Start Hiring With Surhires
            </Button>
            <Button
              href="/employers#pricing"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-white/10 text-white border-white/30 hover:bg-white/20"
            >
              View Employer Pricing
            </Button>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-blue-100 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#93C5FD]" />
              No upfront commitment
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#93C5FD]" />
              72-Hour Candidate Shortlists
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#93C5FD]" />
              90-Day Free Replacement Guarantee
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

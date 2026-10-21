import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function EmployerCtaSection() {
  return (
    <section className="bg-[#0B1F3A] text-white py-16 md:py-24 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-[#14B8A6]/10 to-transparent pointer-events-none" />

      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#162E50] border border-[#14B8A6]/30 text-xs font-semibold text-[#14B8A6]">
            Hiring Managers & Founders
          </span>

          <h2 className="text-h1 text-white">
            Ready to Build Your Engineering Dream Team?
          </h2>

          <p className="text-body-lg text-[#94A3B8] max-w-2xl mx-auto">
            Get your first calibrated candidates within 72 hours. Pay only when you successfully hire,
            backed by our comprehensive 90-day guarantee.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              href="/employers"
              variant="teal"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              className="w-full sm:w-auto text-[#0B1F3A] font-bold"
            >
              Start Hiring With Surhires
            </Button>
            <Button
              href="/employers#pricing"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-white border-[#162E50] hover:bg-[#162E50]"
            >
              View Employer Pricing
            </Button>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#94A3B8]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#14B8A6]" />
              No upfront commitment
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#14B8A6]" />
              72-Hour Candidate Shortlists
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#14B8A6]" />
              90-Day Free Replacement Guarantee
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

import Link from 'next/link';
import Container from '@/components/ui/Container';

/**
 * Footer CTA Band.
 * Clean, bold royal blue card placed directly above the Footer.
 * Zero distracting grid lines. High-contrast pure white typography and crisp buttons.
 */
export default function FooterCtaSection() {
  return (
    <section className="py-14 sm:py-18 lg:py-20 bg-white">
      <Container>
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#1D4ED8] via-[#2563EB] to-[#1E40AF] px-6 py-14 sm:px-12 sm:py-18 lg:py-20 text-center text-white overflow-hidden shadow-2xl shadow-[#2563EB]/20">
          {/* Soft ambient light accents (No distracting grids or lines) */}
          <div
            className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#1E40AF]/40 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Foreground Content */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            {/* Small Top Badge */}
            <div>
              <span
                className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold uppercase tracking-wider text-white select-none"
                style={{ color: '#FFFFFF' }}
              >
                START TODAY
              </span>
            </div>

            {/* Main Headline: Bold Serif Pure White (100% visible, contrast > 4.5:1) */}
            <h2
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.2]"
              style={{ color: '#FFFFFF' }}
            >
              Ready to accelerate your technical hiring?
            </h2>

            {/* Supporting Text: High-Contrast Crisp White */}
            <p
              className="font-body text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-normal"
              style={{ color: '#F0F9FF' }}
            >
              Join 3,400+ hiring teams and 120,000+ engineers making verified matches every month.
            </p>

            {/* Action Buttons: Solid White "Post a Job" & Crisp Outlined "Browse Jobs" */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
              <Link
                href="/employers#contact"
                className="w-full sm:w-auto h-12 px-8 rounded-lg bg-white text-[#2563EB] hover:bg-[#EEF4FF] hover:text-[#1D4ED8] font-body font-semibold text-base transition-all duration-150 shadow-md flex items-center justify-center cursor-pointer active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2563EB]"
              >
                Post a Job
              </Link>
              <Link
                href="/jobs"
                className="w-full sm:w-auto h-12 px-8 rounded-lg bg-transparent border-2 border-white text-white hover:bg-white/15 active:bg-white/25 font-body font-semibold text-base transition-all duration-150 flex items-center justify-center cursor-pointer active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2563EB]"
                style={{ color: '#FFFFFF' }}
              >
                Browse Jobs
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

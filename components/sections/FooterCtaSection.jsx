import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

/**
 * Footer CTA Band.
 * Placed directly above the Footer: a rounded blue panel with white serif headline,
 * single supporting text line, subtle decorative SVG pattern, and two high-contrast buttons.
 */
export default function FooterCtaSection() {
  return (
    <section className="py-14 sm:py-18 lg:py-20 bg-white">
      <Container>
        <div className="relative rounded-2xl sm:rounded-3xl bg-[#2563EB] bg-gradient-to-br from-[#1D4ED8] via-[#2563EB] to-[#1E40AF] px-6 py-12 sm:px-12 sm:py-16 lg:py-20 text-center text-white overflow-hidden shadow-xl shadow-[#2563EB]/15">
          {/* Subtle Decorative SVG Pattern */}
          <div className="absolute inset-0 pointer-events-none select-none opacity-15 overflow-hidden" aria-hidden="true">
            <svg
              className="absolute top-0 right-0 w-full h-full"
              viewBox="0 0 1000 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="ctaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ctaGrid)" />
              <circle cx="850" cy="80" r="180" stroke="#FFFFFF" strokeWidth="2" fill="none" />
              <circle cx="150" cy="320" r="140" stroke="#FFFFFF" strokeWidth="2" fill="none" />
            </svg>
          </div>

          {/* Foreground Content */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-xs font-bold text-white uppercase tracking-wider">
              Start Today
            </span>

            {/* White Serif Headline (h2) */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Ready to accelerate your technical hiring?
            </h2>

            {/* Supporting Text (Passing 4.5:1 contrast) */}
            <p className="font-body text-base sm:text-lg text-white/95 max-w-xl mx-auto leading-relaxed">
              Join 3,400+ hiring teams and 120,000+ engineers making verified matches every month.
            </p>

            {/* Action Buttons: Solid White "Post a Job" & Outlined White "Browse Jobs" */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <Button
                href="/employers#contact"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto h-12 px-8 bg-white text-[#2563EB] hover:bg-[#EEF4FF] hover:text-[#1D4ED8] border-0 font-semibold shadow-md rounded-lg"
              >
                Post a Job
              </Button>
              <Button
                href="/jobs"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto h-12 px-8 bg-transparent text-white border-2 border-white hover:bg-white/10 active:bg-white/20 font-semibold rounded-lg"
              >
                Browse Jobs
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

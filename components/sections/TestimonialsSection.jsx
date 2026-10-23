import { Quote, Star } from 'lucide-react';
import Container from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { testimonials } from '@/data/testimonials';

/**
 * Testimonials Section.
 * Features 3 verified outcome stories (HR head, job seeker, startup founder).
 * Three-column grid on desktop, smooth horizontally scrollable snap row on mobile
 * that never makes the outer page scroll horizontally.
 */
export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-[#F6F8FC] border-t border-[#E2E8F0] overflow-hidden">
      <Container>
        {/* Section Heading with h2 */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-[#EEF4FF] text-[#2563EB] border border-[#BFDBFE]">
            Verified Outcomes
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#2563EB] tracking-tight">
            Trusted by Tech Leaders & Talent
          </h2>
          <p className="font-body text-base text-[#475569] leading-relaxed">
            Real outcomes from hiring managers, founders, and engineers scaling their careers with Surhires.
          </p>
        </div>

        {/* 3-Column Desktop Grid / Horizontal Mobile Snap Row */}
        <div className="relative overflow-hidden -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 sm:pb-0">
            {testimonials.map((t) => (
              <Card
                key={t.id}
                hover
                className="shrink-0 w-[84vw] max-w-[340px] snap-center sm:w-auto sm:max-w-none flex flex-col justify-between border-[#E2E8F0] hover:border-[#BFDBFE] bg-white rounded-xl shadow-[0_12px_32px_-4px_rgba(15,27,51,0.04)]"
              >
                <CardContent className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                  {/* Top: Star Rating & Quote Watermark */}
                  <div>
                    <div className="flex items-center justify-between pb-3">
                      <div className="flex items-center gap-1 text-[#F59E0B]" aria-label="5 out of 5 stars">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#F59E0B]" aria-hidden="true" />
                        ))}
                      </div>
                      <Quote className="w-7 h-7 text-[#2563EB]/20 shrink-0" aria-hidden="true" />
                    </div>

                    {/* Specific 2-3 sentence quote */}
                    <p className="font-body text-sm sm:text-base text-[#0F1B33] leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  {/* Bottom: Initials Avatar, Author Details, and Outcome Badge */}
                  <div className="pt-4 border-t border-[#F1F5F9] flex flex-col space-y-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg bg-[#EEF4FF] text-[#2563EB] font-heading font-bold text-sm flex items-center justify-center border border-[#BFDBFE] shrink-0"
                        aria-hidden="true"
                      >
                        {t.avatar}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-bold text-[#0F1B33] truncate">
                          {t.author}
                        </div>
                        <div className="text-xs text-[#475569] truncate">
                          {t.role} · <span className="text-[#2563EB] font-medium">{t.company}</span>
                        </div>
                      </div>
                    </div>

                    {/* Believable Outcome Badge */}
                    <div>
                      <span className="inline-block px-2.5 py-1 text-xs font-semibold rounded-md bg-[#EEF4FF] text-[#2563EB] border border-[#BFDBFE]">
                        {t.metrics}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

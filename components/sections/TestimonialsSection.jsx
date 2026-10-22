import { Quote, Star } from 'lucide-react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card, CardContent } from '@/components/ui/Card';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsSection() {
  return (
    <Section bg="warm" id="testimonials">
      <Container>
        <SectionHeading
          eyebrow="Proven Outcomes"
          title="Trusted by Engineering Leaders & Talent"
          subtitle="Here is what CTOs, talent directors, and software developers say about partnering with Surhires."
          alignment="center"
          level="h2"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <Card key={t.id} hover className="flex flex-col justify-between">
              <CardContent className="p-7 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#2563EB]/20" />
                </div>

                <p className="text-sm md:text-base text-[#0F1B33] italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#EEF4FF] text-[#2563EB] font-bold text-xs flex items-center justify-center border border-[#BFDBFE]">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#0F1B33]">{t.author}</div>
                      <div className="text-xs text-[#475569]">
                        {t.role} · <span className="text-[#2563EB] font-medium">{t.company}</span>
                      </div>
                    </div>
                  </div>

                  <span className="hidden sm:inline-block px-2.5 py-1 text-xs font-semibold rounded-md bg-[#EEF4FF] text-[#2563EB] border border-[#BFDBFE]">
                    {t.metrics}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

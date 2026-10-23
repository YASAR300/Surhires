import Link from 'next/link';
import { ArrowRight, HelpCircle } from 'lucide-react';
import Container from '@/components/ui/Container';
import Accordion from '@/components/ui/Accordion';
import { faqs } from '@/data/faqs';

/**
 * FAQ Section with id="faq".
 * Two columns on desktop (serif heading + "Still have questions?" contact card on the left,
 * accessible accordion on the right), stacked cleanly on mobile.
 */
export default function FaqSection() {
  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-white border-t border-[#E2E8F0]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading & "Still have questions?" Contact Card */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
            <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-[#EEF4FF] text-[#2563EB] border border-[#BFDBFE]">
              Clear Answers
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#2563EB] tracking-tight leading-snug">
              Frequently Asked Questions
            </h2>

            <p className="font-body text-base text-[#475569] leading-relaxed max-w-md">
              Clear, upfront answers about our vetting standards, contingency fee model, replacement guarantee, and hiring velocity.
            </p>

            {/* "Still have questions?" Card */}
            <div className="pt-4">
              <div className="p-6 rounded-xl bg-[#F6F8FC] border border-[#E2E8F0] space-y-3">
                <div className="flex items-center gap-2 text-[#2563EB]">
                  <HelpCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span className="font-heading font-bold text-base text-[#0F1B33]">
                    Still have questions?
                  </span>
                </div>

                <p className="font-body text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Can&apos;t find what you&apos;re looking for? Speak directly with a dedicated Technical Talent Advisor.
                </p>

                <Link
                  href="/employers#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded pt-1"
                >
                  <span>Talk to our talent advisory</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Accessible Accordion with 7 Realistic Questions */}
          <div className="lg:col-span-7">
            <Accordion items={faqs} type="single" />
          </div>
        </div>
      </Container>
    </section>
  );
}

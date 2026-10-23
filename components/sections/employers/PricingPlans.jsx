import { Check } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { employerPlans } from '@/data/plans';
import { cn } from '@/lib/utils';

/**
 * Pricing Plans Component.
 * Equal-height aligned cards with pinned CTAs, mobile-first ordering
 * (Growth popular plan stacks first on mobile), reassurance notes, and 15-16px feature text.
 */
export default function PricingPlans() {
  return (
    <section id="pricing" className="scroll-mt-24 py-16 lg:py-24 bg-white border-b border-[#E2E8F0]">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16 space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#EEF4FF] text-[#2563EB] border border-[#BFDBFE]">
            Transparent Investment
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F1B33] tracking-tight">
            Predictable, Fair Pricing for Every Stage
          </h2>
          <p className="font-body text-base text-[#475569] leading-relaxed">
            Choose the model that fits your hiring velocity: self-serve job listings for startups to dedicated recruiting pods for scaling engineering teams.
          </p>
        </div>

        {/* Pricing Cards Grid (Mobile stacks Growth first with order-1) */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {employerPlans.map((plan) => {
            const isPopular = plan.featured;
            // Growth is first on mobile, middle on desktop
            const orderClass =
              plan.id === 'growth'
                ? 'order-1 lg:order-2'
                : plan.id === 'starter'
                ? 'order-2 lg:order-1'
                : 'order-3 lg:order-3';

            return (
              <div
                key={plan.id}
                className={cn(
                  'relative rounded-2xl bg-white p-7 sm:p-9 flex flex-col justify-between transition-all duration-200',
                  orderClass,
                  isPopular
                    ? 'border-2 border-[#2563EB] shadow-2xl shadow-[#2563EB]/15 lg:-translate-y-4 z-10 ring-4 ring-[#2563EB]/10'
                    : 'border border-[#E2E8F0] shadow-sm hover:border-[#CBD5E1]'
                )}
              >
                {/* "Most Popular" Floating Pill on Growth */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#2563EB] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm select-none">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="flex flex-col flex-1">
                  {/* Fixed min-height header to guarantee horizontal alignment across cards */}
                  <div className="min-h-[84px] mb-4">
                    <h3 className="font-heading text-2xl font-bold text-[#0F1B33]">
                      {plan.name}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#2563EB] mt-0.5">
                      {plan.subtitle}
                    </p>
                    <p className="font-body text-sm text-[#64748B] mt-2 leading-relaxed">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Fixed min-height price block to guarantee horizontal alignment */}
                  <div className="min-h-[105px] mb-6 pb-6 border-b border-[#F1F5F9] flex flex-col justify-end">
                    <div className="flex items-baseline gap-1">
                      <span className="font-heading text-4xl sm:text-5xl font-extrabold text-[#2563EB] tracking-tight">
                        {plan.price}
                      </span>
                    </div>
                    <span className="font-body text-xs text-[#64748B] block mt-1">
                      {plan.billingPeriod}
                    </span>
                  </div>

                  {/* Feature List (15-16px text with check icons) */}
                  <div className="space-y-3.5 flex-1 mb-8">
                    <p className="text-xs font-bold text-[#0F1B33] uppercase tracking-wider">
                      Included in {plan.name}:
                    </p>
                    <ul className="space-y-3 text-sm sm:text-[15px] font-body text-[#334155]">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-1" aria-hidden="true" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA & Reassurance Note (Pinned with mt-auto) */}
                <div className="mt-auto pt-4 space-y-2.5">
                  <Button
                    href={plan.ctaHref}
                    variant={isPopular ? 'primary' : 'outline'}
                    size="lg"
                    className="w-full h-12 justify-center font-bold text-base shadow-sm"
                  >
                    {plan.ctaText}
                  </Button>
                  {plan.reassurance && (
                    <p className="text-xs text-center font-body text-[#64748B]">
                      {plan.reassurance}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

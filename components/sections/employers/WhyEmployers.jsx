import { Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Container from '@/components/ui/Container';

const WHY_POINTS = [
  {
    icon: Zap,
    title: '72-Hour Candidate Delivery',
    description:
      'Skip the weeks of waiting for inbound resumes. Receive your first cohort of 3–5 pre-screened, interview-ready candidates within 3 business days.',
    proofBadge: 'Avg. delivery: 68 hrs',
  },
  {
    icon: ShieldCheck,
    title: 'Rigorous Technical Calibration',
    description:
      'Every engineer undergoes realistic system architecture and code evaluations conducted by veteran tech leads, not automated multiple-choice tests.',
    proofBadge: 'Top 3% pass rate',
  },
  {
    icon: CheckCircle2,
    title: '90-Day Free Replacement',
    description:
      'Zero hiring risk. If a full-time hire placed through Surhires departs or does not meet agreed performance standards in 90 days, we replace them at no extra charge.',
    proofBadge: '0 replacement fees',
  },
];

/**
 * Why Employers Choose Surhires Component.
 * Equal-height cards with tinted icon squares, 20px titles, 16px body,
 * bottom proof chips, and reduced-motion compliant hover lifts.
 */
export default function WhyEmployers() {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#E2E8F0]">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16 space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#EEF4FF] text-[#2563EB] border border-[#BFDBFE]">
            The Surhires Advantage
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F1B33] tracking-tight">
            Why Leading Engineering Teams Choose Surhires
          </h2>
          <p className="font-body text-base text-[#475569] leading-relaxed">
            Built by engineering leads who were tired of reviewing hundreds of uncalibrated resumes for every open technical requisition.
          </p>
        </div>

        {/* 3 Equal-Height Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {WHY_POINTS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#E2E8F0] p-7 sm:p-8 flex flex-col justify-between hover:border-[#BFDBFE] hover:shadow-[0_20px_45px_-12px_rgba(37,99,235,0.1)] transition-all duration-200 motion-reduce:hover:transform-none hover:-translate-y-1 group"
              >
                <div className="space-y-5">
                  {/* Tinted Rounded Icon Square */}
                  <div className="w-12 h-12 rounded-xl bg-[#EEF4FF] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center transition-colors group-hover:bg-[#2563EB] group-hover:text-white">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>

                  {/* 20px Title */}
                  <h3 className="font-heading text-xl font-bold text-[#0F1B33] leading-snug">
                    {item.title}
                  </h3>

                  {/* 16px Body Copy */}
                  <p className="font-body text-base text-[#475569] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Small Proof Chip at the bottom */}
                <div className="pt-6 mt-6 border-t border-[#F1F5F9]">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#EEF4FF] text-[#2563EB] border border-[#BFDBFE]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" aria-hidden="true" />
                    <span>{item.proofBadge}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

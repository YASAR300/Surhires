import { FileText, Cpu, Clock, Users } from 'lucide-react';
import Container from '@/components/ui/Container';

const TIMELINE_STEPS = [
  {
    step: '01',
    title: 'Share the role',
    description:
      'Submit your technical requirements, salary range, and stack via our streamlined role brief form.',
    icon: FileText,
  },
  {
    step: '02',
    title: 'We calibrate',
    description:
      'Senior engineering leads calibrate real-world code and system design assessments to your exact stack.',
    icon: Cpu,
  },
  {
    step: '03',
    title: 'Shortlist in 72h',
    description:
      'Receive 3–5 pre-interviewed, assessment-verified candidate profiles with evaluation scorecards.',
    icon: Clock,
  },
  {
    step: '04',
    title: 'You interview',
    description:
      'Meet your top picks directly. We handle calendar coordination and assist with offer closing.',
    icon: Users,
  },
];

/**
 * "From Brief to Shortlist" 4-Step Timeline Component.
 * Features connecting progress line on desktop, vertical connecting line on mobile,
 * clear step numbers, icons, and 16px body copy.
 */
export default function HiringTimeline() {
  return (
    <section className="py-16 lg:py-24 bg-[#F6F8FC] border-b border-[#E2E8F0]">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16 space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#EEF4FF] text-[#2563EB] border border-[#BFDBFE]">
            Seamless Velocity
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F1B33] tracking-tight">
            From Brief to Shortlist in 72 Hours
          </h2>
          <p className="font-body text-base text-[#475569] leading-relaxed">
            A frictionless technical hiring process designed to get you from open requisition to first candidate interview in days, not months.
          </p>
        </div>

        {/* Desktop Horizontal Timeline (md and up) */}
        <div className="hidden md:block relative">
          {/* Continuous Connecting Line Behind Numbers */}
          <div
            className="absolute top-7 left-12 right-12 h-0.5 bg-[#CBD5E1]"
            aria-hidden="true"
          />

          <div className="grid grid-cols-4 gap-8 relative z-10">
            {TIMELINE_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center space-y-4">
                  {/* Step Number Circle */}
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-[#2563EB] text-[#2563EB] font-heading font-bold text-lg flex items-center justify-center shadow-md shadow-[#2563EB]/10 transition-transform duration-200 hover:scale-105">
                    {step.step}
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading text-lg font-bold text-[#0F1B33]">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-[#475569] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Timeline (under md, down to 360px) */}
        <div className="md:hidden relative pl-6 space-y-8">
          {/* Continuous Vertical Line */}
          <div
            className="absolute top-4 bottom-4 left-6 w-0.5 bg-[#CBD5E1] -translate-x-1/2"
            aria-hidden="true"
          />

          {TIMELINE_STEPS.map((step, idx) => {
            return (
              <div key={idx} className="relative flex items-start gap-4">
                {/* Step Number Circle */}
                <div className="w-10 h-10 rounded-full bg-white border-2 border-[#2563EB] text-[#2563EB] font-heading font-bold text-sm flex items-center justify-center shrink-0 relative z-10 shadow-sm">
                  {step.step}
                </div>

                <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 flex-1 shadow-xs space-y-1">
                  <h3 className="font-heading text-base font-bold text-[#0F1B33]">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-[#475569] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

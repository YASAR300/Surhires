import { UserCheck, Sparkles, ShieldCheck } from 'lucide-react';
import Container from '@/components/ui/Container';

const STEPS = [
  {
    step: '1',
    title: 'Create Your Verified Profile',
    description:
      'Set your skills, verified track record, and explicit salary expectations. Your profile is calibrated directly for active hiring managers.',
    icon: UserCheck,
  },
  {
    step: '2',
    title: 'Get Matched with Active Teams',
    description:
      'Skip low-signal screening calls. Companies review pre-screened technical benchmarks and extend fast-track interview invitations.',
    icon: Sparkles,
  },
  {
    step: '3',
    title: 'Finalize Offers in Days',
    description:
      'Receive transparent compensation packages and close offers in an average of 9 days, backed by our 90-day mutual guarantee.',
    icon: ShieldCheck,
  },
];

/**
 * How it works section with id="how-it-works".
 * Alternate background (#F6F8FC), 3 steps with numbered Lucide icons,
 * connecting line on desktop, and stacked layout on mobile.
 */
export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-[#F6F8FC] border-b border-[#E2E8F0]">
      <Container>
        {/* Section Heading with h2 */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-[#EEF4FF] text-[#2563EB] border border-[#BFDBFE]">
            Seamless Process
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#2563EB] tracking-tight">
            How Surhires Works
          </h2>
          <p className="font-body text-base text-[#475569] leading-relaxed">
            A frictionless three-step process designed to eliminate recruiter spam and fast-track high-signal hiring.
          </p>
        </div>

        {/* Steps Grid with Connecting Line on Desktop */}
        <div className="relative">
          {/* Horizontal Connecting Line on Desktop */}
          <div
            className="hidden md:block absolute top-7 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-[#CBD5E1] -z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 relative z-10">
            {STEPS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm p-6 sm:p-8 flex flex-col items-center text-center space-y-4 hover:border-[#BFDBFE] transition-all duration-200"
                >
                  {/* Numbered Step Icon */}
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-[#EEF4FF] text-[#2563EB] border border-[#BFDBFE] flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#2563EB] text-white font-body text-xs font-bold flex items-center justify-center shadow-xs">
                      {item.step}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="font-heading font-bold text-lg text-[#0F1B33]">
                    {item.title}
                  </h3>

                  {/* Step Description */}
                  <p className="font-body text-sm text-[#475569] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

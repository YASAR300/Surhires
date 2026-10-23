import { Sparkles, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

/**
 * Employers Hero Component.
 * Features fluid typography, 48px CTA buttons, verified stats bar,
 * and a rich "72h shortlist" candidate evaluation composition.
 */
export default function EmployersHero() {
  return (
    <section className="pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 bg-[#F6F8FC] border-b border-[#E2E8F0] overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Description, 48px CTAs, Stats Row */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF4FF] border border-[#BFDBFE] text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Top 3% Calibrated Tech Talent</span>
            </div>

            {/* The ONLY <h1> on the Employers Page */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[54px] xl:text-6xl font-bold text-[#2563EB] tracking-tight leading-[1.12]">
              Hire the right people, without the noise
            </h1>

            <p className="font-body text-base sm:text-lg lg:text-xl text-[#334155] leading-relaxed max-w-2xl font-normal">
              Pre-screened senior software engineers and technical leaders evaluated on real-world system architecture, delivered to your interview pipeline in 72 hours.
            </p>

            {/* Two 48px Tall CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Button
                href="#pricing"
                variant="primary"
                size="lg"
                className="h-12 px-8 text-base font-semibold shadow-md shadow-[#2563EB]/20 hover:shadow-lg hover:shadow-[#2563EB]/30"
              >
                View pricing
              </Button>
              <Button
                href="#post-job"
                variant="secondary"
                size="lg"
                className="h-12 px-8 text-base font-semibold"
              >
                Post a job
              </Button>
            </div>

            {/* Proof Stats Row of 3 items with large numbers and clean dividers */}
            <div className="pt-6 border-t border-[#CBD5E1]">
              <div className="grid grid-cols-3 divide-x divide-[#CBD5E1] text-left">
                {/* Stat 1 */}
                <div className="pr-3 sm:pr-6">
                  <div className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F1B33] tracking-tight">
                    72h
                  </div>
                  <div className="font-body text-xs sm:text-sm font-medium text-[#475569] mt-1 leading-snug">
                    Average shortlist delivery
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="px-3 sm:px-6">
                  <div className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F1B33] tracking-tight">
                    90-Day
                  </div>
                  <div className="font-body text-xs sm:text-sm font-medium text-[#475569] mt-1 leading-snug">
                    Free replacement guarantee
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="pl-3 sm:pl-6">
                  <div className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2563EB] tracking-tight">
                    84%
                  </div>
                  <div className="font-body text-xs sm:text-sm font-medium text-[#475569] mt-1 leading-snug">
                    First-round interview pass rate
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Original 72h Shortlist Candidate Dashboard Composition */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            {/* Ambient Background Aura */}
            <div
              className="absolute -inset-4 bg-radial from-[#2563EB]/15 via-[#EEF4FF]/60 to-transparent rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Main Dashboard Card */}
            <div className="relative w-full max-w-md bg-white rounded-2xl border border-[#CBD5E1] shadow-[0_25px_50px_-12px_rgba(15,27,51,0.12),0_10px_24px_-4px_rgba(37,99,235,0.06)] p-5 sm:p-6 space-y-4 z-10 transition-transform duration-300 motion-reduce:transform-none">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-[#F1F5F9]">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                  <span className="font-body text-xs font-bold text-[#0F1B33] uppercase tracking-wider">
                    72h Calibrated Shortlist
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#EEF4FF] text-[#2563EB] text-[11px] font-bold border border-[#BFDBFE]">
                  3 Match Ready
                </span>
              </div>

              {/* Candidate Shortlist Rows */}
              <div className="space-y-3 font-body">
                {/* Candidate 1 */}
                <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2 hover:border-[#BFDBFE] transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#EEF4FF] text-[#2563EB] font-bold text-xs flex items-center justify-center border border-[#BFDBFE]">
                        AK
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0F1B33]">Aravind K.</div>
                        <div className="text-[11px] text-[#64748B]">Senior Distributed Systems (Go, K8s)</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-[#2563EB]">98% Match</span>
                  </div>
                  {/* Score Progress Bar */}
                  <div className="w-full bg-[#E2E8F0] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#2563EB] h-full rounded-full" style={{ width: '98%' }} />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-[#94A3B8]">
                    <span>Vetted in 28 hrs</span>
                    <span className="text-emerald-700 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> System Design Passed
                    </span>
                  </div>
                </div>

                {/* Candidate 2 */}
                <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2 hover:border-[#BFDBFE] transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#EEF4FF] text-[#2563EB] font-bold text-xs flex items-center justify-center border border-[#BFDBFE]">
                        PS
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0F1B33]">Pooja S.</div>
                        <div className="text-[11px] text-[#64748B]">Staff Frontend Architect (Next.js, TS)</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-[#2563EB]">95% Match</span>
                  </div>
                  {/* Score Progress Bar */}
                  <div className="w-full bg-[#E2E8F0] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#2563EB] h-full rounded-full" style={{ width: '95%' }} />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-[#94A3B8]">
                    <span>Vetted in 44 hrs</span>
                    <span className="text-emerald-700 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Architecture Passed
                    </span>
                  </div>
                </div>

                {/* Candidate 3 */}
                <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2 hover:border-[#BFDBFE] transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#EEF4FF] text-[#2563EB] font-bold text-xs flex items-center justify-center border border-[#BFDBFE]">
                        RM
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0F1B33]">Rohan M.</div>
                        <div className="text-[11px] text-[#64748B]">Principal AI Platform Lead (PyTorch, C++)</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-[#2563EB]">93% Match</span>
                  </div>
                  {/* Score Progress Bar */}
                  <div className="w-full bg-[#E2E8F0] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#2563EB] h-full rounded-full" style={{ width: '93%' }} />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-[#94A3B8]">
                    <span>Vetted in 58 hrs</span>
                    <span className="text-emerald-700 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> ML Infra Passed
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: 72h Shortlist Guarantee (top right desktop) */}
              <div className="hidden sm:flex absolute -top-5 -right-5 items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-[#BFDBFE] shadow-lg shadow-[#2563EB]/15 z-20">
                <Clock className="w-4 h-4 text-[#2563EB]" aria-hidden="true" />
                <span className="text-xs font-bold text-[#0F1B33]">Delivered in 72h</span>
              </div>

              {/* Floating Badge 2: 90-Day Guarantee (bottom left desktop) */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-[#BFDBFE] shadow-lg shadow-[#2563EB]/15 z-20">
                <ShieldCheck className="w-4 h-4 text-[#2563EB]" aria-hidden="true" />
                <span className="text-xs font-bold text-[#0F1B33]">90-Day Replacement</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

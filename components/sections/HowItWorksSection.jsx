'use client';

import { useState } from 'react';
import { UserCheck, FileCode, CheckCircle2, Building2, Search, Award } from 'lucide-react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';

const candidateSteps = [
  {
    step: '01',
    icon: UserCheck,
    title: 'Create Your Confidential Profile',
    description:
      'Submit your technical portfolio, GitHub, or track record. Set your target compensation, preferred stack, and remote criteria.',
  },
  {
    step: '02',
    icon: FileCode,
    title: 'Complete 1-on-1 Calibration',
    description:
      'Pass a single practical technical evaluation with our senior engineering advisors so you never have to repeat redundant take-homes.',
  },
  {
    step: '03',
    icon: CheckCircle2,
    title: 'Receive Direct Interview Offers',
    description:
      'Fast-growing tech companies pitch directly to you with transparent salaries and executive interview fast-tracks.',
  },
];

const employerSteps = [
  {
    step: '01',
    icon: Building2,
    title: 'Share Your Technical Hiring Criteria',
    description:
      'Specify tech stack benchmarks, seniority expectations, budget bands, and cultural values with your dedicated recruiter.',
  },
  {
    step: '02',
    icon: Search,
    title: 'Review Calibrated Matches in 72 Hours',
    description:
      'Receive a curated shortlist of active, pre-assessed candidates with documented code reviews and confirmed salary alignment.',
  },
  {
    step: '03',
    icon: Award,
    title: 'Hire with 90-Day Peace of Mind',
    description:
      'Close offers quickly with transparent negotiation assistance, backed by our 90-day replacement guarantee.',
  },
];

export default function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState('candidates');

  const steps = activeTab === 'candidates' ? candidateSteps : employerSteps;

  return (
    <Section bg="white" id="how-it-works">
      <Container>
        <SectionHeading
          eyebrow="Proven Process"
          title="How Surhires Works"
          subtitle="Engineered for high-signal matching, mutual transparency, and zero wasted interview cycles."
          alignment="center"
          level="h2"
        />

        {/* Tab Switcher */}
        <div className="flex justify-center -mt-6 mb-12">
          <div className="inline-flex p-1 rounded-xl bg-[#F1F5F9] border border-[#E2E8F0]">
            <button
              type="button"
              onClick={() => setActiveTab('candidates')}
              className={cn(
                'px-6 py-2.5 text-sm font-semibold rounded-lg transition-all cursor-pointer',
                activeTab === 'candidates'
                  ? 'bg-[#2563EB] text-white shadow-sm'
                  : 'text-[#475569] hover:text-[#2563EB]'
              )}
            >
              For Candidates
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('employers')}
              className={cn(
                'px-6 py-2.5 text-sm font-semibold rounded-lg transition-all cursor-pointer',
                activeTab === 'employers'
                  ? 'bg-[#2563EB] text-white shadow-sm'
                  : 'text-[#475569] hover:text-[#2563EB]'
              )}
            >
              For Employers
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.step}
                className="relative p-7 sm:p-8 rounded-xl bg-white border border-[#E2E8F0] shadow-[0_12px_32px_-4px_rgba(15,27,51,0.04)] hover:border-[#BFDBFE] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#EEF4FF] text-[#2563EB] flex items-center justify-center border border-[#BFDBFE]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-heading font-black text-3xl text-[#CBD5E1]">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-[#2563EB] mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#475569] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

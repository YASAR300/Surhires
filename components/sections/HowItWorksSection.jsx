'use client';

import { useState } from 'react';
import { UserCheck, FileCode, CheckCircle2, Building2, Search, Award } from 'lucide-react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
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
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <Badge variant="teal">Proven Process</Badge>
          <h2 className="text-h2 text-[#0B1F3A]">How Surhires Works</h2>
          <p className="text-body text-[#64748B]">
            Engineered for high-signal matching, mutual transparency, and zero wasted interview cycles.
          </p>

          {/* Tab Switcher */}
          <div className="inline-flex p-1 rounded-xl bg-[#F1F5F9] border border-[#E2E8F0] mt-4">
            <button
              type="button"
              onClick={() => setActiveTab('candidates')}
              className={cn(
                'px-5 py-2 text-sm font-semibold rounded-lg transition-all',
                activeTab === 'candidates'
                  ? 'bg-white text-[#0B1F3A] shadow-xs'
                  : 'text-[#64748B] hover:text-[#0B1F3A]'
              )}
            >
              For Candidates
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('employers')}
              className={cn(
                'px-5 py-2 text-sm font-semibold rounded-lg transition-all',
                activeTab === 'employers'
                  ? 'bg-white text-[#0B1F3A] shadow-xs'
                  : 'text-[#64748B] hover:text-[#0B1F3A]'
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
                className="relative p-6 sm:p-8 rounded-2xl bg-[#FAF8F5] border border-[#E2E8F0] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] text-[#14B8A6] flex items-center justify-center shadow-xs">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-heading font-black text-2xl text-[#CBD5E1]">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B1F3A] mb-2.5">
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

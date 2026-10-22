'use client';

import { useState } from 'react';
import {
  Check,
  ShieldCheck,
  Zap,
  Sparkles,
  ArrowRight,
  Send,
  Building,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Textarea from '@/components/ui/Textarea';
import { employerPlans } from '@/data/plans';
import { cn } from '@/lib/utils';

export default function EmployersPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    workEmail: '',
    roleCategory: 'Engineering',
    hiringTimeline: 'Immediate (Next 30 days)',
    notes: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="py-10 md:py-16 bg-white min-h-screen">
      <Container>
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center space-y-5 mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]">
            Enterprise Talent Partner
          </span>
          <h1 className="text-display font-extrabold text-[#2563EB] tracking-tight">
            Hire Pre-Vetted Tech Talent in <span className="text-[#1D4ED8]">14 Days</span>
          </h1>
          <p className="text-body-lg text-[#64748B]">
            Save up to 80% of your technical screening time. Receive calibrated engineering, design, and
            product candidates who are actively open to new roles.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button href="#pricing" variant="primary" size="lg" className="px-7">
              Explore Hiring Plans
            </Button>
            <Button href="#contact" variant="secondary" size="lg" className="px-7">
              Speak with a Talent Advisor
            </Button>
          </div>
        </div>

        {/* Value Proposition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <Card className="p-8 space-y-4 border-[#E2E8F0] hover:border-[#93C5FD]">
            <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center border border-[#BFDBFE]">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0B1F3A]">72-Hour Candidate Delivery</h3>
            <p className="text-sm text-[#64748B] leading-relaxed">
              No waiting weeks for inbound applicants. We present your first curated cohort of 3-5 pre-screened candidates within 3 business days.
            </p>
          </Card>

          <Card className="p-8 space-y-4 border-[#E2E8F0] hover:border-[#93C5FD]">
            <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center border border-[#BFDBFE]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0B1F3A]">90-Day Free Replacement</h3>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Zero hiring risk. If a full-time hire placed through Surhires departs or does not meet agreed standards in 90 days, we replace them at no extra charge.
            </p>
          </Card>

          <Card className="p-8 space-y-4 border-[#E2E8F0] hover:border-[#93C5FD]">
            <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center border border-[#BFDBFE]">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0B1F3A]">Standardized Code Benchmarks</h3>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Every engineer undergoes realistic system architecture and code evaluations conducted by veteran tech leads, not automated multiple-choice tests.
            </p>
          </Card>
        </div>

        {/* Pricing Plans Section */}
        <div id="pricing" className="scroll-mt-24 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]">
              Predictable Investment
            </span>
            <h2 className="text-h2 text-[#0B1F3A]">Simple, Transparent Pricing</h2>
            <p className="text-body text-[#64748B]">
              From self-serve listings for early startups to embedded recruiting pods for scale-ups.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {employerPlans.map((plan) => (
              <Card
                key={plan.id}
                className={cn(
                  'relative flex flex-col justify-between p-7 sm:p-9 transition-all',
                  plan.featured
                    ? 'border-2 border-[#2563EB] shadow-xl shadow-[#2563EB]/10 ring-2 ring-[#2563EB]/20 bg-white'
                    : 'border-[#E2E8F0] bg-white'
                )}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#2563EB] text-white text-xs font-extrabold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-[#0B1F3A]">{plan.name}</h3>
                    <p className="text-xs text-[#64748B] mt-1">{plan.tagline}</p>
                  </div>

                  <div className="mb-6 pb-6 border-b border-[#F1F5F9]">
                    <span className="font-heading text-4xl font-extrabold text-[#2563EB] tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs text-[#64748B] block mt-1">
                      {plan.billingPeriod}
                    </span>
                  </div>

                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider">
                      Included in this tier:
                    </p>
                    <ul className="space-y-2.5 text-xs text-[#475569]">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <Button
                    href={plan.ctaHref}
                    variant={plan.featured ? 'primary' : 'outline'}
                    size="md"
                    className="w-full justify-center font-bold"
                  >
                    {plan.ctaText}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Employer Lead Form */}
        <div id="contact" className="scroll-mt-24 max-w-2xl mx-auto">
          <Card className="p-8 sm:p-10 border border-[#CBD5E1] shadow-lg shadow-[#2563EB]/5">
            <div className="text-center mb-8 space-y-2">
              <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mx-auto mb-2 border border-[#BFDBFE]">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B1F3A]">Post a Role or Inquire</h3>
              <p className="text-sm text-[#64748B]">
                Tell us about your upcoming hiring needs and our talent calibration team will respond within 4 business hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-xl bg-[#EFF6FF] border border-[#93C5FD] text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#2563EB] text-white flex items-center justify-center mx-auto shadow-sm">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#0B1F3A]">Inquiry Received!</h4>
                <p className="text-sm text-[#475569]">
                  Thank you, <strong>{formData.contactName || 'there'}</strong>. A Surhires senior recruiter has been notified and will reach out to <strong>{formData.workEmail}</strong> shortly.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setFormSubmitted(false)}
                  className="mt-3"
                >
                  Submit Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Company Name"
                    placeholder="Acme Technologies"
                    required
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData({ ...formData, companyName: e.target.value })
                    }
                  />
                  <Input
                    label="Your Name"
                    placeholder="Sarah Miller"
                    required
                    value={formData.contactName}
                    onChange={(e) =>
                      setFormData({ ...formData, contactName: e.target.value })
                    }
                  />
                </div>

                <Input
                  label="Work Email Address"
                  type="email"
                  placeholder="sarah@acme.com"
                  required
                  value={formData.workEmail}
                  onChange={(e) =>
                    setFormData({ ...formData, workEmail: e.target.value })
                  }
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Select
                    label="Role Category"
                    value={formData.roleCategory}
                    onChange={(e) =>
                      setFormData({ ...formData, roleCategory: e.target.value })
                    }
                    options={[
                      'Engineering',
                      'Product Management',
                      'Design & UX',
                      'Data & AI',
                      'Executive & Leadership',
                    ]}
                  />

                  <Select
                    label="Hiring Urgency"
                    value={formData.hiringTimeline}
                    onChange={(e) =>
                      setFormData({ ...formData, hiringTimeline: e.target.value })
                    }
                    options={[
                      'Immediate (Next 30 days)',
                      'Within 60 days',
                      'Upcoming Quarter',
                      'Exploring Future Options',
                    ]}
                  />
                </div>

                <Textarea
                  label="Role Details or Ideal Candidate Profile"
                  placeholder="Describe your tech stack, seniority requirements, or key challenges for this hire..."
                  rows={3}
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={Send}
                  iconPosition="right"
                  className="w-full justify-center mt-2 rounded-xl"
                >
                  Submit Hiring Request
                </Button>

                <p className="text-[11px] text-center text-[#94A3B8] pt-1">
                  By submitting, you agree to Surhires Terms of Service and Privacy Policy. No spam, ever.
                </p>
              </form>
            )}
          </Card>
        </div>
      </Container>
    </div>
  );
}

'use client';

import { useState } from 'react';
import {
  Check,
  ShieldCheck,
  Zap,
  Clock,
  Sparkles,
  ArrowRight,
  Send,
  Building,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card';
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
    <div className="py-10 md:py-16">
      <Container>
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center space-y-5 mb-16">
          <Badge variant="teal">Enterprise Talent Partner</Badge>
          <h1 className="text-display text-[#0B1F3A]">
            Hire Pre-Vetted Tech Talent in <span className="text-[#0F766E]">14 Days</span>
          </h1>
          <p className="text-body-lg text-[#475569]">
            Save up to 80% of your technical screening time. Receive calibrated engineering, design, and
            product candidates who are actively open to new roles.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button href="#pricing" variant="teal" size="lg">
              Explore Hiring Plans
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Speak with a Talent Advisor
            </Button>
          </div>
        </div>

        {/* Value Proposition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <Card className="p-7 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] text-[#14B8A6] flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0B1F3A]">72-Hour Candidate Delivery</h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              No waiting weeks for inbound applicants. We present your first curated cohort of 3-5 pre-screened candidates within 3 business days.
            </p>
          </Card>

          <Card className="p-7 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] text-[#14B8A6] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0B1F3A]">90-Day Free Replacement</h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              Zero hiring risk. If a full-time hire placed through Surhires departs or does not meet agreed standards in 90 days, we replace them at no extra charge.
            </p>
          </Card>

          <Card className="p-7 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] text-[#14B8A6] flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0B1F3A]">Standardized Code Benchmarks</h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              Every engineer undergoes realistic system architecture and code evaluations conducted by veteran tech leads, not automated multiple-choice tests.
            </p>
          </Card>
        </div>

        {/* Pricing Plans Section */}
        <div id="pricing" className="scroll-mt-24 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <Badge variant="teal">Predictable Investment</Badge>
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
                  'relative flex flex-col justify-between p-6 sm:p-8',
                  plan.featured
                    ? 'border-2 border-[#14B8A6] shadow-lg shadow-[#14B8A6]/10 ring-1 ring-[#14B8A6]/20'
                    : 'border-[#E2E8F0]'
                )}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#14B8A6] text-[#0B1F3A] text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
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
                    <span className="font-heading text-4xl font-black text-[#0B1F3A] tracking-tight">
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
                          <Check className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <Button
                    href={plan.ctaHref}
                    variant={plan.featured ? 'teal' : 'primary'}
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
          <Card className="p-8 sm:p-10 border border-[#CBD5E1]">
            <div className="text-center mb-8 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#0B1F3A] text-[#14B8A6] flex items-center justify-center mx-auto mb-2">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B1F3A]">Post a Role or Inquire</h3>
              <p className="text-sm text-[#64748B]">
                Tell us about your upcoming hiring needs and our talent calibration team will respond within 4 business hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-xl bg-[#F0FDFA] border border-[#14B8A6]/40 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#14B8A6] text-white flex items-center justify-center mx-auto">
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
                  className="w-full justify-center mt-2"
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

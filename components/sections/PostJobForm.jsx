'use client';

import { useState } from 'react';
import {
  Briefcase,
  CheckCircle2,
  Building2,
  Mail,
  DollarSign,
  RotateCcw,
  Loader2,
  ArrowRight,
} from 'lucide-react';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';

const JOB_TYPE_OPTIONS = [
  { value: '', label: 'Select job type' },
  { value: 'Full-time', label: 'Full-time' },
  { value: 'Part-time', label: 'Part-time' },
  { value: 'Contract', label: 'Contract' },
  { value: 'Internship', label: 'Internship' },
];

const LOCATION_OPTIONS = [
  { value: '', label: 'Select work arrangement / location' },
  { value: 'Remote (Global)', label: 'Remote (Global)' },
  { value: 'Remote (India)', label: 'Remote (India)' },
  { value: 'Bengaluru, India', label: 'Bengaluru, India' },
  { value: 'Mumbai, India', label: 'Mumbai, India' },
  { value: 'Ahmedabad, India', label: 'Ahmedabad, India' },
  { value: 'Delhi NCR, India', label: 'Delhi NCR, India' },
  { value: 'Hyderabad, India', label: 'Hyderabad, India' },
  { value: 'Pune, India', label: 'Pune, India' },
  { value: 'San Francisco, CA', label: 'San Francisco, CA' },
  { value: 'New York, NY', label: 'New York, NY' },
];

const INITIAL_FORM_VALUES = {
  companyName: '',
  workEmail: '',
  jobTitle: '',
  location: '',
  jobType: '',
  salaryRange: '',
  description: '',
  consent: false,
};

export default function PostJobForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_VALUES);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear field error on change
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = () => {
    const nextErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.companyName.trim()) {
      nextErrors.companyName = 'Company name is required.';
    }

    if (!formData.workEmail.trim()) {
      nextErrors.workEmail = 'Work email address is required.';
    } else if (!emailRegex.test(formData.workEmail.trim())) {
      nextErrors.workEmail = 'Please provide a valid work email address (e.g. name@company.com).';
    }

    if (!formData.jobTitle.trim()) {
      nextErrors.jobTitle = 'Job title is required.';
    }

    if (!formData.location) {
      nextErrors.location = 'Please select a location or work arrangement.';
    }

    if (!formData.jobType) {
      nextErrors.jobType = 'Please select an employment type.';
    }

    if (!formData.description.trim()) {
      nextErrors.description = 'Job description is required.';
    } else if (formData.description.trim().length < 50) {
      nextErrors.description = `Please provide at least 50 characters of role details (currently ${formData.description.trim().length}).`;
    }

    if (!formData.consent) {
      nextErrors.consent = 'You must agree to the Terms of Service and transparent salary policy to proceed.';
    }

    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    // Focus moved to the first invalid field on submit
    const errorKeys = Object.keys(validationErrors);
    if (errorKeys.length > 0) {
      const firstErrorField = errorKeys[0];
      const targetElement = document.getElementById(firstErrorField);
      if (targetElement) {
        targetElement.focus();
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Front-end submission simulation: wait 1 second, then replace with success panel
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      setFormData(INITIAL_FORM_VALUES);
      setErrors({});
    }, 1000);
  };

  const handleResetForm = () => {
    setSubmittedData(null);
    setFormData(INITIAL_FORM_VALUES);
    setErrors({});
  };

  return (
    <section id="post-job" className="scroll-mt-24 py-16 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF4FF] text-[#2563EB] border border-[#BFDBFE]">
            Priority Job Submission
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F1B33] tracking-tight">
            Post an Open Role
          </h2>
          <p className="font-body text-base text-[#475569] max-w-xl mx-auto">
            Reach 120,000+ vetted software engineers, designers, and product leaders with guaranteed 72-hour candidate routing.
          </p>
        </div>

        {/* White Card with Soft Shadow */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_20px_45px_-10px_rgba(37,99,235,0.08),0_8px_20px_-4px_rgba(15,27,51,0.04)] p-6 sm:p-8 md:p-10">
          {submittedData ? (
            /* ================= 6. SUCCESS STATE PANEL ================= */
            <div
              role="status"
              aria-live="polite"
              className="text-center space-y-6 py-6 animate-in fade-in duration-200"
            >
              {/* Check Icon in Brand Blue */}
              <div className="w-16 h-16 rounded-2xl bg-[#EEF4FF] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-9 h-9" aria-hidden="true" />
              </div>

              <div className="space-y-2">
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0F1B33]">
                  Role Successfully Submitted!
                </h3>
                <p className="font-body text-sm sm:text-base text-[#475569] max-w-lg mx-auto">
                  Our talent calibration pod has received your listing for{' '}
                  <strong className="text-[#0F1B33]">{submittedData.jobTitle}</strong> at{' '}
                  <strong className="text-[#0F1B33]">{submittedData.companyName}</strong>. A verification summary has been dispatched to{' '}
                  <span className="text-[#2563EB] font-medium">{submittedData.workEmail}</span>.
                </p>
              </div>

              {/* Submission Details Summary Card */}
              <div className="max-w-lg mx-auto bg-[#F6F8FC] rounded-xl border border-[#E2E8F0] p-5 text-left text-xs font-body space-y-3">
                <h4 className="font-bold text-[#0F1B33] uppercase tracking-wider text-[11px] pb-2 border-b border-[#E2E8F0]">
                  Submitted Role Summary
                </h4>
                <div className="grid grid-cols-2 gap-3 pt-1 text-[#475569]">
                  <div>
                    <span className="text-[#94A3B8] block text-[11px]">Role Title:</span>
                    <span className="font-semibold text-[#0F1B33]">{submittedData.jobTitle}</span>
                  </div>
                  <div>
                    <span className="text-[#94A3B8] block text-[11px]">Company:</span>
                    <span className="font-semibold text-[#0F1B33]">{submittedData.companyName}</span>
                  </div>
                  <div>
                    <span className="text-[#94A3B8] block text-[11px]">Location / Arrangement:</span>
                    <span className="font-semibold text-[#0F1B33]">{submittedData.location}</span>
                  </div>
                  <div>
                    <span className="text-[#94A3B8] block text-[11px]">Job Type:</span>
                    <span className="font-semibold text-[#0F1B33]">{submittedData.jobType}</span>
                  </div>
                  {submittedData.salaryRange && (
                    <div className="col-span-2">
                      <span className="text-[#94A3B8] block text-[11px]">Compensation Band:</span>
                      <span className="font-semibold text-[#2563EB]">{submittedData.salaryRange}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleResetForm}
                  icon={RotateCcw}
                  className="font-semibold px-6 shadow-sm"
                >
                  Post another job
                </Button>
              </div>
            </div>
          ) : (
            /* ================= ACTIVE FORM ================= */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Row 1: Company Name & Work Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <Input
                    id="companyName"
                    name="companyName"
                    label="Company Name"
                    placeholder="e.g. Acme Tech Labs"
                    required
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    error={errors.companyName}
                    icon={Building2}
                  />
                </div>

                <div>
                  <Input
                    id="workEmail"
                    name="workEmail"
                    type="email"
                    label="Work Email Address"
                    placeholder="hiring@acme.com"
                    required
                    value={formData.workEmail}
                    onChange={(e) => handleInputChange('workEmail', e.target.value)}
                    error={errors.workEmail}
                    icon={Mail}
                    helperText="We'll send candidate profiles directly to this address."
                  />
                </div>
              </div>

              {/* Row 2: Job Title & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <Input
                    id="jobTitle"
                    name="jobTitle"
                    label="Job Title"
                    placeholder="e.g. Senior Backend Engineer"
                    required
                    value={formData.jobTitle}
                    onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                    error={errors.jobTitle}
                    icon={Briefcase}
                  />
                </div>

                <div>
                  <Select
                    id="location"
                    name="location"
                    label="Location / Arrangement"
                    required
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    options={LOCATION_OPTIONS}
                    error={errors.location}
                  />
                </div>
              </div>

              {/* Row 3: Job Type & Salary Range */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <Select
                    id="jobType"
                    name="jobType"
                    label="Job Type"
                    required
                    value={formData.jobType}
                    onChange={(e) => handleInputChange('jobType', e.target.value)}
                    options={JOB_TYPE_OPTIONS}
                    error={errors.jobType}
                  />
                </div>

                <div>
                  <Input
                    id="salaryRange"
                    name="salaryRange"
                    label="Salary Range (Optional)"
                    placeholder="e.g. ₹28,00,000 - ₹38,00,000"
                    value={formData.salaryRange}
                    onChange={(e) => handleInputChange('salaryRange', e.target.value)}
                    error={errors.salaryRange}
                    icon={DollarSign}
                    helperText="Listings with transparent salary receive 4x more qualified candidates."
                  />
                </div>
              </div>

              {/* Row 4: Job Description Textarea */}
              <div>
                <Textarea
                  id="description"
                  name="description"
                  label="Role Responsibilities & Requirements"
                  placeholder="Outline the core responsibilities, tech stack, key technical challenges, and ideal candidate profile..."
                  rows={4}
                  required
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  error={errors.description}
                  helperText="Minimum 50 characters. Markdown formatting is supported."
                />
              </div>

              {/* Row 5: Consent Checkbox */}
              <div className="pt-1">
                <div className="flex items-start gap-3">
                  <div className="flex items-center h-5">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => handleInputChange('consent', e.target.checked)}
                      aria-invalid={Boolean(errors.consent)}
                      aria-describedby={errors.consent ? 'consent-error' : undefined}
                      className="w-4 h-4 rounded text-[#2563EB] border-[#CBD5E1] focus:ring-[#2563EB] cursor-pointer"
                    />
                  </div>
                  <label htmlFor="consent" className="text-xs font-body text-[#475569] leading-relaxed cursor-pointer select-none">
                    I confirm this role has a confirmed hiring budget, agree to the{' '}
                    <span className="text-[#2563EB] font-medium hover:underline">Surhires Terms of Service</span>{' '}
                    and confirm zero recruiting agencies will be involved.
                    <span className="text-red-500 ml-1" aria-hidden="true">*</span>
                  </label>
                </div>
                {errors.consent && (
                  <p id="consent-error" role="alert" className="text-xs text-red-600 font-medium mt-1.5 pl-7">
                    {errors.consent}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-body font-semibold text-base transition-all duration-150 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-65 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                      <span>Verifying listing details...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Open Role</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

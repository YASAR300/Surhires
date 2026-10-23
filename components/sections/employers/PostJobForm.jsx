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
  AlertCircle,
  Check,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

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

/**
 * Enhanced Post a Job Form Client Component.
 * Implements fieldset grouping, 48px inputs, blur validation with green check indicators,
 * character counter with minimum threshold indicator, accessible error summary,
 * 44px+ checkbox touch target, and high-visibility success panel.
 */
export default function PostJobForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_VALUES);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validateField = (field, value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    switch (field) {
      case 'companyName':
        if (!value.trim()) return 'Company name is required.';
        return '';
      case 'workEmail':
        if (!value.trim()) return 'Work email address is required.';
        if (!emailRegex.test(value.trim())) return 'Please provide a valid work email address.';
        return '';
      case 'jobTitle':
        if (!value.trim()) return 'Job title is required.';
        return '';
      case 'location':
        if (!value) return 'Please select a location or work arrangement.';
        return '';
      case 'jobType':
        if (!value) return 'Please select an employment type.';
        return '';
      case 'description':
        if (!value.trim()) return 'Job description is required.';
        if (value.trim().length < 50) {
          return `Please provide at least 50 characters (currently ${value.trim().length}).`;
        }
        return '';
      case 'consent':
        if (!value) return 'You must agree to the Terms of Service to proceed.';
        return '';
      default:
        return '';
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const validateAll = () => {
    const nextErrors = {};
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) nextErrors[key] = err;
    });
    return nextErrors;
  };

  const focusField = (fieldId) => {
    const el = document.getElementById(fieldId);
    if (el) {
      el.focus();
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all as touched
    const allTouched = Object.keys(formData).reduce((acc, k) => ({ ...acc, [k]: true }), {});
    setTouched(allTouched);

    const validationErrors = validateAll();
    setErrors(validationErrors);

    const errorKeys = Object.keys(validationErrors);
    if (errorKeys.length > 0) {
      focusField(errorKeys[0]);
      return;
    }

    // 1-second simulated submit
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      setFormData(INITIAL_FORM_VALUES);
      setTouched({});
      setErrors({});
    }, 1000);
  };

  const handleResetForm = () => {
    setSubmittedData(null);
    setFormData(INITIAL_FORM_VALUES);
    setTouched({});
    setErrors({});
  };

  const charCount = formData.description.trim().length;
  const isDescriptionValid = charCount >= 50;
  const errorKeys = Object.keys(errors).filter((k) => Boolean(errors[k]));

  return (
    <div className="bg-white rounded-2xl border border-[#CBD5E1] shadow-[0_20px_50px_-12px_rgba(15,27,51,0.08),0_8px_20px_-4px_rgba(37,99,235,0.04)] p-6 sm:p-8 md:p-10 font-body">
      {submittedData ? (
        /* ================= SUCCESS STATE PANEL ================= */
        <div
          role="status"
          aria-live="polite"
          className="text-center space-y-6 py-6 animate-in fade-in duration-200"
        >
          {/* Large Check Icon */}
          <div className="w-20 h-20 rounded-2xl bg-[#EEF4FF] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-11 h-11" aria-hidden="true" />
          </div>

          <div className="space-y-2">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0F1B33]">
              Role Successfully Submitted!
            </h3>
            <p className="font-body text-base text-[#475569] max-w-lg mx-auto leading-relaxed">
              Our technical talent leads have received your requisition for{' '}
              <strong className="text-[#0F1B33]">{submittedData.jobTitle}</strong> at{' '}
              <strong className="text-[#0F1B33]">{submittedData.companyName}</strong>. A verification summary and review receipt have been dispatched to{' '}
              <span className="text-[#2563EB] font-semibold">{submittedData.workEmail}</span>.
            </p>
          </div>

          {/* Submission Details Summary Card */}
          <div className="max-w-lg mx-auto bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-6 text-left text-sm space-y-3 shadow-xs">
            <h4 className="font-bold text-[#0F1B33] uppercase tracking-wider text-xs pb-2 border-b border-[#E2E8F0]">
              Submitted Requisition Summary
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-[#475569]">
              <div>
                <span className="text-xs text-[#94A3B8] block">Role Title:</span>
                <span className="font-semibold text-[#0F1B33]">{submittedData.jobTitle}</span>
              </div>
              <div>
                <span className="text-xs text-[#94A3B8] block">Company:</span>
                <span className="font-semibold text-[#0F1B33]">{submittedData.companyName}</span>
              </div>
              <div>
                <span className="text-xs text-[#94A3B8] block">Location / Arrangement:</span>
                <span className="font-semibold text-[#0F1B33]">{submittedData.location}</span>
              </div>
              <div>
                <span className="text-xs text-[#94A3B8] block">Job Type:</span>
                <span className="font-semibold text-[#0F1B33]">{submittedData.jobType}</span>
              </div>
              {submittedData.salaryRange && (
                <div className="sm:col-span-2">
                  <span className="text-xs text-[#94A3B8] block">Compensation Band:</span>
                  <span className="font-bold text-[#2563EB]">{submittedData.salaryRange}</span>
                </div>
              )}
            </div>
          </div>

          <div className="pt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={handleResetForm}
              icon={RotateCcw}
              className="font-semibold px-8 shadow-sm h-12 text-base"
            >
              Post another role
            </Button>
          </div>
        </div>
      ) : (
        /* ================= ACTIVE FORM ================= */
        <form onSubmit={handleSubmit} noValidate className="space-y-8">
          {/* Top Error Summary (Accessibility & UX Upgrade) */}
          {errorKeys.length > 0 && (
            <div
              role="alert"
              id="form-error-summary"
              className="p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-900 space-y-2 animate-in fade-in"
            >
              <div className="flex items-center gap-2 font-bold text-red-800">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600" aria-hidden="true" />
                <span>Please resolve the following before submitting:</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-red-700">
                {errorKeys.map((key) => (
                  <li key={key}>
                    <button
                      type="button"
                      onClick={() => focusField(key)}
                      className="text-left underline hover:text-red-950 cursor-pointer font-medium"
                    >
                      {errors[key]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ================= FIELDSET 1: COMPANY DETAILS ================= */}
          <fieldset className="space-y-4">
            <legend className="text-base font-heading font-bold text-[#0F1B33] pb-2 border-b border-[#F1F5F9] w-full block">
              Company Details
            </legend>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
              {/* Company Name */}
              <div className="space-y-1.5">
                <label
                  htmlFor="companyName"
                  className="text-sm font-medium text-[#0F1B33] flex items-center justify-between"
                >
                  <span>
                    Company Name
                    <span className="text-red-500 ml-1" aria-hidden="true">*</span>
                    <span className="sr-only">required</span>
                  </span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#94A3B8]">
                    <Building2 className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    onBlur={() => handleBlur('companyName')}
                    aria-invalid={Boolean(errors.companyName)}
                    aria-describedby={errors.companyName ? 'companyName-error' : undefined}
                    placeholder="e.g. Acme Tech Labs"
                    className={cn(
                      'w-full h-12 pl-11 pr-10 bg-white border rounded-lg text-sm sm:text-base text-[#0F1B33] placeholder-[#94A3B8] transition-colors',
                      'hover:border-[#CBD5E1] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/15',
                      errors.companyName
                        ? 'border-red-500 focus:border-red-500'
                        : touched.companyName && !errors.companyName
                        ? 'border-emerald-500 focus:border-emerald-500'
                        : 'border-[#CBD5E1] focus:border-[#2563EB]'
                    )}
                  />
                  {touched.companyName && !errors.companyName && (
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-emerald-600">
                      <Check className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                    </div>
                  )}
                </div>
                {errors.companyName && (
                  <p id="companyName-error" role="alert" className="text-xs text-red-600 font-medium">
                    {errors.companyName}
                  </p>
                )}
              </div>

              {/* Work Email */}
              <div className="space-y-1.5">
                <label
                  htmlFor="workEmail"
                  className="text-sm font-medium text-[#0F1B33] flex items-center justify-between"
                >
                  <span>
                    Work Email Address
                    <span className="text-red-500 ml-1" aria-hidden="true">*</span>
                    <span className="sr-only">required</span>
                  </span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#94A3B8]">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <input
                    id="workEmail"
                    name="workEmail"
                    type="email"
                    required
                    value={formData.workEmail}
                    onChange={(e) => handleInputChange('workEmail', e.target.value)}
                    onBlur={() => handleBlur('workEmail')}
                    aria-invalid={Boolean(errors.workEmail)}
                    aria-describedby={errors.workEmail ? 'workEmail-error' : 'workEmail-hint'}
                    placeholder="hiring@acme.com"
                    className={cn(
                      'w-full h-12 pl-11 pr-10 bg-white border rounded-lg text-sm sm:text-base text-[#0F1B33] placeholder-[#94A3B8] transition-colors',
                      'hover:border-[#CBD5E1] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/15',
                      errors.workEmail
                        ? 'border-red-500 focus:border-red-500'
                        : touched.workEmail && !errors.workEmail
                        ? 'border-emerald-500 focus:border-emerald-500'
                        : 'border-[#CBD5E1] focus:border-[#2563EB]'
                    )}
                  />
                  {touched.workEmail && !errors.workEmail && (
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-emerald-600">
                      <Check className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                    </div>
                  )}
                </div>
                {errors.workEmail ? (
                  <p id="workEmail-error" role="alert" className="text-xs text-red-600 font-medium">
                    {errors.workEmail}
                  </p>
                ) : (
                  <p id="workEmail-hint" className="text-xs text-[#64748B]">
                    Candidate shortlists are delivered directly to this inbox.
                  </p>
                )}
              </div>
            </div>
          </fieldset>

          {/* ================= FIELDSET 2: ROLE DETAILS ================= */}
          <fieldset className="space-y-4">
            <legend className="text-base font-heading font-bold text-[#0F1B33] pb-2 border-b border-[#F1F5F9] w-full block">
              Role Details
            </legend>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
              {/* Job Title */}
              <div className="space-y-1.5">
                <label
                  htmlFor="jobTitle"
                  className="text-sm font-medium text-[#0F1B33] flex items-center justify-between"
                >
                  <span>
                    Job Title
                    <span className="text-red-500 ml-1" aria-hidden="true">*</span>
                    <span className="sr-only">required</span>
                  </span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#94A3B8]">
                    <Briefcase className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <input
                    id="jobTitle"
                    name="jobTitle"
                    type="text"
                    required
                    value={formData.jobTitle}
                    onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                    onBlur={() => handleBlur('jobTitle')}
                    aria-invalid={Boolean(errors.jobTitle)}
                    aria-describedby={errors.jobTitle ? 'jobTitle-error' : undefined}
                    placeholder="e.g. Senior Backend Engineer"
                    className={cn(
                      'w-full h-12 pl-11 pr-10 bg-white border rounded-lg text-sm sm:text-base text-[#0F1B33] placeholder-[#94A3B8] transition-colors',
                      'hover:border-[#CBD5E1] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/15',
                      errors.jobTitle
                        ? 'border-red-500 focus:border-red-500'
                        : touched.jobTitle && !errors.jobTitle
                        ? 'border-emerald-500 focus:border-emerald-500'
                        : 'border-[#CBD5E1] focus:border-[#2563EB]'
                    )}
                  />
                  {touched.jobTitle && !errors.jobTitle && (
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-emerald-600">
                      <Check className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                    </div>
                  )}
                </div>
                {errors.jobTitle && (
                  <p id="jobTitle-error" role="alert" className="text-xs text-red-600 font-medium">
                    {errors.jobTitle}
                  </p>
                )}
              </div>

              {/* Location Select */}
              <div className="space-y-1.5">
                <label
                  htmlFor="location"
                  className="text-sm font-medium text-[#0F1B33] flex items-center justify-between"
                >
                  <span>
                    Location / Arrangement
                    <span className="text-red-500 ml-1" aria-hidden="true">*</span>
                    <span className="sr-only">required</span>
                  </span>
                </label>
                <div className="relative">
                  <select
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    onBlur={() => handleBlur('location')}
                    aria-invalid={Boolean(errors.location)}
                    aria-describedby={errors.location ? 'location-error' : undefined}
                    className={cn(
                      'w-full h-12 px-3.5 bg-white border rounded-lg text-sm sm:text-base text-[#0F1B33] transition-colors cursor-pointer',
                      'hover:border-[#CBD5E1] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/15',
                      errors.location
                        ? 'border-red-500 focus:border-red-500'
                        : touched.location && !errors.location
                        ? 'border-emerald-500 focus:border-emerald-500'
                        : 'border-[#CBD5E1] focus:border-[#2563EB]'
                    )}
                  >
                    {LOCATION_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.location && (
                  <p id="location-error" role="alert" className="text-xs text-red-600 font-medium">
                    {errors.location}
                  </p>
                )}
              </div>

              {/* Job Type Select */}
              <div className="space-y-1.5">
                <label
                  htmlFor="jobType"
                  className="text-sm font-medium text-[#0F1B33] flex items-center justify-between"
                >
                  <span>
                    Job Type
                    <span className="text-red-500 ml-1" aria-hidden="true">*</span>
                    <span className="sr-only">required</span>
                  </span>
                </label>
                <div className="relative">
                  <select
                    id="jobType"
                    name="jobType"
                    required
                    value={formData.jobType}
                    onChange={(e) => handleInputChange('jobType', e.target.value)}
                    onBlur={() => handleBlur('jobType')}
                    aria-invalid={Boolean(errors.jobType)}
                    aria-describedby={errors.jobType ? 'jobType-error' : undefined}
                    className={cn(
                      'w-full h-12 px-3.5 bg-white border rounded-lg text-sm sm:text-base text-[#0F1B33] transition-colors cursor-pointer',
                      'hover:border-[#CBD5E1] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/15',
                      errors.jobType
                        ? 'border-red-500 focus:border-red-500'
                        : touched.jobType && !errors.jobType
                        ? 'border-emerald-500 focus:border-emerald-500'
                        : 'border-[#CBD5E1] focus:border-[#2563EB]'
                    )}
                  >
                    {JOB_TYPE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.jobType && (
                  <p id="jobType-error" role="alert" className="text-xs text-red-600 font-medium">
                    {errors.jobType}
                  </p>
                )}
              </div>

              {/* Salary Range (Optional) */}
              <div className="space-y-1.5">
                <label
                  htmlFor="salaryRange"
                  className="text-sm font-medium text-[#0F1B33] flex items-center justify-between"
                >
                  <span>Salary Range (Optional)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#94A3B8]">
                    <DollarSign className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <input
                    id="salaryRange"
                    name="salaryRange"
                    type="text"
                    value={formData.salaryRange}
                    onChange={(e) => handleInputChange('salaryRange', e.target.value)}
                    placeholder="e.g. ₹28,00,000 - ₹38,00,000"
                    className="w-full h-12 pl-11 pr-3.5 bg-white border border-[#CBD5E1] rounded-lg text-sm sm:text-base text-[#0F1B33] placeholder-[#94A3B8] transition-colors hover:border-[#CBD5E1] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15"
                  />
                </div>
                <p className="text-xs text-[#64748B]">
                  Listings with confirmed salary ranges attract 4x more qualified applicants.
                </p>
              </div>
            </div>

            {/* Description Textarea with Character Counter & Minimum 50 chars threshold */}
            <div className="space-y-1.5 pt-2">
              <div className="flex items-center justify-between">
                <label htmlFor="description" className="text-sm font-medium text-[#0F1B33]">
                  <span>
                    Role Details & Requirements
                    <span className="text-red-500 ml-1" aria-hidden="true">*</span>
                    <span className="sr-only">required</span>
                  </span>
                </label>
                {/* Character Counter Progress Indicator */}
                <span
                  className={cn(
                    'text-xs transition-colors',
                    isDescriptionValid
                      ? 'text-emerald-700 font-bold flex items-center gap-1'
                      : 'text-[#64748B]'
                  )}
                >
                  {isDescriptionValid && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                  <span>{charCount} / 50 min characters</span>
                </span>
              </div>

              <textarea
                id="description"
                name="description"
                rows={4}
                required
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                onBlur={() => handleBlur('description')}
                aria-invalid={Boolean(errors.description)}
                aria-describedby={errors.description ? 'description-error' : 'description-hint'}
                placeholder="Outline core responsibilities, tech stack, key technical challenges, and ideal candidate profile..."
                className={cn(
                  'w-full p-3.5 bg-white border rounded-lg text-sm sm:text-base text-[#0F1B33] placeholder-[#94A3B8] transition-colors resize-y',
                  'hover:border-[#CBD5E1] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/15',
                  errors.description
                    ? 'border-red-500 focus:border-red-500'
                    : touched.description && !errors.description
                    ? 'border-emerald-500 focus:border-emerald-500'
                    : 'border-[#CBD5E1] focus:border-[#2563EB]'
                )}
              />
              {errors.description ? (
                <p id="description-error" role="alert" className="text-xs text-red-600 font-medium">
                  {errors.description}
                </p>
              ) : (
                <p id="description-hint" className="text-xs text-[#64748B]">
                  Minimum 50 characters. Provide clear details to calibrate technical screening.
                </p>
              )}
            </div>

            {/* Consent Checkbox (44px+ hit area) */}
            <div className="pt-2">
              <label
                htmlFor="consent"
                className="min-h-[44px] flex items-start gap-3 p-2 -m-2 rounded-lg cursor-pointer hover:bg-[#F8FAFC] transition-colors select-none"
              >
                <div className="flex items-center h-6 mt-0.5">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => handleInputChange('consent', e.target.checked)}
                    onBlur={() => handleBlur('consent')}
                    aria-invalid={Boolean(errors.consent)}
                    aria-describedby={errors.consent ? 'consent-error' : undefined}
                    className="w-5 h-5 rounded text-[#2563EB] border-[#CBD5E1] focus:ring-[#2563EB] cursor-pointer"
                  />
                </div>
                <div className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  I agree to the{' '}
                  <span className="text-[#2563EB] font-medium hover:underline">Surhires Terms of Service</span>{' '}
                  and confirm this role has a confirmed hiring budget and transparent compensation.
                  <span className="text-red-500 ml-1" aria-hidden="true">*</span>
                  <span className="sr-only">required</span>
                </div>
              </label>
              {errors.consent && (
                <p id="consent-error" role="alert" className="text-xs text-red-600 font-medium mt-1 pl-8">
                  {errors.consent}
                </p>
              )}
            </div>
          </fieldset>

          {/* Submit Button (48px tall) with Loading Spinner & Reassurance */}
          <div className="pt-2 space-y-2.5">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] active:bg-[#1E40AF] text-white font-body font-semibold text-base transition-all duration-150 shadow-md shadow-[#2563EB]/20 hover:shadow-lg hover:shadow-[#2563EB]/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-65 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 active:scale-[0.99]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                  <span>Verifying role parameters...</span>
                </>
              ) : (
                <>
                  <span>Submit Open Role</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </>
              )}
            </button>
            <p className="text-xs text-center text-[#64748B]">
              We reply within 2 business hours. Your details are never shared.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}

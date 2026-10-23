'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  Search,
  MapPin,
  Briefcase,
  ArrowUpDown,
  Clock,
  DollarSign,
  Bookmark,
  CheckCircle2,
  X,
  RotateCcw,
  ChevronDown,
  Globe,
  Building2,
  Check,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { jobListings } from '@/data/jobs';
import { cn } from '@/lib/utils';

/**
 * Extracts uppercase 2-letter initials from a company name.
 */
function getCompanyInitials(name = '') {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

/**
 * Parse numeric salary value from salary strings for accurate High-to-Low sorting.
 * Supports ₹ Lakhs and USD ($) ranges.
 */
function parseSalaryMax(salaryStr = '') {
  // If rupee format like ₹32,00,000 - ₹45,00,000
  if (salaryStr.includes('₹')) {
    const numbers = salaryStr.replace(/[^\d-]/g, '').split('-').map(Number);
    return numbers[1] || numbers[0] || 0;
  }
  // If USD format like $180,000 - $225,000
  if (salaryStr.includes('$')) {
    const numbers = salaryStr.replace(/[^\d-]/g, '').split('-').map(Number);
    return (numbers[1] || numbers[0] || 0) * 85;
  }
  return 0;
}

const LOCATION_FILTER_OPTIONS = [
  { value: '', label: 'All Locations', icon: Globe },
  { value: 'Remote', label: 'Remote', icon: Globe },
  { value: 'Bengaluru', label: 'Bengaluru', icon: Building2 },
  { value: 'Mumbai', label: 'Mumbai', icon: Building2 },
  { value: 'Ahmedabad', label: 'Ahmedabad', icon: Building2 },
  { value: 'Delhi NCR', label: 'Delhi NCR', icon: Building2 },
  { value: 'Hyderabad', label: 'Hyderabad', icon: Building2 },
  { value: 'Pune', label: 'Pune', icon: Building2 },
];

const TYPE_FILTER_OPTIONS = [
  { value: '', label: 'All Types', icon: Briefcase },
  { value: 'Full-time', label: 'Full-time', icon: Briefcase },
  { value: 'Part-time', label: 'Part-time', icon: Clock },
  { value: 'Contract', label: 'Contract', icon: ShieldCheck },
  { value: 'Internship', label: 'Internship', icon: Sparkles },
];

const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest first', icon: Clock },
  { value: 'salary-high', label: 'Salary: High to Low', icon: DollarSign },
];

/**
 * Accessible Custom Filter Dropdown.
 * Provides a clean floating popover with options, icons, checkmark indicators,
 * subtle active state styling, and smooth chevron animations.
 */
function FilterDropdown({
  id,
  label,
  value,
  onChange,
  options,
  icon: Icon,
  placeholder = 'Select...',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const selectedOption = options.find((opt) => opt.value === value) || options[0];
  const isSelectedActive = Boolean(value && value !== options[0]?.value);

  return (
    <div ref={dropdownRef} className="relative flex flex-col space-y-1">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>

      {/* Dropdown Trigger Button */}
      <button
        id={id}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`${label}: ${selectedOption?.label || placeholder}`}
        className={cn(
          'w-full h-11 px-3.5 rounded-lg border text-left transition-all duration-150',
          'flex items-center justify-between gap-2.5 cursor-pointer select-none',
          'focus:outline-none focus:ring-2 focus:ring-[#2563EB]/15 focus:border-[#2563EB]',
          isOpen
            ? 'bg-white border-[#2563EB] ring-2 ring-[#2563EB]/15 shadow-sm'
            : isSelectedActive
            ? 'bg-[#EEF4FF] border-[#BFDBFE] text-[#2563EB]'
            : 'bg-[#F6F8FC] border-[#E2E8F0] hover:bg-white hover:border-[#CBD5E1]'
        )}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          {Icon && (
            <Icon
              className={cn(
                'w-4 h-4 shrink-0 transition-colors',
                isOpen || isSelectedActive ? 'text-[#2563EB]' : 'text-[#94A3B8]'
              )}
              aria-hidden="true"
            />
          )}
          <span
            className={cn(
              'text-sm truncate font-medium',
              isSelectedActive ? 'text-[#2563EB] font-semibold' : 'text-[#0F1B33]'
            )}
          >
            {selectedOption?.label || placeholder}
          </span>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          {isSelectedActive && (
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"
              aria-hidden="true"
              title="Filter applied"
            />
          )}
          <ChevronDown
            className={cn(
              'w-4 h-4 transition-transform duration-200',
              isOpen ? 'transform rotate-180 text-[#2563EB]' : 'text-[#94A3B8]'
            )}
            aria-hidden="true"
          />
        </div>
      </button>

      {/* Floating Popover Menu */}
      {isOpen && (
        <div
          role="listbox"
          aria-label={label}
          className="absolute top-[calc(100%+6px)] left-0 w-full min-w-[210px] bg-white rounded-xl border border-[#E2E8F0] shadow-[0_16px_36px_-6px_rgba(15,27,51,0.12),0_6px_16px_-4px_rgba(37,99,235,0.06)] p-1.5 z-50 animate-in fade-in zoom-in-95 duration-100 max-h-64 overflow-y-auto"
        >
          {options.map((option) => {
            const isSelected = option.value === value;
            const OptionIcon = option.icon;

            return (
              <button
                key={option.value || 'all'}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={cn(
                  'w-full px-3 py-2 rounded-lg text-xs sm:text-sm font-medium text-left flex items-center justify-between transition-colors cursor-pointer',
                  isSelected
                    ? 'bg-[#EEF4FF] text-[#2563EB] font-semibold'
                    : 'text-[#475569] hover:bg-[#F6F8FC] hover:text-[#0F1B33]'
                )}
              >
                <div className="flex items-center gap-2.5 truncate">
                  {OptionIcon && (
                    <OptionIcon
                      className={cn(
                        'w-3.5 h-3.5 shrink-0',
                        isSelected ? 'text-[#2563EB]' : 'text-[#94A3B8]'
                      )}
                      aria-hidden="true"
                    />
                  )}
                  <span className="truncate">{option.label}</span>
                </div>
                {isSelected && (
                  <Check className="w-4 h-4 text-[#2563EB] shrink-0 ml-2" aria-hidden="true" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function JobsExplorer() {
  const searchParams = useSearchParams();

  // Read initial values from URL query (?q= and ?location=)
  const initialKeyword = searchParams.get('q') || '';
  const rawLocation = searchParams.get('location') || '';

  // Find matching location option or fallback to raw value
  const initialLocation = useMemo(() => {
    if (!rawLocation) return '';
    const matched = LOCATION_FILTER_OPTIONS.find(
      (opt) => opt.value && rawLocation.toLowerCase().includes(opt.value.toLowerCase())
    );
    return matched ? matched.value : rawLocation;
  }, [rawLocation]);

  const [keyword, setKeyword] = useState(initialKeyword);
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);
  const [selectedType, setSelectedType] = useState('');
  const [selectedSort, setSelectedSort] = useState('newest');

  // Track saved/bookmarked jobs
  const [savedJobIds, setSavedJobIds] = useState([]);
  // Track applied modal state
  const [appliedJob, setAppliedJob] = useState(null);

  // Toggle bookmark
  const toggleSaveJob = (id) => {
    setSavedJobIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Reset all filters
  const handleClearFilters = () => {
    setKeyword('');
    setSelectedLocation('');
    setSelectedType('');
    setSelectedSort('newest');
  };

  const hasActiveFilters = Boolean(
    keyword.trim() || selectedLocation || selectedType || selectedSort !== 'newest'
  );

  // Filter and sort jobs using useMemo
  const filteredJobs = useMemo(() => {
    const q = keyword.toLowerCase().trim();
    const loc = selectedLocation.toLowerCase().trim();
    const type = selectedType.toLowerCase().trim();

    const matches = jobListings.filter((job) => {
      // 1. Keyword search (case-insensitive across title, company, tags, department)
      const matchesKeyword =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q) ||
        job.department.toLowerCase().includes(q) ||
        job.tags.some((tag) => tag.toLowerCase().includes(q));

      // 2. Location filter
      const matchesLoc =
        !loc ||
        (loc === 'remote'
          ? job.location.toLowerCase().includes('remote') || job.workplace === 'Remote'
          : job.location.toLowerCase().includes(loc));

      // 3. Type filter
      const matchesType = !type || job.type.toLowerCase() === type;

      return matchesKeyword && matchesLoc && matchesType;
    });

    // Sort results
    if (selectedSort === 'salary-high') {
      return matches.slice().sort((a, b) => parseSalaryMax(b.salary) - parseSalaryMax(a.salary));
    }

    return matches;
  }, [keyword, selectedLocation, selectedType, selectedSort]);

  return (
    <div className="relative pb-20 sm:pb-28">
      {/* ================= 1. FLOATING SEARCH & FILTER CARD ================= */}
      <div className="-mt-8 sm:-mt-10 lg:-mt-12 relative z-30 mb-10 sm:mb-12">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_20px_45px_-10px_rgba(37,99,235,0.08),0_8px_20px_-4px_rgba(15,27,51,0.04)] p-4 sm:p-5 md:p-6 space-y-4">
              {/* Controls Row: 1 col on mobile (<640px), 2 on tablet, 4 on desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {/* 1. Keyword Search Input */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="jobs-search-keyword" className="sr-only">
                    Search roles, companies or skills
                  </label>
                  <div className="relative flex items-center h-11 px-3.5 bg-[#F6F8FC] rounded-lg border border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-white focus-within:border-[#2563EB] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#2563EB]/15 transition-all">
                    <Search
                      className="w-4 h-4 text-[#94A3B8] shrink-0 mr-2.5 pointer-events-none"
                      aria-hidden="true"
                    />
                    <input
                      id="jobs-search-keyword"
                      name="q"
                      type="text"
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                      placeholder="Title, skill, company..."
                      className="w-full text-sm font-body font-medium text-[#0F1B33] placeholder-[#94A3B8] bg-transparent border-0 outline-none p-0 focus:outline-none focus:ring-0"
                    />
                    {keyword && (
                      <button
                        type="button"
                        onClick={() => setKeyword('')}
                        aria-label="Clear keyword search"
                        className="p-1 rounded-full text-[#94A3B8] hover:text-[#0F1B33] hover:bg-[#EEF4FF] transition-colors cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* 2. Custom Location Dropdown */}
                <FilterDropdown
                  id="jobs-filter-location"
                  label="Select location"
                  value={selectedLocation}
                  onChange={setSelectedLocation}
                  options={LOCATION_FILTER_OPTIONS}
                  icon={MapPin}
                  placeholder="All Locations"
                />

                {/* 3. Custom Job Type Dropdown */}
                <FilterDropdown
                  id="jobs-filter-type"
                  label="Select job type"
                  value={selectedType}
                  onChange={setSelectedType}
                  options={TYPE_FILTER_OPTIONS}
                  icon={Briefcase}
                  placeholder="All Types"
                />

                {/* 4. Custom Sort Dropdown */}
                <FilterDropdown
                  id="jobs-filter-sort"
                  label="Sort roles"
                  value={selectedSort}
                  onChange={setSelectedSort}
                  options={SORT_OPTIONS}
                  icon={ArrowUpDown}
                  placeholder="Sort by"
                />
              </div>

              {/* Status Row: Live Count + Clear Filters */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#F1F5F9] text-xs">
                {/* Live results count in an aria-live="polite" region */}
                <div
                  aria-live="polite"
                  aria-atomic="true"
                  className="font-medium text-[#475569] flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-[#2563EB]" aria-hidden="true" />
                  <span>
                    Showing <strong className="text-[#0F1B33] font-bold">{filteredJobs.length}</strong>{' '}
                    {filteredJobs.length === 1 ? 'verified position' : 'verified positions'}
                  </span>
                </div>

                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={handleClearFilters}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors cursor-pointer focus-visible:outline-none focus-visible:underline"
                  >
                    <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Clear filters</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ================= 2. RESULTS AREA & JOB CARDS GRID ================= */}
      <Container>
        {/* Results Area Header (h2) */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0F1B33] tracking-tight">
              Verified Open Roles
            </h2>
            <p className="font-body text-sm text-[#475569] mt-0.5">
              Direct connection with verified engineering leads. No recruitment middle-layers.
            </p>
          </div>
        </div>

        {/* Empty State */}
        {filteredJobs.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-8 sm:p-14 text-center max-w-lg mx-auto space-y-5 my-8">
            {/* Friendly SVG Illustration in brand blues */}
            <div className="w-28 h-28 mx-auto" aria-hidden="true">
              <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="60" cy="60" r="54" fill="#EEF4FF" />
                <ellipse cx="60" cy="95" rx="36" ry="8" fill="#CBD5E1" fillOpacity="0.4" />
                {/* Folded paper board */}
                <rect x="36" y="28" width="48" height="60" rx="6" fill="#FFFFFF" stroke="#BFDBFE" strokeWidth="2" />
                <rect x="44" y="38" width="32" height="5" rx="2" fill="#2563EB" />
                <rect x="44" y="48" width="26" height="3" rx="1.5" fill="#CBD5E1" />
                <rect x="44" y="55" width="28" height="3" rx="1.5" fill="#CBD5E1" />
                <rect x="44" y="62" width="20" height="3" rx="1.5" fill="#CBD5E1" />
                {/* Magnifying Glass */}
                <circle cx="76" cy="74" r="16" fill="#FFFFFF" stroke="#2563EB" strokeWidth="3" />
                <ellipse cx="76" cy="74" rx="11" ry="11" fill="#EEF4FF" fillOpacity="0.5" />
                <path d="M 88 86 L 98 96" stroke="#0F1B33" strokeWidth="4" strokeLinecap="round" />
                <circle cx="73" cy="71" r="2.5" fill="#60A5FA" />
              </svg>
            </div>

            <div className="space-y-2">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#2563EB]">
                No roles match your filters
              </h3>
              <p className="font-body text-sm text-[#475569] leading-relaxed max-w-md mx-auto">
                Try adjusting your search terms, broadening the location filter, or clearing filters to view all available positions.
              </p>
            </div>

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                onClick={handleClearFilters}
                className="font-semibold shadow-sm"
              >
                Clear all filters
              </Button>
            </div>
          </div>
        ) : (
          /* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => {
              const initials = getCompanyInitials(job.company);
              const isSaved = savedJobIds.includes(job.id);

              return (
                <div
                  key={job.id}
                  id={job.id}
                  className="bg-white rounded-xl border border-[#E2E8F0] shadow-[0_12px_32px_-4px_rgba(15,27,51,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.08)] hover:border-[#BFDBFE] p-6 flex flex-col justify-between transition-all duration-200 group"
                >
                  <div className="space-y-4">
                    {/* Top Row: Initial Avatar, Company, Bookmark Toggle, and Type Badge */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className="w-10 h-10 rounded-lg bg-[#EEF4FF] border border-[#BFDBFE] text-[#2563EB] font-heading font-bold text-sm flex items-center justify-center shrink-0"
                          aria-hidden="true"
                        >
                          {initials}
                        </div>
                        <div className="min-w-0">
                          <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] block truncate">
                            {job.company}
                          </span>
                          <span className="text-[11px] font-medium text-[#94A3B8] block truncate">
                            {job.department}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <Badge variant="primary" size="sm">
                          {job.type}
                        </Badge>
                        {/* Bookmark Button with aria-pressed */}
                        <button
                          type="button"
                          onClick={() => toggleSaveJob(job.id)}
                          aria-pressed={isSaved}
                          aria-label={isSaved ? `Remove ${job.title} from saved jobs` : `Save ${job.title}`}
                          className={cn(
                            'p-2 rounded-lg border transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]',
                            isSaved
                              ? 'bg-[#EEF4FF] border-[#BFDBFE] text-[#2563EB]'
                              : 'bg-white border-[#E2E8F0] text-[#94A3B8] hover:text-[#0F1B33] hover:border-[#CBD5E1]'
                          )}
                        >
                          <Bookmark
                            className={cn('w-4 h-4', isSaved && 'fill-[#2563EB]')}
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>

                    {/* Role Title (h3) */}
                    <h3 className="font-heading font-bold text-lg text-[#0F1B33] group-hover:text-[#2563EB] transition-colors leading-snug">
                      <Link href={`#${job.id}`} className="focus-visible:outline-none focus-visible:underline rounded">
                        {job.title}
                      </Link>
                    </h3>

                    {/* Location & Posted Time */}
                    <div className="space-y-1.5 text-xs text-[#64748B]">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#94A3B8] shrink-0" aria-hidden="true" />
                        <span className="truncate">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#94A3B8]">
                        <Clock className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>Posted {job.postedAt}</span>
                      </div>
                    </div>

                    {/* Tag Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {job.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-[#F6F8FC] text-[#475569] border border-[#E2E8F0]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: Salary & Apply Now Button */}
                  <div className="pt-5 mt-5 border-t border-[#F1F5F9] flex items-center justify-between gap-3 text-xs">
                    <div className="font-bold text-[#0F1B33] flex items-center gap-1">
                      <DollarSign className="w-3.5 h-3.5 text-[#2563EB] shrink-0" aria-hidden="true" />
                      <span>{job.salary}</span>
                    </div>

                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => setAppliedJob(job)}
                      className="px-4 font-semibold shadow-xs"
                    >
                      Apply now
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Container>

      {/* ================= 3. APPLICATION MODAL ================= */}
      {appliedJob && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="apply-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#0F1B33]/60 backdrop-blur-xs transition-opacity"
            onClick={() => setAppliedJob(null)}
            aria-hidden="true"
          />

          {/* Modal Card */}
          <div className="relative bg-white rounded-2xl border border-[#E2E8F0] shadow-2xl max-w-md w-full p-6 sm:p-7 z-10 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between pb-4 border-b border-[#F1F5F9]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#EEF4FF] border border-[#BFDBFE] text-[#2563EB] font-bold text-sm flex items-center justify-center shrink-0">
                  {getCompanyInitials(appliedJob.company)}
                </div>
                <div>
                  <h3 id="apply-modal-title" className="font-heading font-bold text-lg text-[#0F1B33] leading-snug">
                    {appliedJob.title}
                  </h3>
                  <p className="text-xs text-[#64748B]">{appliedJob.company} · {appliedJob.location}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setAppliedJob(null)}
                aria-label="Close application dialog"
                className="p-1 rounded-lg text-[#94A3B8] hover:text-[#0F1B33] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-5 space-y-4">
              <div className="p-3.5 rounded-xl bg-[#F6F8FC] border border-[#E2E8F0] space-y-1">
                <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">Compensation Band:</span>
                <span className="text-sm font-bold text-[#2563EB]">{appliedJob.salary}</span>
              </div>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Your pre-verified Surhires credentials will be sent directly to the hiring lead at <strong>{appliedJob.company}</strong>. No agency recruiters in between.
              </p>

              <div className="space-y-2 text-xs text-[#64748B]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Salary transparency confirmed upfront</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Guaranteed response within 72 hours</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3 border-t border-[#F1F5F9]">
              <Button variant="ghost" size="sm" onClick={() => setAppliedJob(null)}>
                Cancel
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  alert(`Application for ${appliedJob.title} submitted directly to ${appliedJob.company}! You will hear back in 48-72 hours.`);
                  setAppliedJob(null);
                }}
              >
                Confirm & Submit
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

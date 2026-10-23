'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Search,
  MapPin,
  ChevronDown,
  X,
  Briefcase,
  Globe,
  Building2,
  Check,
  TrendingUp,
  Sparkles,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import { cn } from '@/lib/utils';

const POPULAR_ROLES = [
  { title: 'Senior Full-Stack Engineer', category: 'Engineering' },
  { title: 'Staff AI / ML Infrastructure Engineer', category: 'Data & AI' },
  { title: 'Principal Product Designer', category: 'Design' },
  { title: 'Lead Backend Engineer (Go/Distributed)', category: 'Engineering' },
  { title: 'DevOps & Site Reliability Lead', category: 'Cloud' },
];

const POPULAR_TAGS = ['React', 'Next.js', 'Python', 'Kubernetes', 'AWS', 'Go', 'Figma'];

const LOCATION_OPTIONS = [
  { id: 'remote', label: 'Remote', icon: Globe, sub: 'Worldwide / Anywhere in India' },
  { id: 'bengaluru', label: 'Bengaluru', icon: Building2, sub: 'Silicon Valley of India / Tech Capital' },
  { id: 'mumbai', label: 'Mumbai', icon: Building2, sub: 'FinTech, Media & Enterprise Tech' },
  { id: 'ahmedabad', label: 'Ahmedabad', icon: Building2, sub: 'Gujarat Tech & Innovation Corridor' },
  { id: 'delhi', label: 'Delhi NCR', icon: Building2, sub: 'Gurgaon & Noida Tech Corridor' },
  { id: 'hyderabad', label: 'Hyderabad', icon: Building2, sub: 'HITEC City & Cyberabad' },
  { id: 'pune', label: 'Pune', icon: Building2, sub: 'Software Engineering & Cloud Hub' },
];

/**
 * Floating Search Card Component.
 * Features an interactive autocomplete keyword search and custom rich location dropdown
 * with zero browser focus glitches, Indian tech hubs, and direct routing.
 */
export default function HeroSearch({ className = '' }) {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Bengaluru');

  const [isKeywordFocused, setIsKeywordFocused] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  const containerRef = useRef(null);
  const keywordInputRef = useRef(null);

  // Close dropdowns on outside click or Escape key
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsKeywordFocused(false);
        setIsLocationOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsKeywordFocused(false);
        setIsLocationOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Filter suggested roles based on typing
  const filteredRoles = keyword.trim()
    ? POPULAR_ROLES.filter(
        (r) =>
          r.title.toLowerCase().includes(keyword.toLowerCase()) ||
          r.category.toLowerCase().includes(keyword.toLowerCase())
      )
    : POPULAR_ROLES;

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setIsKeywordFocused(false);
    setIsLocationOpen(false);

    const params = new URLSearchParams();
    if (keyword.trim()) params.set('q', keyword.trim());
    if (selectedLocation) params.set('location', selectedLocation);

    const queryString = params.toString();
    router.push(queryString ? `/jobs?${queryString}` : '/jobs');
  };

  const handleSelectRole = (title) => {
    setKeyword(title);
    setIsKeywordFocused(false);
    const params = new URLSearchParams();
    params.set('q', title);
    if (selectedLocation) params.set('location', selectedLocation);
    router.push(`/jobs?${params.toString()}`);
  };

  const handleSelectTag = (tag) => {
    setKeyword(tag);
    setIsKeywordFocused(false);
    router.push(`/jobs?q=${encodeURIComponent(tag)}`);
  };

  const handleSelectLocation = (loc) => {
    setSelectedLocation(loc.label);
    setIsLocationOpen(false);
  };

  return (
    <div
      ref={containerRef}
      className={cn('relative z-30 -mt-8 sm:-mt-10 lg:-mt-12 select-none font-body', className)}
    >
      <Container>
        <div className="max-w-4xl mx-auto relative">
          {/* Main Floating Search Pill Card */}
          <form
            onSubmit={handleSubmit}
            role="search"
            aria-label="Job Search"
            className={cn(
              'relative bg-white rounded-2xl border transition-all duration-200',
              'shadow-[0_20px_45px_-10px_rgba(37,99,235,0.08),0_8px_20px_-4px_rgba(15,27,51,0.04)]',
              'p-2.5 sm:p-3 flex flex-col md:flex-row items-stretch md:items-center gap-2.5 md:gap-3',
              isKeywordFocused || isLocationOpen
                ? 'border-[#2563EB] ring-4 ring-[#2563EB]/15'
                : 'border-[#E2E8F0] hover:border-[#93C5FD]'
            )}
          >
            {/* 1. Keyword Input Field */}
            <div className="flex-1 flex items-center gap-3 px-3 py-2 min-w-0">
              <label htmlFor="hero-keyword-input" className="sr-only">
                Job title or keyword
              </label>
              <Search
                className={cn(
                  'w-5 h-5 shrink-0 transition-colors',
                  isKeywordFocused ? 'text-[#2563EB]' : 'text-[#94A3B8]'
                )}
                aria-hidden="true"
              />

              <input
                id="hero-keyword-input"
                ref={keywordInputRef}
                type="text"
                value={keyword}
                onFocus={() => {
                  setIsKeywordFocused(true);
                  setIsLocationOpen(false);
                }}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Job title or keyword"
                style={{ outline: 'none', boxShadow: 'none' }}
                className="w-full text-sm font-medium text-[#0F1B33] placeholder-[#94A3B8] bg-transparent border-0 outline-none ring-0 focus:outline-none focus:ring-0 p-0 truncate"
              />

              {keyword && (
                <button
                  type="button"
                  onClick={() => {
                    setKeyword('');
                    keywordInputRef.current?.focus();
                  }}
                  className="p-1 rounded-full text-[#94A3B8] hover:text-[#0F1B33] hover:bg-[#F1F5F9] transition-colors"
                  aria-label="Clear keyword search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Subtle Divider (Desktop) */}
            <div className="hidden md:block w-px h-8 bg-[#E2E8F0] shrink-0" aria-hidden="true" />

            {/* 2. Custom Location Dropdown Trigger */}
            <div className="flex-1 flex items-center relative">
              <button
                type="button"
                onClick={() => {
                  setIsLocationOpen((prev) => !prev);
                  setIsKeywordFocused(false);
                }}
                style={{ outline: 'none', boxShadow: 'none' }}
                className={cn(
                  'w-full flex items-center justify-between gap-3 px-3 py-2 text-left cursor-pointer transition-colors rounded-xl',
                  'border-0 outline-none ring-0 focus:outline-none focus:ring-0',
                  'hover:bg-[#F8FAFC]'
                )}
                aria-expanded={isLocationOpen}
                aria-haspopup="listbox"
                aria-label="Select location"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <MapPin
                    className={cn(
                      'w-5 h-5 shrink-0 transition-colors',
                      isLocationOpen ? 'text-[#2563EB]' : 'text-[#94A3B8]'
                    )}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-[#0F1B33] truncate">
                    {selectedLocation}
                  </span>
                </div>

                <ChevronDown
                  className={cn(
                    'w-4 h-4 text-[#94A3B8] shrink-0 transition-transform duration-200',
                    isLocationOpen && 'transform rotate-180 text-[#2563EB]'
                  )}
                  aria-hidden="true"
                />
              </button>
            </div>

            {/* 3. Solid Blue Action Button */}
            <button
              type="submit"
              style={{ outline: 'none' }}
              className="h-11 md:h-12 px-7 md:px-8 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] active:bg-[#1E40AF] text-white font-semibold text-sm transition-all duration-150 shadow-md shadow-[#2563EB]/25 hover:shadow-lg hover:shadow-[#2563EB]/35 flex items-center justify-center shrink-0 cursor-pointer active:scale-[0.98]"
            >
              <span>Search jobs</span>
            </button>
          </form>

          {/* Dropdown 1: Autocomplete Suggestions Dropdown */}
          {isKeywordFocused && (
            <div className="absolute top-[calc(100%+8px)] left-0 w-full md:w-[480px] bg-white rounded-xl border border-[#E2E8F0] shadow-[0_20px_50px_-12px_rgba(15,27,51,0.12)] p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#F1F5F9]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#475569] flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-[#2563EB]" />
                  Popular Searches
                </span>
                <span className="text-[11px] text-[#94A3B8]">Press Enter to search</span>
              </div>

              <div className="space-y-1 max-h-60 overflow-y-auto">
                {filteredRoles.map((role) => (
                  <button
                    key={role.title}
                    type="button"
                    onMouseDown={() => handleSelectRole(role.title)}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-[#0F1B33] hover:bg-[#EEF4FF] hover:text-[#2563EB] transition-colors flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Briefcase className="w-4 h-4 text-[#94A3B8] group-hover:text-[#2563EB] shrink-0" />
                      <span className="truncate">{role.title}</span>
                    </div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-[#F6F8FC] text-[#475569] group-hover:bg-[#DBEAFE] group-hover:text-[#1E40AF] shrink-0 ml-2">
                      {role.category}
                    </span>
                  </button>
                ))}
              </div>

              {/* Trending Skills Tags */}
              <div className="mt-3 pt-3 border-t border-[#F1F5F9]">
                <div className="text-[11px] font-bold text-[#475569] uppercase tracking-wider mb-2 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#2563EB]" />
                  Trending Skills:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {POPULAR_TAGS.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onMouseDown={() => handleSelectTag(tag)}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-[#F6F8FC] text-[#475569] hover:bg-[#EEF4FF] hover:text-[#2563EB] border border-[#E2E8F0] hover:border-[#BFDBFE] transition-all cursor-pointer"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Dropdown 2: Custom Interactive Location Dropdown with Indian Cities */}
          {isLocationOpen && (
            <div
              role="listbox"
              aria-label="Location options"
              className="absolute top-[calc(100%+8px)] left-0 md:left-[35%] w-full md:w-[380px] bg-white rounded-xl border border-[#E2E8F0] shadow-[0_20px_50px_-12px_rgba(15,27,51,0.12)] p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
            >
              <div className="px-3 py-2 border-b border-[#F1F5F9] mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#475569]">
                  Select Workplace or City
                </span>
              </div>

              <div className="space-y-1 max-h-64 overflow-y-auto">
                {LOCATION_OPTIONS.map((loc) => {
                  const IconComponent = loc.icon;
                  const isSelected = selectedLocation === loc.label;

                  return (
                    <button
                      key={loc.id}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onMouseDown={() => handleSelectLocation(loc)}
                      className={cn(
                        'w-full text-left px-3 py-2.5 rounded-lg transition-all flex items-center justify-between cursor-pointer',
                        isSelected
                          ? 'bg-[#EEF4FF] text-[#2563EB] font-semibold'
                          : 'hover:bg-[#F6F8FC] text-[#0F1B33]'
                      )}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div
                          className={cn(
                            'w-7 h-7 rounded-md flex items-center justify-center shrink-0',
                            isSelected ? 'bg-[#2563EB] text-white' : 'bg-[#F6F8FC] text-[#64748B]'
                          )}
                        >
                          <IconComponent className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold truncate leading-tight">
                            {loc.label}
                          </div>
                          <div className="text-[11px] text-[#475569] truncate leading-tight mt-0.5">
                            {loc.sub}
                          </div>
                        </div>
                      </div>

                      {isSelected && <Check className="w-4 h-4 text-[#2563EB] shrink-0 ml-2" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

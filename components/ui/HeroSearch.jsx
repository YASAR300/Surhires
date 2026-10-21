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
import { cn } from '@/lib/utils';

const POPULAR_ROLES = [
  { title: 'Senior Full-Stack Engineer', category: 'Engineering' },
  { title: 'Staff AI / ML Infrastructure Engineer', category: 'Data & AI' },
  { title: 'Principal Product Designer', category: 'Design' },
  { title: 'Director of Product Management', category: 'Product' },
  { title: 'DevOps & Site Reliability Engineer', category: 'Infrastructure' },
];

const POPULAR_TAGS = ['React', 'Next.js', 'Python', 'PyTorch', 'Kubernetes', 'AWS', 'Figma'];

const LOCATION_OPTIONS = [
  { id: 'all', label: 'All Locations', icon: Globe, sub: 'Worldwide & Remote' },
  { id: 'remote-global', label: 'Remote (Worldwide)', icon: Globe, sub: 'Any timezone / borderless' },
  { id: 'remote-us', label: 'Remote (US & Canada)', icon: Globe, sub: 'North America timezones' },
  { id: 'sf', label: 'San Francisco, CA', icon: Building2, sub: 'Bay Area / Hybrid' },
  { id: 'ny', label: 'New York, NY', icon: Building2, sub: 'NYC Metro / On-site & Hybrid' },
  { id: 'austin', label: 'Austin, TX', icon: Building2, sub: 'Silicon Hills tech hub' },
  { id: 'seattle', label: 'Seattle, WA', icon: Building2, sub: 'Pacific Northwest' },
  { id: 'london', label: 'London, UK', icon: Building2, sub: 'EMEA HQ' },
  { id: 'bangalore', label: 'Bengaluru, India', icon: Building2, sub: 'APAC Innovation Center' },
];

export default function HeroSearch({ className = '' }) {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Remote (Worldwide)');

  const [isKeywordFocused, setIsKeywordFocused] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  const containerRef = useRef(null);
  const keywordInputRef = useRef(null);

  // Close dropdowns on outside click or escape key
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
    ? POPULAR_ROLES.filter((r) =>
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
    if (selectedLocation && selectedLocation !== 'All Locations') {
      params.set('location', selectedLocation);
    }
    router.push(`/jobs?${params.toString()}`);
  };

  const handleSelectRole = (title) => {
    setKeyword(title);
    setIsKeywordFocused(false);
    const params = new URLSearchParams();
    params.set('q', title);
    if (selectedLocation && selectedLocation !== 'All Locations') {
      params.set('location', selectedLocation);
    }
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
    <div ref={containerRef} className={cn('relative w-full z-40 select-none', className)}>
      {/* Outer Floating Search Bar Capsule matching reference visual */}
      <form
        onSubmit={handleSubmit}
        className={cn(
          'relative bg-white rounded-2xl border transition-all duration-200',
          'shadow-lg shadow-blue-500/5 hover:shadow-xl hover:shadow-blue-500/10',
          'p-2 sm:p-2.5 flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-3',
          isKeywordFocused || isLocationOpen
            ? 'border-[#2563EB] ring-4 ring-[#2563EB]/15'
            : 'border-[#CBD5E1] hover:border-[#93C5FD]'
        )}
      >
        {/* 1. Job Title / Keyword Input (Clean, zero browser focus outline) */}
        <div className="flex-1 flex items-center gap-3 px-3 py-2 min-w-0">
          <Search
            className={cn(
              'w-5 h-5 shrink-0 transition-colors',
              isKeywordFocused ? 'text-[#2563EB]' : 'text-[#94A3B8]'
            )}
            aria-hidden="true"
          />

          <input
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
            className="w-full text-sm font-medium text-[#0B1F3A] placeholder-[#94A3B8] bg-transparent border-0 outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 p-0 truncate"
          />

          {keyword && (
            <button
              type="button"
              onClick={() => {
                setKeyword('');
                keywordInputRef.current?.focus();
              }}
              className="p-1 rounded-full text-[#94A3B8] hover:text-[#0B1F3A] hover:bg-[#F1F5F9] transition-colors"
              aria-label="Clear keyword search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Divider (Desktop) */}
        <div className="hidden md:block w-px h-8 bg-[#E2E8F0] shrink-0" aria-hidden="true" />

        {/* 2. Location Picker Trigger */}
        <div className="flex-1 flex items-center">
          <button
            type="button"
            onClick={() => {
              setIsLocationOpen((prev) => !prev);
              setIsKeywordFocused(false);
            }}
            style={{ outline: 'none', boxShadow: 'none' }}
            className={cn(
              'w-full flex items-center justify-between gap-3 px-3 py-2 text-left cursor-pointer transition-colors rounded-xl',
              'border-0 outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0',
              'hover:bg-[#F8FAFC]'
            )}
          >
            <div className="flex items-center gap-3 min-w-0">
              <MapPin
                className={cn(
                  'w-5 h-5 shrink-0 transition-colors',
                  isLocationOpen ? 'text-[#2563EB]' : 'text-[#94A3B8]'
                )}
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-[#0B1F3A] truncate">
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

        {/* 3. Solid Blue Submit Button matching reference */}
        <button
          type="submit"
          style={{ outline: 'none' }}
          className="h-12 px-7 md:px-8 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] active:bg-[#1E40AF] text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-[#2563EB]/25 hover:shadow-lg hover:shadow-[#2563EB]/35 flex items-center justify-center shrink-0 cursor-pointer active:scale-[0.98]"
        >
          <span>Search my job</span>
        </button>
      </form>

      {/* Dropdown 1: Autocomplete & Suggestions Dropdown (Elevated z-50, never clipped) */}
      {isKeywordFocused && (
        <div className="absolute top-[calc(100%+8px)] left-0 w-full md:w-[480px] bg-white rounded-2xl border border-[#E2E8F0] shadow-2xl p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#F1F5F9]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] flex items-center gap-1.5">
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
                className="w-full text-left px-3 py-2 rounded-xl text-sm font-medium text-[#1E293B] hover:bg-[#EFF6FF] hover:text-[#2563EB] transition-colors flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Briefcase className="w-4 h-4 text-[#94A3B8] group-hover:text-[#2563EB] shrink-0" />
                  <span className="truncate">{role.title}</span>
                </div>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#F1F5F9] text-[#64748B] group-hover:bg-[#DBEAFE] group-hover:text-[#1E40AF] shrink-0 ml-2">
                  {role.category}
                </span>
              </button>
            ))}
          </div>

          {/* Quick Skill Tags */}
          <div className="mt-3 pt-3 border-t border-[#F1F5F9]">
            <div className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider mb-2 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#2563EB]" />
              Trending Skills:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {POPULAR_TAGS.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onMouseDown={() => handleSelectTag(tag)}
                  className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-[#F8FAFC] text-[#475569] hover:bg-[#EFF6FF] hover:text-[#2563EB] border border-[#E2E8F0] hover:border-[#93C5FD] transition-all cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Dropdown 2: Location & Workplace Dropdown (Elevated z-50, never clipped) */}
      {isLocationOpen && (
        <div className="absolute top-[calc(100%+8px)] left-0 md:left-[35%] w-full md:w-[380px] bg-white rounded-2xl border border-[#E2E8F0] shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-3 py-2 border-b border-[#F1F5F9] mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
              Filter by Workplace or City
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
                  onMouseDown={() => handleSelectLocation(loc)}
                  className={cn(
                    'w-full text-left px-3 py-2 rounded-xl transition-all flex items-center justify-between cursor-pointer',
                    isSelected
                      ? 'bg-[#EFF6FF] text-[#2563EB] font-semibold'
                      : 'hover:bg-[#F8FAFC] text-[#1E293B]'
                  )}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={cn(
                        'w-7 h-7 rounded-lg flex items-center justify-center shrink-0',
                        isSelected ? 'bg-[#2563EB] text-white' : 'bg-[#F1F5F9] text-[#64748B]'
                      )}
                    >
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold truncate leading-tight">
                        {loc.label}
                      </div>
                      <div className="text-[11px] text-[#64748B] truncate leading-tight mt-0.5">
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
  );
}

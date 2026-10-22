'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, ChevronDown } from 'lucide-react';
import Container from '@/components/ui/Container';
import { cn } from '@/lib/utils';

const LOCATION_OPTIONS = [
  { value: '', label: 'Select location' },
  { value: 'Remote', label: 'Remote' },
  { value: 'Bengaluru', label: 'Bengaluru' },
  { value: 'Mumbai', label: 'Mumbai' },
  { value: 'Ahmedabad', label: 'Ahmedabad' },
  { value: 'Delhi NCR', label: 'Delhi NCR' },
  { value: 'Hyderabad', label: 'Hyderabad' },
  { value: 'Pune', label: 'Pune' },
];

/**
 * Floating search card located under the hero section.
 * Uses a bottom-border style matching the reference layout, accessible labels,
 * and router navigation to /jobs?q=...&location=...
 */
export default function HeroSearch({ className = '' }) {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (keyword.trim()) params.set('q', keyword.trim());
    if (location) params.set('location', location);

    const queryString = params.toString();
    router.push(queryString ? `/jobs?${queryString}` : '/jobs');
  };

  return (
    <div className={cn('relative z-30 -mt-8 sm:-mt-10 lg:-mt-12', className)}>
      <Container>
        <div className="max-w-4xl mx-auto">
          <form
            onSubmit={handleSubmit}
            role="search"
            aria-label="Job Search"
            className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_20px_45px_-10px_rgba(37,99,235,0.08),0_8px_20px_-4px_rgba(15,27,51,0.04)] p-5 sm:p-6 md:p-7 flex flex-col md:flex-row items-stretch md:items-end gap-5 md:gap-6"
          >
            {/* 1. Keyword Input with Bottom-Border Style */}
            <div className="flex-1 flex flex-col space-y-1.5">
              <label htmlFor="hero-search-keyword" className="sr-only">
                Job title or keyword
              </label>
              <div className="relative flex items-center border-b border-[#CBD5E1] focus-within:border-[#2563EB] transition-colors pb-2">
                <Search
                  className="w-5 h-5 text-[#94A3B8] shrink-0 mr-3 pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  id="hero-search-keyword"
                  name="q"
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Job title or keyword"
                  className="w-full text-sm font-body font-medium text-[#0F1B33] placeholder-[#94A3B8] bg-transparent border-0 outline-none p-0 focus:outline-none focus:ring-0"
                />
              </div>
            </div>

            {/* 2. Location Select with Bottom-Border Style */}
            <div className="flex-1 flex flex-col space-y-1.5">
              <label htmlFor="hero-search-location" className="sr-only">
                Location
              </label>
              <div className="relative flex items-center border-b border-[#CBD5E1] focus-within:border-[#2563EB] transition-colors pb-2">
                <MapPin
                  className="w-5 h-5 text-[#94A3B8] shrink-0 mr-3 pointer-events-none"
                  aria-hidden="true"
                />
                <select
                  id="hero-search-location"
                  name="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full text-sm font-body font-medium text-[#0F1B33] bg-transparent border-0 outline-none p-0 pr-6 focus:outline-none focus:ring-0 cursor-pointer appearance-none"
                >
                  {LOCATION_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value} className="text-[#0F1B33]">
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="w-4 h-4 text-[#94A3B8] absolute right-0 pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* 3. Large Blue Submit Button */}
            <div className="shrink-0 pt-2 md:pt-0">
              <button
                type="submit"
                className="w-full md:w-auto h-11 px-8 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] active:bg-[#1E40AF] text-white font-body font-semibold text-sm transition-all duration-150 shadow-sm shadow-[#2563EB]/25 hover:shadow-md cursor-pointer flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
              >
                Search jobs
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

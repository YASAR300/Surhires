'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, ChevronDown } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import HeroIllustration from './HeroIllustration';

export default function HeroSection() {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('Remote / Any City');

  const handleSearch = (e) => {
    e.preventDefault();
    const query = new URLSearchParams();
    if (keyword.trim()) query.set('q', keyword.trim());
    if (location && location !== 'Remote / Any City') query.set('location', location);
    router.push(`/jobs?${query.toString()}`);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-14 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines, CTAs, and Unified Floating Search Bar */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Display Headline in Royal Blue matching reference design */}
            <h1 className="text-display font-extrabold text-[#2563EB] tracking-tight leading-[1.1]">
              Find Jobs,<br />
              <span className="text-[#1D4ED8]">Hire Top Tech Talent</span>
            </h1>

            {/* Subtitle paragraph */}
            <p className="text-body-lg text-[#64748B] max-w-xl leading-relaxed">
              Each month, high-growth companies and verified engineering, product, and AI leaders connect
              directly on Surhires for transparent salaries and guaranteed 14-day placements.
            </p>

            {/* Action Buttons: Get Started + Learn more */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Button href="/jobs" variant="primary" size="md" className="px-6 rounded-xl">
                Get Started
              </Button>
              <Button href="/#how-it-works" variant="outline" size="md" className="px-6 rounded-xl">
                Learn more
              </Button>
            </div>

            {/* Unified Floating Search Bar Capsule matching reference visual */}
            <div className="pt-4">
              <form
                onSubmit={handleSearch}
                className="bg-white rounded-2xl border border-[#E2E8F0] shadow-md shadow-[#2563EB]/5 p-2 sm:p-2.5 flex flex-col md:flex-row items-stretch md:items-center gap-2"
              >
                {/* Keyword Search Input */}
                <div className="flex-1 flex items-center gap-2.5 px-3 py-2">
                  <Search className="w-5 h-5 text-[#94A3B8] shrink-0" />
                  <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Job title or keyword"
                    className="w-full text-sm text-[#1E293B] placeholder-[#94A3B8] bg-transparent focus:outline-none"
                  />
                </div>

                {/* Subtle Divider (Desktop) */}
                <div className="hidden md:block w-px h-8 bg-[#E2E8F0]" />

                {/* Location Select / Input */}
                <div className="flex-1 flex items-center justify-between gap-2 px-3 py-2 relative">
                  <div className="flex items-center gap-2.5 flex-1">
                    <MapPin className="w-5 h-5 text-[#94A3B8] shrink-0" />
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full text-sm text-[#475569] bg-transparent focus:outline-none cursor-pointer appearance-none pr-6"
                    >
                      <option value="Remote / Any City">Remote / Any Location</option>
                      <option value="San Francisco, CA">San Francisco, CA</option>
                      <option value="New York, NY">New York, NY</option>
                      <option value="Austin, TX">Austin, TX</option>
                      <option value="Seattle, WA">Seattle, WA</option>
                    </select>
                  </div>
                  <ChevronDown className="w-4 h-4 text-[#94A3B8] pointer-events-none absolute right-3" />
                </div>

                {/* Submit Search Button in Royal Blue */}
                <button
                  type="submit"
                  className="h-11 px-7 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] active:bg-[#1E40AF] text-white font-semibold text-sm transition-all duration-200 shadow-sm shadow-[#2563EB]/25 flex items-center justify-center cursor-pointer shrink-0"
                >
                  Search my job
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Isometric Illustration from Reference Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroIllustration />
          </div>
        </div>
      </Container>
    </section>
  );
}

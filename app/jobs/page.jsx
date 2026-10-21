'use client';

import { useState, useMemo } from 'react';
import { Search, MapPin, DollarSign, Clock, Filter, CheckCircle2, ChevronDown } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { jobListings, jobCategories } from '@/data/jobs';
import { cn } from '@/lib/utils';

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Roles');
  const [selectedWorkplace, setSelectedWorkplace] = useState('All');
  const [expandedJobId, setExpandedJobId] = useState(null);

  const workplaceOptions = ['All', 'Remote', 'Hybrid', 'On-site'];

  const filteredJobs = useMemo(() => {
    return jobListings.filter((job) => {
      const matchesCategory =
        selectedCategory === 'All Roles' || job.category === selectedCategory;
      const matchesWorkplace =
        selectedWorkplace === 'All' || job.workplace === selectedWorkplace;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        job.location.toLowerCase().includes(query);

      return matchesCategory && matchesWorkplace && matchesSearch;
    });
  }, [searchQuery, selectedCategory, selectedWorkplace]);

  const toggleJobExpanded = (id) => {
    setExpandedJobId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="py-10 md:py-16 bg-white min-h-screen">
      <Container>
        {/* Page Header */}
        <div className="max-w-3xl mb-10 space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]">
            Verified Tech Marketplace
          </span>
          <h1 className="text-display font-extrabold text-[#2563EB] tracking-tight">
            Explore Verified Tech Roles
          </h1>
          <p className="text-body-lg text-[#64748B]">
            All openings feature confirmed compensation bands, verified technical hiring teams, and flexible remote/hybrid policies.
          </p>
        </div>

        {/* Unified Search & Filters Capsule matching reference visual */}
        <div className="bg-white p-3.5 sm:p-5 rounded-2xl border border-[#E2E8F0] shadow-md shadow-[#2563EB]/5 mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
            {/* Search Input */}
            <div className="flex-1 flex items-center gap-2.5 px-3 py-2 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
              <Search className="w-5 h-5 text-[#94A3B8] shrink-0" />
              <input
                type="text"
                placeholder="Job title, tech stack (e.g. React, Python), or company..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-sm text-[#0B1F3A] placeholder-[#94A3B8] bg-transparent focus:outline-none"
              />
            </div>

            {/* Workplace Filter Buttons */}
            <div className="flex items-center gap-1.5 px-2">
              <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mr-1">
                Workplace:
              </span>
              <div className="flex gap-1">
                {workplaceOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setSelectedWorkplace(opt)}
                    className={cn(
                      'px-3.5 py-2 text-xs font-semibold rounded-xl transition-colors cursor-pointer',
                      selectedWorkplace === opt
                        ? 'bg-[#2563EB] text-white shadow-xs'
                        : 'bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0]'
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 border-t border-[#F1F5F9]">
            <span className="text-xs font-semibold text-[#64748B] shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              Category:
            </span>
            {jobCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  'px-4 py-1.5 text-xs font-semibold rounded-full transition-all whitespace-nowrap cursor-pointer',
                  selectedCategory === cat
                    ? 'bg-[#EFF6FF] text-[#2563EB] border border-[#93C5FD] shadow-2xs'
                    : 'bg-[#F8FAFC] text-[#64748B] hover:text-[#0B1F3A] border border-[#E2E8F0]'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-[#64748B]">
            Showing <strong className="text-[#0B1F3A]">{filteredJobs.length}</strong> verified position
            {filteredJobs.length === 1 ? '' : 's'}
          </p>
          {(searchQuery || selectedCategory !== 'All Roles' || selectedWorkplace !== 'All') && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Roles');
                setSelectedWorkplace('All');
              }}
              className="text-xs font-bold text-[#2563EB] hover:underline cursor-pointer"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Listings Grid */}
        {filteredJobs.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-12 text-center max-w-xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0B1F3A]">No matching roles found</h3>
            <p className="text-sm text-[#64748B]">
              Try adjusting your keyword search or resetting filters to browse all open vacancies.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Roles');
                setSelectedWorkplace('All');
              }}
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredJobs.map((job) => {
              const isExpanded = expandedJobId === job.id;

              return (
                <Card
                  key={job.id}
                  id={job.id}
                  className="transition-all duration-200 overflow-hidden border-[#E2E8F0] hover:border-[#93C5FD] hover:shadow-md"
                >
                  <CardHeader className="p-6 pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">
                            {job.company}
                          </span>
                          <span className="text-[#CBD5E1]">·</span>
                          <span className="text-xs font-medium text-[#64748B]">{job.category}</span>
                        </div>
                        <CardTitle className="text-xl mt-1 text-[#0B1F3A]">
                          {job.title}
                        </CardTitle>
                      </div>

                      <div className="flex items-center gap-2 self-start sm:self-center">
                        <Badge variant={job.workplace === 'Remote' ? 'teal' : 'neutral'}>
                          {job.workplace}
                        </Badge>
                        <Badge variant="outline">{job.type}</Badge>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#64748B] pt-3">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-[#94A3B8]" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-bold text-[#2563EB]">
                        <DollarSign className="w-4 h-4 text-[#2563EB]" />
                        {job.salary}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-[#94A3B8]" />
                        Posted {job.postedAt}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="px-6 pb-6 pt-0 space-y-4">
                    <p className="text-sm text-[#475569] leading-relaxed">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {job.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-xs font-medium rounded-md bg-[#EFF6FF] text-[#1E40AF]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleJobExpanded(job.id)}
                        >
                          {isExpanded ? 'Hide Details' : 'View Requirements'}
                        </Button>
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() =>
                            alert(
                              `Thank you for applying to ${job.title} at ${job.company}! Your application is prioritized directly with the technical hiring lead.`
                            )
                          }
                        >
                          Quick Apply
                        </Button>
                      </div>
                    </div>

                    {/* Collapsible Details */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-[#F1F5F9] grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#F8FAFC] p-5 rounded-xl border border-[#E2E8F0]">
                        <div>
                          <h4 className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider mb-2">
                            Key Requirements:
                          </h4>
                          <ul className="space-y-1.5 text-xs text-[#475569]">
                            {job.requirements.map((req, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider mb-2">
                            Benefits & Perks:
                          </h4>
                          <ul className="space-y-1.5 text-xs text-[#475569]">
                            {job.benefits.map((b, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0 mt-0.5" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </Container>
    </div>
  );
}

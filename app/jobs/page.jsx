'use client';

import { useState, useMemo } from 'react';
import { Search, MapPin, DollarSign, Clock, Briefcase, Filter, CheckCircle2 } from 'lucide-react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Input from '@/components/ui/Input';
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
    <div className="py-10 md:py-16">
      <Container>
        {/* Page Header */}
        <div className="max-w-3xl mb-10 space-y-3">
          <Badge variant="teal">Vetted Opportunities</Badge>
          <h1 className="text-h1 text-[#0B1F3A]">Explore Verified Tech Roles</h1>
          <p className="text-body-lg text-[#64748B]">
            All jobs feature transparent salary bands, confirmed hiring budgets, and direct communication
            with technical hiring leads.
          </p>
        </div>

        {/* Search & Filters Controls */}
        <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-xs mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1">
              <Input
                placeholder="Search by role title, company, or tech stack (e.g., React, Python, AWS)..."
                icon={Search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider pl-1">
                Workplace:
              </span>
              <div className="flex gap-1">
                {workplaceOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setSelectedWorkplace(opt)}
                    className={cn(
                      'px-3 py-1.5 text-xs font-medium rounded-lg transition-colors',
                      selectedWorkplace === opt
                        ? 'bg-[#0B1F3A] text-white'
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
              Department:
            </span>
            {jobCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  'px-3.5 py-1.5 text-xs font-medium rounded-full transition-all whitespace-nowrap cursor-pointer',
                  selectedCategory === cat
                    ? 'bg-[#CCFBF1] text-[#0F766E] border border-[#14B8A6]/40 font-semibold'
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
              className="text-xs font-semibold text-[#0F766E] hover:underline"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Listings Grid */}
        {filteredJobs.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-12 text-center max-w-xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#F1F5F9] text-[#64748B] flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0B1F3A]">No matching roles found</h3>
            <p className="text-sm text-[#64748B]">
              Try adjusting your search criteria or clearing your active filters to see all available openings.
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
                  className="transition-all duration-200 overflow-hidden"
                >
                  <CardHeader className="p-6 pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-[#0F766E] uppercase tracking-wider">
                            {job.company}
                          </span>
                          <span className="text-[#CBD5E1]">·</span>
                          <span className="text-xs text-[#64748B]">{job.category}</span>
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
                      <span className="inline-flex items-center gap-1.5 font-bold text-[#0B1F3A]">
                        <DollarSign className="w-4 h-4 text-[#0F766E]" />
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
                            className="px-2.5 py-1 text-xs font-medium rounded-md bg-[#F1F5F9] text-[#475569]"
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
                          variant="teal"
                          size="sm"
                          onClick={() =>
                            alert(
                              `Thank you for your interest in ${job.title} at ${job.company}! In this demonstration frontend, applicant profiles are routed directly to the recruitment pipeline.`
                            )
                          }
                        >
                          Quick Apply
                        </Button>
                      </div>
                    </div>

                    {/* Collapsible Details */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-[#F1F5F9] grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#FAF8F5] p-5 rounded-xl">
                        <div>
                          <h4 className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider mb-2">
                            Key Requirements:
                          </h4>
                          <ul className="space-y-1.5 text-xs text-[#475569]">
                            {job.requirements.map((req, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E] shrink-0 mt-0.5" />
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

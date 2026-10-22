import Link from 'next/link';
import { MapPin, ArrowRight, DollarSign } from 'lucide-react';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { jobListings } from '@/data/jobs';

/**
 * Extracts uppercase 2-letter initials from a company name.
 */
function getInitials(name = '') {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

/**
 * Featured Roles Grid.
 * Displays 6 curated job cards from data/jobs.js with company initial avatars,
 * titles, locations, type badges, salaries, and "View role" links, plus a "View all jobs" CTA.
 */
export default function FeaturedJobsSection() {
  const featuredRoles = jobListings.slice(0, 6);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <Container>
        {/* Header with Title (h2) and Top-level CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-[#EEF4FF] text-[#2563EB] border border-[#BFDBFE]">
              Active Openings
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#2563EB] tracking-tight">
              Featured Roles
            </h2>
            <p className="font-body text-base text-[#475569] leading-relaxed">
              Explore hand-calibrated opportunities featuring confirmed salary transparency and verified technical leads.
            </p>
          </div>

          <div className="shrink-0">
            <Button
              href="/jobs"
              variant="secondary"
              size="md"
              icon={ArrowRight}
              iconPosition="right"
              className="text-sm font-semibold"
            >
              View all jobs
            </Button>
          </div>
        </div>

        {/* 6 Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredRoles.map((job) => {
            const initials = getInitials(job.company);

            return (
              <div
                key={job.id}
                className="bg-white rounded-xl border border-[#E2E8F0] shadow-[0_12px_32px_-4px_rgba(15,27,51,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.08)] hover:border-[#BFDBFE] p-6 flex flex-col justify-between transition-all duration-200 group"
              >
                <div className="space-y-4">
                  {/* Top Row: Initial Avatar, Company Name, and Type Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-lg bg-[#EEF4FF] border border-[#BFDBFE] text-[#2563EB] font-heading font-bold text-sm flex items-center justify-center shrink-0">
                        {initials}
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] block truncate">
                          {job.company}
                        </span>
                      </div>
                    </div>

                    <Badge variant="primary" size="sm" className="shrink-0">
                      {job.type}
                    </Badge>
                  </div>

                  {/* Role Title */}
                  <h3 className="font-heading font-bold text-lg text-[#0F1B33] group-hover:text-[#2563EB] transition-colors leading-snug">
                    <Link href={`/jobs#${job.id}`} className="focus-visible:outline-none focus-visible:underline rounded">
                      {job.title}
                    </Link>
                  </h3>

                  {/* Location with Icon */}
                  <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
                    <MapPin className="w-3.5 h-3.5 text-[#94A3B8] shrink-0" aria-hidden="true" />
                    <span className="truncate">{job.location}</span>
                  </div>

                  {/* Tags */}
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

                {/* Footer: Salary & View Role Link */}
                <div className="pt-5 mt-5 border-t border-[#F1F5F9] flex items-center justify-between gap-3 text-xs">
                  <div className="font-bold text-[#0F1B33] flex items-center gap-1">
                    <DollarSign className="w-3.5 h-3.5 text-[#2563EB] shrink-0" aria-hidden="true" />
                    <span>{job.salary}</span>
                  </div>

                  <Link
                    href={`/jobs#${job.id}`}
                    className="font-semibold text-[#2563EB] hover:text-[#1D4ED8] flex items-center gap-1 group-hover:translate-x-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded"
                  >
                    <span>View role</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View All Jobs Bottom CTA */}
        <div className="mt-10 text-center md:hidden">
          <Button
            href="/jobs"
            variant="secondary"
            size="md"
            icon={ArrowRight}
            iconPosition="right"
            className="w-full justify-center text-sm font-semibold"
          >
            View all jobs
          </Button>
        </div>
      </Container>
    </section>
  );
}

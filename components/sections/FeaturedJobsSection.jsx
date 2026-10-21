import Link from 'next/link';
import { ArrowRight, MapPin, DollarSign, Briefcase, Clock } from 'lucide-react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { jobListings } from '@/data/jobs';

export default function FeaturedJobsSection() {
  const featured = jobListings.slice(0, 4);

  return (
    <Section bg="warm" id="featured-jobs">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2 max-w-xl">
            <Badge variant="teal">Featured Openings</Badge>
            <h2 className="text-h2 text-[#0B1F3A]">
              Curated Opportunities at High-Growth Companies
            </h2>
            <p className="text-body text-[#64748B]">
              Every position features verified salary transparency, direct engineering contacts, and verified remote/hybrid flexibility.
            </p>
          </div>
          <Button href="/jobs" variant="outline" icon={ArrowRight} iconPosition="right">
            Browse All {jobListings.length}+ Roles
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((job) => (
            <Card key={job.id} hover className="flex flex-col justify-between">
              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold text-[#0F766E] uppercase tracking-wider">
                      {job.company}
                    </span>
                    <CardTitle className="text-lg sm:text-xl mt-0.5">
                      <Link href={`/jobs#${job.id}`} className="hover:text-[#0F766E] transition-colors">
                        {job.title}
                      </Link>
                    </CardTitle>
                  </div>
                  <Badge variant={job.workplace === 'Remote' ? 'teal' : 'neutral'}>
                    {job.workplace}
                  </Badge>
                </div>

                <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 text-xs text-[#64748B]">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {job.location}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-[#0B1F3A]">
                    <DollarSign className="w-3.5 h-3.5 text-[#0F766E]" />
                    {job.salary}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {job.postedAt}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-[#475569] line-clamp-2 leading-relaxed">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-[#F1F5F9] text-[#475569]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between">
                  <span className="text-xs text-[#64748B]">
                    Category: <strong className="text-[#1E293B]">{job.category}</strong>
                  </span>
                  <Link
                    href={`/jobs#${job.id}`}
                    className="text-xs font-semibold text-[#0F766E] hover:text-[#0B1F3A] inline-flex items-center gap-1 transition-colors"
                  >
                    View Details & Apply
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

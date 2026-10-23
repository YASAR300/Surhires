import { Suspense } from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import JobsExplorer from '@/components/sections/JobsExplorer';

/**
 * Server Component: Exports unique SEO metadata and renders page header.
 * Uses Suspense boundary around JobsExplorer to fulfill Next.js requirements for useSearchParams.
 */
export const metadata = {
  title: 'Find Your Next Tech Role | Surhires',
  description:
    'Browse 18+ verified engineering, product, AI, and design roles with confirmed compensation bands, remote flexibility, and zero recruiter spam.',
  openGraph: {
    title: 'Find Your Next Tech Role | Surhires',
    description:
      'Browse verified engineering, product, and AI positions with transparent salaries and guaranteed 14-day placements.',
    url: 'https://surhires.com/jobs',
    siteName: 'Surhires',
    locale: 'en_US',
    type: 'website',
  },
};

/**
 * Loading skeleton fallback for Suspense boundary while search parameters load.
 */
function JobsLoadingFallback() {
  return (
    <div className="py-12">
      <Container>
        <div className="max-w-5xl mx-auto space-y-8 animate-pulse">
          <div className="h-28 bg-[#F1F5F9] rounded-2xl border border-[#E2E8F0]" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-64 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]" />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Light Page Header on Tinted Background (#F6F8FC) */}
      <header className="pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 bg-[#F6F8FC] border-b border-[#E2E8F0]">
        <Container>
          <div className="max-w-3xl space-y-4">
            {/* Breadcrumb Context */}
            <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs font-body text-[#64748B]">
              <Link href="/" className="hover:text-[#2563EB] transition-colors">
                Home
              </Link>
              <span className="text-[#CBD5E1]" aria-hidden="true">
                /
              </span>
              <span className="text-[#2563EB] font-medium" aria-current="page">
                Find Jobs
              </span>
            </nav>

            {/* The ONLY <h1> on the Jobs Page: Source Serif 4 in Brand Blue */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2563EB] tracking-tight leading-tight">
              Find your next role
            </h1>

            {/* Short Intro */}
            <p className="font-body text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl">
              Explore verified opportunities with transparent compensation bands, direct hiring manager access, and guaranteed 14-day placement velocity.
            </p>
          </div>
        </Container>
      </header>

      {/* Main Interactive Jobs Explorer inside Suspense boundary */}
      <main>
        <Suspense fallback={<JobsLoadingFallback />}>
          <JobsExplorer />
        </Suspense>
      </main>
    </div>
  );
}

import Link from 'next/link';
import Container from '@/components/ui/Container';
import Logo from '@/components/ui/Logo';
import { footerLinks } from '@/data/navigation';

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.32a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0B1F3A] text-white pt-16 pb-12 border-t border-[#162E50]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#162E50]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="white" size="md" href="/" />

            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-sm">
              The precision hiring platform built for high-growth tech companies and pre-calibrated engineering, product, and leadership talent.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Surhires LinkedIn"
                className="w-9 h-9 rounded-lg bg-[#162E50] flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-[#1E3A5F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14B8A6]"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Surhires Twitter"
                className="w-9 h-9 rounded-lg bg-[#162E50] flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-[#1E3A5F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14B8A6]"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/YASAR300/Surhires"
                target="_blank"
                rel="noreferrer"
                aria-label="Surhires GitHub"
                className="w-9 h-9 rounded-lg bg-[#162E50] flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-[#1E3A5F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14B8A6]"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Candidates Column */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              For Job Seekers
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.candidates.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#94A3B8] hover:text-[#14B8A6] transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14B8A6] rounded"
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Employers Column */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              For Employers
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.employers.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#94A3B8] hover:text-[#14B8A6] transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14B8A6] rounded"
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Company & Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#94A3B8] hover:text-[#14B8A6] transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14B8A6] rounded"
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
              {footerLinks.legal.slice(0, 2).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#64748B] hover:text-[#94A3B8] transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14B8A6] rounded text-xs"
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>© {currentYear} Surhires Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-[#14B8A6]">
              <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse" />
              Talent Matching Systems Operational
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

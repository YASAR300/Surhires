import Link from 'next/link';
import Container from '@/components/ui/Container';
import Logo from '@/components/ui/Logo';
import { footerLinks, socialLinks } from '@/data/navigation';

/**
 * Inline SVG Icons for Social Links with crisp paths and accessible labels
 */
function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.32a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const SOCIAL_ICON_MAP = {
  X: XIcon,
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
};

/**
 * Shared Footer component with light background (#F6F8FC),
 * 3 organized link columns, SVG social links, copyright, and legal links row.
 */
export default function Footer() {
  const currentYear = 2026;

  return (
    <div className="bg-[#F6F8FC] text-[#475569] font-body pt-16 pb-12 border-t border-[#E2E8F0]">
      <Container>
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#E2E8F0]">
          {/* Brand Info Column */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="md" href="/" />

            <p className="text-sm text-[#475569] leading-relaxed max-w-sm">
              Surhires connects high-growth companies with pre-calibrated engineering, product, and AI talent. Faster hiring cycles backed by transparent salaries and verified skill matching.
            </p>

            {/* Inline SVG Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              {socialLinks.map((social) => {
                const Icon = SOCIAL_ICON_MAP[social.name] || XIcon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="w-9 h-9 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#475569] hover:text-[#2563EB] hover:border-[#2563EB] hover:bg-[#EEF4FF] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* 3 Link Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Column 1: For Job Seekers */}
            <nav aria-label="Job Seeker Links">
              <h3 className="font-heading font-bold text-base text-[#0F1B33] mb-4">
                For Job Seekers
              </h3>
              <ul className="space-y-2.5 text-sm">
                {footerLinks.candidates.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#475569] hover:text-[#2563EB] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Column 2: For Employers */}
            <nav aria-label="Employer Links">
              <h3 className="font-heading font-bold text-base text-[#0F1B33] mb-4">
                For Employers
              </h3>
              <ul className="space-y-2.5 text-sm">
                {footerLinks.employers.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#475569] hover:text-[#2563EB] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Column 3: Company */}
            <nav aria-label="Company Links">
              <h3 className="font-heading font-bold text-base text-[#0F1B33] mb-4">
                Company
              </h3>
              <ul className="space-y-2.5 text-sm">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#475569] hover:text-[#2563EB] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Legal Links Row & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>© {currentYear} Surhires Inc. All rights reserved.</p>

          <nav aria-label="Legal Links" className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footerLinks.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-[#2563EB] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </div>
  );
}

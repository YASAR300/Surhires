'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Logo from '@/components/ui/Logo';
import MobileMenu from './MobileMenu';
import { navigationLinks } from '@/data/navigation';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-200 bg-white/95 backdrop-blur-md',
          scrolled ? 'border-b border-[#E2E8F0] shadow-xs' : 'border-b border-transparent'
        )}
      >
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Left: Brand Logo */}
            <Logo variant="navy" size="md" href="/" />

            {/* Center: Desktop Navigation Links with subtle dropdown hints & active indicator */}
            <nav className="hidden lg:flex items-center gap-7">
              {navigationLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href) && link.href !== '/';

                const hasDropdown =
                  link.name === 'Find Jobs' || link.name === 'For Employers';

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      'relative text-sm font-semibold transition-colors py-2 flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-md',
                      isActive
                        ? 'text-[#2563EB]'
                        : 'text-[#475569] hover:text-[#2563EB]'
                    )}
                  >
                    <span>{link.name}</span>
                    {hasDropdown && (
                      <ChevronDown className="w-3.5 h-3.5 text-[#94A3B8]" />
                    )}

                    {/* Active Underline Pill Indicator matching reference */}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Desktop CTA Buttons matching reference (Outline + Solid Blue) */}
            <div className="hidden lg:flex items-center gap-3">
              <Button href="/employers#contact" variant="outline" size="sm" className="px-5">
                Post a Job
              </Button>
              <Button href="/employers" variant="primary" size="sm" className="px-5">
                Hire Talent
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                className="p-2 rounded-lg text-[#0B1F3A] hover:bg-[#F1F5F9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigationLinks={navigationLinks}
      />
    </>
  );
}

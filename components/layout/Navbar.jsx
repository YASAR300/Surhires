'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Logo from '@/components/ui/Logo';
import MobileMenu from './MobileMenu';
import { navigationLinks } from '@/data/navigation';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-200 bg-[#FAF8F5]/90 backdrop-blur-md',
          scrolled ? 'border-b border-[#E2E8F0] shadow-xs' : 'border-b border-transparent'
        )}
      >
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Reusable Logo */}
            <Logo variant="navy" size="md" href="/" />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-[#475569] hover:text-[#0B1F3A] transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] rounded-md"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button href="/jobs" variant="ghost" size="md">
                Find Jobs
              </Button>
              <Button
                href="/employers"
                variant="accent"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
              >
                For Employers
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open main navigation menu"
                className="p-2 rounded-lg text-[#0B1F3A] hover:bg-[#F1F5F9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E]"
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

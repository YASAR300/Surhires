'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
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
  const menuToggleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-200 bg-white',
          scrolled
            ? 'shadow-[0_4px_20px_-4px_rgba(15,27,51,0.06)] border-b border-[#E2E8F0]'
            : 'border-b border-transparent'
        )}
      >
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Left: Brand Logo Wordmark */}
            <div className="flex items-center">
              <Logo size="md" href="/" />
            </div>

            {/* Center: 5 Centered Navigation Links with Thin Blue Active Underline */}
            <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-8">
              {navigationLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href) && link.href !== '/';

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      'relative text-sm font-body font-medium transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded',
                      isActive ? 'text-[#2563EB] font-semibold' : 'text-[#475569] hover:text-[#2563EB]'
                    )}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2563EB] rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: "Sign in" Outline Button + "Post a Job" Primary Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Button href="/employers#contact" variant="secondary" size="md">
                Sign in
              </Button>
              <Button href="/employers#contact" variant="primary" size="md">
                Post a Job
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center">
              <button
                ref={menuToggleRef}
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                className="p-2 rounded-lg text-[#0F1B33] hover:bg-[#F6F8FC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] cursor-pointer"
              >
                <Menu className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Slide-Down Accessible Mobile Menu */}
      <MobileMenu
        id="mobile-menu"
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigationLinks={navigationLinks}
        toggleButtonRef={menuToggleRef}
      />
    </>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import Button from '@/components/ui/Button';
import Logo from '@/components/ui/Logo';
import { cn } from '@/lib/utils';

/**
 * Slide-down accessible mobile navigation menu.
 * Fully WCAG-compliant with focus trap, scroll lock, Esc key listener,
 * and focus return to toggle button on close.
 *
 * @param {Object} props
 * @param {string} [props.id='mobile-menu'] - ARIA controls ID
 * @param {boolean} props.isOpen - Open state
 * @param {Function} props.onClose - Close callback
 * @param {Array<{ name: string, href: string }>} [props.navigationLinks=[]] - Nav links
 * @param {React.RefObject<HTMLButtonElement>} [props.toggleButtonRef] - Trigger button ref for return focus
 */
export default function MobileMenu({
  id = 'mobile-menu',
  isOpen,
  onClose,
  navigationLinks = [],
  toggleButtonRef,
}) {
  const pathname = usePathname();
  const drawerRef = useRef(null);
  const closeButtonRef = useRef(null);

  // 1. Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // 2. Focus management: focus first element on open, return to toggle on close, listen for Escape
  useEffect(() => {
    if (!isOpen) return;

    // Focus close button initially
    const timeout = setTimeout(() => {
      if (closeButtonRef.current) {
        closeButtonRef.current.focus();
      }
    }, 50);

    const handleKeyDown = (event) => {
      // Escape key to close
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        toggleButtonRef?.current?.focus();
        return;
      }

      // Tab key focus trap
      if (event.key === 'Tab' && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );

        if (!focusableElements.length) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          // Shift + Tab: backwards
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab: forwards
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, toggleButtonRef]);

  // Handle closing with focus return
  const handleClose = () => {
    onClose();
    toggleButtonRef?.current?.focus();
  };

  if (!isOpen) return null;

  return (
    <div
      id={id}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-0 z-50 lg:hidden flex flex-col justify-start"
    >
      {/* Dimmed Backdrop */}
      <div
        className="fixed inset-0 bg-[#0F1B33]/50 backdrop-blur-xs transition-opacity duration-200"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Slide-Down Menu Panel (optimized for 360px+ screens) */}
      <div
        ref={drawerRef}
        className={cn(
          'relative z-10 w-full max-h-[90vh] overflow-y-auto bg-white border-b border-[#E2E8F0] shadow-2xl',
          'px-5 py-5 sm:px-6 sm:py-6 animate-in slide-in-from-top duration-250 ease-out'
        )}
      >
        {/* Header: Logo and Close Button */}
        <div className="flex items-center justify-between pb-4 border-b border-[#F1F5F9]">
          <Logo size="md" href="/" onClick={handleClose} />

          <button
            ref={closeButtonRef}
            type="button"
            onClick={handleClose}
            aria-label="Close navigation menu"
            className="p-2 -mr-2 rounded-lg text-[#475569] hover:text-[#0F1B33] hover:bg-[#F6F8FC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] cursor-pointer transition-colors"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        {/* Navigation Links with Active Indicator */}
        <nav aria-label="Mobile Navigation Links" className="py-5 flex flex-col space-y-1">
          {navigationLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href) && link.href !== '/';

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={handleClose}
                className={cn(
                  'flex items-center justify-between py-3 px-3 rounded-lg text-base font-body font-medium transition-colors',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]',
                  isActive
                    ? 'text-[#2563EB] bg-[#EEF4FF] font-semibold'
                    : 'text-[#0F1B33] hover:text-[#2563EB] hover:bg-[#F6F8FC]'
                )}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Both Action Buttons: "Sign in" (outline) & "Post a Job" (primary solid blue) */}
        <div className="pt-4 border-t border-[#F1F5F9] flex flex-col gap-2.5">
          <Button
            href="/employers#contact"
            variant="secondary"
            size="md"
            className="w-full justify-center h-11 text-sm font-semibold"
            onClick={handleClose}
          >
            Sign in
          </Button>
          <Button
            href="/employers#contact"
            variant="primary"
            size="md"
            className="w-full justify-center h-11 text-sm font-semibold shadow-md shadow-[#2563EB]/20"
            onClick={handleClose}
          >
            Post a Job
          </Button>
        </div>
      </div>
    </div>
  );
}

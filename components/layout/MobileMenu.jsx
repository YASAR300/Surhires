'use client';

import Link from 'next/link';
import { X, ArrowRight, Briefcase } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function MobileMenu({ isOpen, onClose, navigationLinks = [] }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0B1F3A]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Drawer */}
      <div className="fixed inset-x-0 top-0 bg-white border-b border-[#E2E8F0] shadow-xl p-6 transition-all duration-300">
        <div className="flex items-center justify-between pb-6 border-b border-[#F1F5F9]">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-[#0B1F3A]"
          >
            <div className="w-8 h-8 rounded-lg bg-[#0B1F3A] flex items-center justify-center text-[#14B8A6]">
              <Briefcase className="w-4 h-4" />
            </div>
            <span>
              Sur<span className="text-[#0F766E]">hires</span>
            </span>
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="p-2 rounded-lg text-[#64748B] hover:text-[#0B1F3A] hover:bg-[#F1F5F9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E]"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="py-6 flex flex-col space-y-4">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={onClose}
              className="text-base font-semibold text-[#1E293B] hover:text-[#0F766E] transition-colors py-1"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="pt-4 border-t border-[#F1F5F9] flex flex-col gap-3">
          <Button href="/jobs" variant="outline" size="md" className="w-full justify-center" onClick={onClose}>
            Explore Jobs
          </Button>
          <Button
            href="/employers"
            variant="teal"
            size="md"
            className="w-full justify-center"
            icon={ArrowRight}
            iconPosition="right"
            onClick={onClose}
          >
            Hire Talent
          </Button>
        </div>
      </div>
    </div>
  );
}

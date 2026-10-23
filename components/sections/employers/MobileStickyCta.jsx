'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

/**
 * Mobile-Only Sticky Bottom CTA Bar.
 * Appears when scrolling past the hero, and automatically hides when the #post-job form is in view.
 * Respects prefers-reduced-motion.
 */
export default function MobileStickyCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleScroll = () => {
      // Appear after scrolling 350px down
      const scrolledPastHero = window.scrollY > 350;

      // Check if #post-job form is in view
      const postJobEl = document.getElementById('post-job');
      let formInView = false;
      if (postJobEl) {
        const rect = postJobEl.getBoundingClientRect();
        formInView = rect.top < window.innerHeight && rect.bottom > 0;
      }

      setIsVisible(scrolledPastHero && !formInView);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Quick application action"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E2E8F0] px-4 py-3 shadow-[0_-4px_20px_rgba(15,27,51,0.08)] transition-all duration-200 animate-in slide-in-from-bottom-3"
    >
      <div className="flex items-center justify-between gap-3 max-w-sm mx-auto">
        <div className="min-w-0 font-body">
          <div className="text-xs font-bold text-[#0F1B33] truncate">
            Need senior tech hires?
          </div>
          <Link
            href="#pricing"
            className="text-[11px] font-medium text-[#64748B] hover:text-[#2563EB] transition-colors"
          >
            View pricing plans →
          </Link>
        </div>

        <Link
          href="#post-job"
          className="h-11 px-5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold shadow-md flex items-center gap-1.5 shrink-0 cursor-pointer active:scale-95"
        >
          <span>Post a role</span>
          <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

import Link from 'next/link';
import { cn } from '@/lib/utils';

/**
 * Custom geometric SVG icon mark designed exclusively for Surhires.
 * Represents precision calibration, upward talent growth, and network synergy.
 */
export function LogoMark({ className = 'w-5 h-5', ...props }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Background soft geometric container */}
      <rect width="32" height="32" rx="8" fill="currentColor" fillOpacity="0.12" />
      {/* Left upward stepping pathway */}
      <path
        d="M8 22L14 16L18 20L24 10"
        stroke="#14B8A6"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Precision apex node */}
      <circle cx="24" cy="10" r="2.5" fill="#14B8A6" />
      {/* Foundation anchor */}
      <circle cx="8" cy="22" r="2" fill="#0B1F3A" className="dark-anchor" />
    </svg>
  );
}

/**
 * Reusable Surhires brand wordmark and custom geometric mark.
 *
 * @param {Object} props
 * @param {'navy' | 'white'} [props.variant='navy'] - Color scheme for text & mark
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - Visual size scaling
 * @param {string} [props.href='/'] - Optional destination URL; if null, renders as non-link div
 * @param {string} [props.className] - Additional classes
 */
const sizeStyles = {
  sm: { text: 'text-xl', iconBox: 'w-7 h-7', icon: 'w-4 h-4' },
  md: { text: 'text-2xl', iconBox: 'w-9 h-9', icon: 'w-5 h-5' },
  lg: { text: 'text-3xl', iconBox: 'w-11 h-11', icon: 'w-6 h-6' },
};

export default function Logo({
  variant = 'navy',
  size = 'md',
  href = '/',
  className,
  ...props
}) {
  const isWhite = variant === 'white';
  const sizeConfig = sizeStyles[size] || sizeStyles.md;

  const content = (
    <span
      className={cn(
        'inline-flex items-center gap-2.5 font-black tracking-tight select-none group',
        className
      )}
      {...props}
    >
      {/* Brand Icon Box */}
      <span
        className={cn(
          'rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 shrink-0',
          sizeConfig.iconBox,
          isWhite ? 'bg-[#14B8A6] text-[#0B1F3A]' : 'bg-[#0B1F3A] text-[#14B8A6]'
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={sizeConfig.icon}
          aria-hidden="true"
        >
          {/* Custom geometric monogram: S-curve & growth arrow */}
          <path
            d="M6 17.5C6 16.12 7.12 15 8.5 15H15.5C16.88 15 18 13.88 18 12.5C18 11.12 16.88 10 15.5 10H8.5C7.12 10 6 8.88 6 7.5C6 6.12 7.12 5 8.5 5H18"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="6" cy="17.5" r="1.5" fill="#14B8A6" />
          <circle cx="18" cy="5" r="1.5" fill={isWhite ? '#0B1F3A' : '#14B8A6'} />
        </svg>
      </span>

      {/* Wordmark */}
      <span
        className={cn(
          'font-heading',
          sizeConfig.text,
          isWhite ? 'text-white' : 'text-[#0B1F3A]'
        )}
      >
        Sur<span className={isWhite ? 'text-[#14B8A6]' : 'text-[#0F766E]'}>hires</span>
      </span>
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] rounded-lg inline-flex"
      >
        {content}
      </Link>
    );
  }

  return content;
}

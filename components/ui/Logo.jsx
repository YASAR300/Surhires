import Link from 'next/link';
import { cn } from '@/lib/utils';

/**
 * Modern geometric logo mark with wordmark matching the reference aesthetic.
 *
 * @param {Object} props
 * @param {'navy' | 'white'} [props.variant='navy'] - Color scheme
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - Visual size
 * @param {string} [props.href='/'] - Destination URL
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
      {/* Icon Mark Box */}
      <span
        className={cn(
          'rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 shrink-0 shadow-xs',
          sizeConfig.iconBox,
          isWhite ? 'bg-[#2563EB] text-white' : 'bg-[#2563EB] text-white'
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={sizeConfig.icon}
          aria-hidden="true"
        >
          {/* Stylized interconnected S shape representing candidate and employer connection */}
          <path
            d="M7 17C7 14.5 9 13.5 12 13.5C15 13.5 17 12.5 17 10C17 7.5 14.8 6 12 6C8.5 6 7 8 7 8"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="7" cy="17" r="2" fill="#93C5FD" />
          <circle cx="17" cy="10" r="2" fill="#93C5FD" />
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
        Sur<span className={isWhite ? 'text-[#60A5FA]' : 'text-[#2563EB]'}>hires</span>
      </span>
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-lg inline-flex"
      >
        {content}
      </Link>
    );
  }

  return content;
}

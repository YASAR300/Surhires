import Link from 'next/link';
import { cn } from '@/lib/utils';

/**
 * Brand logo wordmark for Surhires:
 * "Sur" in ink (#0F1B33) + "hires" in blue (#2563EB), with a tiny custom SVG mark.
 *
 * @param {Object} props
 * @param {'default' | 'white'} [props.variant='default'] - Visual theme
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - Sizing option
 * @param {string} [props.href='/'] - Destination link
 * @param {string} [props.className] - Additional classes
 */
const sizeStyles = {
  sm: { text: 'text-xl', mark: 'w-4 h-4', gap: 'gap-1.5' },
  md: { text: 'text-2xl', mark: 'w-5 h-5', gap: 'gap-2' },
  lg: { text: 'text-3xl', mark: 'w-6 h-6', gap: 'gap-2.5' },
};

export default function Logo({
  variant = 'default',
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
        'inline-flex items-center font-bold tracking-tight select-none group',
        sizeConfig.gap,
        className
      )}
      {...props}
    >
      {/* Tiny Custom Geometric SVG Mark */}
      <svg
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(sizeConfig.mark, 'shrink-0 transition-transform group-hover:scale-110')}
        aria-hidden="true"
      >
        <rect width="20" height="20" rx="5" fill="#2563EB" />
        <path
          d="M6 13.5C6 11.5 7.5 11 10 11C12.5 11 14 10.5 14 8.5C14 6.5 12.2 5.5 10 5.5C7.5 5.5 6 6.8 6 6.8"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="14" cy="14" r="1.5" fill="#93C5FD" />
      </svg>

      {/* Wordmark: "Sur" in ink + "hires" in blue */}
      <span className={cn('font-heading font-extrabold', sizeConfig.text)}>
        <span className={isWhite ? 'text-white' : 'text-[#0F1B33]'}>Sur</span>
        <span className={isWhite ? 'text-[#60A5FA]' : 'text-[#2563EB]'}>hires</span>
      </span>
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-md inline-flex"
      >
        {content}
      </Link>
    );
  }

  return content;
}

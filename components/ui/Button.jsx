import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * @typedef {'primary' | 'accent' | 'outline' | 'ghost'} ButtonVariant
 * @typedef {'sm' | 'md' | 'lg'} ButtonSize
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content of the button
 * @param {string} [props.className] - Additional CSS classes
 * @param {ButtonVariant} [props.variant='primary'] - Visual style variant
 * @param {ButtonSize} [props.size='md'] - Sizing option
 * @param {string} [props.href] - If supplied, renders as a Next.js Link
 * @param {boolean} [props.isLoading=false] - Displays spinner and disables interaction
 * @param {boolean} [props.disabled=false] - Disables the button
 * @param {React.ComponentType<{ className?: string }>} [props.icon] - Optional Lucide icon
 * @param {'left' | 'right'} [props.iconPosition='left'] - Position of the icon relative to text
 * @param {'button' | 'submit' | 'reset'} [props.type='button'] - Button element type
 */
const variantStyles = {
  primary:
    'bg-[#0B1F3A] text-white hover:bg-[#162E50] active:bg-[#061324] shadow-sm shadow-[#0B1F3A]/20 focus-visible:ring-[#0B1F3A]',
  accent:
    'bg-[#14B8A6] text-white hover:bg-[#0D9488] active:bg-[#0F766E] shadow-sm shadow-[#14B8A6]/20 font-semibold focus-visible:ring-[#0F766E]',
  // Alias for backward compatibility
  teal:
    'bg-[#14B8A6] text-white hover:bg-[#0D9488] active:bg-[#0F766E] shadow-sm shadow-[#14B8A6]/20 font-semibold focus-visible:ring-[#0F766E]',
  outline:
    'border border-[#CBD5E1] bg-white text-[#0B1F3A] hover:bg-[#F8FAFC] hover:border-[#94A3B8] active:bg-[#F1F5F9] focus-visible:ring-[#0B1F3A]',
  ghost:
    'bg-transparent text-[#334155] hover:bg-[#F1F5F9] hover:text-[#0B1F3A] active:bg-[#E2E8F0] focus-visible:ring-[#0F766E]',
};

const sizeStyles = {
  sm: 'h-9 px-3.5 text-xs rounded-md gap-1.5',
  md: 'h-11 px-5 text-sm rounded-lg gap-2',
  lg: 'h-13 px-7 text-base rounded-lg gap-2.5 font-semibold',
};

export default function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  href,
  isLoading = false,
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  type = 'button',
  ...props
}) {
  const isDisabled = disabled || isLoading;

  const baseClasses = cn(
    'inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98]',
    variantStyles[variant] || variantStyles.primary,
    sizeStyles[size] || sizeStyles.md,
    className
  );

  const innerContent = (
    <>
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin shrink-0" aria-hidden="true" />
      ) : (
        Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
      )}
      <span>{children}</span>
      {!isLoading && Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
      )}
    </>
  );

  if (href && !isDisabled) {
    return (
      <Link href={href} className={baseClasses} {...props}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-busy={isLoading}
      className={baseClasses}
      {...props}
    >
      {innerContent}
    </button>
  );
}

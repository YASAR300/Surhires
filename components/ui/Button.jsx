import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * @typedef {'primary' | 'secondary' | 'outline' | 'ghost'} ButtonVariant
 * @typedef {'sm' | 'md' | 'lg'} ButtonSize
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button content
 * @param {string} [props.className] - Extra class names
 * @param {ButtonVariant} [props.variant='primary'] - Style variant
 * @param {ButtonSize} [props.size='md'] - Button size (sm: 6px radius, md/lg: 8px radius)
 * @param {string} [props.href] - Render as Next.js Link if provided
 * @param {boolean} [props.isLoading=false] - Display spinner and disable interactions
 * @param {boolean} [props.disabled=false] - Disable button
 * @param {React.ComponentType<{ className?: string }>} [props.icon] - Optional Lucide icon
 * @param {'left' | 'right'} [props.iconPosition='left'] - Position of icon
 * @param {'button' | 'submit' | 'reset'} [props.type='button'] - Button type
 */
const variantStyles = {
  // Solid blue primary
  primary:
    'bg-[#2563EB] text-white hover:bg-[#1D4ED8] active:bg-[#1E40AF] shadow-sm shadow-[#2563EB]/20 font-medium focus-visible:ring-[#2563EB]',
  // White with 1px blue border and blue text
  secondary:
    'bg-white border border-[#2563EB] text-[#2563EB] hover:bg-[#EEF4FF] active:bg-[#DBEAFE] font-medium focus-visible:ring-[#2563EB]',
  // Outline alias for secondary
  outline:
    'bg-white border border-[#2563EB] text-[#2563EB] hover:bg-[#EEF4FF] active:bg-[#DBEAFE] font-medium focus-visible:ring-[#2563EB]',
  // Subtle neutral border
  subtle:
    'bg-white border border-[#E2E8F0] text-[#0F1B33] hover:border-[#CBD5E1] hover:bg-[#F6F8FC] font-medium focus-visible:ring-[#2563EB]',
  // Text only ghost
  ghost:
    'bg-transparent text-[#475569] hover:text-[#2563EB] hover:bg-transparent font-medium focus-visible:ring-[#2563EB]',
};

// 6-8px crisp radius
const sizeStyles = {
  sm: 'h-9 px-3.5 text-xs rounded-md gap-1.5', // 6px radius
  md: 'h-10 px-5 text-sm rounded-lg gap-2',    // 8px radius
  lg: 'h-12 px-6 text-base rounded-lg gap-2.5 font-semibold',
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
    'inline-flex items-center justify-center font-body transition-all duration-150 select-none cursor-pointer',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.99]',
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

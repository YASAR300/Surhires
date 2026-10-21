import { cn } from '@/lib/utils';

/**
 * @typedef {'neutral' | 'teal' | 'navy' | 'outline' | 'success'} BadgeVariant
 * @typedef {'sm' | 'md' | 'lg'} BadgeSize
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Badge label content
 * @param {string} [props.className] - Additional classes
 * @param {BadgeVariant} [props.variant='teal'] - Visual color variant
 * @param {BadgeSize} [props.size='md'] - Padding and typography size
 */
const variantStyles = {
  neutral: 'bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0]',
  teal: 'bg-[#CCFBF1] text-[#0F766E] border border-[#14B8A6]/30',
  navy: 'bg-[#0B1F3A] text-white border border-[#0B1F3A]',
  outline: 'bg-transparent text-[#475569] border border-[#CBD5E1]',
  success: 'bg-[#DCFCE7] text-[#15803D] border border-[#86EFAC]',
  default: 'bg-[#CCFBF1] text-[#0F766E] border border-[#14B8A6]/30',
};

const sizeStyles = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-xs font-semibold',
  lg: 'px-3 py-1.5 text-sm font-semibold',
};

export default function Badge({
  children,
  className,
  variant = 'teal',
  size = 'md',
  ...props
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full transition-colors whitespace-nowrap',
        variantStyles[variant] || variantStyles.teal,
        sizeStyles[size] || sizeStyles.md,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

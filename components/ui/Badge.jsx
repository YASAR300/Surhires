import { cn } from '@/lib/utils';

/**
 * @typedef {'primary' | 'teal' | 'neutral' | 'outline' | 'success'} BadgeVariant
 * @typedef {'sm' | 'md' | 'lg'} BadgeSize
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Badge label content
 * @param {string} [props.className] - Additional classes
 * @param {BadgeVariant} [props.variant='primary'] - Style variant
 * @param {BadgeSize} [props.size='md'] - Sizing option
 */
const variantStyles = {
  primary: 'bg-[#EEF4FF] text-[#2563EB] border border-[#BFDBFE]',
  teal: 'bg-[#F0FDFA] text-[#0F766E] border border-[#CCFBF1]',
  neutral: 'bg-[#F6F8FC] text-[#475569] border border-[#E2E8F0]',
  ink: 'bg-[#0F1B33] text-white border border-[#0F1B33]',
  outline: 'bg-transparent text-[#475569] border border-[#E2E8F0]',
  success: 'bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]',
  default: 'bg-[#EEF4FF] text-[#2563EB] border border-[#BFDBFE]',
};

const sizeStyles = {
  sm: 'px-2 py-0.5 text-xs rounded-md',
  md: 'px-2.5 py-1 text-xs font-semibold rounded-md',
  lg: 'px-3 py-1.5 text-sm font-semibold rounded-md',
};

export default function Badge({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-body font-medium transition-colors whitespace-nowrap',
        variantStyles[variant] || variantStyles.primary,
        sizeStyles[size] || sizeStyles.md,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

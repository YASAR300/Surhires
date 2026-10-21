import { cn } from '@/lib/utils';

const variantClasses = {
  default: 'bg-[#0B1F3A]/10 text-[#0B1F3A] border border-[#0B1F3A]/15',
  teal: 'bg-[#CCFBF1] text-[#0F766E] border border-[#14B8A6]/30',
  navy: 'bg-[#0B1F3A] text-white border border-[#0B1F3A]',
  neutral: 'bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0]',
  success: 'bg-[#DCFCE7] text-[#15803D] border border-[#86EFAC]',
  outline: 'bg-transparent text-[#475569] border border-[#CBD5E1]',
};

export default function Badge({
  children,
  className,
  variant = 'default',
  size = 'md',
  ...props
}) {
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-xs font-medium',
    lg: 'px-3 py-1.5 text-sm font-medium',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full transition-colors whitespace-nowrap',
        variantClasses[variant] || variantClasses.default,
        sizeClasses[size] || sizeClasses.md,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

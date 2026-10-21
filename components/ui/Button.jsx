import Link from 'next/link';
import { cn } from '@/lib/utils';

const variantClasses = {
  primary:
    'bg-[#0B1F3A] text-white hover:bg-[#162E50] active:bg-[#061324] shadow-sm shadow-[#0B1F3A]/20',
  teal:
    'bg-[#14B8A6] text-white hover:bg-[#0D9488] active:bg-[#0F766E] shadow-sm shadow-[#14B8A6]/20 font-semibold',
  secondary:
    'bg-[#F1F5F9] text-[#0B1F3A] hover:bg-[#E2E8F0] active:bg-[#CBD5E1]',
  outline:
    'border border-[#CBD5E1] bg-white text-[#0B1F3A] hover:bg-[#F8FAFC] hover:border-[#94A3B8]',
  outlineTeal:
    'border border-[#14B8A6] bg-transparent text-[#0F766E] hover:bg-[#F0FDFA]',
  ghost:
    'bg-transparent text-[#334155] hover:bg-[#F1F5F9] hover:text-[#0B1F3A]',
  link:
    'bg-transparent text-[#0F766E] underline-offset-4 hover:underline p-0 h-auto font-medium',
};

const sizeClasses = {
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
  type = 'button',
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none select-none';
  const computedClasses = cn(
    baseClasses,
    variantClasses[variant] || variantClasses.primary,
    sizeClasses[size] || sizeClasses.md,
    className
  );

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={computedClasses} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={computedClasses} {...props}>
      {content}
    </button>
  );
}

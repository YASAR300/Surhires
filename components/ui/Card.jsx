import { cn } from '@/lib/utils';

export function Card({ children, className, hover = false, ...props }) {
  return (
    <div
      className={cn(
        'rounded-xl border border-[#E2E8F0] bg-white text-[#1E293B] shadow-sm shadow-[#0B1F3A]/5 transition-all duration-200',
        hover && 'hover:shadow-md hover:shadow-[#0B1F3A]/10 hover:border-[#CBD5E1] hover:-translate-y-0.5',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className, ...props }) {
  return (
    <div className={cn('p-6 pb-3 flex flex-col space-y-1.5', className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className, as: Component = 'h3', ...props }) {
  return (
    <Component
      className={cn('font-bold text-xl text-[#0B1F3A] tracking-tight leading-snug', className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export function CardDescription({ children, className, ...props }) {
  return (
    <p className={cn('text-sm text-[#64748B] leading-relaxed', className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ children, className, ...props }) {
  return (
    <div className={cn('p-6 pt-3', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className, ...props }) {
  return (
    <div
      className={cn('p-6 pt-0 flex items-center border-t border-[#F1F5F9] mt-4', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;

import { cn } from '@/lib/utils';

/**
 * Surface card with 12px radius and soft, large-blur shadow.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card contents
 * @param {string} [props.className] - Additional classes
 * @param {boolean} [props.hover=false] - Enables hover elevation
 * @param {boolean} [props.border=true] - Renders standard border
 */
export function Card({ children, className, hover = false, border = true, ...props }) {
  return (
    <div
      className={cn(
        'rounded-xl bg-white text-[#0F1B33] shadow-[0_12px_32px_-4px_rgba(15,27,51,0.04)] transition-all duration-200',
        border && 'border border-[#E2E8F0]',
        hover &&
          'hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.08)] hover:border-[#BFDBFE] motion-safe:hover:-translate-y-1 motion-reduce:hover:transform-none',
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
      className={cn('font-heading font-bold text-xl text-[#2563EB] tracking-tight leading-snug', className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export function CardDescription({ children, className, ...props }) {
  return (
    <p className={cn('font-body text-sm text-[#475569] leading-relaxed', className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ children, className, ...props }) {
  return (
    <div className={cn('p-6 pt-3 font-body', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className, ...props }) {
  return (
    <div
      className={cn('p-6 pt-0 flex items-center border-t border-[#F1F5F9] mt-4 font-body', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;

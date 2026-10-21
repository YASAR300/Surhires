import { cn } from '@/lib/utils';

/**
 * Surface card component with optional hover elevation that respects prefers-reduced-motion.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card contents
 * @param {string} [props.className] - Additional classes
 * @param {boolean} [props.hover=false] - Enables hover elevation and lift effect
 * @param {boolean} [props.border=true] - Renders standard border
 */
export function Card({ children, className, hover = false, border = true, ...props }) {
  return (
    <div
      className={cn(
        'rounded-xl bg-white text-[#1E293B] shadow-sm shadow-[#0B1F3A]/5 transition-all duration-200',
        border && 'border border-[#E2E8F0]',
        hover &&
          'hover:shadow-md hover:shadow-[#0B1F3A]/10 hover:border-[#CBD5E1] motion-safe:hover:-translate-y-1 motion-reduce:hover:transform-none',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Card header area for titles and meta details.
 */
export function CardHeader({ children, className, ...props }) {
  return (
    <div className={cn('p-6 pb-3 flex flex-col space-y-1.5', className)} {...props}>
      {children}
    </div>
  );
}

/**
 * Card title element with customizable HTML tag.
 */
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

/**
 * Supporting subtitle or description within a card.
 */
export function CardDescription({ children, className, ...props }) {
  return (
    <p className={cn('text-sm text-[#64748B] leading-relaxed', className)} {...props}>
      {children}
    </p>
  );
}

/**
 * Main body content of the card.
 */
export function CardContent({ children, className, ...props }) {
  return (
    <div className={cn('p-6 pt-3', className)} {...props}>
      {children}
    </div>
  );
}

/**
 * Footer area with subtle top separator.
 */
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

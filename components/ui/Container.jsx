import { cn } from '@/lib/utils';

/**
 * Standard content container constrained to ~1200px with responsive padding.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Inner container content
 * @param {string} [props.className] - Additional CSS classes
 */
export default function Container({ children, className, ...props }) {
  return (
    <div
      className={cn('w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8', className)}
      {...props}
    >
      {children}
    </div>
  );
}

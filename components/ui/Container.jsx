import { cn } from '@/lib/utils';

/**
 * Responsive content container configured for optimal width with minimal side dead-space.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Inner container content
 * @param {string} [props.className] - Additional CSS classes
 */
export default function Container({ children, className, ...props }) {
  return (
    <div
      className={cn('w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10', className)}
      {...props}
    >
      {children}
    </div>
  );
}

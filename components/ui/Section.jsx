import { cn } from '@/lib/utils';

/**
 * @typedef {'warm' | 'white' | 'navy' | 'slate' | 'transparent'} SectionBackground
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Section content
 * @param {string} [props.className] - Additional classes
 * @param {string} [props.id] - Optional HTML id for navigation anchors
 * @param {SectionBackground} [props.background='transparent'] - Background color variant
 * @param {SectionBackground} [props.bg] - Alias for background
 * @param {boolean} [props.noPadding=false] - Disables default section padding
 */
const backgroundStyles = {
  warm: 'bg-[#FAF8F5]',
  white: 'bg-white',
  navy: 'bg-[#0B1F3A] text-white',
  slate: 'bg-[#F8FAFC]',
  transparent: 'bg-transparent',
};

export default function Section({
  children,
  className,
  id,
  background,
  bg = 'transparent',
  noPadding = false,
  ...props
}) {
  const selectedBg = background || bg || 'transparent';

  return (
    <section
      id={id}
      className={cn(
        !noPadding && 'section-padding',
        backgroundStyles[selectedBg] || backgroundStyles.transparent,
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

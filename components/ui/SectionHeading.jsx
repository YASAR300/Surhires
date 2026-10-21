import Badge from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

/**
 * @typedef {'left' | 'center' | 'right'} HeadingAlignment
 * @typedef {'h1' | 'h2' | 'h3' | 'h4'} HeadingLevel
 *
 * @param {Object} props
 * @param {string | React.ReactNode} [props.eyebrow] - Optional top tag/eyebrow text
 * @param {string | React.ReactNode} props.title - Main heading title
 * @param {string | React.ReactNode} [props.subtitle] - Supporting descriptive text
 * @param {HeadingAlignment} [props.alignment='center'] - Content alignment
 * @param {HeadingLevel} [props.level='h2'] - Semantic HTML heading level
 * @param {HeadingLevel} [props.as] - Alias for level
 * @param {string} [props.className] - Additional wrapper class
 * @param {string} [props.titleClassName] - Additional heading class
 * @param {string} [props.subtitleClassName] - Additional subtitle class
 * @param {boolean} [props.invert=false] - For dark backgrounds (white text)
 */
const alignmentStyles = {
  left: 'text-left items-start',
  center: 'text-center items-center mx-auto',
  right: 'text-right items-end ml-auto',
};

const headingLevelStyles = {
  h1: 'text-h1',
  h2: 'text-h2',
  h3: 'text-h3',
  h4: 'text-lg font-bold',
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  alignment = 'center',
  level = 'h2',
  as,
  className,
  titleClassName,
  subtitleClassName,
  invert = false,
  ...props
}) {
  const Component = as || level || 'h2';

  return (
    <div
      className={cn(
        'max-w-3xl flex flex-col space-y-3 mb-10 md:mb-12',
        alignmentStyles[alignment] || alignmentStyles.center,
        className
      )}
      {...props}
    >
      {eyebrow && (
        <div>
          {typeof eyebrow === 'string' ? (
            <Badge variant="teal">{eyebrow}</Badge>
          ) : (
            eyebrow
          )}
        </div>
      )}

      <Component
        className={cn(
          headingLevelStyles[Component] || headingLevelStyles.h2,
          invert ? 'text-white' : 'text-[#0B1F3A]',
          titleClassName
        )}
      >
        {title}
      </Component>

      {subtitle && (
        <p
          className={cn(
            'text-body-lg leading-relaxed max-w-2xl',
            invert ? 'text-[#94A3B8]' : 'text-[#64748B]',
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

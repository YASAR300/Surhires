import Badge from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

/**
 * @typedef {'left' | 'center' | 'right'} HeadingAlignment
 * @typedef {'h1' | 'h2' | 'h3' | 'h4'} HeadingLevel
 *
 * @param {Object} props
 * @param {string | React.ReactNode} [props.eyebrow] - Eyebrow badge or text
 * @param {string | React.ReactNode} props.title - Main title in serif blue
 * @param {string | React.ReactNode} [props.subtitle] - Descriptive subtitle in sans
 * @param {HeadingAlignment} [props.alignment='center'] - Alignment
 * @param {HeadingLevel} [props.level='h2'] - Semantic level
 * @param {HeadingLevel} [props.as] - Tag alias
 * @param {string} [props.className] - Wrapper classes
 * @param {string} [props.titleClassName] - Heading classes
 * @param {string} [props.subtitleClassName] - Subtitle classes
 * @param {boolean} [props.invert=false] - For dark sections
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
            <Badge variant="primary">{eyebrow}</Badge>
          ) : (
            eyebrow
          )}
        </div>
      )}

      <Component
        className={cn(
          'font-heading',
          headingLevelStyles[Component] || headingLevelStyles.h2,
          invert ? 'text-white' : 'text-[#2563EB]',
          titleClassName
        )}
      >
        {title}
      </Component>

      {subtitle && (
        <p
          className={cn(
            'font-body text-body-lg leading-relaxed max-w-2xl',
            invert ? 'text-[#94A3B8]' : 'text-[#475569]',
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

import { cn } from '@/lib/utils';

const bgClasses = {
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
  bg = 'transparent',
  noPadding = false,
  ...props
}) {
  return (
    <section
      id={id}
      className={cn(
        !noPadding && 'section-padding',
        bgClasses[bg] || bgClasses.transparent,
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

import Container from '@/components/ui/Container';

const stats = [
  {
    number: '12K+',
    label: 'Live roles',
    description: 'Verified engineering, design, and technical positions open for immediate placement.',
  },
  {
    number: '3.4K+',
    label: 'Hiring teams',
    description: 'High-growth startups and tech enterprises actively interviewing on Surhires.',
  },
  {
    number: '9 days',
    label: 'Average time to hire',
    description: 'Fast-track candidate shortlists eliminate weeks of unfocused technical phone screens.',
  },
  {
    number: '96%',
    label: 'Candidate satisfaction',
    description: 'Transparent compensation bands and direct manager access yield high offer acceptance.',
  },
];

/**
 * Stats row beneath the floating search card.
 * Features 4 columns with large serif blue numbers, distinct labels,
 * specific one-line descriptions, and a 2x2 grid on mobile.
 */
export default function StatsSection() {
  return (
    <section className="pt-14 pb-14 sm:pt-16 sm:pb-18 lg:pt-20 lg:pb-20 bg-white">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center space-y-2 px-2">
              {/* Large Serif Blue Number */}
              <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2563EB] tracking-tight">
                {stat.number}
              </div>

              {/* Stat Label */}
              <div className="font-heading font-bold text-sm sm:text-base text-[#0F1B33]">
                {stat.label}
              </div>

              {/* Specific One-Line Description */}
              <p className="font-body text-xs sm:text-sm text-[#475569] leading-relaxed max-w-[220px]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

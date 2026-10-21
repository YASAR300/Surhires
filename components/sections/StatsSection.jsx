import Container from '@/components/ui/Container';

const stats = [
  {
    number: '15 K+',
    title: 'Vetted Placements',
    description: 'We connect engineering talent with high-growth teams focused on breakthrough products.',
  },
  {
    number: '72 Hrs',
    title: 'Candidate Delivery',
    description: 'Receive your first cohort of calibrated candidates within 3 business days of kickoff.',
  },
  {
    number: '94%',
    title: 'Offer Acceptance',
    description: 'Mutual salary transparency and pre-interview vetting yields industry-leading acceptance.',
  },
  {
    number: '90 Days',
    title: 'Hiring Guarantee',
    description: 'Full replacement protection ensures every placement is thoroughly validated and de-risked.',
  },
];

export default function StatsSection() {
  return (
    <section className="relative z-10 py-14 md:py-18 bg-white border-t border-[#F1F5F9]">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 text-center">
          {stats.map((stat) => (
            <div key={stat.title} className="flex flex-col items-center space-y-1.5">
              {/* Stat Metric in Vibrant Royal Blue matching reference design */}
              <div className="font-heading text-4xl sm:text-5xl font-extrabold text-[#2563EB] tracking-tight">
                {stat.number}
              </div>

              {/* Stat Title */}
              <h3 className="font-bold text-base sm:text-lg text-[#0B1F3A]">
                {stat.title}
              </h3>

              {/* 2-line Subtitle Description */}
              <p className="text-xs text-[#64748B] leading-relaxed max-w-[240px]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

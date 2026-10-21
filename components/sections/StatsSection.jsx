import Container from '@/components/ui/Container';

const stats = [
  { value: '14 Days', label: 'Average Time-to-Hire', helper: 'vs 52 days industry benchmark' },
  { value: '94%', label: 'Offer Acceptance Rate', helper: 'pre-aligned on salary & scope' },
  { value: '$165k+', label: 'Median Base Salary', helper: 'senior & staff-level roles' },
  { value: '90 Days', label: 'Full Guarantee Period', helper: 'zero-risk candidate guarantee' },
];

export default function StatsSection() {
  return (
    <section className="py-12 bg-white border-y border-[#E2E8F0]">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#E2E8F0]">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`text-center ${idx > 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''}`}
            >
              <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F3A] tracking-tight">
                {stat.value}
              </div>
              <div className="font-semibold text-sm sm:text-base text-[#1E293B] mt-1.5">
                {stat.label}
              </div>
              <div className="text-xs text-[#64748B] mt-0.5">
                {stat.helper}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

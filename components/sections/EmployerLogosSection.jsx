import Container from '@/components/ui/Container';

const FICTIONAL_COMPANIES = [
  { name: 'Veloce Cloud', mark: '⚡ Veloce' },
  { name: 'FinPulse Systems', mark: '◆ FinPulse' },
  { name: 'HyperScale Data', mark: '▲ HyperScale' },
  { name: 'OmniHealth Labs', mark: '✚ OmniHealth' },
  { name: 'Klarity Media', mark: '● Klarity' },
  { name: 'NeuralSphere AI', mark: '⬡ NeuralSphere' },
];

/**
 * Employer Logos Strip.
 * Displays "Trusted by hiring teams at" followed by 6 fictional company text wordmarks
 * in muted grey, wrapping neatly on mobile.
 */
export default function EmployerLogosSection() {
  return (
    <section className="py-10 sm:py-12 bg-white border-y border-[#F1F5F9]">
      <Container>
        <div className="space-y-6 text-center">
          <p className="font-body text-xs uppercase tracking-widest font-semibold text-[#64748B]">
            Trusted by hiring teams at
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14">
            {FICTIONAL_COMPANIES.map((company) => (
              <span
                key={company.name}
                className="font-heading text-lg sm:text-xl font-bold tracking-tight text-[#94A3B8] hover:text-[#475569] transition-colors select-none"
              >
                {company.mark}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

import {
  Zap,
  ShieldCheck,
  CheckCircle2,
  Check,
  Minus,
  Sparkles,
  TrendingUp,
  Clock,
  Award,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import PostJobForm from '@/components/sections/PostJobForm';
import FooterCtaSection from '@/components/sections/FooterCtaSection';
import { employerPlans, planComparisonFeatures } from '@/data/plans';
import { cn } from '@/lib/utils';

/**
 * Server Component: Exports SEO metadata and renders Employers landing page.
 * Follows Surhires visual language: Source Serif 4 blue headings, Outfit body text,
 * crisp borders, soft shadows, and high-contrast accessibility.
 */
export const metadata = {
  title: 'Hire Pre-Vetted Tech Talent in 14 Days | Surhires for Employers',
  description:
    'Scale your engineering team with pre-screened senior software engineers, designers, and tech leaders. 72-hour delivery and 90-day replacement guarantee.',
  openGraph: {
    title: 'Hire Pre-Vetted Tech Talent in 14 Days | Surhires for Employers',
    description:
      'Connect directly with calibrated tech talent. Save 80% of technical screening time with guaranteed 72-hour candidate delivery.',
    url: 'https://surhires.com/employers',
    siteName: 'Surhires',
    locale: 'en_US',
    type: 'website',
  },
};

export default function EmployersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ================= 1. HERO SECTION ================= */}
      <section className="pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 bg-[#F6F8FC] border-b border-[#E2E8F0] overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Heading, Description, Action Buttons */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF4FF] border border-[#BFDBFE] text-xs font-semibold text-[#2563EB]">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Zero Recruiter Spam · Top 3% Calibrated Talent</span>
              </div>

              {/* The ONLY <h1> on the Employers Page */}
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2563EB] tracking-tight leading-[1.18]">
                Hire the right people, without the noise
              </h1>

              <p className="font-body text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl">
                Every engineer presented to your team has undergone real-world system architecture evaluations conducted by veteran tech leads. Receive calibrated candidates in 72 hours.
              </p>

              {/* Two CTA Buttons: View Pricing & Post a Job */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  href="#pricing"
                  variant="primary"
                  size="lg"
                  className="px-7 font-semibold shadow-sm"
                >
                  View pricing
                </Button>
                <Button
                  href="#post-job"
                  variant="secondary"
                  size="lg"
                  className="px-7 font-semibold"
                >
                  Post a job
                </Button>
              </div>

              {/* Key Quick Stats */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#64748B] font-body border-t border-[#E2E8F0]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#2563EB] shrink-0" aria-hidden="true" />
                  <span><strong>72 Hours</strong> first batch delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#2563EB] shrink-0" aria-hidden="true" />
                  <span><strong>90-Day</strong> replacement guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#2563EB] shrink-0" aria-hidden="true" />
                  <span><strong>84%</strong> interview-to-offer rate</span>
                </div>
              </div>
            </div>

            {/* Right Column: Small Original SVG Illustration in Brand Blues */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm sm:max-w-md aspect-square flex items-center justify-center">
                {/* Ambient Soft Glow Base */}
                <div
                  className="absolute inset-0 bg-radial from-[#2563EB]/10 via-[#EEF4FF]/50 to-transparent rounded-full blur-2xl pointer-events-none"
                  aria-hidden="true"
                />

                {/* Original Isometric SVG Illustration */}
                <svg
                  viewBox="0 0 380 340"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto drop-shadow-[0_16px_30px_rgba(37,99,235,0.08)] relative z-10"
                  aria-label="Illustration of verified candidate dashboard and technical calibration badge"
                >
                  {/* Base Platform / Ellipse */}
                  <ellipse cx="190" cy="275" rx="160" ry="42" fill="#EEF4FF" />
                  <ellipse cx="190" cy="275" rx="125" ry="30" fill="#E0EDFF" />

                  {/* Main Isometric Dashboard Card */}
                  <rect
                    x="75"
                    y="75"
                    width="230"
                    height="170"
                    rx="14"
                    fill="#FFFFFF"
                    stroke="#BFDBFE"
                    strokeWidth="2"
                  />
                  {/* Dashboard Header Bar */}
                  <rect x="75" y="75" width="230" height="42" rx="14" fill="#F8FAFC" />
                  <circle cx="98" cy="96" r="5" fill="#EF4444" />
                  <circle cx="114" cy="96" r="5" fill="#F59E0B" />
                  <circle cx="130" cy="96" r="5" fill="#10B981" />
                  <rect x="155" y="91" width="120" height="10" rx="5" fill="#E2E8F0" />

                  {/* Candidate Profile Avatar & Verified Badge */}
                  <rect x="95" y="132" width="44" height="44" rx="10" fill="#EEF4FF" stroke="#BFDBFE" />
                  <circle cx="117" cy="149" r="10" fill="#2563EB" />
                  <path
                    d="M102 170 C102 162 110 160 117 160 C124 160 132 162 132 170"
                    fill="#2563EB"
                  />
                  <rect x="150" y="136" width="105" height="11" rx="4" fill="#0F1B33" />
                  <rect x="150" y="153" width="70" height="8" rx="4" fill="#94A3B8" />

                  {/* Code Evaluation Progress Bars */}
                  <rect x="95" y="192" width="190" height="6" rx="3" fill="#EEF4FF" />
                  <rect x="95" y="192" width="165" height="6" rx="3" fill="#2563EB" />
                  <rect x="95" y="206" width="190" height="6" rx="3" fill="#EEF4FF" />
                  <rect x="95" y="206" width="140" height="6" rx="3" fill="#60A5FA" />

                  {/* Floating "Top 3% Vetted" Pill Card */}
                  <g className="animate-pulse">
                    <rect
                      x="215"
                      y="42"
                      width="135"
                      height="46"
                      rx="12"
                      fill="#FFFFFF"
                      stroke="#2563EB"
                      strokeWidth="1.5"
                      filter="drop-shadow(0 10px 15px rgba(37,99,235,0.15))"
                    />
                    <circle cx="238" cy="65" r="12" fill="#2563EB" />
                    <path
                      d="M233 65 L237 69 L244 61"
                      stroke="#FFFFFF"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <text x="256" y="61" fill="#0F1B33" fontSize="10" fontWeight="700" fontFamily="sans-serif">
                      Top 3% Talent
                    </text>
                    <text x="256" y="74" fill="#2563EB" fontSize="9" fontWeight="600" fontFamily="sans-serif">
                      Pre-Calibrated
                    </text>
                  </g>

                  {/* Floating 72h Delivery Pill */}
                  <rect
                    x="35"
                    y="180"
                    width="115"
                    height="40"
                    rx="10"
                    fill="#FFFFFF"
                    stroke="#E2E8F0"
                    strokeWidth="1.5"
                    filter="drop-shadow(0 8px 16px rgba(15,27,51,0.06))"
                  />
                  <circle cx="55" cy="200" r="10" fill="#EEF4FF" />
                  <path
                    d="M55 195 V200 L58 203"
                    stroke="#2563EB"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <text x="72" y="196" fill="#0F1B33" fontSize="9.5" fontWeight="700" fontFamily="sans-serif">
                    72h Delivery
                  </text>
                  <text x="72" y="209" fill="#64748B" fontSize="8.5" fontFamily="sans-serif">
                    First Shortlist
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= 2. WHY EMPLOYERS CHOOSE SURHIRES ================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E2E8F0]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF4FF] text-[#2563EB] border border-[#BFDBFE]">
              The Surhires Advantage
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F1B33] tracking-tight">
              Why Leading Engineering Teams Choose Surhires
            </h2>
            <p className="font-body text-base text-[#475569]">
              Built by engineers for hiring managers who value speed, accuracy, and calibrated technical competence.
            </p>
          </div>

          {/* Row of 3 Benefits with Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-8 space-y-4 hover:border-[#BFDBFE] hover:shadow-[0_16px_35px_-8px_rgba(37,99,235,0.08)] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#EEF4FF] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center">
                <Zap className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#0F1B33]">
                72-Hour Candidate Delivery
              </h3>
              <p className="font-body text-sm text-[#475569] leading-relaxed">
                Skip the weeks of waiting for inbound resumes. Receive your first cohort of 3–5 pre-screened, interview-ready candidates within 3 business days.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-8 space-y-4 hover:border-[#BFDBFE] hover:shadow-[0_16px_35px_-8px_rgba(37,99,235,0.08)] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#EEF4FF] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#0F1B33]">
                Rigorous Technical Calibration
              </h3>
              <p className="font-body text-sm text-[#475569] leading-relaxed">
                Every engineer undergoes realistic system architecture and code evaluations conducted by veteran tech leads, not automated multiple-choice tests.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-8 space-y-4 hover:border-[#BFDBFE] hover:shadow-[0_16px_35px_-8px_rgba(37,99,235,0.08)] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#EEF4FF] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#0F1B33]">
                90-Day Free Replacement
              </h3>
              <p className="font-body text-sm text-[#475569] leading-relaxed">
                Zero hiring risk. If a full-time hire placed through Surhires departs or does not meet agreed performance standards in 90 days, we replace them at no extra charge.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= 3. PRICING & PLAN COMPARISON ================= */}
      <section id="pricing" className="scroll-mt-24 py-16 sm:py-20 lg:py-24 bg-[#F6F8FC] border-b border-[#E2E8F0]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF4FF] text-[#2563EB] border border-[#BFDBFE]">
              Transparent Investment
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F1B33] tracking-tight">
              Simple, Predictable Pricing
            </h2>
            <p className="font-body text-base text-[#475569]">
              Choose the tier that matches your hiring velocity: self-serve listings for early startups to dedicated recruiting pods for scale-ups.
            </p>
          </div>

          {/* Pricing Cards: 3 Tiers (Starter, Growth [Most Popular], Scale) */}
          {/* On mobile: flex-col with Growth (order-1) stacking first */}
          {/* On desktop: lg:grid lg:grid-cols-3 with normal visual order */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 items-stretch mb-16">
            {employerPlans.map((plan) => {
              const isPopular = plan.featured;
              // Ordering: Growth first on mobile (order-1), Starter second (order-2), Scale third (order-3)
              const orderClass =
                plan.id === 'growth'
                  ? 'order-1 lg:order-2'
                  : plan.id === 'starter'
                  ? 'order-2 lg:order-1'
                  : 'order-3 lg:order-3';

              return (
                <div
                  key={plan.id}
                  className={cn(
                    'relative rounded-2xl bg-white p-7 sm:p-9 flex flex-col justify-between transition-all duration-200',
                    orderClass,
                    isPopular
                      ? 'border-2 border-[#2563EB] shadow-xl shadow-[#2563EB]/10 lg:-translate-y-3 z-10 ring-4 ring-[#2563EB]/10'
                      : 'border border-[#E2E8F0] shadow-sm'
                  )}
                >
                  {/* "Most Popular" Floating Badge */}
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="bg-[#2563EB] text-white text-[11px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm select-none">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="mb-5">
                      <h3 className="font-heading text-2xl font-bold text-[#0F1B33]">
                        {plan.name}
                      </h3>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] mt-0.5">
                        {plan.subtitle}
                      </p>
                      <p className="font-body text-xs text-[#64748B] mt-2 leading-relaxed">
                        {plan.tagline}
                      </p>
                    </div>

                    {/* Price & Billing Note */}
                    <div className="mb-6 pb-6 border-b border-[#F1F5F9]">
                      <div className="flex items-baseline gap-1">
                        <span className="font-heading text-4xl sm:text-5xl font-extrabold text-[#2563EB] tracking-tight">
                          {plan.price}
                        </span>
                      </div>
                      <span className="font-body text-xs text-[#64748B] block mt-1">
                        {plan.billingPeriod}
                      </span>
                    </div>

                    {/* Features List with Check Icons */}
                    <div className="space-y-3 mb-8">
                      <p className="text-xs font-bold text-[#0F1B33] uppercase tracking-wider">
                        Included in {plan.name}:
                      </p>
                      <ul className="space-y-3 text-xs font-body text-[#475569]">
                        {plan.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <Button
                      href={plan.ctaHref}
                      variant={isPopular ? 'primary' : 'outline'}
                      size="md"
                      className="w-full justify-center font-bold shadow-xs"
                    >
                      {plan.ctaText}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ================= COMPARE PLANS TABLE ================= */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0F1B33]">
                Compare Plan Features
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#64748B] mt-1">
                Detailed feature matrix across Starter, Growth, and Scale partnerships.
              </p>
            </div>

            {/* Contained Overflow Container (Guarantees zero page-level sideways scroll) */}
            <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-body border-collapse min-w-[560px]">
                  <thead>
                    <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#0F1B33]">
                      <th scope="col" className="py-3.5 px-4 sm:px-6 font-bold w-2/5">
                        Feature / Capability
                      </th>
                      <th scope="col" className="py-3.5 px-4 text-center font-bold w-1/5">
                        Starter
                      </th>
                      <th scope="col" className="py-3.5 px-4 text-center font-bold text-[#2563EB] w-1/5 bg-[#EEF4FF]/50">
                        Growth
                      </th>
                      <th scope="col" className="py-3.5 px-4 text-center font-bold w-1/5">
                        Scale
                      </th>
                    </tr>
                  </thead>
                  {planComparisonFeatures.map((section) => (
                    <tbody key={section.category} className="divide-y divide-[#F1F5F9]">
                      {/* Category Heading Row */}
                      <tr className="bg-[#F8FAFC]/60">
                        <th
                          colSpan={4}
                          scope="colgroup"
                          className="py-2.5 px-4 sm:px-6 font-bold text-[11px] uppercase tracking-wider text-[#64748B]"
                        >
                          {section.category}
                        </th>
                      </tr>
                      {/* Feature Rows */}
                      {section.items.map((item) => (
                        <tr key={item.name} className="hover:bg-[#F8FAFC]/50 transition-colors">
                          <th scope="row" className="py-3 px-4 sm:px-6 font-medium text-[#0F1B33]">
                            {item.name}
                          </th>
                          {/* Starter */}
                          <td className="py-3 px-4 text-center text-[#475569]">
                            {typeof item.starter === 'boolean' ? (
                              item.starter ? (
                                <Check className="w-4 h-4 text-[#2563EB] mx-auto" aria-label="Included" />
                              ) : (
                                <Minus className="w-3.5 h-3.5 text-[#CBD5E1] mx-auto" aria-label="Not included" />
                              )
                            ) : (
                              <span>{item.starter}</span>
                            )}
                          </td>
                          {/* Growth (Highlighted Column) */}
                          <td className="py-3 px-4 text-center text-[#0F1B33] font-semibold bg-[#EEF4FF]/30">
                            {typeof item.growth === 'boolean' ? (
                              item.growth ? (
                                <Check className="w-4 h-4 text-[#2563EB] mx-auto" aria-label="Included" />
                              ) : (
                                <Minus className="w-3.5 h-3.5 text-[#CBD5E1] mx-auto" aria-label="Not included" />
                              )
                            ) : (
                              <span className="text-[#2563EB]">{item.growth}</span>
                            )}
                          </td>
                          {/* Scale */}
                          <td className="py-3 px-4 text-center text-[#475569]">
                            {typeof item.scale === 'boolean' ? (
                              item.scale ? (
                                <Check className="w-4 h-4 text-[#2563EB] mx-auto" aria-label="Included" />
                              ) : (
                                <Minus className="w-3.5 h-3.5 text-[#CBD5E1] mx-auto" aria-label="Not included" />
                              )
                            ) : (
                              <span>{item.scale}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= 4. POST A JOB CLIENT FORM ================= */}
      <Container>
        <PostJobForm />
      </Container>

      {/* ================= 5. FOOTER CTA BAND ================= */}
      <FooterCtaSection />
    </div>
  );
}

import { ShieldCheck, Lock, Award, Star, CheckCircle } from 'lucide-react';
import Container from '@/components/ui/Container';
import PostJobForm from './PostJobForm';

/**
 * Post a Job Section Component.
 * Two-column desktop layout with a sticky left reassurance context column
 * ("What happens next", client testimonial card, and 3 trust points)
 * and the right column containing the accessible PostJobForm card.
 */
export default function PostJobSection() {
  return (
    <section id="post-job" className="scroll-mt-24 py-16 lg:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start max-w-6xl mx-auto">
          {/* ================= LEFT COLUMN: REASSURANCE & PROCESS (Sticky on Desktop) ================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8 text-left">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#EEF4FF] text-[#2563EB] border border-[#BFDBFE]">
                Priority Intake
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F1B33] tracking-tight leading-tight">
                Post an Open Role
              </h2>
              <p className="font-body text-base text-[#475569] leading-relaxed">
                Connect directly with top 3% pre-vetted engineers, architects, and technical leaders. Zero agency middlemen, confirmed compensation bands, and guaranteed 72-hour shortlist turnaround.
              </p>
            </div>

            {/* "What Happens Next" 3-Step Process List */}
            <div className="space-y-4 pt-2 border-t border-[#E2E8F0]">
              <h3 className="font-heading text-base font-bold text-[#0F1B33] uppercase tracking-wider text-xs">
                What happens next:
              </h3>
              <ol className="space-y-3.5 font-body">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#EEF4FF] text-[#2563EB] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-[#BFDBFE]">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F1B33]">We review your role within 2 business hours</h4>
                    <p className="text-xs sm:text-sm text-[#475569] mt-0.5 leading-relaxed">
                      Our engineering leads calibrate your stack requirements against live candidate benchmarks.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#EEF4FF] text-[#2563EB] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-[#BFDBFE]">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F1B33]">You get a calibrated shortlist in 72 hours</h4>
                    <p className="text-xs sm:text-sm text-[#475569] mt-0.5 leading-relaxed">
                      Receive 3–5 pre-interviewed candidate profiles with standardized code evaluation scores.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#EEF4FF] text-[#2563EB] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-[#BFDBFE]">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F1B33]">You interview, we handle scheduling</h4>
                    <p className="text-xs sm:text-sm text-[#475569] mt-0.5 leading-relaxed">
                      Meet your top picks directly. We manage calendar invites and assist with offer closing.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Testimonial Quote Card */}
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] space-y-3 shadow-xs">
              <div className="flex items-center gap-1 text-amber-500" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                ))}
                <span className="text-xs font-bold text-[#0F1B33] ml-1.5">Verified Placement</span>
              </div>
              <p className="font-body text-sm text-[#334155] italic leading-relaxed">
                &ldquo;Surhires delivered 4 senior backend engineers in 6 days. All 4 passed our internal architecture bar on the first try with zero back-and-forth.&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-1">
                <div className="w-9 h-9 rounded-full bg-[#EEF4FF] border border-[#BFDBFE] text-[#2563EB] font-bold text-xs flex items-center justify-center shrink-0">
                  AK
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0F1B33]">Ananya Krishnan</div>
                  <div className="text-[11px] text-[#64748B]">VP of Engineering @ FinFlow</div>
                </div>
              </div>
            </div>

            {/* 3 Trust Points with Icons */}
            <div className="space-y-2.5 pt-2 border-t border-[#E2E8F0] text-xs font-body text-[#475569]">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#2563EB] shrink-0" aria-hidden="true" />
                <span>Zero recruiter spam or unauthorized agency outreach</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Lock className="w-4 h-4 text-[#2563EB] shrink-0" aria-hidden="true" />
                <span>Your hiring plans and salary bands are strictly confidential</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="w-4 h-4 text-[#2563EB] shrink-0" aria-hidden="true" />
                <span>Backed by our 90-day free candidate replacement guarantee</span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE FORM CARD ================= */}
          <div className="lg:col-span-7 w-full">
            <PostJobForm />
          </div>
        </div>
      </Container>
    </section>
  );
}

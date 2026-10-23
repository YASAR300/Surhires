import { Check, X } from 'lucide-react';
import Container from '@/components/ui/Container';
import { planComparisonFeatures } from '@/data/plans';

/**
 * Compare Plans Table Component.
 * Features a sticky first column on mobile, proper caption, th scope="col"/scope="row",
 * 52px+ row heights, 15px text, high-contrast check/X icons, and a highlighted Growth column.
 */
export default function ComparePlans() {
  return (
    <section className="py-16 lg:py-24 bg-[#F6F8FC] border-b border-[#E2E8F0]">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#EEF4FF] text-[#2563EB] border border-[#BFDBFE]">
            Full Capability Matrix
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F1B33] tracking-tight">
            Compare Plan Capabilities Side by Side
          </h2>
          <p className="font-body text-base text-[#475569] leading-relaxed">
            Detailed breakdown of deliverables, technical evaluations, ATS integrations, and recruitment guarantees.
          </p>
        </div>

        {/* Table Container (Same width as pricing grid, isolated horizontal scroll) */}
        <div className="max-w-6xl mx-auto bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm sm:text-[15px] font-body border-collapse min-w-[620px]">
              <caption className="sr-only">
                Detailed capability and deliverable comparison across Surhires Starter, Growth, and Scale tiers
              </caption>

              {/* Table Column Headers */}
              <thead>
                <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#0F1B33] h-14">
                  <th
                    scope="col"
                    className="py-4 px-4 sm:px-6 font-bold w-2/5 sticky left-0 bg-[#F8FAFC] z-20 shadow-[3px_0_6px_-2px_rgba(0,0,0,0.05)] sm:shadow-none"
                  >
                    Deliverable / Feature
                  </th>
                  <th scope="col" className="py-4 px-4 text-center font-bold w-1/5">
                    Starter
                  </th>
                  {/* Growth (Highlighted Column with Most Popular Badge) */}
                  <th
                    scope="col"
                    className="py-4 px-4 text-center font-bold w-1/5 bg-[#EEF4FF]/50 border-x border-[#BFDBFE]"
                  >
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-[#2563EB]">Growth</span>
                      <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#2563EB] text-white">
                        Most Popular
                      </span>
                    </div>
                  </th>
                  <th scope="col" className="py-4 px-4 text-center font-bold w-1/5">
                    Scale
                  </th>
                </tr>
              </thead>

              {/* Table Body Sections */}
              {planComparisonFeatures.map((section) => (
                <tbody key={section.category} className="divide-y divide-[#E2E8F0]">
                  {/* Group Header Row */}
                  <tr className="bg-[#F8FAFC]/80 border-t border-[#E2E8F0]">
                    <th
                      colSpan={4}
                      scope="colgroup"
                      className="py-3 px-4 sm:px-6 font-bold text-xs uppercase tracking-wider text-[#475569]"
                    >
                      {section.category}
                    </th>
                  </tr>

                  {/* Feature Rows (Min 52px tall) */}
                  {section.items.map((item) => (
                    <tr
                      key={item.name}
                      className="hover:bg-[#F8FAFC]/50 transition-colors h-[54px]"
                    >
                      {/* Sticky First Column on Mobile */}
                      <th
                        scope="row"
                        className="py-3.5 px-4 sm:px-6 font-medium text-[#0F1B33] sticky left-0 bg-white z-10 shadow-[3px_0_6px_-2px_rgba(0,0,0,0.05)] sm:shadow-none"
                      >
                        {item.name}
                      </th>

                      {/* Starter Value */}
                      <td className="py-3.5 px-4 text-center text-[#475569]">
                        {typeof item.starter === 'boolean' ? (
                          item.starter ? (
                            <>
                              <Check className="w-5 h-5 text-[#2563EB] mx-auto stroke-[2.5]" aria-hidden="true" />
                              <span className="sr-only">Included in Starter</span>
                            </>
                          ) : (
                            <>
                              <X className="w-4 h-4 text-[#94A3B8] mx-auto" aria-hidden="true" />
                              <span className="sr-only">Not included in Starter</span>
                            </>
                          )
                        ) : (
                          <span className="font-semibold text-[#0F1B33]">{item.starter}</span>
                        )}
                      </td>

                      {/* Growth Value (Highlighted Column) */}
                      <td className="py-3.5 px-4 text-center text-[#0F1B33] font-semibold bg-[#EEF4FF]/35 border-x border-[#BFDBFE]">
                        {typeof item.growth === 'boolean' ? (
                          item.growth ? (
                            <>
                              <Check className="w-5 h-5 text-[#2563EB] mx-auto stroke-[2.5]" aria-hidden="true" />
                              <span className="sr-only">Included in Growth</span>
                            </>
                          ) : (
                            <>
                              <X className="w-4 h-4 text-[#94A3B8] mx-auto" aria-hidden="true" />
                              <span className="sr-only">Not included in Growth</span>
                            </>
                          )
                        ) : (
                          <span className="text-[#2563EB] font-bold">{item.growth}</span>
                        )}
                      </td>

                      {/* Scale Value */}
                      <td className="py-3.5 px-4 text-center text-[#475569]">
                        {typeof item.scale === 'boolean' ? (
                          item.scale ? (
                            <>
                              <Check className="w-5 h-5 text-[#2563EB] mx-auto stroke-[2.5]" aria-hidden="true" />
                              <span className="sr-only">Included in Scale</span>
                            </>
                          ) : (
                            <>
                              <X className="w-4 h-4 text-[#94A3B8] mx-auto" aria-hidden="true" />
                              <span className="sr-only">Not included in Scale</span>
                            </>
                          )
                        ) : (
                          <span className="font-semibold text-[#0F1B33]">{item.scale}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
}

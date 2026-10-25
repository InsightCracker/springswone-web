import { useInView } from '../hooks/useInView.js'

export default function GovernanceSection() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className="bg-[var(--bg)] px-6 py-20">
      <div className="mx-auto grid max-w-[1126px] gap-12 lg:grid-cols-[360px_1fr] lg:gap-16">
        {/* Left column — label, heading, pulled stat */}
        <div
          className={`transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <p className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)]/25 bg-[var(--bg)] px-3 py-1 text-[12px] font-semibold text-[var(--accent)]">
            Our Governance
          </p>
          <h2 className="font-display mt-3 text-[20px] leading-[1.4] text-[var(--text-h)] sm:text-[25px]">
            Built on Responsibility. Guided by Accountability.
          </h2>
        </div>

        {/* Right column */}
        <div
          className={`transition-all delay-150 duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <p className="text-[16px] leading-relaxed text-[var(--text-h)] sm:text-[18px]">
            Springswone Foundation for the Homeless is governed by an Incorporated
            Trustees Board in accordance with its constitution.
          </p>

          <div className="mt-6 space-y-5 border-t border-[var(--border)] pt-6">
            <p className="text-[14px] leading-relaxed text-[var(--text)] sm:text-[15px]">
              Under Article 4 of the Foundation's Constitution, the Board comprises
              between two and fifteen members. The Foundation operates on a
              not-for-profit basis, with its resources dedicated to advancing its
              founding objectives.
            </p>
            <p className="text-[14px] leading-relaxed text-[var(--text)] sm:text-[15px]">
              Donations, sponsorships, grants, and other income received by the
              Foundation are applied towards its charitable purposes in accordance
              with its governing documents and applicable requirements. No portion of
              its income or property is distributed to members as profit, dividend,
              or bonus, subject to applicable law.
            </p>
            <p className="text-[14px] leading-relaxed text-[var(--text)] sm:text-[15px]">
              We recognise that public trust is essential to meaningful social impact.
              We are committed to responsible stewardship of resources, appropriate
              financial oversight, and transparency in the management of the
              Foundation's activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
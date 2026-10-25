import { useInView } from '../hooks/useInView.js'

const PILLARS = [
  {
    number: '01',
    title: 'Advocacy & Awareness',
    description:
      'We bring attention to the realities of homelessness, challenge misconceptions, and create opportunities for the voices and experiences of people affected by homelessness to be heard.',
  },
  {
    number: '02',
    title: 'Skills & Opportunity',
    description:
      'We seek to expand access to skills development, training, and opportunities that can help people experiencing homelessness strengthen their independence and rebuild their lives.',
  },
  {
    number: '03',
    title: 'Community & Reintegration',
    description:
      'We encourage compassionate community engagement and strategic partnerships that support pathways towards stability, social inclusion, and reintegration.',
  },
]

export default function ApproachSection() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className="bg-[var(--bg)] px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-[1126px]">
        <div
          className={`mx-auto max-w-[700px] text-center transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)]/25 bg-[var(--accent-bg)] px-3 py-1 text-[12px] font-semibold text-[var(--accent)]">
            Our Approach
          </span>

          <p className="mt-5 text-[12px] font-bold tracking-[0.14em] text-[var(--accent)]">
            WHAT GUIDES OUR WORK
          </p>

          <h2 className="font-display mt-2 text-[20px] leading-[1.4] text-[var(--text-h)] sm:text-[25px]">
            From Awareness to Opportunity. From Opportunity to Belonging.
          </h2>

          <p className="mt-5 text-[15px] leading-relaxed text-[var(--text)]">
            Our approach is built around three interconnected pillars.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <div
              key={pillar.number}
              className={`pillar-card rounded-sm border border-[var(--border)] bg-[var(--accent-bg)] p-6 transition-all duration-700 ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: inView ? `${150 + i * 120}ms` : '0ms' }}
            >
              <p className="font-display text-[30px] leading-none text-[var(--accent)]/30">
                {pillar.number}
              </p>
              <h3 className="mt-3 text-[16px] font-semibold text-[var(--text-h)]">
                {pillar.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[var(--text)]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pillar-card {
          transition-property: transform, opacity, box-shadow, border-color;
          transition-duration: 700ms, 700ms, 300ms, 300ms;
        }
        .pillar-card:hover {
          border-color: var(--accent);
          box-shadow: 0 16px 36px -18px rgba(0, 0, 0, 0.18);
          transform: translateY(-3px);
        }
        @media (prefers-reduced-motion: reduce) {
          .pillar-card { transition: none !important; transform: none !important; }
        }
      `}</style>
    </section>
  )
}
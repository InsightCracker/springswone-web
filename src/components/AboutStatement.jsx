import { useInView } from '../hooks/useInView.js'

const PARAGRAPHS = [
  'Springswone Foundation for the Homeless is a non-profit, non-political organisation based in Lagos, Nigeria, committed to addressing homelessness and advancing the dignity, well-being, and social inclusion of people experiencing it.',

  'We believe that responding to homelessness requires more than temporary relief. It calls for understanding the circumstances that lead to homelessness, expanding access to opportunities, equipping individuals with relevant skills, and creating pathways towards stability and reintegration.',

  'Through advocacy, community engagement, skills development, and partnerships, we seek to contribute to a society where people experiencing homelessness are treated with dignity, their stories are heard, and their opportunities to rebuild their lives are strengthened.',

  'Our work is guided by a simple conviction: every person deserves dignity, every story deserves to be heard, and everyone deserves the opportunity to belong.',
]

export default function AboutStatement() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className="px-6 pt-16 pb-12">
      <div
        className={`mx-auto max-w-[620px] text-center transition-all duration-700 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)]/25 bg-[var(--accent-bg)] px-3 py-1 text-[12px] font-semibold text-[var(--accent)]">
          Who We Are
        </span>

        <p className="mt-5 text-[12px] font-bold tracking-[0.14em] text-[var(--accent)]">
          OUR IDENTITY
        </p>

        <h2 className="font-styling mt-2 text-[25px] font-semibold leading-[1.2] text-[var(--text-h)] md:text-[32px]">
          A Commitment to Dignity Beyond Shelter.
        </h2>
      </div>

      <div className="mx-auto mt-8 max-w-3xl space-y-5 text-center">
        {PARAGRAPHS.map((p, i) => (
          <p
            key={i}
            className={`text-[15px] leading-relaxed text-[var(--text)] transition-all duration-700 md:text-[18px] ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: inView ? `${150 + i * 120}ms` : '0ms' }}
          >
            {p}
          </p>
        ))}
      </div>
    </section>
  )
}
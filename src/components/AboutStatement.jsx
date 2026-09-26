import { useInView } from '../hooks/useInView.js'

const PARAGRAPHS = [
    'Springswone Foundation for the Homeless is a not-for-profit, non-political organisation committed to providing homeless individuals with the skills and training needed to reintegrate into society, while working to reduce and ultimately eradicate homelessness in Nigeria.',

    'We are governed by an Incorporated Trustees Board of between two and fifteen members. All assets and sources of income, including donations, sponsorships, and grants from government and donor agencies, are applied solely toward these two founding aims, with no portion paid to members as profit, dividend, or bonus.',

    'Our accounts are independently audited each year and filed with the Corporate Affairs Commission, reflecting our commitment to transparency and accountability as we work to provide homeless individuals in Nigeria with the tools and opportunities they need to rebuild their lives.'
]

export default function AboutStatement() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className="px-6 pt-16 pb-12 sm:py-20">
        <div className='flex justify-center aligh-center pb-4'>
            <h2 className="font-styling text-[25px] font-semibold text-[var(--text-h)] md:text-[32px]">Who We Are</h2>
        </div>
        <div
            className={`mx-auto max-w-3xl space-y-5 text-center transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
        >
            {PARAGRAPHS.map((p, i) => (
            <p
                key={i}
                className="text-[15px] leading-relaxed text-[var(--text)] md:text-[18px]"
                style={{ transitionDelay: inView ? `${i * 120}ms` : '0ms' }}
            >
                {p}
            </p>
            ))}
        </div>
    </section>
  )
}
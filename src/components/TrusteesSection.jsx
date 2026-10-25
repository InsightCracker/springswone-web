import { useInView } from '../hooks/useInView.js'

const TRUSTEES = [
  { name: 'Oyinu Francis Otache', role: 'Chairman, Board of Trustees' },
  { name: 'Odangla Joy Eneh', role: 'Secretary, Board of Trustees' },
]

export default function TrusteesSection() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className="bg-[var(--code-bg)] px-6 py-16 sm:py-20">
      <div
        className={`mx-auto max-w-[640px] text-center transition-all duration-700 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)]/25 bg-[var(--bg)] px-3 py-1 text-[12px] font-semibold text-[var(--accent)]">
          Board of Trustees
        </span>

        <p className="mt-5 text-[12px] font-bold tracking-[0.14em] text-[var(--accent)]">
          OUR LEADERSHIP
        </p>

        <h2 className="font-display mt-2 text-[20px] leading-[1.2] text-[var(--text-h)] sm:text-[25px]">
          Stewardship in Service of a Shared Mission.
        </h2>

        <p className="mt-3 text-[15px] leading-relaxed text-[var(--text)]">
          The Foundation is guided by its Board of Trustees, which provides governance
          and oversight in accordance with its constitution.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-md grid-cols-2 gap-4 sm:gap-10">
        {TRUSTEES.map((trustee, i) => (
          <div
            key={trustee.name}
            className={`flex flex-col items-center text-center transition-all duration-500 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{ transitionDelay: inView ? `${i * 120}ms` : '0ms' }}
          >
            <div className="flex h-15 w-15 items-center justify-center rounded-full border-2 border-[var(--accent)] bg-[var(--bg)] text-[22px] font-semibold text-[var(--accent)] sm:h-20 sm:w-20">
              {trustee.name
                .split(' ')
                .map((n) => n[0])
                .slice(0, 2)
                .join('')}
            </div>

            <p className="mt-4 text-[11px] font-semibold tracking-[0.1em] text-[var(--accent)]">
              FOUNDING TRUSTEE
            </p>
            <p className="mt-1 text-[14px] font-semibold text-[var(--text-h)] sm:text-[15px]">
              {trustee.name}
            </p>
            <p className="text-[12px] text-[var(--text)] sm:text-[13px]">{trustee.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
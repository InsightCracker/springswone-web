import { useInView } from '../hooks/useInView.js'

const TRUSTEES = [
  { name: 'Oyinu Francis Otache', role: 'Chairman' },
  { name: 'Odangla Joy Eneh', role: 'Secretary' },
  // Phone numbers appear on the signed Constitution but are left out here —
  // confirm with the named trustees before publishing personal numbers.
  // { name: 'Oyinu Francis Otache', role: 'Chairman', phone: '0906 017 4166' },
  // { name: 'Odangla Joy Eneh', role: 'Secretary', phone: '0805 025 6470' },
]

export default function TrusteesSection() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className="bg-[var(--code-bg)] px-6 py-8 sm:py-20">
      <div
        className={`mx-auto max-w-[700px] text-center transition-all duration-700 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <h2 className="font-styling mt-2 text-[26px] text-[var(--text-h)] sm:text-[32px]">
          Board of Trustees
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-[var(--text)]">
          Per Article 4 of our Constitution, the Foundation is governed by an Incorporated
          Trustees board of between two and fifteen members. Our founding trustees are:
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-md grid-cols-2 gap-4 sm:gap-10">
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
            <p className="mt-4 text-[14px] font-semibold text-[var(--text-h)] sm:text-[15px]">
              {trustee.name}
            </p>
            <p className="text-[12px] text-[var(--text)] sm:text-[13px]">{trustee.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
import { Megaphone, GraduationCap, Home as HomeIcon, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView.js'

const AIMS = [
  {
    icon: Megaphone,
    title: 'Advocacy & Awareness',
    description: 'Challenging misconceptions and bringing the realities of homelessness into public conversation.',
    to: '/about',
  },
  {
    icon: GraduationCap,
    title: 'Skills & Opportunity',
    description: 'Working towards access to skills development and opportunities that can support independence.',
    to: '/our-programs',
  },
  {
    icon: HomeIcon,
    title: 'Community & Reintegration',
    description: 'Building relationships and partnerships that support people experiencing homelessness as they work towards stability and belonging.',
    to: '/our-approach',
  },
]

export default function AimsSection() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className="bg-[var(--bg)] py-20 sm:py-24">
      <div className="mx-auto px-6">
        <div
          className={`mx-auto max-w-[560px] text-center transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <p className="flex items-center justify-center gap-2 text-[12px] font-semibold tracking-[0.14em] text-[var(--accent)]">
            <span className="h-px w-8 bg-[var(--accent)]" />
            OUR AIMS
            <span className="h-px w-8 bg-[var(--accent)]" />
          </p>
          <h2 className="font-display mt-3 text-[28px] leading-[1.15] text-[var(--text-h)] sm:text-[34px]">
            Real support. Lasting change.
          </h2>
          <p className="mt-3 text-[14px] leading-relaxed text-[var(--text)] sm:text-[15px]">
            We take a focused, sustainable approach to tackling homelessness in Nigeria
            through three core commitments:
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AIMS.map((aim, i) => {
            const Icon = aim.icon
            return (
              <div
                key={aim.title}
                className={`aim-card rounded-sm border border-[var(--border)] bg-[var(--accent-bg)] p-6 transition-all duration-700 ${
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
                style={{ transitionDelay: inView ? `${150 + i * 120}ms` : '0ms' }}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent)]">
                  <Icon size={18} className="text-white" />
                </span>
                <h3 className="mt-5 text-[16px] font-semibold text-[var(--text-h)]">{aim.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[var(--text)]">
                  {aim.description}
                </p>
                <Link
                  to={aim.to}
                  className="group mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--accent)]"
                >
                  Learn more
                  <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        .aim-card {
          transition-property: transform, opacity, box-shadow, border-color;
          transition-duration: 700ms, 700ms, 300ms, 300ms;
        }
        .aim-card:hover {
          border-color: var(--accent);
          box-shadow: 0 16px 36px -18px rgba(0, 0, 0, 0.18);
          transform: translateY(-3px);
        }
        @media (prefers-reduced-motion: reduce) {
          .aim-card { transition: none !important; transform: none !important; }
        }
      `}</style>
    </section>
  )
}
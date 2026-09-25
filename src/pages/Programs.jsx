import { useState } from 'react'
import { ChevronDown, GraduationCap, Home as HomeIcon } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'

const PROGRAMS = [
  {
    icon: GraduationCap,
    title: 'Skills & Reintegration',
    description: 'Providing the necessary skills and training to help homeless individuals integrate into society.',
  },
  {
    icon: HomeIcon,
    title: 'Ending Homelessness',
    description: 'Working to reduce, and ultimately eradicate, the problem of homelessness in Nigeria.',
  },
]

export default function Programs() {
  const [openId, setOpenId] = useState(0)

  return (
    <div className="text-left">
      <PageHero title="Our Programs" crumb="Programs" />

      <div className="mx-auto max-w-[700px] px-6 py-16">
        <p className="text-[13px] text-[var(--text)]">
          Our two founding aims, as set out in our Constitution, guide everything we build.
        </p>

        <div className="mt-6">
          {PROGRAMS.map((p, i) => {
            const Icon = p.icon
            return (
              <div key={p.title} className="border-b border-[var(--border)]">
                <button
                  type="button"
                  onClick={() => setOpenId(openId === i ? null : i)}
                  className="flex w-full items-center gap-3 py-5 text-left"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--accent-bg)]">
                    <Icon size={16} className="text-[var(--accent)]" />
                  </span>
                  <span className="flex-1 text-[15px] font-medium text-[var(--text-h)]">{p.title}</span>
                  <ChevronDown
                    size={18}
                    className={`text-[var(--accent)] transition-transform duration-300 ${openId === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <div className={`grid transition-all duration-300 ${openId === i ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden pl-12">
                    <p className="text-[13px] leading-relaxed text-[var(--text)]">{p.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 rounded-xl border border-dashed border-[var(--border)] bg-[var(--code-bg)] px-6 py-8 text-center">
          <p className="text-[13px] text-[var(--text)]">
            Specific programme activities are still being developed. Check back as they launch.
          </p>
        </div>
      </div>
    </div>
  )
}
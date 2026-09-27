import { useState } from 'react'
import { ChevronDown, GraduationCap, Home as HomeIcon } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import ProgramCard from '../components/ProgramCard.jsx'
import { usePrograms } from '../context/ProgramsContext.jsx'

const PROGRAMS = [
  {
    icon: HomeIcon,
    title: 'Ending Homelessness',
    description: 'Working to reduce, and ultimately eradicate, homelessness in Nigeria by addressing the challenges that leave individuals without stable housing and meaningful opportunities. Through practical support, skills development, empowerment, and community-focused initiatives, we strive to help vulnerable individuals regain stability, rebuild their lives, and achieve greater independence',
  },
  {
    icon: GraduationCap,
    title: 'Skills & Reintegration',
    description: 'Providing homeless individuals with practical skills, vocational training, and personal development opportunities that equip them to rebuild their lives, regain independence, and successfully reintegrate into society. Through accessible training and continued support, we aim to create pathways to sustainable livelihoods, greater self-reliance, and a more secure future.',
  },
]

export default function Programs() {
  const [openId, setOpenId] = useState(0)
  const { programs, loading, error } = usePrograms()

  return (
    <div className="text-left">
      <PageHero title="Our Programs" crumb="Empowering lives through practical skills, meaningful support, and opportunities for a brighter and more independent future." />

      <div className="mx-auto max-w-[800px] px-6 py-16">
        <h2 className="font-styling text-center mt-2 text-[26px] text-[var(--text-h)] sm:text-[32px]">
          Our Core Area of Impact
        </h2>
        <p className="mt-3 text-center text-[15px] text-[var(--text)]">
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
                  <span className="flex-1 text-[15px] md:text-[17px] font-medium text-[var(--text-h)]">{p.title}</span>
                  <ChevronDown
                    size={18}
                    className={`text-[var(--accent)] transition-transform duration-300 ${openId === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <div className={`grid transition-all duration-300 ${openId === i ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden pl-12">
                    <p className="text-[14px] md:text-[15px] leading-relaxed text-[var(--text)]">{p.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Real, database-backed programs — appears once any exist */}
      <div className="mx-auto max-w-[1126px] px-6 pt-10 pb-16">
        {error && <p className="text-[13px] text-[var(--danger)]">{error}</p>}
        {!error && loading && <p className="text-[15px] text-[var(--text)]">Loading programs…</p>}

        {!loading && !error && programs.length === 0 && (
          <div className="rounded-xl border border-dashed border-[var(--border)] bg-[var(--code-bg)] px-6 py-8 text-center">
            <p className="text-[15px] text-[var(--text)]">
              Specific programs activities are still being developed. Check back as they launch.
            </p>
          </div>
        )}

        {!loading && programs.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, i) => (
              <ProgramCard key={program.slug} program={program} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
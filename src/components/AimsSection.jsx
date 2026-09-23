import { GraduationCap, Home as HomeIcon } from 'lucide-react'

const AIMS = [
  {
    icon: HomeIcon,
    title: 'Ending Homelessness',
    description: 'Working to reduce, and ultimately eradicate, the problem of homelessness in Nigeria.',
  },
  {
    icon: GraduationCap,
    title: 'Skills & Reintegration',
    description: 'Providing the necessary skills and training to help homeless individuals integrate into society.',
  },
]

export default function AimsSection() {
  return (
    <div className="mx-auto my-10 grid max-w-[800px] gap-5 px-6 sm:grid-cols-2">
      {AIMS.map((aim) => {
        const Icon = aim.icon
        return (
          <div key={aim.title} className="rounded-xl border border-[var(--border)] bg-[var(--accent-bg)] p-5 shadow-sm">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent-bg)]">
              <Icon size={16} className="text-[var(--accent)]" />
            </span>
            <h3 className="mt-3 text-[16px] font-semibold text-[var(--text-h)]">{aim.title}</h3>
            <p className="mt-1 text-[14px] leading-relaxed text-[var(--text)]">{aim.description}</p>
          </div>
        )
      })}
    </div>
  )
}
import { Calendar, Users, MapPin } from 'lucide-react'

const STATS = [
  { icon: Calendar, value: '2024', label: 'Founded' },
  { icon: Users, value: '2–15', label: 'Trustees' },
  { icon: MapPin, value: 'Lagos', label: 'Nigeria' },
]

export default function StatBar() {
  return (
    <div className="mx-auto grid max-w-[700px] grid-cols-3 gap-4 rounded-2xl bg-[var(--brand-purple)] px-6 py-5">
      {STATS.map((s) => {
        const Icon = s.icon
        return (
          <div key={s.label} className="flex flex-col items-center text-center">
            <Icon size={18} className="text-white/80" strokeWidth={1.75} />
            <p className="mt-1.5 text-[20px] font-semibold text-white">{s.value}</p>
            <p className="mt-0.5 text-[11px] text-white/70">{s.label}</p>
          </div>
        )
      })}
    </div>
  )
}
const STATS = [
  { value: '3+', label: 'Years of Impact' },
  { value: '5,000+', label: 'People Reached' },
  { value: '12+', label: 'Communities' },
]

export default function StatBar() {
  return (
    <div className="mx-auto grid max-w-[900px] grid-cols-3 gap-6 rounded-2xl bg-[var(--brand-purple)] px-8 py-8">
      {STATS.map((s) => (
        <div key={s.label} className="text-center">
          <p className="text-[24px] font-semibold text-white">{s.value}</p>
          <p className="mt-1 text-[12px] text-white/70">{s.label}</p>
        </div>
      ))}
    </div>
  )
}
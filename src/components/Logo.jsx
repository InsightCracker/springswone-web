export default function Logo({ variant = 'full', className = '' }) {
  const mark = (
    <img
      src="/Logo.jpeg"
      alt="Springswone Foundation"
      className="h-9 w-9 shrink-0 object-cover"
    />
  )

  if (variant === 'mark') return <div className={className}>{mark}</div>

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {mark}
      <span className="flex flex-col leading-none">
        <span className="text-[16px] font-semibold tracking-tight text-[var(--text-h)]">
          Springswone
        </span>
        <span className="text-[10px] font-semibold tracking-[0.1em] text-[var(--text)]">
          FOUNDATION
        </span>
      </span>
    </div>
  )
}
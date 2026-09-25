export default function PageHero({ title, crumb, image = 6647178 }) {
  const imgUrl = `https://images.pexels.com/photos/${image}/pexels-photo-${image}.jpeg?auto=compress&cs=tinysrgb&w=1600`

  return (
    <section className="relative flex h-[220px] items-center justify-start overflow-hidden px-6 text-left sm:h-[240px] sm:justify-center sm:px-0 sm:text-center">
      <img src={imgUrl} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[var(--hero-overlay)]/80" />
      <div className="relative">
        <h1 className="font-display text-[28px] text-white sm:text-[38px]">{title}</h1>
        <p className="mt-3 text-[15px] font-medium text-white/70">
          {crumb}
        </p>
      </div>
    </section>
  )
}
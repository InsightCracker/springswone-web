import { Link } from 'react-router-dom'

export default function AboutPreview() {
  return (
    <div className="mx-auto my-20 grid max-w-[1126px] items-center gap-10 px-6 sm:grid-cols-2">
      <img
        src="/Img/hydrate-hope-banner.jpg"
        alt="Greenway Pathways"
        className="h-[260px] w-full rounded-sm object-cover"
      />
      <div>
        <p className="text-[13px] font-semibold tracking-wide text-[var(--accent)]">
          UNDERSTANDING HOMELESSNESS &nbsp;•&nbsp; ADVANCING HUMAN DIGNITY 
        </p>
        <h2 className="font-display mt-3 text-[24px] leading-[1.2] text-[var(--text-h)] sm:text-[28px]">
          About Springswone Foundation
        </h2>
        <p className="mt-3 text-[14px] leading-relaxed text-[var(--text)] sm:text-[15px]">
          Discover who we are, what we stand for, and how we are working towards a future where every individual has the opportunity to live with dignity, rebuild their life, and find a place to belong.
        </p>
        <Link
          to="/about"
          className="mt-5 inline-block rounded-full bg-[var(--accent)] px-6 py-2.5 text-[13px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}
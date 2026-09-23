import { Link } from 'react-router-dom'

export default function AboutPreview() {
  return (
    <div className="mx-auto my-20 grid max-w-[1126px] items-center gap-10 px-6 sm:grid-cols-2">
      <img
        src="https://images.pexels.com/photos/6647178/pexels-photo-6647178.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
        className="h-[260px] w-full rounded-sm object-cover"
      />
      <div>
        <h2 className="font-display text-[24px] text-[var(--text-h)] sm:text-[28px]">
          About Springswone Foundation
        </h2>
        <p className="mt-3 text-[14px] leading-relaxed text-[var(--text)] sm:text-[15px]">
          Springswone Foundation for the Homeless is a not-for-profit, non-political organisation based in Lagos, Nigeria, committed to equipping homeless individuals with the skills, resources, and support they need to rebuild their lives and reintegrate into society while working to reduce homelessness across Nigeria.
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
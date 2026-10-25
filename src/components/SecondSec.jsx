import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView.js'
import Logo from './Logo.jsx'

export default function MissionSection() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className="relative isolate overflow-hidden px-5 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto grid items-center gap-12 px-6 sm:grid-cols-2 sm:gap-6 sm:px-0">
        <div
          className={`relative order-2 h-[320px] transition-all duration-700 sm:order-1 sm:h-[480px] ${
            inView ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'
          }`}
        >
          <div className="mission-img-wrap absolute inset-y-0 right-[-24px] left-0 sm:left-[calc(50vw-600px)] sm:right-0">
            <img
              src="/Img/umbrella-team-portrait.jpg"
              alt=""
              className="mission-img h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[var(--bg)] to-transparent" />
            <div className="mission-blob pointer-events-none absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-[var(--accent)] opacity-25 blur-3xl" />
          </div>

          {/* Logo badge, sitting right where the image meets the text */}
          <div className="absolute bottom-6 right-2 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent)] shadow-[0_8px_24px_-6px_rgba(124,92,252,0.55)] ring-4 ring-[var(--bg)] sm:right-[-28px]">
            <Logo variant="mark"  />
          </div>
        </div>

        {/* Text side */}
        <div
          className={`order-1 px-0 transition-all delay-150 duration-700 sm:order-2 sm:px-6 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <p className="text-[13px] font-semibold tracking-wide text-[var(--accent)]">
            BEYOND TEMPORARY RELIEF
            <span className="h-px w-8 bg-[var(--accent)]" />
          </p>
          <h2 className="font-display mt-3 text-[28px] leading-[1.15] text-[var(--text-h)] sm:text-[34px]">
            Homelessness is a human story, not just a social statistic.
          </h2>
          <p className="mt-4 text-[14px] leading-relaxed text-[var(--text)] sm:text-[15px]">
            Behind every experience of homelessness is a person whose story deserves to be
            heard, whose dignity deserves protection, and whose future deserves a chance.
          </p>
          <p className="mt-3 text-[14px] leading-relaxed text-[var(--text)] sm:text-[15px]">
            We work to bring these stories into the conversation and advance practical,
            compassionate responses to homelessness.
          </p>
          <Link
            to="/about"
            className="group mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--accent)]"
          >
            Our Mission
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <style>{`
        .mission-img-wrap {
          clip-path: polygon(0 0, 92% 0, 100% 100%, 0% 100%);
        }
        .mission-img {
          transition: transform 8s ease-out;
          transform: scale(1.08);
        }
        section:hover .mission-img {
          transform: scale(1);
        }
        .mission-blob {
          animation: mission-float 9s ease-in-out infinite;
        }
        @keyframes mission-float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(4%, -5%) scale(1.1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .mission-img, .mission-blob { animation: none !important; transition: none !important; transform: none !important; }
        }
      `}</style>
    </section>
  )
}
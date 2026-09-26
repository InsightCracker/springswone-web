import { Link } from 'react-router-dom'
import { HandCoins, Users, Heart } from 'lucide-react'
import { useInView } from '../hooks/useInView.js'

export default function CallToAction() {
  const [ref, inView] = useInView()

  return (
    <section className="px-6 py-16 sm:py-20">
      <div
        ref={ref}
        className={`relative mx-auto max-w-[900px] overflow-hidden rounded-3xl bg-[var(--brand-purple)] px-8 py-14 transition-all duration-700 sm:px-14 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        {/* Contained decorative blobs — clipped to the box via overflow-hidden above */}
        <div className="cta-blob pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-[var(--secondary)] opacity-20 blur-2xl" aria-hidden="true" />
        <div className="cta-blob cta-blob-delay pointer-events-none absolute -right-6 bottom-0 h-48 w-48 rounded-full bg-white opacity-[0.07] blur-2xl" aria-hidden="true" />

        <div className="relative flex flex-col items-center text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
            <Heart size={22} className="text-[var(--secondary)]" fill="currentColor" />
          </span>

          <h2 className="font-display mt-6 text-[26px] leading-[1.3] text-white sm:text-[32px]">
            Help someone rebuild their life today
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/75">
            Every gift and every hour volunteered helps a homeless individual in Nigeria take
            a real step toward reintegration and a place to belong.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/donate"
              className="donate-btn group inline-flex items-center justify-center gap-2.5 rounded-full bg-[var(--accent)] px-7 py-3 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent-hover)]"
            >
              <HandCoins size={17} className="transition-transform duration-300 group-hover:rotate-[-8deg]" />
              Support Our Work
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/30 px-7 py-3 text-[14px] font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[var(--brand-purple)]"
            >
              <Users size={17} className="transition-transform duration-300 group-hover:scale-110" />
              Get Involved
            </Link>
          </div>
        </div>

        <style>{`
          .cta-blob {
            animation: cta-float 8s ease-in-out infinite;
          }
          .cta-blob-delay {
            animation-duration: 10s;
            animation-delay: -3s;
          }
          @keyframes cta-float {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(3%, -4%) scale(1.08); }
          }

          .donate-btn {
            box-shadow: 0 8px 24px -8px rgba(0,0,0,0.35);
          }

          @media (prefers-reduced-motion: reduce) {
            .cta-blob { animation: none !important; }
          }
        `}</style>
      </div>
    </section>
  )
}
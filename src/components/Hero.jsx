import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-5 py-16 sm:px-6 sm:py-20">
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-[var(--secondary)] opacity-20 blur-2xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-[var(--accent)] opacity-15 blur-2xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-[1126px] items-center gap-12 sm:grid-cols-2">
        {/* Text side */}
        <div>
          <p className="text-[13px] font-semibold tracking-wide text-[var(--accent)]">
            HOPE &nbsp;•&nbsp; OPPORTUNITY &nbsp;•&nbsp; LASTING CHANGE
          </p>
          <h1 className="font-display mt-3 text-[36px] leading-[1.1] text-[var(--text-h)] sm:text-[44px]">
            Restoring Dignity, Rebuilding Lives
          </h1>
          <p className="mt-4 max-w-md text-[15px] text-[var(--text)]">
            Springswone Foundation for the Homeless provides skills, training, and support to empower homeless individuals in Nigeria to rebuild their lives and reintegrate into society, working toward a Nigeria where everyone has a place to belong.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/donate"
              className="rounded-full bg-[var(--accent)] px-6 py-2.5 text-center text-[14px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              Support Our Work
            </Link>
            <Link
              to="/about"
              className="rounded-full border border-[var(--text-h)] px-6 py-2.5 text-center text-[14px] font-semibold text-[var(--text-h)] transition-colors duration-300 hover:bg-[var(--text-h)] hover:text-[var(--accent)]"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Photo composition side */}
        <div className="relative mx-auto h-[300px] w-full max-w-[380px] sm:h-[340px]">
          <img
            src="https://images.pexels.com/photos/36467878/pexels-photo-36467878.jpeg?auto=compress&cs=tinysrgb&w=500"
            alt=""
            className="absolute right-0 top-6 h-[260px] w-[220px] rotate-3 rounded-2xl object-cover shadow-lg sm:h-[300px] sm:w-[240px]"
          />
          <img
            src="https://images.pexels.com/photos/38226076/pexels-photo-38226076.jpeg?auto=compress&cs=tinysrgb&w=500"
            alt=""
            className="absolute left-0 bottom-0 h-[220px] w-[200px] -rotate-2 rounded-2xl object-cover shadow-xl sm:h-[250px] sm:w-[220px]"
          />
          <p className="script-note absolute -left-2 top-2 -rotate-6 text-[22px] text-[var(--accent)]">
            Better <br /> Together ♡
          </p>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap');
        .script-note { font-family: 'Caveat', cursive; }
      `}</style>
    </section>
  )
}
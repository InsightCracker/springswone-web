const AREAS = [
  {
    title: "Skills & training",
    copy: "Vocational courses and apprenticeships that give people a trade to stand on, not just a handout.",
    icon: (
      <path d="M4 7.5 12 4l8 3.5-8 3.5-8-3.5Zm0 5 8 3.5 8-3.5M4 12.5v5.2c0 .5.3.9.8 1.1L12 21l7.2-2.2c.5-.2.8-.6.8-1.1v-5.2" />
    ),
  },
  {
    title: "Healthcare access",
    copy: "Mobile clinics and referral partnerships that catch problems early, before they become crises.",
    icon: (
      <path d="M12 20.3 4.6 13c-2-2-2-5.2 0-7.1 2-1.9 5-1.7 6.8.3l.6.7.6-.7c1.8-2 4.8-2.2 6.8-.3 2 1.9 2 5.1 0 7.1L12 20.3Z" />
    ),
  },
  {
    title: "Sustainable livelihoods",
    copy: "Grants and mentorship for small trades, so growth outlasts the length of any one program.",
    icon: (
      <path d="M12 21V9m0 0c-4.5 0-7-2.5-7-7 4.5 0 7 2.5 7 7Zm0 0c4.5 0 7-2.5 7-7-4.5 0-7 2.5-7 7Z" />
    ),
  },
];

export default function FocusAreas() {
  return (
    <section id="programs" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="max-w-lg">
        <h2 className="font-display text-3xl font-semibold text-text-primary sm:text-4xl">
          Three ways we work
        </h2>
        <p className="mt-3 text-text-secondary">
          Every program traces back to one of these — training, health, or a livelihood that
          holds up on its own.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {AREAS.map((area) => (
          <div
            key={area.title}
            className="group rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-primary/50"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                {area.icon}
              </svg>
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold text-text-primary">
              {area.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">{area.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const HEADLINE = ["Every Homeless Person Deserves To Be Seen"];

const EYEBROW_WORDS = ["Hope", "Opportunity", "Lasting Change"];

const PROGRAMS = [
  {
    title: "Quality Education",
    description: "Supporting access to quality education for every child.",
    icon: (
      <path
        d="M12 3 2 8l10 5 8-4.09V17h2V8L12 3Zm-6 9.18V16c0 2.21 3.13 4 6 4s6-1.79 6-4v-2.82l-6 3.06-6-3.06Z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "Healthcare Access",
    description: "Improving health outcomes in underserved communities.",
    icon: (
      <path
        d="M12 21s-7.2-4.35-9.9-9.03C.5 8.9 1.6 5.5 4.8 4.5c2-.63 3.9.1 5.2 1.8 1.3-1.7 3.2-2.43 5.2-1.8 3.2 1 4.3 4.4 2.7 7.47C19.2 16.65 12 21 12 21Z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "Sustainable Livelihoods",
    description: "Creating opportunities for long-term growth.",
    icon: (
      <path
        d="M12 2c-4.5 3-7 7.1-7 11a7 7 0 0 0 14 0c0-3.9-2.5-8-7-11Zm0 16a5 5 0 0 1-5-5c0-.36.03-.72.08-1.08C8.3 13.5 10 14.7 12 15c2-.3 3.7-1.5 4.92-3.08.05.36.08.72.08 1.08a5 5 0 0 1-5 5Z"
        fill="currentColor"
      />
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:pb-24 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="animate-fade-in flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary [animation-fill-mode:both]">
              {EYEBROW_WORDS.map((word, i) => (
                <span key={word} className="flex items-center gap-2 text-var(--color-primary-hover)">
                  {i > 0 && <span className="h-1 w-1 rounded-full bg-primary/50" />}
                  {word}
                </span>
              ))}
            </p>

            <h1 className="mt-4 max-w-xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-primary sm:text-5xl lg:text-[3.25rem]">
              {HEADLINE.map((word, i) => (
                <span key={word} className="mr-3 inline-block overflow-hidden align-bottom">
                  <span
                    className="inline-block animate-word-up [animation-fill-mode:both]"
                    style={{ animationDelay: `${i * 90}ms` }}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </h1>

            <p className="animate-fade-in mt-6 max-w-md text-base leading-relaxed text-text-secondary [animation-delay:650ms] [animation-fill-mode:both] sm:text-lg">
              We work with underserved communities to provide access to education,
              healthcare, and sustainable opportunities for a better tomorrow.
            </p>

            <div className="animate-fade-in mt-8 flex flex-wrap items-center gap-4 [animation-delay:800ms] [animation-fill-mode:both]">
              <a
                href="#donate"
                className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg"
              >
                Support Our Work
              </a>
              <a
                href="#about"
                className="rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-text-primary transition-colors hover:border-primary hover:text-primary"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm py-6 lg:max-w-none lg:justify-self-center">
            {/* organic blob shape sitting behind the photo, purely decorative */}
            <div
              aria-hidden="true"
              className="animate-float pointer-events-none absolute -left-8 -top-8 h-[85%] w-[85%] rounded-[58%_42%_38%_62%/60%_35%_65%_40%] bg-accent/15 dark:bg-accent/10"
            />

            <div className="animate-reveal-wipe relative overflow-hidden rounded-2xl border border-border bg-surface shadow-xl shadow-primary/10 [animation-delay:250ms]">
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=80"
                alt="A Springswone Foundation community outreach session"
                className="h-72 w-full object-cover sm:h-80"
              />
            </div>

            <p className="animate-pop-in relative mt-3 pl-2 text-right font-script text-2xl leading-none text-accent [animation-delay:950ms] [animation-fill-mode:both]">
              Better Together ♡
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-3 lg:mt-20">
          {PROGRAMS.map(({ title, description, icon }, i) => (
            <div
              key={title}
              className="animate-fade-in group rounded-2xl border border-border bg-surface p-6 transition-all [animation-fill-mode:both] hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${1100 + i * 120}ms` }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5">
                  {icon}
                </svg>
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-text-primary">
                {title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[1.75rem] border border-border">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80"
            alt="Volunteers and community members meeting outdoors"
            className="h-96 w-full object-cover"
          />
        </div>

        <div>
          <h2 className="font-display text-3xl font-semibold text-text-primary sm:text-4xl">
            Built by the people who needed it first
          </h2>
          <p className="mt-4 text-text-secondary">
            Springswone Foundation is a registered, not-for-profit trust. We started with a
            simple aim: give people the skills to stand on their own, and work to bring
            homelessness in Nigeria down year over year.
          </p>

          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
              <div>
                <h3 className="font-semibold text-text-primary">Our mission</h3>
                <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                  Provide the skills, training, and support people need to integrate back
                  into stable, independent living.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
              <div>
                <h3 className="font-semibold text-text-primary">Our vision</h3>
                <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                  A Nigeria where homelessness is rare, brief, and never repeated — because
                  the support to prevent it is already in place.
                </p>
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            Learn more about our work
          </a>
        </div>
      </div>
    </section>
  );
}

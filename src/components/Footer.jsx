import LogoMark from "./LogoMark";

const COLUMNS = [
  {
    title: "Organization",
    links: ["About us", "Our programs", "Annual reports", "Careers"],
  },
  {
    title: "Get involved",
    links: ["Donate", "Volunteer", "Partner with us", "Fundraise"],
  },
  {
    title: "Contact",
    links: ["2 Oludemunren Street, Off Benson Estate, Lagos", "hello@springswone.org"],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-8 w-8" />
              <span className="font-display text-lg font-semibold text-text-primary">
                Springswone
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
              Empowering people. Building healthier communities. Creating lasting change,
              one skill at a time.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-text-primary">{column.title}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-text-secondary transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-text-secondary">
            © {new Date().getFullYear()} Springswone Foundation for the Homeless. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4 text-text-secondary">
            {["LinkedIn", "Facebook", "Instagram", "YouTube"].map((label) => (
              <a
                key={label}
                href="#top"
                aria-label={label}
                className="text-xs font-medium transition-colors hover:text-primary"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

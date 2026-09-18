import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import LogoMark from "./LogoMark";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Projects", href: "#projects" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      id="top"
      className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md"
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <LogoMark className="h-8 w-8 shrink-0" />
          <span className="font-display leading-none text-text-primary">
            <span className="block text-lg font-semibold">Springswone</span>
            <span className="block text-[0.65rem] font-sans font-medium tracking-wide text-text-secondary">
              Foundation
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative text-sm font-medium text-text-secondary transition-colors hover:text-primary"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="#donate"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-primary/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-md hover:shadow-primary/40"
          >
            Donate
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-primary transition-colors hover:border-primary"
          >
            <Menu
              className={`absolute h-5 w-5 transition-all duration-300 ${
                open ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
              }`}
            />
            <X
              className={`absolute h-5 w-5 transition-all duration-300 ${
                open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-border/70 transition-[max-height] duration-300 ease-in-out md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-surface hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#donate"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-white"
          >
            Donate
          </a>
        </nav>
      </div>
    </header>
  );
}
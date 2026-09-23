import { NavLink } from 'react-router-dom'
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../hooks/useTheme.js'
import Logo from './Logo.jsx'

const QUICK_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

const SOCIALS = [
  { Icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
  { Icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
  { Icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { Icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
]

export default function Footer() {
  const { theme, toggleTheme } = useTheme()

  return (
    <footer className="relative overflow-hidden bg-[var(--brand-purple)] px-6 py-14">
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white opacity-[0.06]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-white opacity-[0.05]" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-[1126px] flex-col items-center text-center">
        <Logo />
        <p className="mt-4 max-w-md text-[13px] leading-relaxed text-white/70">
          Providing skills, training, and support to help homeless individuals in Nigeria
          reintegrate into society.
        </p>

        <nav className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {QUICK_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className="footer-link text-[13px] text-white/80">
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-6 flex items-center gap-4">
          {SOCIALS.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="social-icon flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>

        {/* Theme toggle — mobile only, since the desktop nav already has one */}
        <button
          type="button"
          onClick={toggleTheme}
          className="mt-6 flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[13px] font-medium text-white/80 transition-colors hover:bg-white/10 sm:hidden"
        >
          {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          {theme === 'dark' ? 'Light mode' : 'Dark mode'}
        </button>

        <p className="mt-8 text-[12px] text-white/50">
          © {new Date().getFullYear()} Springswone Foundation. All rights reserved.
        </p>
      </div>

      <style>{`
        .social-icon {
          transition: border-color 0.25s ease, color 0.25s ease, transform 0.25s ease;
        }
        .social-icon:hover {
          border-color: var(--accent);
          color: white;
          transform: translateY(-2px);
        }
        .footer-link {
          position: relative;
          transition: color 0.25s ease;
        }
        .footer-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          height: 1px;
          width: 100%;
          background: white;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        .footer-link:hover { color: white; }
        .footer-link:hover::after { transform: scaleX(1); }
      `}</style>
    </footer>
  )
}
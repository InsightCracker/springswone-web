import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../hooks/useTheme.js'
import Logo from './Logo.jsx'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Programs', to: '/programs' },
  { label: 'Featured Projects', to: '/projects' },
  { label: 'News', to: '/news' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `nav-link relative text-[14px] font-medium transition-colors ${
      isActive ? 'text-[var(--accent)] is-active' : 'text-[var(--text)] hover:text-[var(--text-h)]'
    }`

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-md shadow-sm'
          : 'border-b border-transparent bg-[var(--bg)]'
      }`}
    >
      <nav className={`mx-auto flex w-full items-center justify-between px-6 transition-all duration-300 ${scrolled ? 'py-3' : 'py-4'}`}>
        <NavLink to="/" className="transition-transform duration-300 hover:scale-[1.03]">
          <Logo />
        </NavLink>

        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass} end={link.to === '/'}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="theme-toggle relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full text-[var(--text)] hover:bg-[var(--code-bg)]"
          >
            <Sun size={16} className={`absolute transition-all duration-300 ${theme === 'dark' ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'}`} />
            <Moon size={16} className={`absolute transition-all duration-300 ${theme === 'dark' ? '-rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
          </button>
          <NavLink
            to="/donate"
            className="rounded-full bg-[var(--accent)] px-5 py-2 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent-hover)]"
          >
            Donate
          </NavLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="relative h-9 w-9 text-[var(--text-h)] md:hidden"
        >
          <X size={20} className={`absolute inset-0 m-auto transition-all duration-300 ${open ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'}`} />
          <Menu size={20} className={`absolute inset-0 m-auto transition-all duration-300 ${open ? '-rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-[var(--border)] transition-all duration-300 ease-out md:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 border-t-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 py-5">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.to}
              className={`transition-all duration-300 ${open ? 'translate-x-0 opacity-100' : '-translate-x-3 opacity-0'}`}
              style={{ transitionDelay: open ? `${i * 60}ms` : '0ms' }}
            >
              <NavLink to={link.to} className={linkClass} onClick={() => setOpen(false)} end={link.to === '/'}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="px-6 pb-5 flex items-center justify-between">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="theme-toggle relative flex h-10.5 w-20 items-center justify-center overflow-hidden rounded-sm bg-[var(--accent)] text-white"
          >
            <Sun size={16} className={`absolute transition-all duration-300 ${theme === 'dark' ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'}`} />
            <Moon size={16} className={`absolute transition-all duration-300 ${theme === 'dark' ? '-rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
          </button>

          <NavLink
            to="/donate"
            onClick={() => setOpen(false)}
            className="block w-[70%] rounded-sm bg-[var(--accent)] px-5 py-2.5 text-center text-[14px] font-semibold text-white"
          >
            Donate
          </NavLink>
        </div>
      </div>

      <style>{`
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          height: 2px;
          width: 100%;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-link:hover::after,
        .nav-link.is-active::after {
          transform: scaleX(1);
        }
      `}</style>
    </header>
  )
}
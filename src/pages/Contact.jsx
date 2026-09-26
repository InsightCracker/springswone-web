import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import { MapPin, Send } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import { useInView } from '../hooks/useInView.js'
import { submitContactForm } from '../services/contactService.js'

const FIELDS = [
  { name: 'name', placeholder: 'Your name', required: true, type: 'text' },
  { name: 'email', placeholder: 'Email address', required: true, type: 'email' },
  { name: 'phone', placeholder: 'Phone number', required: false, type: 'text' },
  { name: 'subject', placeholder: 'Subject', required: false, type: 'text' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [formRef, formInView] = useInView()

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await submitContactForm(form)
      setStatus('sent')
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="text-left">
      <PageHero title="Contact Us" crumb="Have questions, ideas, or want to support our work? Get in touch." />

      <div className="mx-auto max-w-[1000px] px-6 py-16 sm:py-20">
        <div ref={formRef} className="grid gap-12 sm:grid-cols-[0.9fr_1.1fr]">
          {/* Left: intro + address + socials */}
          <div
            className={`transition-all duration-700 ${
              formInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <p className="text-[14px] font-semibold tracking-wide text-[var(--accent)]">
              GET IN TOUCH
            </p>
            <h2 className="font-styling mt-2 text-[28px] leading-[1.1] text-[var(--text-h)] sm:text-[34px]">
              We'd love to hear from you
            </h2>
            <p className="mt-4 text-[14px] md:text-[15px] leading-relaxed text-[var(--text)]">
              Whether it's a question, a partnership idea, or you'd like to get involved,
              reach out and our team will respond as soon as we can.
            </p>

            <div className="mt-6 flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--accent-bg)]">
                <MapPin size={16} className="text-[var(--accent)]" />
              </span>
              <p className="text-[14px] leading-relaxed text-[var(--text)]">
                2, Oludemunren Street, off Benson Estate,
                <br />
                Lagos, Lagos State, Nigeria
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
                { Icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
                { Icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
                { Icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="social-icon flex h-10 w-10 items-center justify-center rounded-full bg-[var(--code-bg)] text-[var(--text-h)]"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit}
            className={`relative space-y-4 transition-all delay-150 duration-700 ${
              formInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--accent)] opacity-10 blur-2xl" aria-hidden="true" />

            <div className="relative grid gap-4 sm:grid-cols-2">
              {FIELDS.map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="form-input w-full rounded-lg border border-[var(--border)] bg-[var(--code-bg)] px-4 py-3 text-[14px] md:text-[15px] text-[var(--text-h)] outline-none placeholder:text-[var(--text)]"
                />
              ))}
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message"
              rows={5}
              required
              className="form-input relative w-full rounded-lg border border-[var(--border)] bg-[var(--code-bg)] px-4 py-3 text-[14px] md:text-[15px] text-[var(--text-h)] outline-none placeholder:text-[var(--text)]"
            />

            <button
              type="submit"
              disabled={status === 'sending'}
              className="relative flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
              {status !== 'sending' && <Send size={15} />}
            </button>

            {status === 'sent' && (
              <p className="relative text-[14px] font-medium text-[var(--success)]">
                Message sent — thank you. We'll be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p className="relative text-[14px] text-[var(--danger)]">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>

      <style>{`
        .social-icon {
          transition: background-color 0.25s ease, color 0.25s ease, transform 0.25s ease;
        }
        .social-icon:hover {
          background: var(--accent);
          color: white;
          transform: translateY(-2px);
        }
        .form-input {
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .form-input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px var(--accent-bg);
        }
      `}</style>
    </div>
  )
}
import { useState } from 'react'
import { Check, Copy, GraduationCap, Home as HomeIcon, HeartHandshake } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { useInView } from '../hooks/useInView.js'

const WHY_GIVE = [
    'Springswone Foundation for the Homeless is a CAC/CAMA-registered non-profit organisation committed to supporting individuals experiencing homelessness and creating pathways toward reintegration and a more stable future. We develop practical programs and initiatives that address the challenges of homelessness, provide skills and training, and support individuals in rebuilding their lives.',

    'Our founding Constitution provides a clear framework for our work, with objectives focused on equipping homeless individuals with relevant skills and training to reintegrate into society, as well as working to reduce and ultimately eradicate homelessness in Nigeria.',

    'Your support helps us translate these commitments into practical programs, outreach initiatives, training opportunities, and community support that can improve lives and create meaningful pathways out of homelessness.'
]

const WHAT_IT_FUNDS = [
    {
        icon: HomeIcon,
        title: 'Homelessness Reduction',
        description: 'Programs and outreach initiatives focused on reducing and ultimately eradicating homelessness in Nigeria.',
    },
    {
        icon: GraduationCap,
        title: 'Skills & Training',
        description: 'Practical training and support to help homeless individuals build the skills needed to reintegrate into society.',
    },
    {
        icon: HeartHandshake,
        title: 'Foundation Operations',
        description: 'The essential groundwork, including trustees, audits, and administration, needed to operate responsibly and transparently.',
    },
]

function CopyableRow({ label, value }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="flex items-center justify-between border-b border-[var(--border)] py-3 last:border-0">
      <div>
        <p className="text-[11px] uppercase tracking-wide text-[var(--text)]">{label}</p>
        <p className="text-[15px] font-medium text-[var(--text-h)]">{value}</p>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`Copy ${label}`}
        className="rounded-lg p-2 text-[var(--text)] transition-colors hover:bg-[var(--code-bg)] hover:text-[var(--accent)]"
      >
        {copied ? <Check size={16} className="text-[var(--accent)]" /> : <Copy size={16} />}
      </button>
    </div>
  )
}

export default function Donate() {
  const [whyRef, whyInView] = useInView()
  const [fundsRef, fundsInView] = useInView()
  const [bankRef, bankInView] = useInView()

  return (
    <div className="text-left">
      <PageHero title="Donate" crumb="Your support can help create lasting change." />

      {/* Why give */}
      <section ref={whyRef} className="px-6 py-16 sm:py-20">
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            whyInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <p className="text-[14px] font-semibold tracking-wide text-[var(--accent)]">WHY GIVE</p>
          <h2 className="font-display mt-2 text-[26px] text-[var(--text-h)] sm:text-[32px]">
            Your gift helps rebuild a life
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-2xl text-justify space-y-5">
          {WHY_GIVE.map((point, i) => (
            <p
              key={i}
              className={`text-[15px] md:text-[17px] leading-relaxed text-[var(--text)] transition-all duration-500 ${
                whyInView ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
              style={{ transitionDelay: whyInView ? `${i * 120}ms` : '0ms' }}
            >
              {point}
            </p>
          ))}
        </div>
      </section>

      {/* What it funds */}
      <section ref={fundsRef} className="bg-[var(--code-bg)] px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-[1000px]">
          <div
            className={`mx-auto max-w-xl text-center transition-all duration-700 ${
              fundsInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <p className="text-[14px] font-semibold tracking-wide text-[var(--accent)]">
              WHAT YOUR SUPPORT FUNDS
            </p>
            <h2 className="font-display mt-2 text-[26px] text-[var(--text-h)] sm:text-[32px]">
              Where your donation goes
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {WHAT_IT_FUNDS.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className={`flex flex-col items-center rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-6 py-9 text-center transition-all duration-500 ${
                    fundsInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                  style={{ transitionDelay: fundsInView ? `${i * 120}ms` : '0ms' }}
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent-bg)]">
                    <Icon size={22} className="text-[var(--accent)]" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 text-[16px] font-semibold text-[var(--text-h)]">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[var(--text)]">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bank details */}
      <section ref={bankRef} className="px-6 py-16 sm:py-20">
        <div
          className={`mx-auto max-w-md transition-all duration-700 ${
            bankInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <div className="text-center">
            <p className="text-[14px] font-semibold tracking-wide text-[var(--accent)]">
              BANK DETAILS
            </p>
            <h2 className="font-display mt-2 text-[26px] text-[var(--text-h)] sm:text-[30px]">
              Give via Bank Transfer
            </h2>
          </div>

          <div className="mt-8 rounded-2xl border border-dashed border-[var(--border)] bg-[var(--code-bg)] px-6 py-8 text-center">
            <p className="text-[15px] font-medium text-[var(--text-h)]">
              Bank details to be added
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-[var(--text)]">
              We're finalising our organisational bank account. In the meantime, reach out
              directly and we'll share the right details for your gift.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-block rounded-full bg-[var(--accent)] px-6 py-2.5 text-[13px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              Contact us to donate
            </Link>
          </div>

          {/*
            Once you have real account details, replace the block above with:

            <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--code-bg)] px-6 py-5">
              <CopyableRow label="Bank Name" value="..." />
              <CopyableRow label="Account Name" value="Springswone Foundation for the Homeless" />
              <CopyableRow label="Account Number" value="..." />
            </div>
          */}
        </div>
      </section>
    </div>
  )
}
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useInView } from '../hooks/useInView.js'

export default function ProgramCard({ program, index }) {
  const [ref, inView] = useInView()

  return (
    <Link
      ref={ref}
      to={`/programs/${program.slug}`}
      className={`program-card group block overflow-hidden rounded-sm border border-[var(--border)] bg-[var(--code-bg)] text-left transition-all duration-500 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <div className="h-40 overflow-hidden">
        <img
          src={program.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-[16px] font-semibold text-[var(--text-h)]">{program.title}</h3>
        <p className="mt-2 text-[13px] leading-relaxed text-[var(--text)]">{program.summary}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-[var(--accent)]">
            Read more <ArrowRight size={13} />
        </span>
      </div>

      <style>{`
        .program-link { transition: transform 0.25s ease; }
        .program-card:hover .program-link { transform: translateX(4px); }
      `}</style>
    </Link>
  )
}
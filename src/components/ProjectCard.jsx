import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView.js'
import { ArrowRight } from 'lucide-react'

export default function ProjectCard({ project, index }) {
  const [ref, inView] = useInView()

  return (
    <Link
      ref={ref}
      to={`/projects/${project.slug}`}
      className={`project-card group block overflow-hidden rounded-sm border border-[var(--border)] bg-[var(--code-bg)] text-left transition-all duration-500 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <div className="h-44 overflow-hidden">
        <img
          src={project.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <span className="inline-block rounded-full bg-[var(--accent-bg)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--accent)]">
          {project.status}
        </span>
        <h3 className="mt-3 text-[16px] font-semibold text-[var(--text-h)]">{project.title}</h3>
        <p className="mt-2 text-[13px] leading-relaxed text-[var(--text)]">{project.summary}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-[var(--accent)]">
            Read more <ArrowRight size={13} />
        </span>
      </div>

      <style>{`
        .project-link { transition: transform 0.25s ease; }
        .project-card:hover .project-link { transform: translateX(4px); }
      `}</style>
    </Link>
  )
}
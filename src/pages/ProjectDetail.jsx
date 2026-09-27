import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useFeaturedProjects } from '../context/FeaturedProjectsContext.jsx'

export default function ProjectDetail() {
  const { slug } = useParams()
  const { featuredProjects, loading, error } = useFeaturedProjects()

  if (loading) return <p className="px-6 py-16 text-[13px] text-[var(--text)]">Loading…</p>
  if (error) return <p className="px-6 py-16 text-[13px] text-[var(--danger)]">{error}</p>

  const project = featuredProjects.find((p) => p.slug === slug)
  if (!project) return <Navigate to="/projects" replace />

  return (
    <article className="text-left">
      <div className="relative h-[280px] overflow-hidden sm:h-[360px]">
        <img src={project.image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[var(--hero-overlay)]/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <span className="mb-3 inline-block rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
            {project.status}
          </span>
          <p className="font-subhead pt-4 text-[28px] leading-[1.1] text-white sm:text-[42px]">
            {project.title}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-6 py-14">
        <Link to="/projects" className="back-link mb-3 inline-flex items-center gap-2 text-[15px] font-medium text-[var(--text)] transition-colors hover:text-[var(--accent)]">
          <ArrowLeft size={15} />
          All projects
        </Link>
        <div className="my-4 h-px bg-[var(--border)]" />
        <p className="text-justify text-[17px] leading-[1.8] text-[var(--text-h)]">{project.body}</p>

        <style>{`
          .back-link svg { transition: transform 0.25s ease; }
          .back-link:hover svg { transform: translateX(-3px); }
        `}</style>
      </div>
    </article>
  )
}
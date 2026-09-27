import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useFeaturedProjects } from '../context/FeaturedProjectsContext.jsx'
import ProjectCard from './ProjectCard.jsx'
import { useInView } from '../hooks/useInView.js'

export default function ProjectsPreview() {
  const { featuredProjects, loading, error } = useFeaturedProjects()
  const [ref, inView] = useInView()

  if (!loading && !error && featuredProjects.length === 0) return null

  return (
    <section ref={ref} className="bg-[var(--code-bg)] px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-[1126px]">
        <div>
            <h2 className="font-styling mt-2 text-[24px] text-center text-[var(--text-h)] sm:text-[30px]">
              What we're building
            </h2>
          </div>

        {loading && <p className="mt-8 text-[15px] text-center text-[var(--text)]">Loading…</p>}
        {error && <p className="mt-8 text-[15px] text-center text-[var(--danger)]">{error}</p>}

        {!loading && featuredProjects.length > 0 && (
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {featuredProjects.slice(0, 3).map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        )}

        <Link to="/projects" className="group mt-6 flex items-center justify-center gap-1.5 text-[13px] font-semibold text-[var(--accent)]">
          View all
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
import PageHero from '../components/PageHero.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { useFeaturedProjects } from '../context/FeaturedProjectsContext.jsx'

export default function Projects() {
  const { featuredProjects, loading, error } = useFeaturedProjects()

  return (
    <div className="text-left">
      <PageHero title="Our Projects" crumb="Projects" />

      <div className="mx-auto max-w-[1126px] px-6 py-16 sm:py-20">
        <p className="text-[13px] font-semibold tracking-wide text-[var(--accent)]">PROJECTS</p>
        <h2 className="font-display mt-2 text-[26px] text-[var(--text-h)] sm:text-[32px]">
          What we're building
        </h2>

        {error && <p className="mt-6 text-[13px] text-[var(--danger)]">{error}</p>}
        {!error && loading && <p className="mt-10 text-[13px] text-[var(--text)]">Loading…</p>}
        {!loading && !error && featuredProjects.length === 0 && (
          <p className="mt-10 text-[13px] text-[var(--text)]">
            No projects published yet — as a newly registered Foundation, we're building our
            first ones now.
          </p>
        )}

        {!loading && featuredProjects.length > 0 && (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
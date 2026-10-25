import { useMemo, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { useFeaturedProjects } from '../context/FeaturedProjectsContext.jsx'

const FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'in-development', label: 'In Development' },
  { value: 'completed', label: 'Completed' },
]

// Tolerates "In Development", "in_development", "in-development", etc.
const normalise = (s) => String(s || '').toLowerCase().trim().replace(/[\s_]+/g, '-')

export default function Projects() {
  const { featuredProjects, loading, error } = useFeaturedProjects()
  const [filter, setFilter] = useState('all')

  const counts = useMemo(() => {
    const c = { all: featuredProjects.length, active: 0, 'in-development': 0, completed: 0 }
    featuredProjects.forEach((p) => {
      const s = normalise(p.status)
      if (s in c) c[s] += 1
    })
    return c
  }, [featuredProjects])

  const visible = useMemo(
    () =>
      filter === 'all'
        ? featuredProjects
        : featuredProjects.filter((p) => normalise(p.status) === filter),
    [featuredProjects, filter]
  )

  const activeLabel = FILTERS.find((f) => f.value === filter)?.label

  return (
    <div className="text-left">
      <PageHero
        title="Our Impact"
        crumb="Discover the projects and initiatives creating opportunities, restoring hope, and empowering lives toward a brighter future."
      />

      <div className="mx-auto max-w-[1126px] px-6 py-16 sm:py-20">
        <div className="text-center">
          <p className="text-[12px] font-semibold tracking-[0.14em] text-[var(--accent)]">
            OUR PROJECTS
          </p>
          <h2 className="font-styling mt-2 text-[26px] text-[var(--text-h)] sm:text-[32px]">
            What we're building
          </h2>
        </div>

        {/* Filters — pill buttons on sm+, dropdown on mobile */}
        {!error && !loading && featuredProjects.length > 0 && (
          <div className="mt-8 flex justify-center">
            <div className="hidden flex-wrap justify-center gap-2 sm:flex" role="tablist" aria-label="Filter projects by status">
              {FILTERS.map((f) => {
                const selected = filter === f.value
                return (
                  <button
                    key={f.value}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setFilter(f.value)}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors ${
                      selected
                        ? 'border-[var(--accent)] bg-[var(--accent)] text-white'
                        : 'border-[var(--border)] bg-[var(--bg)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--text-h)]'
                    }`}
                  >
                    {f.label}
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[11px] leading-none ${
                        selected ? 'bg-white/20 text-white' : 'bg-[var(--accent-bg)] text-[var(--accent)]'
                      }`}
                    >
                      {counts[f.value]}
                    </span>
                  </button>
                )
              })}
            </div>

            <div className="relative w-full max-w-[280px] sm:hidden">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                aria-label="Filter projects by status"
                className="w-full appearance-none rounded-full border border-[var(--border)] bg-[var(--bg)] py-2.5 pl-4 pr-10 text-[14px] font-semibold text-[var(--text-h)] outline-none focus:border-[var(--accent)]"
              >
                {FILTERS.map((f) => (
                  <option key={f.value} value={f.value}>
                    {f.label} ({counts[f.value]})
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--accent)]"
              />
            </div>
          </div>
        )}

        {error && <p className="mt-6 text-[13px] text-[var(--danger)]">{error}</p>}
        {!error && loading && <p className="mt-10 text-center text-[15px] text-[var(--text)]">Loading…</p>}

        {!loading && !error && featuredProjects.length === 0 && (
          <p className="mt-10 text-center text-[15px] text-[var(--text)]">
            No projects published yet — check back soon.
          </p>
        )}

        {!loading && !error && featuredProjects.length > 0 && visible.length === 0 && (
          <div className="mt-10 rounded-xl border border-dashed border-[var(--border)] bg-[var(--code-bg)] px-6 py-8 text-center">
            <p className="text-[15px] text-[var(--text)]">
              No {activeLabel?.toLowerCase()} projects right now.
            </p>
            <button
              type="button"
              onClick={() => setFilter('all')}
              className="mt-2 text-[13px] font-semibold text-[var(--accent)]"
            >
              View all projects
            </button>
          </div>
        )}

        {!loading && visible.length > 0 && (
          <div key={filter} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
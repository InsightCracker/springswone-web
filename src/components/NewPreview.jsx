import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useNews } from '../context/NewsContext.jsx'
import NewsCard from './NewsCard.jsx'
import { useInView } from '../hooks/useInView.js'

export default function NewsPreview() {
  const { news, loading, error } = useNews()
  const [ref, inView] = useInView()

  if (!loading && !error && news.length === 0) return null

  return (
    <section ref={ref} className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-[1126px]">
        <div>
            <h2 className="font-styling mt-2 text-[24px] text-center text-[var(--text-h)] sm:text-[30px]">
              Latest news
            </h2>
          </div>

        {loading && <p className="mt-8 text-[15px] text-center text-[var(--text)]">Loading…</p>}
        {error && <p className="mt-8 text-[15px] text-center text-[var(--danger)]">{error}</p>}

        {!loading && news.length > 0 && (
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {news.slice(0, 3).map((post, i) => (
              <NewsCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        )}

        <Link to="/news" className="group mt-6 flex items-center justify-center gap-1.5 text-[13px] font-semibold text-[var(--accent)]">
          View all
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
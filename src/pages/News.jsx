import PageHero from '../components/PageHero.jsx'
import NewsCard from '../components/NewsCard.jsx'
import { useNews } from '../context/NewsContext.jsx'

export default function News() {
  const { news, loading, error } = useNews()

  return (
    <div className="text-left">
      <PageHero title="News" crumb="News" />

      <div className="mx-auto max-w-[1126px] px-6 py-16 sm:py-20">
        <p className="text-[13px] font-semibold tracking-wide text-[var(--accent)]">UPDATES</p>
        <h2 className="font-display mt-2 text-[26px] text-[var(--text-h)] sm:text-[32px]">
          Latest from Springswone
        </h2>

        {error && <p className="mt-6 text-[13px] text-[var(--danger)]">{error}</p>}
        {!error && loading && <p className="mt-10 text-[13px] text-[var(--text)]">Loading…</p>}
        {!loading && !error && news.length === 0 && (
          <p className="mt-10 text-[13px] text-[var(--text)]">
            No news posted yet — check back soon.
          </p>
        )}

        {!loading && news.length > 0 && (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((post, i) => (
              <NewsCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
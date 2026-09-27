import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useNews } from '../context/NewsContext.jsx'

export default function NewsArticle() {
  const { slug } = useParams()
  const { news, loading, error } = useNews()

  if (loading) return <p className="px-6 py-16 text-[13px] text-[var(--text)]">Loading…</p>
  if (error) return <p className="px-6 py-16 text-[13px] text-[var(--danger)]">{error}</p>

  const post = news.find((p) => p.slug === slug)
  if (!post) return <Navigate to="/news" replace />

  return (
    <article className="text-left">
      <div className="relative h-[280px] overflow-hidden sm:h-[360px]">
        <img src={post.image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[var(--hero-overlay)]/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="text-[12px] font-semibold tracking-wide text-[var(--secondary)]">
            {post.categories.join(', ').toUpperCase()}
          </p>
          <h1 className="font-display mt-2 max-w-2xl text-[28px] text-white sm:text-[38px]">
            {post.title}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-6 py-14">
        <Link to="/news" className="back-link mb-3 inline-flex items-center gap-2 text-[15px] font-medium text-[var(--text)] transition-colors hover:text-[var(--accent)]">
          <ArrowLeft size={15} />
          All news
        </Link>
        <p className="text-[13px] text-[var(--text)]">
          {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
        <div className="my-4 h-px bg-[var(--border)]" />
        <p className="text-justify text-[17px] leading-[1.8] text-[var(--text-h)]">{post.body}</p>

        <style>{`
          .back-link svg { transition: transform 0.25s ease; }
          .back-link:hover svg { transform: translateX(-3px); }
        `}</style>
      </div>
    </article>
  )
}
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView.js'
import { ArrowRight } from 'lucide-react'

export default function NewsCard({ post, index }) {
  const [ref, inView] = useInView()

  return (
    <Link
      ref={ref}
      to={`/news/${post.slug}`}
      className={`news-card group block overflow-hidden rounded-sm border border-[var(--border)] bg-[var(--code-bg)] text-left transition-all duration-500 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <div className="h-44 overflow-hidden">
        <img
          src={post.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <p className="text-[11px] font-medium text-[var(--text)] md:text-[12px]">
          {post.categories.map((cat, i) => (
            <span key={cat}>
              <span className="font-semibold text-[var(--accent)]">{cat}</span>
              {i < post.categories.length - 1 && ', '}
            </span>
          ))}
          <span className="mx-2">·</span>
          {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
        </p>
        <h3 className="news-title mt-2 text-[16px] font-semibold leading-snug text-[var(--text-h)]">
          {post.title}
        </h3>
        <p className="mt-2 text-[13px] leading-relaxed text-[var(--text)]">{post.excerpt}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-[var(--accent)]">
            Read more <ArrowRight size={13} />
        </span>
      </div>
    </Link>
  )
}
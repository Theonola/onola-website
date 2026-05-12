import { useParams, Link } from 'react-router-dom'
import { blogs } from '../data/data'

const DownloadIcon = () => (
  <svg
    width='14'
    height='14'
    viewBox='0 0 14 14'
    fill='none'
    aria-hidden='true'
  >
    <path
      d='M7 2v7M4 6l3 3 3-3M2 11h10'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const ArrowLeftIcon = () => (
  <svg
    width='13'
    height='13'
    viewBox='0 0 14 14'
    fill='none'
    aria-hidden='true'
  >
    <path
      d='M12 7H2M6 11l-4-4 4-4'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const post = blogs.find((b) => String(b.id) === id)

  /* ── 404 state ── */
  if (!post) {
    return (
      <section className='min-h-screen bg-white flex items-center justify-center px-6'>
        <div className='text-center max-w-sm'>
          <div className='w-12 h-[3px] bg-[var(--primary-yellow)] mx-auto mb-6' />
          <h1 className='text-2xl font-bold text-black mb-4 tracking-tight'>
            Insight Not Found
          </h1>
          <p className='text-gray-500 text-sm leading-relaxed mb-8'>
            This article may have been moved or removed. Return to our insights
            hub to explore more.
          </p>
          <Link
            to='/insights'
            className='inline-flex items-center gap-2 bg-[var(--primary-yellow)] text-black px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity duration-300'
          >
            <ArrowLeftIcon />
            All Insights
          </Link>
        </div>
      </section>
    )
  }

  /* ── derive a clean filename from the article path ── */
  const fileName = post.article.split('/').pop() ?? 'article.pdf'

  const handleDownload = () => {
    const a = document.createElement('a')
    a.href = post.article
    a.download = fileName
    a.target = '_blank'
    a.rel = 'noopener noreferrer'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <article className='bg-white min-h-screen'>
      {/* ── Header ── */}
      <header className='border-b border-gray-100'>
        <div className='max-w-5xl mx-auto px-6 md:px-12 lg:px-16 pt-16 pb-12'>
          {/* Back link */}
          <Link
            to='/insights'
            className='inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors duration-200 mb-10'
          >
            <ArrowLeftIcon />
            All Insights
          </Link>

          {/* Eyebrow */}
          <div className='flex items-center gap-3 mb-4'>
            <span className='w-6 h-[2px] bg-[var(--primary-yellow)]' />
            <p className='uppercase text-[11px] tracking-[0.22em] font-medium text-gray-400'>
              Insight
            </p>
          </div>

          {/* Title */}
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight tracking-tight max-w-3xl mb-5'>
            {post.name}
          </h1>

          {/* Yellow rule + date */}
          <div className='flex items-center gap-6 mt-5'>
            <div className='w-12 h-[3px] bg-[var(--primary-yellow)]' />
            {post.date && (
              <span className='uppercase text-[11px] tracking-widest text-gray-400 font-medium'>
                {post.date}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* ── Body ── */}
      <div className='max-w-5xl mx-auto px-6 md:px-12 lg:px-16 py-14 space-y-14'>
        {/* 1 — Featured Image */}
        <section>
          <div className='w-full overflow-hidden aspect-[16/9] bg-gray-50'>
            <img
              src={post.image}
              alt={post.name}
              className='w-full h-full object-cover object-center'
            />
          </div>
        </section>

        {/* 2 — Introduction */}
        <section>
          <div className='flex items-center gap-3 mb-6'>
            <span className='w-6 h-[2px] bg-[var(--primary-yellow)]' />
            <p className='uppercase text-[11px] tracking-[0.22em] font-medium text-gray-400'>
              Introduction
            </p>
          </div>

          <p className='text-gray-600 text-[16px] md:text-[17px] leading-[1.85] max-w-2xl'>
            {post.description}
          </p>
        </section>

        {/* 3 — Download */}
        <section className='border-t border-gray-100 pt-12'>
          <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-6'>
            <div>
              <div className='flex items-center gap-3 mb-3'>
                <span className='w-6 h-[2px] bg-[var(--primary-yellow)]' />
                <p className='uppercase text-[11px] tracking-[0.22em] font-medium text-gray-400'>
                  Full Document
                </p>
              </div>
              <p className='text-gray-500 text-sm leading-relaxed max-w-md'>
                Access the complete article including all findings, data
                sources, and detailed recommendations.
              </p>
            </div>

            <button
              onClick={handleDownload}
              className='inline-flex items-center gap-3 bg-[var(--primary-yellow)] text-black px-8 py-4 text-[11px] font-bold uppercase tracking-widest hover:opacity-90 active:scale-[0.98] transition-all duration-200 shrink-0'
            >
              <DownloadIcon />
              Download Article (PDF)
            </button>
          </div>
        </section>

        {/* 4 — Back CTA */}
        <section className='border-t border-gray-100 pt-10 pb-6'>
          <Link
            to='/insights'
            className='inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-black hover:text-[var(--primary-yellow)] transition-colors duration-200'
          >
            <ArrowLeftIcon />
            Back to All Insights
          </Link>
        </section>
      </div>
    </article>
  )
}

export default BlogDetailPage

import { Link } from 'react-router-dom'

const BlogCard = ({
  id,
  image,
  description,
  name,
  author,
  date,
  category,
}: {
  id: number | string
  image: string
  description: string
  name: string
  author?: string
  date?: string
  category?: string
}) => {
  return (
    <Link
      to={`/insight/${id}`}
      className='group flex flex-col w-full cursor-pointer transition-all duration-300 shadow-sm hover:shadow-lg  overflow-hidden bg-white'
    >
      {/* Image — no padding */}
      <div className='w-full overflow-hidden mb-4'>
        <img
          src={image}
          alt={name}
          className='w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105'
        />
      </div>

      {/* Text content — padded independently */}
      <div className='px-4 py-3 flex flex-col gap-2'>
        {/* Meta — category + date */}
        <div className='flex items-center gap-2'>
          {category && (
            <span className='text-[10px] font-bold uppercase tracking-widest text-[var(--primary-yellow)]'>
              {category}
            </span>
          )}
          {category && date && (
            <span className='text-gray-300 text-[10px]'>|</span>
          )}
          {date && (
            <span className='text-[10px] uppercase tracking-widest text-gray-400'>
              {date}
            </span>
          )}
        </div>

        {/* Author */}
        {author && (
          <p className='text-[11px] uppercase tracking-widest text-gray-400'>
            {author}
          </p>
        )}

        {/* Title */}
        <h4 className='text-base font-semibold text-black leading-snug group-hover:text-[var(--primary-yellow)] transition-colors duration-300'>
          {name}
        </h4>

        {/* Description */}
        <p className='text-sm text-gray-500 leading-relaxed line-clamp-3'>
          {description}
        </p>

        {/* CTA */}
        <div className='pt-2 flex items-center gap-2'>
          <span className='text-[11px] font-bold uppercase tracking-widest text-black group-hover:text-[var(--primary-yellow)] transition-colors duration-300'>
            Read More
          </span>
          <svg
            className='w-3 h-3 text-black group-hover:text-[var(--primary-yellow)] transition-all duration-300 group-hover:translate-x-1'
            viewBox='0 0 14 14'
            fill='none'
          >
            <path
              d='M2 7h10M8 3l4 4-4 4'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard

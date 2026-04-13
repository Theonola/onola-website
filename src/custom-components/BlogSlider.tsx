import BlogCard from '../custom-components/Blog'
import { blogs } from '../data/data'

export const BlogSlider = () => {
  return (
    <div className='flex flex-col container mx-auto '>
      <div className='flex flex-col items-center justify-between'>
        <div className='flex items-center gap-3 mb-2'>
          <span className='w-6 h-[2px] bg-[var(--primary-yellow)]' />
          <p className='uppercase text-[11px] tracking-[0.22em] text-gray-400 font-medium'>
            Insights
          </p>
        </div>
        <h2 className='text-2xl font-bold text-black'>
          <span className='relative inline-block'>
            Explore our latest insights
            <span className='absolute left-0 -bottom-2 w-full h-[3px] bg-[var(--primary-yellow)]' />
          </span>
        </h2>
      </div>
      <div className='flex mt-4'>
        <div className='flex gap-4 py-2 md:py-6 mx-auto justify-center'>
          {
            blogs
              .map((blog, index) => (
                <BlogCard
                  key={index}
                  id={blog.id}
                  image={blog.image}
                  description={blog.description}
                  name={blog.name}
                />
              ))
              .slice(0, 4) /* Show only the first 5 blogs for the slider */
          }
        </div>
      </div>
    </div>
  )
}

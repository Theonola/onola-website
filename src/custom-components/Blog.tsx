// import Image from 'next/image'

import { Link } from "react-router-dom"

// import user from '../../public/assets/image-1.jpg'
const BlogCard = ({
  id,
  image,
  description,
  name,
  variant
}: {
  id: number | string
  image: string
  description: string
  name: string
  variant: string
}) => {
  return (
    <Link to={`/insight/${id}`} className='flex w-full max-w-[300px] h-[380px] flex-col  hover:scale-102  cursor-pointer shadow-lg hover:shadow-3xl rounded-md transform transition-all duration-300 ease-in-out '>
      <div className={`${variant ==='container'? 'w-full':"w-[250px]" }  flex flex-col`}>
        <img src={image} alt='blog image' className='rounded-t-md mb-4 w-full object-cover' />
      </div>
      <article className='flex w-full flex-col gap-2 p-4'>
        <h4 className='capitalize font-bold text-[#4b5563]'>{name}</h4>
        <p className='text-sm text-[#6b7280] tracking-wide'>{description}</p>
        <p className='text-sm text-[#6b7280] tracking-wide font-bold'>Read More...</p>
      </article>
    </Link>
  )
}
export default BlogCard

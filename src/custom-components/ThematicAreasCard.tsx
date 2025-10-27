import type { IconType } from 'react-icons'

const ThematicAreas = ({
  service,
  description,
img,
  
  
}: {
  service: string
  description: string
  img: string
  color?: string
  background?: string 
}) => {
  {
   
  }
  return (
    <div className='flex  flex-col   w-full    hover:scale-105 transition-all duration-300 ease-in-out '>
      <div className='flex flex-col relative w-full md:w-[300px] h-full'>
        {/* <div className='flex flex-col  rounded-full  mx-auto items-center h-12 w-12 justify-center' style={{ background: "var(--primary-yellow)" }}>
          <Icon
            className={`text-2xl text-[#fff]`}
            style={{ color: color }}
          />
        </div> */}
        <img src={img} alt=""  className='w-full  object-contain object-center'/>
        <article className=' bg-white w-full absolute -bottom-4 left-0 md:-bottom-15 md:left-10 right-0 px-4 py-2 md:w-[300px] h-[120px]'>
        <h4 className='  mt-4 font-bold text-[var(--primary-yellow)]'>
          {service} 
        </h4>
        <p className=' mt-0 tracking-wide  text-sm text-[#6b7280]'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi sapiente dolores fuga, id repellendus 
        </p>
        </article>
      </div>
    </div>
  )
}
export default ThematicAreas 

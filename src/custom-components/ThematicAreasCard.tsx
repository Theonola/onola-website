import type { IconType } from 'react-icons'

const ThematicAreas = ({
  service,
  description,
  icon: Icon,
  color,
  background,
}: {
  service: string
  description: string
  icon: IconType
  color?: string
  background?: string
}) => {
  {
    console.log(color)
  }
  return (
    <div className='flex bg-[#fff]  shadow-[0_-6px_24px_0_rgba(0,0,0,0.12)] hover:shadow-2xl flex-col p-4  w-full  md:w-[280px] h-[300px] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg'>
      <div className='flex flex-col'>
        <div className='flex flex-col  rounded-full  mx-auto items-center h-12 w-12 justify-center' style={{ background: "var(--primary-yellow)" }}>
          <Icon
            className={`text-2xl text-[#fff]`}
            style={{ color: color }}
          />
        </div>
        <h4 className='text-center  mt-4 font-bold text-[#4b5563]'>
          {service}
        </h4>
        <p className=' mt-0 tracking-wide text-center text-sm text-[#6b7280]'>
          {description}
        </p>
      </div>
    </div>
  )
}
export default ThematicAreas 

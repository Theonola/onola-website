import { hero, thematicAreas } from "@/data/data"
import ThematicArea from "@/custom-components/ThematicAreasCard"


const ThematicAreasContainer = () => {
  return (
    <div className='flex flex-col mx-4 bg-[var(--gray-light)] px-4 py-12 rounded-lg  pb-36'>
      <div className="flex justify-center items-center ">
        <h1 className="capitalize">our thematic area</h1>
      </div>
      <div className='grid grid-cols-1 gap-y-10   md:grid-cols-2 lg:grid-cols-3 justify-center items-center md:gap-y-32 mt-4 mx-auto gap-x-16'>
{
        hero.map((area) => (
          <ThematicArea
             key={area.title}
            service={area.title}
            description={area.description}
            // icon={area.icon}
            img={area.img}
            color={area.color}
           
          />
        ))  
}
      </div>
    </div>
  )
}

export default ThematicAreasContainer
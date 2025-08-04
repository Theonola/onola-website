import { thematicAreas } from "@/data/data"
import ThematicArea from "@/custom-components/ThematicAreasCard"

const ThematicAreasContainer = () => {
  return (
    <div className='flex flex-col mx-40'>
      <div className="flex justify-center items-center ">
        <h1 className="capitalize">our thematic area</h1>
      </div>
      <div className='grid md:grid-cols-3 justify-center items-center gap-y-12 mt-4'>
{
        thematicAreas.map((area) => (
          <ThematicArea
            key={area.name}
            service={area.name}
            description={area.description}
            icon={area.icon}
          />
        ))  
}
      </div>
    </div>
  )
}

export default ThematicAreasContainer
// ThematicAreasContainer.tsx
import { thematicAreas } from '@/data/data'
import ThematicAreas from '@/custom-components/ThematicAreasCard'

const ThematicAreasContainer = () => {
  return (
    <section className='bg-black py-24'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div className='flex items-center justify-center gap-3 mb-4'>
            <span className='w-6 h-[2px] bg-[var(--primary-yellow)]' />
            <p className='uppercase text-[11px] tracking-[0.22em] text-gray-400 font-medium'>
              Our Work
            </p>
            <span className='w-6 h-[2px] bg-[var(--primary-yellow)]' />
          </div>

          <h2 className='text-3xl md:text-4xl font-bold text-white tracking-tight'>
            Thematic Focus Areas
          </h2>

          <div className='w-12 h-[3px] bg-[var(--primary-yellow)] mx-auto mt-4' />

          <p className='text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed text-[15px]'>
            Onola focuses on high-impact reforms that strengthen public
            institutions, accelerate economic transformation, and improve
            service delivery systems.
          </p>
        </div>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {thematicAreas.map((area) => (
            <ThematicAreas
              key={area.name}
              service={area.name}
              description={area.description}
              Icon={area.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ThematicAreasContainer

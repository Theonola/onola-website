import type { IconType } from 'react-icons'

const ThematicAreas = ({
  service,
  description,
  Icon,
}: {
  service: string
  description: string
  Icon?: IconType
}) => {
  return (
    <div className='bg-white border border-gray-100 rounded-lg p-6 flex flex-col h-full'>
      {/* Icon */}
      {Icon && (
        <div className='w-12 h-12 mb-4 text-[var(--primary-yellow)]'>
          <Icon className='w-full h-full' />
        </div>
      )}

      {/* Title */}
      <h3 className='text-xl font-semibold text-black mb-2'>{service}</h3>

      {/* Yellow accent line */}
      <div className='w-10 h-1 bg-[var(--primary-yellow)] mb-4' />

      {/* Description */}
      <p className='text-gray-700 text-sm flex-grow leading-relaxed mb-4'>
        {description}
      </p>

      {/* CTA */}
      <div className='mt-auto flex items-center gap-2'>
        <span className='text-sm font-medium text-black'>Explore Area</span>
        <svg className='w-3 h-3 text-black' viewBox='0 0 14 14' fill='none'>
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
  )
}

export default ThematicAreas

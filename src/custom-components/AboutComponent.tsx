import image from '../assets/health.jpg'
import { Link } from 'react-router-dom'

const AboutComponent = () => {
  return (
    <section className='bg-white'>
      <div className='flex flex-col md:flex-row w-full min-h-[460px]'>
        {/* IMAGE — left half, controlled height */}
        <div className='w-full md:w-1/2 h-[300px] md:h-auto max-h-[460px] overflow-hidden'>
          <img
            src={image}
            alt='About Onola'
            className='w-full h-full object-cover object-center'
          />
        </div>

        {/* TEXT — right half */}
        <div className='w-full md:w-1/2 flex items-center px-10 py-16 md:px-16 lg:px-24 bg-white'>
          <div className='max-w-lg'>
            {/* Eyebrow */}
            <div className='flex items-center gap-3 mb-5'>
              <span className='w-6 h-[2px] bg-[var(--primary-yellow)]' />
              <p className='uppercase text-[11px] tracking-[0.22em] font-medium text-gray-400'>
                Who We Are
              </p>
            </div>

            {/* Title */}
            <h2 className='text-3xl md:text-4xl font-bold text-black leading-tight tracking-tight mb-5'>
              Built for Reform. <br /> Driven by Evidence.
            </h2>

            {/* Yellow rule */}
            <div className='w-12 h-[3px] bg-[var(--primary-yellow)] mb-6' />

            {/* Body — single paragraph */}
            <p className='text-gray-500 text-[15px] leading-relaxed mb-10'>
              Onola is an independent policy and reform institute working
              alongside governments and public institutions to design and
              implement practical reforms that strengthen systems, accelerate
              transformation, and deliver measurable impact.
            </p>

            {/* CTA */}
            <Link
              to='/about'
              className='inline-flex items-center gap-2 bg-[var(--primary-yellow)] text-black px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity duration-300'
            >
              About Us
              <svg width='13' height='13' viewBox='0 0 14 14' fill='none'>
                <path
                  d='M2 7h10M8 3l4 4-4 4'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutComponent

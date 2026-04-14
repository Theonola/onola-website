import { useEffect, useState } from 'react'
import heroImg from '../assets/health.jpg'

const AboutHero = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className='bg-[#f7f6f2] pt-32 pb-28'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Breadcrumb */}
        <div
          className={`flex items-center gap-3 mb-16 transition-opacity duration-700 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className='text-[10px] uppercase tracking-[0.22em] text-gray-400'>
            Home
          </span>
          <span className='w-4 h-[1px] bg-gray-300' />
          <span className='text-[10px] uppercase tracking-[0.22em] text-[var(--primary-yellow)]'>
            About Us
          </span>
        </div>

        <div className='grid md:grid-cols-2 gap-20 items-start'>
          {/* LEFT CONTENT */}
          <div>
            {/* Eyebrow */}
            <div
              className={`flex items-center gap-3 mb-8 transition-all duration-700 delay-100 ${
                visible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              <span className='w-6 h-[2px] bg-[var(--primary-yellow)]' />
              <p className='uppercase text-[11px] tracking-[0.22em] text-gray-400'>
                Who We Are
              </p>
            </div>

            {/* Headline */}
            <div
              className={`transition-all duration-700 delay-200 ${
                visible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.1] tracking-[-0.02em]'>
                Effective reform
                <br />
                doesn’t happen by chance.
              </h1>

              <h2 className='text-2xl md:text-3xl font-medium text-gray-600 mt-4'>
                It is designed, tested, and delivered.
              </h2>
            </div>

            {/* Description */}
            <p
              className={`mt-8 text-gray-500 max-w-md leading-relaxed text-[15px] transition-all duration-700 delay-300 ${
                visible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              Onola is an independent policy institute working at the
              intersection of government and implementation — helping translate
              ideas into systems that function, scale, and endure.
            </p>

            {/* CTAs */}
            <div
              className={`mt-12 flex flex-wrap gap-4 transition-all duration-700 delay-500 ${
                visible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              <button className='bg-[var(--primary-yellow)] text-black px-7 py-3 text-[11px] font-bold uppercase tracking-widest hover:scale-[1.03] active:scale-[0.98] transition'>
                Our Work
              </button>

              <button className='border border-black text-black px-7 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-black hover:text-[var(--primary-yellow)] transition'>
                Meet The Team
              </button>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div
            className={`relative transition-all duration-700 delay-300 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <img
              src={heroImg}
              alt='About Onola'
              className='w-full h-[520px] object-cover object-center'
            />

            {/* Yellow vertical line (animated like homepage) */}
            <div
              className='absolute top-0 right-0 w-[4px] bg-[var(--primary-yellow)]'
              style={{
                height: visible ? '100%' : '0%',
                transition: 'height 1s ease 0.7s',
              }}
            />

            {/* Optional subtle offset accent (keeps uniqueness) */}
            <div className='absolute -left-6 top-10 w-[3px] h-24 bg-[var(--primary-yellow)]' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero

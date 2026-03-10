import { useEffect, useState } from 'react'
import heroImg from '../assets/health.jpg'

const AboutHero = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className='bg-[#fafaf9] pt-28 pb-32 border-t-4 border-[var(--primary-yellow)]'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Breadcrumb — top of page */}
        <div
          className='flex items-center gap-3 mb-12'
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.8s ease 0.05s',
          }}
        >
          <span className='text-[10px] uppercase tracking-[0.22em] text-gray-400 font-medium'>
            Home
          </span>
          <span className='w-4 h-[1px] bg-gray-300' />
          <span className='text-[10px] uppercase tracking-[0.22em] text-[var(--primary-yellow)] font-medium'>
            About Us
          </span>
        </div>

        <div className='grid md:grid-cols-2 gap-16 items-center'>
          {/* LEFT CONTENT */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.9s ease 0.15s, transform 0.9s ease 0.15s',
            }}
          >
            {/* Eyebrow */}
            <div className='flex items-center gap-3 mb-6'>
              <span className='w-6 h-[2px] bg-[var(--primary-yellow)]' />
              <p className='uppercase text-[11px] tracking-[0.22em] text-gray-400 font-medium'>
                Who We Are
              </p>
            </div>

            {/* Headline — different structure from homepage */}
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.05] tracking-tight'>
              We exist to make
              <br />
              <span className='relative inline-block mt-2'>
                reform work.
                <span
                  className='absolute left-0 -bottom-2 h-[3px] bg-[var(--primary-yellow)]'
                  style={{
                    width: visible ? '100%' : '0%',
                    transition: 'width 1s ease 0.9s',
                  }}
                />
              </span>
            </h1>

            {/* Pull quote — unique to About, not on homepage */}
            <div
              className='mt-8 pl-5 border-l-2 border-[var(--primary-yellow)]'
              style={{
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.9s ease 0.4s',
              }}
            >
              <p className='text-gray-400 text-[13px] uppercase tracking-[0.18em] font-medium leading-relaxed'>
                Independent · Evidence-Based · Africa-Focused
              </p>
            </div>

            {/* Description */}
            <p
              className='mt-6 text-gray-500 max-w-md leading-relaxed text-[15px]'
              style={{
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.9s ease 0.5s',
              }}
            >
              Onola is an independent policy and reform institute working
              alongside governments and public institutions to design and
              implement practical reforms that strengthen systems and deliver
              measurable, lasting impact.
            </p>

            {/* CTAs */}
            <div
              className='mt-10 flex flex-wrap gap-4'
              style={{
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.9s ease 0.6s',
              }}
            >
              <button className='bg-[var(--primary-yellow)] text-black px-7 py-3 text-[11px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity duration-300'>
                Our Work
              </button>
              <button className='border border-black text-black px-7 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-black hover:text-[var(--primary-yellow)] transition-colors duration-300'>
                Meet The Team
              </button>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div
            className='relative'
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.9s ease 0.35s, transform 0.9s ease 0.35s',
            }}
          >
            {/* Decorative yellow block — unique to About */}
            <div className='absolute -top-4 -right-4 w-24 h-24 bg-[var(--secondary-yellow)] z-0' />

            <img
              src={heroImg}
              alt='About Onola'
              className='w-full h-[500px] object-cover object-center relative z-10'
            />

            {/* Yellow accent border strip */}
            <div className='absolute top-0 right-0 w-[4px] h-full bg-[var(--primary-yellow)] z-20' />

            {/* Stat card */}
            <div
              className='absolute -bottom-10 -left-6 bg-white border-t-4 border-[var(--primary-yellow)] shadow-xl p-6 w-56 z-20'
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.9s ease 0.7s, transform 0.9s ease 0.7s',
              }}
            >
              <p className='text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2'>
                Years of Experience
              </p>
              <p className='text-4xl font-bold text-black leading-none'>
                7<span className='text-[var(--primary-yellow)]'>+</span>
              </p>
              <p className='text-[13px] text-gray-500 mt-3 leading-snug'>
                Driving policy reform across Africa and beyond
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero

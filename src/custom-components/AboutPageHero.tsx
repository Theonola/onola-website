import { useEffect, useState } from 'react'
import heroImg from '../assets/About-hero.jpg'

const AboutHero = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className='bg-[#f7f6f6] pt-28 pb-32'>
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

        {/* RESPONSIVE GRID (same pattern as HeroOnola) */}
        <div className='flex flex-col md:grid md:grid-cols-2 gap-16 items-center'>
          {/* LEFT CONTENT (desktop only like HeroOnola style) */}
          <div className='order-2 md:order-1 hidden md:block'>
            {/* Eyebrow */}
            <div
              className='flex items-center gap-3 mb-8'
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s',
              }}
            >
              <span className='w-6 h-[2px] bg-[var(--primary-yellow)]' />
              <p className='uppercase text-[11px] tracking-[0.22em] text-gray-400'>
                Who We Are
              </p>
            </div>

            {/* Headline */}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s',
              }}
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
              className='mt-8 text-gray-500 max-w-md leading-relaxed text-[15px]'
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition:
                  'opacity 0.9s ease 0.35s, transform 0.9s ease 0.35s',
              }}
            >
              Onola is an independent institute working at the intersection of
              government and implementation, helping translate ideas into
              systems that function, scale, and endure.
            </p>

            {/* CTAs */}
            <div
              className='mt-10 flex gap-4'
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.9s ease 0.5s, transform 0.9s ease 0.5s',
              }}
            >
              <button className='bg-[var(--primary-yellow)] text-black px-7 py-3 text-sm font-bold uppercase tracking-widest hover:opacity-90 transition'>
                Our Work
              </button>

              <button className='border border-black text-black px-7 py-3 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-[var(--primary-yellow)] transition'>
                Meet The Team
              </button>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div
            className='relative order-1 md:order-2'
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(28px)',
              transition: 'opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s',
            }}
          >
            <img
              src={heroImg}
              alt='About Onola'
              className='w-full h-[520px] object-cover'
            />

            {/* MOBILE OVERLAY (same idea as HeroOnola) */}
            <div className='absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent md:hidden' />

            <div className='absolute bottom-0 left-0 right-0 p-6 text-white md:hidden'>
              <div className='flex items-center gap-3 mb-4'>
                <span className='w-6 h-[2px] bg-[var(--primary-yellow)]' />
                <p className='uppercase text-[10px] tracking-[0.22em]'>
                  Who We Are
                </p>
              </div>

              <h1 className='text-3xl font-bold leading-tight mb-3'>
                Effective reform doesn’t happen by chance.
              </h1>

              <p className='text-sm text-white/90'>
                Onola is an independent policy institute working at the
                intersection of government and implementation.
              </p>

              <div className='flex gap-3 mt-5'>
                <button className='bg-[var(--primary-yellow)] text-black px-4 py-2 text-xs font-bold uppercase'>
                  Our Work
                </button>

                <button className='border border-white text-white px-4 py-2 text-xs font-bold uppercase'>
                  Meet Team
                </button>
              </div>
            </div>

            {/* Yellow vertical line */}
            <div
              className='absolute top-0 right-0 w-[4px] bg-[var(--primary-yellow)]'
              style={{
                height: visible ? '100%' : '0%',
                transition: 'height 1s ease 0.7s',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero

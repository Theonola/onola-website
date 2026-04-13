import { useEffect, useState } from 'react'
import heroImg from '../assets/onola-hero.jpg'

const HeroOnola = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className='bg-[#fafaf9]  pt-28 pb-32'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='flex flex-col md:grid md:grid-cols-2 gap-16 items-center'>
          {/* LEFT CONTENT - Desktop */}
          <div className='order-2 md:order-1 hidden md:block'>
            {/* Institutional Label */}
            <div
              className='flex items-center gap-3 mb-6'
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s',
              }}
            >
              <span className='w-6 h-[2px] bg-[var(--primary-yellow)]' />
              <p className='uppercase text-[11px] tracking-[0.22em] text-gray-400 font-medium'>
                Locally Grounded. Results-Driven.
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
              <h1 className='text-4xl md:text-5xl font-bold text-black leading-[1.1] tracking-tight'>
                The <span className='text-[var(--primary-yellow)]'>Onola</span>{' '}
                Institute
                <span
                  className='absolute left-0 -bottom-2 h-[3px] bg-[var(--primary-yellow)]'
                  style={{
                    width: visible ? '70%' : '0%',
                    transition: 'width 1s ease 1s',
                  }}
                />
              </h1>
            </div>

            {/* Description */}
            <p
              className='mt-10 text-gray-500 max-w-md leading-relaxed text-[15px]'
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition:
                  'opacity 0.9s ease 0.35s, transform 0.9s ease 0.35s',
              }}
            >
              Onola works alongside governments and institutions to design and
              implement practical reforms that strengthen public systems,
              accelerate economic transformation, and deliver sustainable
              impact.
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
              <button className='border border-black text-black px-7 py-3 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-[var(--primary-yellow)] transition-colors duration-300'>
                Research & Insights
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
              alt='Policy roundtable discussion'
              className='w-full h-[520px] object-cover'
            />

            {/* Gradient overlay for text readability */}
            <div className='absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent md:hidden' />

            {/* Mobile Text Overlay */}
            <div className='absolute bottom-0 left-0 right-0 p-6 text-white md:hidden'>
              {/* Institutional Label */}
              <div className='flex items-center gap-3 mb-4'>
                <span className='w-6 h-[2px] bg-[var(--primary-yellow)]' />
                <p className='uppercase text-[10px] tracking-[0.22em] text-white font-medium'>
                  Locally Grounded. Results-Driven.
                </p>
              </div>

              {/* Headline */}
              <h1 className='text-3xl font-bold text-white leading-[1.1] tracking-tight mb-4 drop-shadow-lg'>
                The <span className='text-[var(--primary-yellow)]'>Onola</span>{' '}
                Institute
              </h1>

              {/* Description */}
              <p className='text-white max-w-md leading-relaxed text-sm mb-6 drop-shadow-md'>
                Onola works alongside governments and institutions to design and
                implement practical reforms that strengthen public systems,
                accelerate economic transformation, and deliver sustainable
                impact.
              </p>

              {/* CTAs */}
              <div className='flex gap-3'>
                <button className='bg-[var(--primary-yellow)] text-black px-5 py-2 text-xs font-bold uppercase tracking-widest hover:opacity-90 transition'>
                  Our Work
                </button>
                <button className='border border-white text-white px-5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300'>
                  Research & Insights
                </button>
              </div>
            </div>
            <div
              className='absolute top-0 right-0 w-[4px] bg-[var(--primary-yellow)]'
              style={{
                height: visible ? '100%' : '0%',
                transition: 'height 1s ease 0.7s',
              }}
            />

            {/* Impact Card */}
            {/* <div
              className='absolute -bottom-10 -left-6 bg-white border-t-4 border-[var(--primary-yellow)] shadow-xl p-6 w-56'
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition:
                  'opacity 0.9s ease 0.75s, transform 0.9s ease 0.75s',
              }}
            >
              <p className='text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2'>
                Reform Programmes
              </p>
              <p className='text-4xl font-bold text-black leading-none'>
                18<span className='text-[var(--primary-yellow)]'>+</span>
              </p>
              <p className='text-[13px] text-gray-500 mt-3 leading-snug'>
                National reform initiatives supported across the continent
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroOnola

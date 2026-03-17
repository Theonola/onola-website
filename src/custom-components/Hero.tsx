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
        <div className='grid md:grid-cols-2 gap-16 items-center'>
          {/* LEFT CONTENT */}
          <div>
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
                Independent Policy & Reform Institute
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
                Turning Policy Into
                <br />
                <span className='relative inline-block mt-1'>
                  Measurable Reform
                  <span
                    className='absolute left-0 -bottom-2 h-[3px] bg-[var(--primary-yellow)]'
                    style={{
                      width: visible ? '100%' : '0%',
                      transition: 'width 1s ease 1s',
                    }}
                  />
                </span>
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
            className='relative'
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

            {/* Yellow accent border strip */}
            <div
              className='absolute top-0 right-0 w-[4px] bg-[var(--primary-yellow)]'
              style={{
                height: visible ? '100%' : '0%',
                transition: 'height 1s ease 0.7s',
              }}
            />

            {/* Impact Card */}
            <div
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroOnola

import { useEffect, useRef, useState } from 'react'
import storyImg from '../assets/skills.jpg'

const OurStory = (page: { page: string }) => {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const fadeUp = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`,
  })

  return (
    <section ref={ref} className='bg-white '>
      <div className='max-w-6xl mx-auto px-6'>
        {/* ── HEADER ── */}
        <div className='max-w-2xl mb-16'>
          <div className='flex items-center gap-3 mb-5' style={fadeUp(0.1)}>
            <span className='w-6 h-[2px] bg-[var(--primary-yellow)]' />
            {page.page === 'home' ? (
              <p className='uppercase text-[11px] tracking-[0.22em] text-gray-400 font-medium'>
                Our Impact
              </p>
            ) : (
              <p className='uppercase text-[11px] tracking-[0.22em] text-gray-400 font-medium'>
                Our Story
              </p>
            )}
          </div>
          <h2
            className='text-4xl md:text-5xl font-bold text-black leading-[1.05] tracking-tight'
            style={fadeUp(0.2)}
          >
            Results from
            <br />
            <span className='relative inline-block mt-1'>
              the Onola Approach
              <span
                className='absolute left-0 -bottom-2 h-[3px] bg-[var(--primary-yellow)]'
                style={{
                  width: visible ? '100%' : '0%',
                  transition: 'width 1s ease 1s',
                }}
              />
            </span>
          </h2>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className='grid md:grid-cols-5 gap-0 items-stretch'>
          {/* IMAGE — 3 cols */}
          <div
            className='md:col-span-3 h-[460px] md:h-auto overflow-hidden relative'
            style={fadeUp(0.25)}
          >
            <img
              src={storyImg}
              alt='Our Story'
              className='w-full h-full object-cover object-center'
            />
            {/* Year badge */}
            {/* <div className='absolute top-6 left-6 bg-[var(--primary-yellow)] px-4 py-2'>
              <p className='text-[11px] font-bold uppercase tracking-widest text-black'>
                Est. 2017
              </p>
            </div> */}
          </div>

          {/* TEXT — 2 cols, black bg */}
          <div
            className='md:col-span-2 bg-black flex flex-col justify-center px-10 py-14'
            style={fadeUp(0.35)}
          >
            {page.page === 'home' ? (
              <p className='text-white/80 text-[15px] leading-[1.9] mb-6'>
                {}
                The Onola team raised WAEC school leaving exam success rates in
                Lagos state from 7% to 49%, trained young people to run urban
                farms, installed streetlights that doubled market incomes and
                extended commercial operations, restructured clinics for
                extended care, and launched Africa’s first BRT system, serving
                over 200,000 daily commuters.
              </p>
            ) : (
              <p className='text-white/80 text-[15px] leading-[1.9] mb-6'>
                {}
                Onola is founded on a simple but powerful conviction: Nigeria’s
                most urgent challenges can only be solved by those who
                understand them deeply, have lived them directly, and have
                already delivered real solutions. As a locally-grounded
                organization, Onola bridges the gap between policy and the
                community, driven by local expertise and a commitment to
                meaningful impact. It is led by practitioners who have not only
                imagined solutions but implemented them, seasoned reformers with
                a proven track record in governance, public service delivery,
                and infrastructure transformation.
              </p>
            )}

            {/* Quote */}
            <div className='border-l-[3px] border-[var(--primary-yellow)] pl-5 mb-10'>
              <p className='text-white text-[15px] italic leading-relaxed'>
                "We don't just write the policy.
                <br />
                We stay until it works."
              </p>
              <p className='text-[10px] uppercase tracking-[0.2em] text-[var(--primary-yellow)] font-medium mt-3'>
                — Onola Founding Team
              </p>
            </div>

            {/* Stats row */}
            {/* <div className='grid grid-cols-3 gap-4 border-t border-white/10 pt-8'>
              {[
                { value: '7+', label: 'Years' },
                { value: '12+', label: 'Countries' },
                { value: '18+', label: 'Programmes' },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  style={{
                    opacity: visible ? 1 : 0,
                    transition: `opacity 0.8s ease ${0.6 + i * 0.1}s`,
                  }}
                >
                  <p className='text-2xl font-bold text-white leading-none'>
                    {stat.value.replace('+', '')}
                    <span className='text-[var(--primary-yellow)]'>+</span>
                  </p>
                  <p className='text-[10px] uppercase tracking-[0.18em] text-white/40 font-medium mt-1'>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurStory

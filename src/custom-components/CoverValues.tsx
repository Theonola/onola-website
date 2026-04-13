import { useEffect, useRef, useState } from 'react'

const values = [
  {
    number: '01',
    title: 'Evidence-Based',
    body: 'Every recommendation we make is grounded in rigorous analysis, local context, and real data — not assumptions or templates.',
  },
  {
    number: '02',
    title: 'Locally Led',
    body: 'Sustainable reform must be owned by those it serves. We work alongside institutions, not above them.',
  },
  {
    number: '03',
    title: 'Accountable',
    body: 'We measure what we promise. Every programme we deliver is held to clear, agreed outcomes from day one.',
  },
  {
    number: '04',
    title: 'Impact-First',
    body: 'Results matter more than reports. We stay engaged until the change is real, measurable, and lasting.',
  },
]

const CoreValues = () => {
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

  return (
    <section ref={ref} className='bg-black py-24'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* ── HEADER ── */}
        <div
          className='flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 border-b border-white/10 pb-12'
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s',
          }}
        >
          <div>
            <div className='flex items-center gap-3 mb-5'>
              <span className='w-6 h-[2px] bg-[var(--primary-yellow)]' />
              <p className='uppercase text-[11px] tracking-[0.22em] text-gray-400 font-medium'>
                What We Stand For
              </p>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight'>
              Our Core
              <br />
              <span className='relative inline-block mt-1'>
                Values.
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
          <p className='text-gray-400 text-[15px] leading-relaxed max-w-sm md:text-right'>
            These are not aspirations. They are the standards we hold ourselves
            to on every programme, in every country, with every partner.
          </p>
        </div>

        {/* ── VALUES GRID ── */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-0'>
          {values.map((value, i) => (
            <div
              key={value.number}
              className={`group p-10 border-b border-white/10 transition-colors duration-300 hover:bg-white/5 cursor-default
                ${i % 2 === 0 ? 'md:border-r md:border-white/10' : ''}
                ${i >= values.length - 2 ? 'md:border-b-0' : ''}
                ${i === values.length - 1 ? 'border-b-0' : ''}
              `}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.8s ease ${0.2 + i * 0.15}s, transform 0.8s ease ${0.2 + i * 0.15}s`,
              }}
            >
              {/* Number */}
              <p className='text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--primary-yellow)] mb-6'>
                {value.number}
              </p>

              {/* Title */}
              <h3 className='text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight mb-4 group-hover:text-[var(--primary-yellow)] transition-colors duration-300'>
                {value.title}
              </h3>

              {/* Yellow rule */}
              <div className='w-8 h-[2px] bg-[var(--primary-yellow)] mb-5 opacity-40 group-hover:opacity-100 group-hover:w-12 transition-all duration-300' />

              {/* Body */}
              <p className='text-gray-400 text-[15px] leading-relaxed group-hover:text-gray-300 transition-colors duration-300'>
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreValues

import { steps } from '@/data/data'
import { useEffect, useRef, useState } from 'react'

const TheoryOfChange = () => {
  const [visible, setVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [contentVisible, setContentVisible] = useState(true)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleStepChange = (index: number) => {
    setContentVisible(false)
    setTimeout(() => {
      setActiveStep(index)
      setContentVisible(true)
    }, 200)
  }

  return (
    <section ref={ref} className='bg-white py-24'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* ── HEADER ── */}
        <div
          className='grid md:grid-cols-2 gap-10 items-end mb-20'
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
                How Change Happens
              </p>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-black leading-[1.05] tracking-tight'>
              Our Theory
              <br />
              <span className='relative inline-block mt-1'>
                of Change.
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
          <p className='text-gray-500 text-[15px] leading-relaxed'>
            We believe lasting reform doesn't happen by accident. It requires a
            clear understanding of context, a well-designed pathway, and the
            discipline to stay engaged until the change is real.
          </p>
        </div>

        {/* ── MOBILE — cards stacked ── */}
        <div className='flex flex-col gap-8 md:hidden'>
          {steps.map((step, i) => (
            <div
              key={step.number}
              className='border border-gray-100'
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.8s ease ${0.2 + i * 0.1}s, transform 0.8s ease ${0.2 + i * 0.1}s`,
              }}
            >
              {/* Image */}
              <div className='w-full h-[200px] overflow-hidden'>
                <img
                  src={step.image}
                  alt={step.title}
                  className='w-full h-full object-cover object-center'
                />
              </div>

              {/* Content */}
              <div className='p-6'>
                <span className='text-[11px] font-bold tracking-[0.22em] uppercase text-[var(--primary-yellow)] mb-3 block'>
                  {step.number}
                </span>
                <h3 className='text-[18px] font-bold text-black leading-tight tracking-tight mb-3'>
                  {step.title}
                </h3>
                <div className='w-8 h-[2px] bg-[var(--primary-yellow)] mb-4' />
                <p className='text-gray-500 text-[14px] leading-relaxed'>
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── DESKTOP — interactive panel ── */}
        <div
          className='hidden md:grid md:grid-cols-2 gap-0 border border-gray-100'
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.9s ease 0.3s',
          }}
        >
          {/* LEFT — step list */}
          <div className='border-r border-gray-100'>
            {steps.map((step, i) => (
              <button
                key={step.number}
                onClick={() => handleStepChange(i)}
                className={`w-full text-left flex items-start gap-6 px-8 py-8 border-b border-gray-100 last:border-b-0 transition-all duration-300 cursor-pointer
                  ${activeStep === i ? 'bg-black' : 'bg-white hover:bg-gray-50'}`}
              >
                {/* Active indicator bar */}
                <div
                  className={`shrink-0 w-[3px] self-stretch transition-colors duration-300 ${
                    activeStep === i
                      ? 'bg-[var(--primary-yellow)]'
                      : 'bg-gray-100'
                  }`}
                />

                <div className='flex-1'>
                  <span
                    className={`text-[11px] font-bold tracking-[0.22em] uppercase mb-2 block transition-colors duration-300 ${
                      activeStep === i
                        ? 'text-[var(--primary-yellow)]'
                        : 'text-gray-300'
                    }`}
                  >
                    {step.number}
                  </span>
                  <h3
                    className={`text-[17px] font-bold leading-tight tracking-tight transition-colors duration-300 ${
                      activeStep === i ? 'text-white' : 'text-black'
                    }`}
                  >
                    {step.title}
                  </h3>
                </div>

                {/* Connecting arrow on active step */}
                <div
                  className={`shrink-0 self-center transition-all duration-300 ${
                    activeStep === i
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-2'
                  }`}
                >
                  <svg width='16' height='16' viewBox='0 0 14 14' fill='none'>
                    <path
                      d='M2 7h10M8 3l4 4-4 4'
                      stroke='#fcb817'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT — active content panel */}
          <div className='flex flex-col bg-[#fafaf9] min-h-[360px]'>
            {/* Image */}
            <div
              className='w-full h-[220px] overflow-hidden'
              style={{
                opacity: contentVisible ? 1 : 0,
                transition: 'opacity 0.25s ease',
              }}
            >
              <img
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                className='w-full h-full object-cover object-center'
                style={{
                  transform: contentVisible ? 'scale(1)' : 'scale(1.03)',
                  transition: 'transform 0.4s ease, opacity 0.25s ease',
                }}
              />
            </div>

            {/* Step content */}
            <div
              className='flex-1 px-10 py-8'
              style={{
                opacity: contentVisible ? 1 : 0,
                transform: contentVisible ? 'translateY(0)' : 'translateY(8px)',
                transition: 'opacity 0.25s ease, transform 0.25s ease',
              }}
            >
              <span className='text-[11px] font-bold tracking-[0.22em] uppercase text-[var(--primary-yellow)] mb-4 block'>
                Step {steps[activeStep].number} of 04
              </span>
              <h3 className='text-xl md:text-2xl font-bold text-black leading-tight tracking-tight mb-4'>
                {steps[activeStep].title}
              </h3>
              <div className='w-10 h-[3px] bg-[var(--primary-yellow)] mb-5' />
              <p className='text-gray-500 text-[14px] leading-[1.9]'>
                {steps[activeStep].body}
              </p>
            </div>

            {/* Navigation */}
            <div className='flex items-center justify-between px-10 py-6 border-t border-gray-200'>
              <button
                onClick={() => handleStepChange(Math.max(activeStep - 1, 0))}
                disabled={activeStep === 0}
                className='flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-black disabled:text-gray-300 transition-colors duration-200'
              >
                <svg width='14' height='14' viewBox='0 0 14 14' fill='none'>
                  <path
                    d='M12 7H2M6 3L2 7l4 4'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                Previous
              </button>

              <div className='flex items-center gap-2'>
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleStepChange(i)}
                    className={`transition-all duration-300 ${
                      activeStep === i
                        ? 'w-6 h-[3px] bg-[var(--primary-yellow)]'
                        : 'w-2 h-[3px] bg-gray-200 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() =>
                  handleStepChange(Math.min(activeStep + 1, steps.length - 1))
                }
                disabled={activeStep === steps.length - 1}
                className='flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-black disabled:text-gray-300 transition-colors duration-200'
              >
                Next
                <svg width='14' height='14' viewBox='0 0 14 14' fill='none'>
                  <path
                    d='M2 7h10M8 3l4 4-4 4'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ── OUTCOME BAND ── */}
        <div
          className='bg-black px-10 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 mt-0'
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.9s ease 0.9s',
          }}
        >
          <div>
            <p className='text-[10px] uppercase tracking-[0.22em] text-[var(--primary-yellow)] font-bold mb-2'>
              The Outcome
            </p>
            <p className='text-white font-bold text-xl leading-snug'>
              Stronger institutions. Better systems. <br />
              Measurable impact on people's lives.
            </p>
          </div>

          <div className='border-l border-white/20 pl-10 shrink-0'>
            <p className='text-4xl font-bold text-white leading-none mb-1'>
              91<span className='text-[var(--primary-yellow)]'>%</span>
            </p>
            <p className='text-[11px] uppercase tracking-[0.18em] text-white/40 font-medium'>
              of programmes hit their target outcome
            </p>
          </div>

          <div className='flex items-center gap-2 shrink-0 cursor-pointer md:ml-6'>
            <span className='text-[11px] font-bold uppercase tracking-widest text-[var(--primary-yellow)]'>
              See Our Work
            </span>
            <svg width='14' height='14' viewBox='0 0 14 14' fill='none'>
              <path
                d='M2 7h10M8 3l4 4-4 4'
                stroke='#fcb817'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TheoryOfChange

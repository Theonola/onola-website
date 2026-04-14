import { useEffect, useState } from 'react'
import JobCard from '@/components/JobCard'
import { jobs } from '@/data/data'
import image from '../assets/culture.jpg'

const CareersPage = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className='bg-[#f7f6f2]'>
      {/* HERO / INTRO */}
      <section className='pt-32 pb-16'>
        <div className='max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center'>
          {/* TEXT */}
          <div>
            <div className='flex items-center gap-3 mb-6'>
              <span className='w-6 h-[2px] bg-[var(--primary-yellow)]' />
              <p className='uppercase text-[11px] tracking-[0.22em] text-gray-400'>
                Careers
              </p>
            </div>

            <h1 className='text-4xl md:text-5xl font-bold text-black leading-tight'>
              The <span className='text-[var(--primary-yellow)]'>Onola</span>{' '}
              Institute
            </h1>

            {/* COMPANY NAME */}
            <p className='mt-3 text-sm uppercase tracking-[0.25em] text-gray-500'>
              Work with us
            </p>

            <p className='mt-6 text-gray-500 max-w-lg'>
              We are building a team of thoughtful, driven professionals
              committed to strengthening public systems and delivering
              meaningful impact.
            </p>
          </div>

          {/* IMAGE + YELLOW LINE */}
          <div
            className={`relative w-full h-[320px] md:h-[420px] transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <img
              src={image}
              alt='Team working together'
              className='w-full h-full object-cover'
            />

            {/* 🔥 Animated yellow vertical line */}
            <div
              className='absolute top-0 right-0 w-[4px] bg-[var(--primary-yellow)]'
              style={{
                height: visible ? '100%' : '0%',
                transition: 'height 1s ease 0.7s',
              }}
            />
          </div>
        </div>
      </section>

      {/* JOB LISTINGS */}
      <section className='pb-28'>
        <div className='max-w-6xl mx-auto px-6'>
          {jobs.length > 0 ? (
            <div className='space-y-10'>
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className='text-center py-20'>
              <h2 className='text-3xl font-bold text-black'>
                We’re not hiring right now.
              </h2>

              <p className='mt-6 text-gray-500 max-w-md mx-auto'>
                We are always interested in connecting with thoughtful and
                driven individuals. If you believe your skills align with our
                mission, feel free to reach out.
              </p>

              <div className='mt-10'>
                <a
                  href='mailto:onolasocials@gmail.com'
                  className='bg-[var(--primary-yellow)] text-black px-8 py-3 text-[11px] font-bold uppercase tracking-widest hover:scale-[1.03] transition'
                >
                  Send Your CV
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default CareersPage

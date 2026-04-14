import { useState } from 'react'

const JobCard = ({ job }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className='bg-white border border-gray-100 p-6 md:p-7 shadow-sm transition'>
      {/* HEADER */}
      <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-4'>
        <div>
          <h3 className='text-xl font-bold text-black'>{job.title}</h3>

          {/* META */}
          <div className='flex flex-wrap gap-4 mt-2 text-xs text-gray-500'>
            <span>{job.location}</span>
            <span>•</span>
            <span>{job.experience}</span>
            <span>•</span>
            <span>Deadline: {job.deadline}</span>
          </div>
        </div>

        {/* APPLY (small CTA always visible) */}
        <a
          href={`mailto:${job.email}`}
          className='bg-[var(--primary-yellow)] text-black px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:scale-[1.03] transition self-start'
        >
          Apply
        </a>
      </div>

      {/* DIVIDER */}
      <div className='h-px bg-gray-100 my-5' />

      {/* SUMMARY (shorter + cleaner) */}
      <p className='text-gray-600 text-sm leading-relaxed line-clamp-2'>
        {job.summary}
      </p>

      {/* HIGHLIGHTS (compact) */}
      <ul className='mt-4 space-y-1 text-gray-600 text-xs'>
        {job.highlights.slice(0, 3).map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>

      {/* TOGGLE */}
      <button
        onClick={() => setOpen(!open)}
        className='mt-5 text-xs font-medium text-black underline underline-offset-2'
      >
        {open ? 'Show Less' : 'View Details'}
      </button>

      {/* EXPANDED SECTION */}
      {open && (
        <div className='mt-6 space-y-6'>
          {/* REQUIREMENTS */}
          <div>
            <h4 className='text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2'>
              Requirements
            </h4>
            <ul className='space-y-1 text-xs text-gray-600'>
              {job.requirements.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>

          {/* RESPONSIBILITIES */}
          <div>
            <h4 className='text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2'>
              Responsibilities
            </h4>
            <ul className='space-y-1 text-xs text-gray-600'>
              {job.responsibilities.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>

          {/* ACTIONS */}
          <div className='flex flex-wrap gap-3 pt-2'>
            <a
              href={job.jd}
              download
              className='border border-black px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-[var(--primary-yellow)] transition'
            >
              JD
            </a>

            <a
              href={`mailto:${job.email}`}
              className='bg-[var(--primary-yellow)] text-black px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:scale-[1.03] transition'
            >
              Apply Now
            </a>
          </div>

          {/* FOOTNOTE */}
          <p className='text-[11px] text-gray-500'>
            Send your CV to{' '}
            <span className='text-black font-medium'>{job.email}</span>
          </p>
        </div>
      )}
    </div>
  )
}

export default JobCard

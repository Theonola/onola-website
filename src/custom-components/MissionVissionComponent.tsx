const slides = [
  {
    label: 'Our Mission',
    title: 'Driving Practical Reform',
    text: `We support governments and institutions to design and implement
    practical reforms that strengthen public systems and deliver measurable impact.`,
    image:
      'https://media.istockphoto.com/id/2218333140/photo/smiling-professionals-engaged-in-a-lively-team-discussion-in-bright-office-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=VH0vif57FLckXttCszHsvCgyjtq_arWxg4seHGQ6EcI=',
  },
  {
    label: 'Our Vision',
    title: 'Institutions That Work for People',
    text: `A world where public institutions operate effectively, inclusively,
    and sustainably to improve lives and accelerate national development.`,
    image:
      'https://media.istockphoto.com/id/2218333140/photo/smiling-professionals-engaged-in-a-lively-team-discussion-in-bright-office-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=VH0vif57FLckXttCszHsvCgyjtq_arWxg4seHGQ6EcI=',
  },
]

const MissionVision = () => {
  return (
    <section className='bg-white overflow-hidden'>
      {slides.map((slide, index) => {
        const isEven = index % 2 === 0
        const isDark = index === 1

        return (
          <div
            key={index}
            className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} w-full min-h-[520px]`}
          >
            {/* IMAGE */}
            <div className='w-full md:w-1/2 h-[320px] md:h-auto overflow-hidden'>
              <img
                src={slide.image}
                alt={slide.label}
                className='w-full h-full object-cover'
              />
            </div>

            {/* TEXT */}
            <div
              className={`w-full md:w-1/2 flex items-center px-10 py-16 md:px-16 lg:px-24 ${
                isDark ? 'bg-black' : 'bg-white'
              }`}
            >
              <div className='max-w-lg'>
                {/* Eyebrow */}
                <div className='flex items-center gap-3 mb-5'>
                  <span className='w-6 h-[2px] bg-[var(--primary-yellow)]' />
                  <p
                    className={`uppercase text-[11px] tracking-[0.22em] font-medium ${
                      isDark ? 'text-white' : 'text-gray-400'
                    }`}
                  >
                    {slide.label}
                  </p>
                </div>

                {/* Title — explicitly white for dark band */}
                <h2
                  className={`text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-5 ${
                    isDark ? '!text-white' : 'text-black'
                  }`}
                >
                  {slide.title}
                </h2>

                {/* Yellow rule */}
                <div className='w-12 h-[3px] bg-[var(--primary-yellow)] mb-6' />

                {/* Body */}
                <p
                  className={`leading-relaxed text-[15px] mb-8 ${
                    isDark ? 'text-white/80' : 'text-gray-500'
                  }`}
                >
                  {slide.text}
                </p>

                {/* CTA */}
                <div className='flex items-center gap-2'>
                  <span
                    className={`text-[11px] font-bold uppercase tracking-widest ${
                      isDark ? 'text-[var(--primary-yellow)]' : 'text-black'
                    }`}
                  >
                    Learn More
                  </span>
                  <svg
                    className={`w-3 h-3 ${
                      isDark ? 'text-[var(--primary-yellow)]' : 'text-black'
                    }`}
                    viewBox='0 0 14 14'
                    fill='none'
                  >
                    <path
                      d='M2 7h10M8 3l4 4-4 4'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default MissionVision

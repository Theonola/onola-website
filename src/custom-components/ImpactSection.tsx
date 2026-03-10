import { motion } from 'framer-motion'

const impactStats = [
  { value: '14+', label: 'Countries Engaged' },
  { value: '55+', label: 'Reform Programs Supported' },
  { value: '230+', label: 'Institutions Strengthened' },
  { value: '8M+', label: 'Lives Impacted' },
]

export default function ImpactSection() {
  return (
    <section className='bg-black py-24'>
      <div className='max-w-6xl mx-auto px-6 text-center'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='mb-12'
        >
          <p className='uppercase text-xs tracking-[0.25em] text-gray-400 mb-4'>
            Impact
          </p>
          <h2 className='text-4xl font-semibold text-white'>
            Measurable Results That Matter
          </h2>
          <p className='text-gray-300 mt-3 max-w-2xl mx-auto'>
            Transforming systems, strengthening institutions, and improving
            public outcomes through policy and implementation support.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
          {impactStats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className='text-center'
            >
              <p className='text-5xl font-bold text-[var(--primary-yellow)]'>
                {stat.value}
              </p>
              <p className='text-gray-300 mt-2 text-sm'>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

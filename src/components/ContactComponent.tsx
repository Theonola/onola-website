import { useState } from 'react'

const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <section className='bg-[#f7f6f2] py-28'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='grid md:grid-cols-2 gap-20'>
          {/* LEFT SIDE */}
          <div>
            {/* Eyebrow */}
            <div className='flex items-center gap-3 mb-6'>
              <span className='w-6 h-[2px] bg-[var(--primary-yellow)]' />
              <p className='uppercase text-[11px] tracking-[0.22em] text-gray-400'>
                Contact
              </p>
            </div>

            {/* Heading */}
            <h2 className='text-4xl md:text-5xl font-bold text-black leading-[1.1] tracking-tight'>
              Let’s work together
            </h2>

            {/* Description */}
            <p className='mt-6 text-gray-500 max-w-md leading-relaxed text-[15px]'>
              Whether you're exploring a reform initiative, seeking technical
              support, or looking to collaborate, our team is ready to engage.
              Reach out and we’ll respond promptly.
            </p>

            {/* Optional Info */}
            <div className='mt-10 space-y-4 text-sm text-gray-500'>
              <p>Lagos, Nigeria</p>
              <p>info@onola.org</p>
            </div>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <form
            onSubmit={handleSubmit}
            className='bg-white p-8 md:p-10 shadow-sm border border-gray-100'
          >
            {/* Name */}
            <div className='mb-6'>
              <label className='block text-[11px] uppercase tracking-widest text-gray-400 mb-2'>
                Full Name
              </label>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                className='w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent transition'
                required
              />
            </div>

            {/* Email */}
            <div className='mb-6'>
              <label className='block text-[11px] uppercase tracking-widest text-gray-400 mb-2'>
                Email Address
              </label>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                className='w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent transition'
                required
              />
            </div>

            {/* Organization */}
            <div className='mb-6'>
              <label className='block text-[11px] uppercase tracking-widest text-gray-400 mb-2'>
                Organization
              </label>
              <input
                type='text'
                name='organization'
                value={form.organization}
                onChange={handleChange}
                className='w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent transition'
              />
            </div>

            {/* Message */}
            <div className='mb-8'>
              <label className='block text-[11px] uppercase tracking-widest text-gray-400 mb-2'>
                Message
              </label>
              <textarea
                name='message'
                rows='4'
                value={form.message}
                onChange={handleChange}
                className='w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent resize-none transition'
                required
              />
            </div>

            {/* Button */}
            <button
              type='submit'
              className='bg-[var(--primary-yellow)] text-black px-8 py-3 text-[11px] font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

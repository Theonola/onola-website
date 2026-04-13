import { Link } from 'react-router-dom'
import logo from '../assets/Onola-Institute-white.png'
import { links } from '@/data/data'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Our Work', path: '/work' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
  ]

  const socials = [
    {
      name: 'LinkedIn',
      path: '#',
      icon: (
        <svg viewBox='0 0 24 24' fill='currentColor' className='w-4 h-4'>
          <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
        </svg>
      ),
    },
    {
      name: 'X',
      path: '#',
      icon: (
        <svg viewBox='0 0 24 24' fill='currentColor' className='w-4 h-4'>
          <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      path: '#',
      icon: (
        <svg viewBox='0 0 24 24' fill='currentColor' className='w-4 h-4'>
          <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
        </svg>
      ),
    },
  ]

  return (
    <footer className='bg-black text-white mt-20'>
      {/* ── CTA BAND ── */}
      <div className='border-t-4 border-[var(--primary-yellow)]'>
        <div className='max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8'>
          <div>
            <p className='uppercase text-[11px] tracking-[0.22em] text-gray-400 font-medium mb-3'>
              Work With Us
            </p>
            <h2 className='text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight'>
              Ready to drive reform <br />
              <span className='text-[var(--primary-yellow)]'>
                in your institution?
              </span>
            </h2>
          </div>
          <div className='flex flex-wrap gap-4 shrink-0'>
            <Link
              to='#'
              className='bg-[var(--primary-yellow)] text-black px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity duration-300'
            >
              Get In Touch
            </Link>
            <Link
              to='#'
              className='border border-white/30 text-white px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest hover:border-white transition-colors duration-300'
            >
              Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* ── DIVIDER ── */}
      <div className='w-full h-[1px] bg-white/10' />

      {/* ── MAIN GRID ── */}
      <div className='max-w-6xl mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          {/* Col 1 — Brand */}
          <div className='md:col-span-1'>
            <img
              src={logo}
              alt='Onola Institute'
              className='h-14 w-auto object-contain mb-6'
            />
            <p className='text-gray-400 text-[14px] leading-relaxed mb-6'>
              An independent policy and reform institute working alongside
              governments to deliver lasting, evidence-based change.
            </p>
            <div className='flex items-center gap-4'>
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.path}
                  aria-label={s.name}
                  className='w-8 h-8 flex items-center justify-center border border-white/15 text-gray-400 hover:border-[var(--primary-yellow)] hover:text-[var(--primary-yellow)] transition-colors duration-300'
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <div className='flex items-center gap-3 mb-6'>
              <span className='w-4 h-[2px] bg-[var(--primary-yellow)]' />
              <p className='uppercase text-[10px] tracking-[0.22em] text-gray-400 font-medium'>
                Quick Links
              </p>
            </div>
            <ul className='flex flex-col gap-3'>
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.url}
                    className='text-[14px] text-gray-400 hover:text-[var(--primary-yellow)] transition-colors duration-300 flex items-center gap-2 group capitalize'
                  >
                    <span className='w-0 group-hover:w-3 h-[1px] bg-[var(--primary-yellow)] transition-all duration-300' />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Thematic Areas */}

          {/* Col 4 — Newsletter + Contact */}
          <div>
            <div className='flex items-center gap-3 mb-6'>
              <span className='w-4 h-[2px] bg-[var(--primary-yellow)]' />
              <p className='uppercase text-[10px] tracking-[0.22em] text-gray-400 font-medium'>
                Stay Informed
              </p>
            </div>
            <p className='text-[14px] text-gray-400 leading-relaxed mb-5'>
              Receive our latest research, insights, and reform updates directly
              in your inbox.
            </p>
            <div className='flex'>
              <input
                type='email'
                placeholder='Your email address'
                className='flex-1 bg-white/5 border border-white/15 text-white text-[13px] px-4 py-3 placeholder:text-gray-600 focus:outline-none focus:border-[var(--primary-yellow)] transition-colors duration-300'
              />
              <button className='bg-[var(--primary-yellow)] text-black px-4 py-3 text-[11px] font-bold uppercase tracking-wider hover:opacity-90 transition-opacity duration-300 shrink-0'>
                →
              </button>
            </div>
            <div className='mt-8 flex flex-col gap-3'>
              <a
                href='mailto:info@onola.org'
                className='text-[13px] text-gray-400 hover:text-[var(--primary-yellow)] transition-colors duration-300 flex items-center gap-3'
              >
                <span className='w-1 h-1 rounded-full bg-[var(--primary-yellow)]' />
                info@onola.org
              </a>
              <a
                href='tel:+2340000000000'
                className='text-[13px] text-gray-400 hover:text-[var(--primary-yellow)] transition-colors duration-300 flex items-center gap-3'
              >
                <span className='w-1 h-1 rounded-full bg-[var(--primary-yellow)]' />
                +234 000 000 0000
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className='border-t border-white/10'>
        <div className='max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
          <p className='text-[11px] uppercase tracking-[0.18em] text-gray-600'>
            © {new Date().getFullYear()} Onola Institute. All rights reserved.
          </p>
          <div className='flex items-center gap-6'>
            {['Privacy Policy', 'Terms of Use', 'Sitemap'].map((item) => (
              <Link
                key={item}
                to='#'
                className='text-[11px] uppercase tracking-[0.15em] text-gray-600 hover:text-[var(--primary-yellow)] transition-colors duration-300'
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

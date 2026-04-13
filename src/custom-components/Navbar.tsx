'use client'
import { useState } from 'react'

// import Logo from '@/assets/insight-out-logo.png'
import { links } from '../data/data'
// import { GrMenu } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import logo from '../assets/Onola-logo .jpg'
import { HiMenu, HiX } from 'react-icons/hi'
// import Sidebar from './Sidebar'

const Navbar = () => {
  const [isScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <div
      className={`flex flex-col fixed top-0 left-0 w-full z-50 transition-shadow bg-white ${
        isScrolled ? 'shadow-b-md' : ''
      }`}
    >
      <nav className='flex flex-col shadow-md'>
        <ul className='flex flex-row justify-between items-center'>
          <li className='w-1/2 bg-white pl-4 md:pl-12'>
            <Link to={'/'} onClick={() => setIsMenuOpen(false)}>
              <img src={logo} alt='logo' className='w-[70px] bg-transparent' />
            </Link>
          </li>
          <li className='flex'>
            {links.map((link) => (
              <Link
                to={link.url}
                key={link.id}
                className='p-4 font-semibold capitalize hover:text-[#fcb816] hidden md:block'
              >
                {link.name}
              </Link>
            ))}
          </li>
          <li className='md:hidden pr-4'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='p-2 focus:outline-none'
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </li>
        </ul>
      </nav>
      {isMenuOpen && (
        <div className='md:hidden bg-white shadow-md border-t'>
          <ul className='flex flex-col'>
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.url}
                  onClick={() => setIsMenuOpen(false)}
                  className='block p-4 font-semibold capitalize hover:text-[#fcb816] hover:bg-gray-50 transition-colors'
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* <Sidebar openSidebar={isSidebarOpen} handleOpenSidebar={handleSidebarClose} /> */}
    </div>
  )
}

export default Navbar

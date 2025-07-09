'use client'
import { useState, useEffect } from 'react'

// import Logo from '@/assets/insight-out-logo.png'
import { links } from '../data/data'
import { GrMenu } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import logo from '../assets/Onola-logo .jpg'
// import Sidebar from './Sidebar'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleSidebarClose = () => {
    setIsSidebarOpen(false)
  }


  //#fcb816
  return (
    <div
      className={`flex flex-col  fixed z-40 top-0 left-0 w-full  transition-shadow bg-[var(--primary-yellow)] ${
        isScrolled ? 'shadow-b-md' : ''
      }`}
    > 
      <nav className='flex flex-col ] shadow-md'>
        <ul className='flex flex-row justify-between items-center  '>
          <Link to={'/'} className='w-1/2 bg-white pl-4 md:pl-12 '>
          <img src={logo} alt='logo' className='w-[70px] bg-transparent' /> 
          </Link>
          <div className='w-1/2 sm:flex flex-row items-center justify-center hidden  pr-4 md:pr-12'>
            {links.map((link) => (
              <li key={link.id} className='mr-4'>
                <Link
                  to={link.url}
                  className='text-gray-800 hover:text-white capitalize mx-4'
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </div>
          <button
            className='flex sm:hidden'
            onClick={() => setIsSidebarOpen(true)}
          >
            <GrMenu className='text-2xl' />
          </button>
        </ul>
      </nav>
      {/* <Sidebar openSidebar={isSidebarOpen} handleOpenSidebar={handleSidebarClose} /> */}
    </div>
  )
}

export default Navbar

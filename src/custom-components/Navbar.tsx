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
  return (
    <div
      className={`flex flex-col fixed top-0 left-0 w-full z-50 transition-shadow bg-white ${
        isScrolled ? 'shadow-b-md' : ''
      }`}
    >
      <nav className='flex flex-col shadow-md'>
        <ul className='flex flex-row justify-between items-center'>
          <li className='w-1/2 bg-white pl-4 md:pl-12'>
            <Link to={'/'}>
              <img src={logo} alt='logo' className='w-[70px] bg-transparent' />
            </Link>
          </li>
          <li className='flex'>
            {links.map((link) => (
              <Link to={link.url} key={link.id} className='p-4 font-semibold hover:text-[#fcb816]'>
                {link.name}
              </Link>
            ))}
          </li>
        </ul>
      </nav>
      {/* <Sidebar openSidebar={isSidebarOpen} handleOpenSidebar={handleSidebarClose} /> */}
    </div>
  )
          
}

export default Navbar

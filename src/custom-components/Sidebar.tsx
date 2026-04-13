// import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiX } from 'react-icons/fi'
import Modal from './Modal'

// import React from 'react'
interface SidebarProps {
  openSidebar: boolean
  handleOpenSidebar: () => void
}

const Sidebar = ({ openSidebar, handleOpenSidebar }: SidebarProps) => {
  return (
    <Modal openModal={openSidebar}>
      <aside
        className={`fixed top-0 right-0 z-50 p-4 gap-6 flex flex-col bg-white h-full max-w-[450px] w-[85%] overflow-y-scroll
          transition-transform duration-300 ease-in-out
          ${openSidebar ? 'translate-x-0' : 'translate-x-full pointer-events-none'}
        `}
        style={{ willChange: 'transform' }}
      >
        <button onClick={handleOpenSidebar}>
          <FiX />
        </button>
        <ul className='gap-8 flex flex-col text-[#94a3b8] capitalize font-bold'>
          <Link to={'/'}>Home</Link>
          <Link to={'/login'}>login</Link>
          <Link to={'/register'}>register</Link>
        </ul>
      </aside>
    </Modal>
  )
}

export default Sidebar
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu,FiX} from "react-icons/fi";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='bg-transparent  '>
     <div className='text-white py-5 flex justify-between items-center px-20'>
        <div className='text-2xl font-semibold cursor-pointer'>
        <span className='text-[#1cd8d2]'>&lt;</span>
        <span className='text-white'>Arpita</span>
        <span className='text-[#1cd8d2]'>/</span>
        <span className='text-white'>Patel</span>
        <span className='text-[#1cd8d2]'>&gt;</span>
        </div>
        <div className='hidden md:flex space-x-10 text-gray-300  px-20'>
      <NavLink
  to="/"
  className={({ isActive }) =>
    isActive
      ? "text-xl text-[#1cd8d2] font-semibold"
      : "text-xl text-gray-300 hover:text-[#1cd8d2]"
  }
>
  Home
</NavLink>
<NavLink
  to="/skill"
  className={({ isActive }) =>
    isActive
      ? "text-xl text-[#1cd8d2] font-semibold"
      : "text-xl text-gray-300 hover:text-[#1cd8d2]"
  }
>
  Skill
</NavLink>
<NavLink
  to="/project"
  className={({ isActive }) =>
    isActive
      ? "text-xl text-[#1cd8d2] font-semibold"
      : "text-xl text-gray-300 hover:text-[#1cd8d2]"
  }
>
  Project
</NavLink>
<NavLink
  to="/education"
  className={({ isActive }) =>
    isActive
      ? "text-xl text-[#1cd8d2] font-semibold"
      : "text-xl text-gray-300 hover:text-[#1cd8d2]"
  }
>
  Education
</NavLink>
<NavLink
  to="/contact"
  className={({ isActive }) =>
    isActive
      ? "text-xl text-[#1cd8d2] font-semibold"
      : "text-xl text-gray-300 hover:text-[#1cd8d2]"
  }
>
  Contact
</NavLink>
      {/* <Link className='text-xl hover:text-[#1cd8d2]' to="/skill">Skill</Link>
      <Link className='text-xl hover:text-[#1cd8d2]' to="/project">Project</Link>
      <Link className='text-xl hover:text-[#1cd8d2]' to="/education">Education</Link>
      <Link className='text-xl hover:text-[#1cd8d2]' to="/Contact">Contact</Link> */}
      </div>
      
<div className="md:hidden ">
  {isOpen ? (
    <FiX
      className="text-3xl text-[#1cd8d2] cursor-pointer "
      onClick={() => setIsOpen(false)}
    />
  ) : (
    <FiMenu
      className="text-3xl text-[#1cd8d2] cursor-pointer"
      onClick={() => setIsOpen(true)}
    />
  )}
</div>

{isOpen && (
  <div className="absolute top-16 left-0 w-full bg-gray-400/10 backdrop-blur-lg  z-50">
    <ul className="flex flex-col items-center space-y-4 py-6 text-gray-200 ">
      <li><Link  className='text-xl hover:text-[#1cd8d2]' to="/">Home</Link></li>
      <li><Link  className=' text-xl hover:text-[#1cd8d2]'  to="/skill">Skill</Link></li>
      <li><Link  className='text-xl hover:text-[#1cd8d2]'  to="/project">Project</Link></li>
      <li><Link className=' text-xl hover:text-[#1cd8d2]'  to="/education">Education</Link></li>
      <li><Link className=' text-xl hover:text-[#1cd8d2]'  to="/contact">Contact</Link></li>
    </ul>
  </div>
)}
</div>
       </div>
  )
}
export default Navbar

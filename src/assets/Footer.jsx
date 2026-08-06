import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <div className=' items-center text-center py-6 text-gray-400 p-10'>
            <p className='text-gray-400  text-xl' >
                  © {new Date().getFullYear()} Arpita Patel. All Rights Reserved.
            </p>

             <div className="flex justify-center items-center gap-4 text-3xl md:my-0 my-4 py-6 text-gray-400">
  <a
    href="https://github.com/arpitavns77-tech "
    className='text-[#1cd8d2] hover:text-white'
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/arpitapatel48"
    className='text-[#1cd8d2] hover:text-white'
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin />
  </a>
</div>
        </div>
    </footer>
  )
}

export default Footer

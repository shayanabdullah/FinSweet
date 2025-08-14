import React from 'react'
import { Link } from 'react-router-dom'

const AllLinks = () => {
  return (
    <div>
        <div className="all-links flex justify-center items-center lg:pb-[3rem]">
            <ul className='flex flex-wrap items-center lg:gap-x-[2rem] gap-x-[20px]'>
               <Link className='a' to='/all'>
               <li className='text-lg font-medium! text-[#2405F2] opacity-[0.7] hover:text-[#2405F2] duration-300 '>
                       All
                </li>
               </Link>
               <Link className='a' to='/ui'>
               <li className='text-lg font-medium! text-[#282938] opacity-[0.7] hover:text-[#2405F2] duration-300'>
               UI Design
                </li>
               </Link>
               <Link className='a' to='/webflow' >
               <li className='text-lg font-medium! text-[#282938] opacity-[0.7] hover:text-[#2405F2] duration-300'>
               Webflow Design
                </li>
               </Link>
               <Link className='a' to='/figma'>
               <li className='text-lg font-medium! text-[#282938] opacity-[0.7] hover:text-[#2405F2] duration-300'>
               Figma Design
                </li>
               </Link>
            </ul>
        </div>
    </div>
  )
}

export default AllLinks
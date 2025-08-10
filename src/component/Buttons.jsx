import React, { Children } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
const Buttons = ({text,className,Children}) => {
  return (
   <button className={`px-[48px] py-[16px] bg-transparent border-2 boder-solid border-[#BBBBCB] rounded-[41px]! text-white text-[16px]!   font-medium hover:bg-[#FCD980]! hover:text-black! duration-300 ${className}`}>{text} {Children}
   </button>
  )
}

export default Buttons
import React, { Children } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
const Buttons = ({text,className,Children}) => {
  return (
   <button className={`lg:px-[48px] px-[24px] lg:py-[16px] py-[12px] bg-transparent border-2 boder-solid border-[#BBBBCB] rounded-[41px]! text-white lg:text-[16px]! text-[14px]   font-medium hover:bg-[#FCD980]! hover:text-black! duration-300 ${className}`}>{text} {Children}
   </button>
  )
}

export default Buttons
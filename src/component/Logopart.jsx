import React from 'react'
import logo from '../assets/Logo-Section.png'
import Images from './Images'
const Logopart = ({on}) => {
  return (
<div className="logo-section w-full pt-[48px]">
    <Images src={logo}/>
</div>
  )
}

export default Logopart
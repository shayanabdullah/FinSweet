import React from 'react'
import { Col } from 'react-bootstrap'


const WorkReuseable = ({src,text}) => {
  return (
    <Col lg={6} sm={6} xs={6} md={6} >
        <img src={src} alt="" />
<h3 className='lg:text-[32px]! text-[28px ] text-[#282938]! font-bold! pt-[16px] pb-[8px]'>{text}</h3>
<p className='text-[16px] font-regular text-[#282938] lg:w-[270px] lg:p-[0]!  lg:pr-[30px]'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
    </Col>
  )
}

export default WorkReuseable
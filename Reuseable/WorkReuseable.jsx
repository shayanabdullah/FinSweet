import React from 'react'
import { Col } from 'react-bootstrap'


const WorkReuseable = ({src,text}) => {
  return (
    <Col lg={6}>
        <img src={src} alt="" />
<h3 className='text-[32px]! text-[#282938]! font-bold! pt-[16px] pb-[8px]'>{text}</h3>
<p className='text-[16px] fony-regular text-[#282938] lg:w-[270px]'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
    </Col>
  )
}

export default WorkReuseable
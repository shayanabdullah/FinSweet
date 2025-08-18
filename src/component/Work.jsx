import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRightLong } from 'react-icons/fa6'
import one from '../assets/one.png'
import two from '../assets/two.png'
import three from '../assets/three.png'
import four from '../assets/four.png'
import WorkReuseable from '../../Reuseable/WorkReuseable'
import { Link } from 'react-router-dom'
const Work = () => {
  return (
   <section className='lg:py-[128px] py-[4rem]'>
      <Container>
        <Row>
            <Col lg={4}>
            <div className="work-text lg:text-left!">
                <h2 className='lg:text-[48px]! text-[32px]! font-semibold!'>How we work</h2>
                <p className='text-[16px]! font-regular lg:w-[355px] lg:py-[16px]! py-[10px] pb-[0px]' >Lorem ipsum dolor sit amet, consectetur adipiscing <span className='sm:block md:block lg:inline-block'> elit, sed do eiusmod tempor.</span></p>
           <Link to='/contact'>
           <h3 className='lg:text-[18px]! text-[14px]! font-bold! text-[#2405F2]! relative icon-btn-2 cursor-pointer pb-[32px] lg:pb-[0] '>Get in touch with us <FaArrowRightLong className='absolute lg:top-[4px] top-[1px] lg:right-[222px] right-[240px] icon'/> </h3>
           </Link>
            </div>
            </Col>
            <Col lg={{span:6, offset:1}}>
           <div className="">
           <Row className='lg:gap-y-[48px]! work_row '>
               <WorkReuseable src={one} text='Strategy'/>
               <WorkReuseable src={two} text='Wireframing'/>
               <WorkReuseable src={three} text='Design'/>
               <WorkReuseable src={four} text='Development'/>
               </Row>
           </div>
            </Col>
        </Row>
      </Container>
   </section>
  )
}

export default Work
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRightLong } from 'react-icons/fa6'
import one from '../assets/one.png'
import two from '../assets/two.png'
import three from '../assets/three.png'
import four from '../assets/four.png'
import WorkReuseable from '../../Reuseable/WorkReuseable'
const Work = () => {
  return (
   <section className='py-[128px]'>
      <Container>
        <Row>
            <Col lg={4}>
            <div className="work-text">
                <h2 className='text-[48px]! font-semibold!'>How we work</h2>
                <p className='text-[16px]! font-regular lg:w-[355px] py-[16px]! pb-[0px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <h3 className='text-[18px]! font-bold! text-[#2405F2]! relative icon-btn-2 cursor-pointer '>Get in touch with us <FaArrowRightLong className='absolute top-[4px] right-[222px] icon'/> </h3>
            </div>
            </Col>
            <Col lg={{span:6, offset:1}}>
               <Row className='gap-y-[48px]!'>
               <WorkReuseable src={one} text='Strategy'/>
               <WorkReuseable src={two} text='Wireframing'/>
               <WorkReuseable src={three} text='Design'/>
               <WorkReuseable src={four} text='Development'/>
               </Row>
            </Col>
        </Row>
      </Container>
   </section>
  )
}

export default Work
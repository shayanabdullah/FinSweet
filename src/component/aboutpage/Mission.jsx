import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Images from '../Images'
import img1 from '../../assets/mission-1.png'
import img2 from '../../assets/mission-2.png'
const Mission = () => {
  return (
  <section className='py-[128px]'>
          <Container>
            <Row>
                <Col lg={5}>
                <div className="box-1">
                <h5 className='text-[16px]! font-semibold! text-[#282938] pb-[16px]'>Our Mission </h5>
                <h2 className='text-[2.25rem]! font-semibold! text-[#282938] pb-[18px]'>Inspire, Innovate, Share</h2>
                <p  className='text-[1rem]! font-regular! opacity-[0.7] text-[#282938] leading-[28px]!'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                </Col>
                <Col lg={{span:5, offset:2}}>
                <div className="img-box">
                    <Images src={img1}/>
                </div>
                </Col>
            </Row>
            <Row className='pt-[95px]!'>
            <Col lg={5}>
                <div className="img-box w-full">
                    <Images src={img2}/>
                </div>
                </Col>

                <Col lg={{span:6, offset:1}}>
                <div className="box-1 ">
                <h5 className='text-[16px]! font-semibold! text-[#282938] pb-[16px]'>Our Vision </h5>
                <h2 className='text-[2.25rem]! font-semibold! text-[#282938] pb-[18px]'>Laser focus</h2>
                <p  className='text-[1rem]! font-regular! opacity-[0.7] text-[#282938] leading-[35px]! lg:w-[520px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                </Col>
             
            </Row>
          </Container>
  </section>
  )
}

export default Mission
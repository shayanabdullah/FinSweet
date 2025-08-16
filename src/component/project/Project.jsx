import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRightLong } from 'react-icons/fa6'
import Images from '../../component/Images'
import Card from '../../assets/Card.png'
import CardTwo from '../../assets/Card-Two.png'
import CardThree from '../../assets/Card-Three.png'
import '../../component/project/Project.css'
import { Link } from 'react-router-dom'

const Project = () => {
  return (
    <section className='lg:py-[128px] py-[96px]'>
      <Container>
        <Row>
          <Col lg={4}>
            <div className="project-heading">
              <h2 className='lg:text-[48px]! sm:text-[24px]! text-[32px]! lg:text-left! text-center font-semibold! text-[#282938] lg:pb-[64px]! pb-[1rem]'>View our projects</h2>
            </div>
          </Col>
          <Col lg={{ span: 2, offset: 6 }}>
           <Link to='/work'>
           <h3 className='text-[16px]! text-[#282938]! font-bold! cursor-pointer relative icon-btn text-center  lg:p-[0] pb-[20px] group'>View More
              <FaArrowRightLong className='absolute top-[2px] lg:left-[150px]  left-[220px] group :left-[230px] icon' />
            </h3>
           </Link>
          </Col>
        </Row>
        <Row className='gap-y-[3rem]'>
          <Col lg={8}>
            <Link to='/work'>
            <div className="img-main ">
              <div className="overlay">
                <div className="overlay-text lg:pt-[19rem] lg:px-[20px] pt-[3.3rem] px-[15px]">
                  <h3 className='font-semibold! lg:text-[24px]! text-[1.1rem]! text-white pb-[10px] lg:pr-[35px] lg:pl-[3rem] lg:leading-[32px] leading-[28px] m-[0]!'>Workhub office Webflow Webflow Design</h3>
                  <p className='lg:text-[16px]! text-[10px]! font-medium text-white pr-[25px] lg:pl-[48px]'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                  <div className="overlay-btn">
                    <h3 className='text-center lg:text-[18px]! text-[12px]! font-bold! text-white relative icon-btn-2 cursor-pointer'>view more <FaArrowRightLong className='absolute top-[4px] lg:right-[120px] right-[30px] icon' /> </h3>
                  </div>
                </div>
              </div>
              <Images src={Card} />
            </div>
            </Link>
          </Col>
          <Col lg={4}>
           <Link to='/work'>
           <div className='img-2'>
              <div className="overlay">
                <div className="overlay-text pt-[129px]">
                  <h3 className='font-semibold! text-[24px]! text-white pb-[10px] pr-[100px] pl-[3.5rem] leading-[32px] mb-[0px]!'>Unisaas Website Design</h3>
                  <div className="overlay-btn">
                    <h3 className='pl-[3.5rem] text-[18px]! font-bold! text-[#FCD980]! relative icon-btn-2 cursor-pointer'>View portfolio <FaArrowRightLong className='absolute top-[4px] left-[180px] icon' /> </h3>
                  </div>
                </div>
              </div>
              <Images src={CardTwo} />
            </div>
           </Link>
            <Link to='/work'>
            <div className='img-3'>
            <div className="overlay">
                <div className="overlay-text pt-[129px]">
                  <h3 className='font-semibold! text-[24px]! text-white pb-[10px] pr-[100px] pl-[3.5rem] leading-[32px] mb-[0px]!'>Unisaas Website Design</h3>
                  <div className="overlay-btn">
                    <h3 className='pl-[3.5rem] text-[18px]! font-bold! text-[#FCD980]! relative icon-btn-2 cursor-pointer'>View portfolio <FaArrowRightLong className='absolute top-[4px] left-[180px] icon' /> </h3>
                  </div>
                </div>
              </div>
              <Images src={CardThree} />
            </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Project
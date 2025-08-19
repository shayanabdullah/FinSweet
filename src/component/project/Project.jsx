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
    <section className='lg:py-[128px] py-[96px] project'>
      <Container>
        <Row>
          <Col lg={4}>
            <div className="project-heading">
              <h2 className='lg:text-[48px]! font-semibold! text-[#282938] lg:pb-[64px]! pb-[1rem] m-[0]! '>View our projects</h2>
            </div>
          </Col>
          <Col lg={{ span: 2, offset: 6 }}>
           <Link to='/work'>
           <h3 className='text-[16px]! text-[#282938]! font-bold! cursor-pointer relative icon-btn  lg:p-[0] pb-[20px] '>View More
              <FaArrowRightLong className='absolute top-[2px] lg:left-[150px]  icon' />
            </h3>
           </Link>
          </Col>
        </Row>
        <Row className='gap-y-[2rem]'>
          <Col lg={8}>
            <Link to='/work'>
            <div className="img-main ">
              <div className="overlay">
                <div className="overlay-text ">
                  <h3 className='font-semibold! text-[24px]!  text-white pb-[10px] lg:pr-[35px] lg:pl-[3rem] lg:leading-[32px] leading-[28px] m-[0]! p-head'>Workhub office Webflow Webflow Design</h3>
                  <p className='lg:text-[16px]! sm:text-[10px]! md:text-[14px] font-medium text-white pr-[25px] lg:pl-[48px]'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                  <div className="overlay-btn">
                    <h3 className=' text-[18px]!  font-bold! text-white relative icon-btn-2 cursor-pointer'>view more <FaArrowRightLong className='absolute top-[3.5px] lg:right-[-20%]  icon' /> </h3>
                  </div>
                </div>
              </div>
              <Images src={Card} className='w-100'/>
            </div>
            </Link>
          </Col>
          <Col lg={4}>
         <div className="project_row">
         <Link to='/work'>
           <div className='img-2'>
              <div className="overlay">
                <div className="overlay-text lg:pt-[129px]">
                  <h3 className='font-semibold! lg:text-[24px]! text-white lg:pb-[10px] lg:pr-[100px] lg:pl-[3.5rem] lg:leading-[32px] mb-[0px]! c-text'>Unisaas Website Design</h3>
                  <div className="overlay-btn">
                    <h3 className='lg:pl-[3.5rem] lg:text-[18px]! font-bold! text-[#FCD980]! relative icon-btn-2 cursor-pointer btn-text'>View portfolio <FaArrowRightLong className='absolute top-[4px] left-[180px] icon' /> </h3>
                  </div>
                </div>
              </div>
              <Images src={CardTwo} />
            </div>
           </Link>
            <Link to='/work'>
            <div className='img-3'>
            <div className="overlay">
                <div className="overlay-text lg:pt-[129px]">
                  <h3 className='font-semibold! lg:text-[24px]! text-white lg:pb-[10px] lg:pr-[100px] lg:pl-[3.5rem] lg:leading-[32px] mb-[0px]! c-text'>Unisaas Website Design</h3>
                  <div className="overlay-btn">
                    <h3 className='lg:pl-[3.5rem] lg:text-[18px]! font-bold! text-[#FCD980]! relative icon-btn-2 cursor-pointer btn-text'>View portfolio <FaArrowRightLong className='absolute top-[4px] left-[180px] icon' /> </h3>
                  </div>
                </div>
              </div>
              <Images src={CardThree} />
            </div>
            </Link>
         </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Project
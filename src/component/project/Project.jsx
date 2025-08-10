import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRightLong } from 'react-icons/fa6'
import Images from '../../component/Images'
import Card from '../../assets/card.png'
import CardTwo from '../../assets/Card-Two.png'
import CardThree from '../../assets/Card-Three.png'
import '../../component/project/project.css'

const Project = () => {
  return (
    <section className='py-[128px]'>
      <Container>
        <Row>
          <Col lg={4}>
            <div className="project-heading">
              <h2 className='text-[48px]! font-semibold! text-[#282938] pb-[64px]!'>View our projects</h2>
            </div>
          </Col>
          <Col lg={{ span: 2, offset: 6 }}>
            <h3 className='text-[16px]! text-[#282938] font-bold! cursor-pointer relative icon-btn'>View More
              <FaArrowRightLong className='absolute top-[2px] right-[90px] icon' />
            </h3>
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <div className="img-main ">
              <div className="overlay">
                <div className="overlay-text pt-[19rem] px-[20px]">
                  <h3 className='font-semibold! text-[24px]! text-white pb-[16px] pr-[35px] pl-[3rem] leading-[32px]'>Workhub office Webflow Webflow Design</h3>
                  <p className='text-[16px]! font-medium text-white pr-[25px] pl-[48px]'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                  <div className="overlay-btn">
                    <h3 className='text-center text-[18px]! font-bold! text-white relative icon-btn-2 cursor-pointer'>view more <FaArrowRightLong className='absolute top-[4px] right-[120px] icon' /> </h3>
                  </div>
                </div>
              </div>
              <Images src={Card} />
            </div>
          </Col>
          <Col lg={4}>
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
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Project
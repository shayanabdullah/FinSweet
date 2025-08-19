import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Buttons from './Buttons'
import { FaArrowRight, FaArrowRightLong } from 'react-icons/fa6'
import Images from './Images'
import Banner from '../assets/banner.png'
import { Link } from 'react-router-dom'
import "./hero.css"
const Hero = () => {
  return (
    <section className='bg-[#1C1E53] lg:py-[128px] py-[4rem] banner'>
        <Container>
            <Row>
                <Col lg={5}>
                <div className="banner-text">
                <h1 className='lg:text-[54px]!  font-bold! text-white leading-[74px]  lg:text-left!  heading'>Building stellar websites for early startups</h1>
                <p className='lg:text-[16px] text-[14px] font-regular text-[#ffffffb3] lg:pt-[24px]  pt-[1rem] lg:pb-[48px] lg:w-[482px]! lg:text-left! '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
                <div className="lg:text-left! ">
              <Link to='/work'>
              <Buttons text='View our work'/>
              </Link>
               <Link to='./pricing'>
          <Buttons text='View Pricing' buttonInside={<FaArrowRightLong className=' icon absolute right-[20px] top-[21px]'/>} className='lg:ml-[48px]! ml-[20px]! mb-[3rem]! border-none relative icon-btn' />
          </Link>
          </div>
             
   
                </Col>
                <Col lg={{span:6, offset:1}}>
                <div className="w-full">
                <Images src={Banner} className='w-100'/>
                </div>
                
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Hero
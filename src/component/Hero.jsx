import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Buttons from './Buttons'
import { FaArrowRight, FaArrowRightLong } from 'react-icons/fa6'
import Images from './Images'
import Banner from '../assets/banner.png'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <section className='bg-[#1C1E53] py-[128px]'>
        <Container>
            <Row>
                <Col lg={5}>
                <div className="banner-text">
                <h1 className='text-[54px]! font-bold! text-white leading-[74px] heading'>Building stellar websites for early startups</h1>
                <p className='text-[16px] font-regular text-[#ffffffb3] lg:pt-[24px] lg:pb-[48px] lg:w-[482px]!'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
  
                <Buttons text='View our work'/>
               <Link to='./pricing'>
               <Buttons text='View Pricing' buttonInside={<FaArrowRightLong className=' icon absolute right-[20px] top-[21px]'/>} className='ml-[48px]! border-none relative icon-btn' />
               </Link>
   
                </Col>
                <Col lg={{span:6, offset:1}}>
                 <Images src={Banner}/>
                
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Hero
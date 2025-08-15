import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './banner.css'
import Buttons from '../Buttons'
const Banner = () => {
  return (
    <section className='lg:py-[128px] py-[96px]'>
    <Container>
        <div className="banner-text text-center lg:pb-[4rem] pb-[3rem] ">
              <h1 className='lg:text-[48px]! text-[32px] font-bold! text-[#282938]! lg:leading-[64px] leading-[2rem lg:pb-[2rem] pb-[1rem]'>Contact Us</h1>
              <p className='lg:text-[16px]! font-regular! leading-[28px] opacity-[0.7]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 <span className='block'> eiusmod tempor incididunt ut labore.  </span>
                 </p>
        </div>
      <div className="w-full lg:px-[80px] px-[30px]">
      <div className="form lg:px-[75px] px-[40px] lg:pt-[55px] lg:pb-[69px] pt-[2rem] pb-[3rem] bg-[#F4F6FC] rounded-[20px]">
          <Row>
            <Col lg={6}>
            <div className="left">
                <h2 className='lg:text-lg! text-[14px]! font-medium! text-black leading-[32px] pb-[6px] m-[0]!  '>Name</h2>
                <input type="text" placeholder='Enter your name' />
                <h2 className='lg:text-lg! text-[14px]! font-medium! text-black leading-[32px] pb-[6px] m-[0]!  lg:mt-[24px]! mt-[1rem]!'>Subject</h2>
                <input type="text" placeholder='Provide context' className='' />
            </div>
            </Col>
            <Col lg={6}>
            <div className="right">
                <h2 className='lg:text-lg! text-[14px]! font-medium! text-black leading-[32px] pb-[6px] m-[0]!'>Email</h2>
                <input type="email" placeholder='Enter your Emial' />
                <h2 className='lg:text-lg! text-[14px]! font-medium! text-black leading-[32px] pb-[6px] m-[0]!  lg:mt-[24px]! mt-[1rem]!'>Subject</h2>
                <input type="text" placeholder='Select Subject' className='' />
            </div>
            </Col>
            <h2 className='lg:text-lg! text-[14px]! font-medium! text-black leading-[32px] pb-[6px] m-[0]! lg:pt-[20px]'>Message</h2>
                <textarea className='w-full lg:py-[18px] py-[1rem] lg:pl-[2rem] pl-[1.5rem] lg:pb-[92px] pb-[20px] lg:mb-[2rem]! mb-[20px]!'>Write your question here</textarea>
              
          </Row>
          <Buttons text="Send Messege" className='bg-[#282938]!'/>
        </div>
      </div>
    </Container>
</section>
  )
}

export default Banner
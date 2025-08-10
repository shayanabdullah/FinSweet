import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import  CLientPhoto from '../assets/MaskGroup.png'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Client = () => {
  return (
    <section className='py-128px'>
        <Container>
            <Row>
                <Col lg={3}> 
                 <div className="client-text w-full">
                    <h2 className='text-[38px] font-semibold! text-[#282938] pb-[16px]'>What our clients say about us</h2>
                    <p className='text-[16px] font-regular text-[#282938] opacity-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                 </div>
                </Col>
                <Col lg={{span:8, offset:1}}>
               <div className="client lg:w-[790px] pb-[48px]">
               <h3 className='text-[32px] font-semibold!'>"The best agency we’ve worked with so far. They understand our product and are able to add new <span className='block'>features with a great focus."</span></h3>
               </div>
               <Row>
                <Col lg={1}>
                     <div className="img">
                        <img src={CLientPhoto} />
                     </div>
                </Col>
                <Col lg={3}>
                    <h4 className='text-[16px] font-medium! text-[#282938] mb-[0px]!'>Jenny Wilson</h4>
                    <p className='text-[12px] font-regular! text-[#282938]'>Vice President</p>
                </Col>
                <Col lg={{span:2, offset:6}}>
             <div className="flex w-full items-center">
                <IoIosArrowBack/>
                <IoIosArrowForward/>
             </div>
                </Col>
            </Row>
                </Col>
                 
            </Row>
       
            
        </Container>
    </section>
  )
}

export default Client
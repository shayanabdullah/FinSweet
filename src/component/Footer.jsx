import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Images from './Images'
import Logo from '../assets/Logo (1).png'
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


const Footer = () => {
    return (
        <section className='py-[96px] bg-[#1C1E53] relative'>
             <Container>
                <Row> 
                    <Col lg={5} className='pl-[0]!'>
                     <div>
                        <Images src={Logo} className='w-[10rem] cursor-pointer'/>
                        <p className='text-[16px]! text-white font-medium! pt-[24px]! pb-[86px] lg:w-[340px]'>We are always open to discuss your project and improve your online presence.</p>
                     </div>

                     <div className="box bg-[#FCD980] py-[20px] absolute bottom-0  left-[75px] ">
                      <div className=' flex items-center gap-[30px] ml-[37px] mb-[0]! mr-[137px]'>
                      <div className="item1">
                               <h2 className='text-[18px]! text-black font-medium! mb-[0]!'>Email me at</h2>
                               <p className='text-[16px]! text-black font-regular! opacity-[0.8] pt-[4px] mb-[0]!'>contact@website.com</p>
                        </div>
                        <div className="item2">
                               <h2 className='text-[18px]! text-black font-medium! mb-[0]!'>Call us</h2>
                               <p className='text-[16px]! text-black font-regular! opacity-[0.8] pt-[4px] mb-[0]!'>0927 6277 28525</p>
                        </div>
                      </div>
                     </div>
                    </Col>
                    <Col lg={{span:6, offset:1}}>
                    <div className="text-box">
                        <h2 className='text-[48px]! font-semibold! text-white'>Lets Talk!</h2>
                        <p className='text-[16px]! text-[#F4F6FC] font-regular! opacity-75! pt-[18px] pb-[28px] mb-[0]! leading-[26px]'><span className=' lg:w-[320px] block'>We are always open to discuss your project, </span>improve your online presence and help with your <span className='lg:w-[320px] block'> UX/UI design challenges.</span></p>
                    </div>

                    <div className="logos flex items-center gap-[27px] text-white cursor-pointer">
                     <FaFacebook/>
                     <FaTwitter/>
                     <FaInstagram/>
                     <FaLinkedin/>
                    </div>
                    </Col>


                </Row>
             </Container>
        </section>
    )
}

export default Footer
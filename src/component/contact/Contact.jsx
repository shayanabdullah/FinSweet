import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Images from '../../component/Images'
import contact from '../../assets/contact.png'
import '../contact/contact.css'
import Buttons from '../Buttons'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
const Contact = () => {
    return (
        <section className='py-[128px]'>
            <Container>
                <Row className='gx-0 overflow-hidden!'>
                    <Col lg={6}>
                        <div className="contact-box w-full">
                            <div className="overlay">
                                <div className="over-text pt-[96px] px-[96px]">
                                    <h3 className='text-[54px]! font-semibold! text-white pb-[24px]'>Building stellar websites for early startups</h3>
                                    <p className='text-[16px]! font-medium! text-white pr-[29px]!'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                                </div>
                            </div>
                            <Images src={contact} />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="all bg-[#1C1E53] pt-[96px] px-[96px] pb-[35px] h-full">
                            <div className="text ">
                                <h3 className='text-white text-[32px]! font-medium! pb-[30px]' >Send inquiry</h3>
                                <p className='text-[16px]! font-medium! text-white  mb-[40px]!'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                <div className="all-inputs">
                                    <div className="inputs ">
                                        <input type="text" placeholder='Your Name' className='py-[18px] pl-[32px] lg:w-full block mb-[16px]!' />
                                        <input type="email" placeholder='Email' className='py-[18px] pl-[32px] lg:w-full block mb-[16px]!' />
                                        <input type="link" placeholder='Paste your Figma design URL' className='py-[18px] pl-[32px] lg:w-full block mb-[16px]!' />
                                    </div>
                                    <Buttons text='Send an Inquiry' className='w-full mt-[39px]! bg-[#FCD980]! text-black! hover:bg-transparent! hover:text-white! mb-[28px]! ' />
                                 <div className='text-center'>
                                <Link to='/contact'>
                                <h3 className='text-[16px]! text-white font-bold! cursor-pointer relative icon-btn'>Get in touch with us
                                        <FaArrowRightLong className='absolute top-[2px] right-[120px] icon' />
                                    </h3>
                                </Link>
                                 </div>
                                </div>
                            </div>


                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact
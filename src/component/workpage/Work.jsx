import React from 'react'
import { Container } from 'react-bootstrap'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'

const Work = () => {
    return (
        <section className='lg:py-[96px] py-[48px] bg-[#F4F6FC]'>
            <Container>
                <div className="banner">
                    <div className="banner-text text-center">
                        <h5 className='text-[16px] font-medium! opacity-[0.7] lg:pb-2'>What we created</h5>
                        <h1 className='lg:text-[3rem]! text-[2rem] font-semibold! lg:pb-[2.1rem] pb-[1.5rem] text-[#282938]'>Our Work Portfolio</h1>
                        <p className='text-[16px] font-medium! opacity-[0.7] leading-[28px] lg:pb-[36px] 20px'>We help teams create great digital products by providing them with tools and technology <span className='block'>to make the design-to-code process universally accessible.</span></p>
                    </div>

                    <div className="logos flex items-center gap-[27px] text-black cursor-pointer justify-center">
                        <FaFacebook />
                        <FaTwitter/>
                        <FaInstagram />
                        <FaLinkedin/>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Work
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Images from '../../component/Images'
import banner from'../../assets/about-Banner.png'
const About = () => {
    return (
        <section className='py-[128px]'>
            <Container>
                <Row>
                    <Col lg={5}>
                        <div className="hero-text">
                            <h5 className='text-lg! font-medium! text-[#282938] '>About us</h5>
                            <h1 className='text-[54px]! font-semibold! text-[#282938] pb-[33px] ml-[0]! pl-[0]!'>Our designs solve problems</h1>
                            <p className='text-[1rem]! font-regular! opacity-[0.7] text-[#282938] leading-[26px]!'><span className='block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</span> <span className='block '>do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> Ut enim ad minim veniam.</p>
                        </div>
                    </Col>
                    <Col lg={{ span: 6, offset: 1 }}>
                    <div className="banner w-full">
                        <Images src={banner}/>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About
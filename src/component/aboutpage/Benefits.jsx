import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Cards from '../../component/Cards'
import icon1 from '../../assets/iconseven.png'
import icon2 from '../../assets/icon-3.png'
import icon3 from '../../assets/icon-1.png'
import logo from '../../assets/Logo-Section.png'
import Images from "../../component/Images"

const Benefits = () => {
    return (
        <section className='py-[128px]'>

            <Container>
                <div className="text-center">
                    <h2 className='text-[3rem]! font-semibold! text-[#282938] leading-[64px]! pb-[48px]'>The benefits of working <span className='block'>with us</span></h2>
                </div>

                <Row>
                    <Col lg={4}><Cards src={icon1} text="Customize with ease" Text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim. ' className='font-medium! ' classCard='bg-[#F4F6FC]! lg:w-[405px] pt-[50px] pl-[1.8rem]! pb-[1.8rem]!' classNameP='opacity-[0.7]!'/>
                    </Col>
                    <Col lg={4}><Cards src={icon2} text="Perfectly Responsive" Text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim. ' className='font-medium!' classCard='bg-[#F4F6FC]! lg:w-[405px] pt-[50px] pl-[1.8rem]! pb-[1.8rem]!' classNameP='opacity-[0.7]!'/>
                    </Col>
                    <Col lg={4}><Cards src={icon3} text="Friendly Support" Text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim. ' className='font-medium!' classCard='bg-[#F4F6FC]! lg:w-[405px] pt-[50px] pl-[1.8rem]! pb-[1.8rem]!' classNameP='opacity-[0.7]!'/>
                    </Col>
                </Row>

                <div className="logo-section w-full pt-[48px]">
                    <Images src={logo}/>
                </div>
            </Container>
        </section>
    )
}

export default Benefits
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import bg from '../../assets/secBg.png'
import Images from '../../component/Images'
const WhoweareSection = () => {
    return (
        <section className='pt-[80px] '>
            <Container>
                <Row className='pb-[80px]!'>
                    <Col lg={{span:5, offset:1}}>
                    <div className="text-box1">
                    <h5 className='text-lg! font-semibold! text-[#282938] '>About us</h5>
                    <h2 className='text-[2.25rem]! font-semibold! text-[#282938] pl-[0]! ml-[0]! pb-[18px]'>Goal focussed</h2>
                    <p className='text-[1rem]! font-regular! opacity-[0.7] text-[#282938] leading-[28px]!'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <span className='block'>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</span> <span className='block'>enim ad minim veniam, quis nostrud exercitation ullamco</span> laboris nisi ut aliquip ex ea commodo consequat</p>
                    </div>
                    </Col>
                    <Col lg={{span:5, offset:1}}>
                    <div className="text-box2">
                    <h2 className='text-[2.25rem]! font-semibold! text-[#282938] pl-[0]! ml-[0]! pb-[18px]'>Continuous improvement</h2>
                    <p className='text-[1rem]! font-regular! opacity-[0.7] text-[#282938] leading-[28px]!'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <span className='block'>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</span> <span className='block'>enim ad minim veniam, quis nostrud exercitation ullamco</span> laboris nisi ut aliquip ex ea commodo consequat</p>
                    </div>
                    </Col>
                </Row>
                <div className="w-full">
                    <Images src={bg}/>
                </div>
            </Container>
        </section>
    )
}

export default WhoweareSection
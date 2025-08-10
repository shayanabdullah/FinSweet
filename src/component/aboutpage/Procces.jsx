import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Images from '../Images'
import icon from '../../assets/Line and icon.png'
const Procces = () => {
  return (
<section className='py-[128px]'>
    <Container>
        <div className="header text-center">
            <h2 className='text-[48px]! font-semibold! text-[#282938] pb-[48px]'>The process we follow</h2>
        </div> 
        <Row>
            <Col lg={3}>
            <div className="box w-full">
                <Images src={icon}/>
                <h3 className='text-[24px]! font-semibold! text-[#282938] pt-[32px]'>Planning</h3>
                <p className='text-[16px] font-regular! opacity-[0.7] text-[#282938] lg:w-[270px] '>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
            </Col>
            <Col lg={3}>
            <div className="box w-full">
                <Images src={icon}/>
                <h3 className='text-[24px]! font-semibold! text-[#282938] pt-[32px]'>Conception</h3>
                <p className='text-[16px] font-regular! opacity-[0.7] text-[#282938] lg:w-[270px] '>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
            </Col>
            <Col lg={3}>
            <div className="box w-full">
                <Images src={icon}/>
                <h3 className='text-[24px]! font-semibold! text-[#282938] pt-[32px]'>Design</h3>
                <p className='text-[16px] font-regular! opacity-[0.7] text-[#282938] lg:w-[270px] '>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
            </Col>
            <Col lg={3}>
            <div className="box w-full">
                <Images src={icon}/>
                <h3 className='text-[24px]! font-semibold! text-[#282938] pt-[32px]'>Development    </h3>
                <p className='text-[16px] font-regular! opacity-[0.7] text-[#282938] lg:w-[270px] '>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
            </Col>
        </Row>
    </Container>
</section>
  )
}

export default Procces
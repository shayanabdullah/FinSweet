import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Images from '../Images'
import TeamCard from '../../assets/Team-Card.png'
import TeamCard2 from '../../assets/Team-Card2.png'
import TeamCard3 from '../../assets/Team-Card3.png'
import TeamCard4 from '../../assets/Team-Card4.png'
import '../../component/aboutpage/Team.css'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
const Team = () => {
  return (
    <section className='py-[128px] bg-[#F4F6FC]'>
        <Container>
            <div className="text-center">
                <h2 className='text-[3rem]! font-semibold! text-[#282938] leading-[64px]! pb-[48px]'>Meet our team</h2>
            </div>
            <Row className='gap-32px'>
                <Col lg={3}>
               
                <div className="card px-[64px] pt-[48px] pb-[32px] flex flex-col items-center">
                   <div className="img-box">
                    <div className="overlays">
                    <div className="icon-boxs  flex gap-[11px] z-[10]">
                <FaFacebook className='icons'/>
                   <FaTwitter className='icons'/>
                   <FaLinkedin className='icons'/>
                </div>
                    </div>
                   <Images src={TeamCard}/>
                
                   </div>
                     <h4 className=' pt-[32px] text-[24px]! font-medium!  leading-[36px]! text-[#1D2130] m-[0]!'>John Smith</h4>
                     <p className='text-[1rem]! font-regular! opacity-[0.7] text-[#282938] leading-[28px]! m-[0]!'>CEO</p>
                </div>
            </Col>
                <Col lg={3}>
                <div className="card px-[64px] pt-[48px] pb-[32px] flex flex-col items-center">
                <div className="img-box">
                    <div className="overlays">
                    <div className="icon-boxs  flex gap-[11px] z-[10]">
                <FaFacebook className='icons'/>
                   <FaTwitter className='icons'/>
                   <FaLinkedin className='icons'/>
                </div>
                    </div>
                   <Images src={TeamCard2}/>
                
                   </div>
                     <h4 className=' pt-[32px] text-[24px]! font-medium!  leading-[36px]! text-[#1D2130] m-[0]!'>Simon Adams</h4>
                     <p className='text-[1rem]! font-regular! opacity-[0.7] text-[#282938] leading-[28px]! m-[0]!'>CTO</p>
                </div>
            </Col>
                <Col lg={3}>
                <div className="card px-[64px] pt-[48px] pb-[32px] flex flex-col items-center">
                <div className="img-box">
                    <div className="overlays">
                    <div className="icon-boxs  flex gap-[11px] z-[10]">
                <FaFacebook className='icons'/>
                   <FaTwitter className='icons'/>
                   <FaLinkedin className='icons'/>
                </div>
                    </div>
                   <Images src={TeamCard4}/>
                
                   </div>
                     <h4 className=' pt-[32px] text-[24px]! font-medium!  leading-[36px]! text-[#1D2130] m-[0]!'>Paul Jones</h4>
                     <p className='text-[1rem]! font-regular! opacity-[0.7] text-[#282938] leading-[28px]! m-[0]!'>Design Lead</p>
                </div>
            </Col>
                <Col lg={3}>
                <div className="card px-[64px] pt-[48px] pb-[32px] flex flex-col items-center">
                <div className="img-box">
                    <div className="overlays">
                    <div className="icon-boxs  flex gap-[11px] z-[10]">
                <FaFacebook className='icons'/>
                   <FaTwitter className='icons'/>
                   <FaLinkedin className='icons'/>
                </div>
                    </div>
                   <Images src={TeamCard3}/>
                
                   </div>
                     <h4 className=' pt-[32px] text-[24px]! font-medium!  leading-[36px]! text-[#1D2130] m-[0]!'>Sara Hardin</h4>
                     <p className='text-[1rem]! font-regular! opacity-[0.7] text-[#282938] leading-[28px]! m-[0]!'>Project Manager</p>
                </div>
            </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Team
import React from 'react'
import { Container, Row , Col } from 'react-bootstrap'
import Cards from './Cards'
import icon1 from '../assets/icon (1).png'
import icon2 from '../assets/icon (2).png'
import icon3 from '../assets/icon (3).png'
import icon4 from '../assets/icon (4).png'
import icon5 from '../assets/icon (5).png'
import icon6 from '../assets/icon (7).png'
const Features = () => {
  return (
    <section className='py-[128px]'>
         <Container>
              <div className='features'>
              <div className='text-center'>
           <h5 className='text-[16px]! font-semibold! text-[#282938] pb-[12px]'>Features</h5>
           </div>
           <Row>
         <div className='w-full flex justify-center! '>
         <Col lg={6} >
             <div className='text-center w-full flex justify-center!'>
             <h2 className='text-[48px]! font-bold! text-[#282938] lg:w-[580px]  pb-[47px]'>Design that solves <span className='block'>problems, one product at a time</span></h2>
             </div>
            </Col>
         </div>
           </Row>
              </div>

         <Row>
            <Col lg={4}>
            <Cards src={icon1} text="Uses Client First" Text='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '/>
            </Col>
            <Col lg={4}>
            <Cards src={icon2} text="Two Free Revision Round" Text='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '/></Col>
            <Col lg={4}>
            <Cards src={icon3} text="Template Customization" Text='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '/></Col>
            <Col lg={4}>
            <Cards src={icon4} text="24/7 Support" Text='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '/>
            </Col>
            <Col lg={4}>
            <Cards src={icon5} text="Quick Delivery" Text='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '/></Col>
            <Col lg={4}>
            <Cards src={icon6} text="Hands-on approach" Text='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '/></Col>
         </Row>
         </Container>
    </section>
  )
}

export default Features
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Buttons from '../Buttons'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Images from '../Images'
import banner from '../../assets/featurebanner.svg'
const Banner = () => {
  return (
    <section className='py-[128px] bg-[#1C1E53]'>

      <Container>
        <Row>
          <Col lg={6}>
            <div className="banner-text">
              <h1 className='text-[54px]! font-bold! text-white leading-[74px] pr-[180px] heading'>All the features you need</h1>
              <p className='text-[16px] font-regular text-[#ffffffb3] lg:pt-[32px] lg:pb-[32px] lg:w-[482px]!'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <Link to='/pricing'>
              <Buttons text='View Pricing' className='icon-btn bg-[#FCD980]! text-black!' />
            </Link>

          </Col>
          <Col lg={6}>
            <div className="img-box">
              <Images src={banner} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
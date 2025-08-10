import React from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import { FaArrowRightLong } from 'react-icons/fa6'

const FAQ = () => {
    return (
        <section className='py-[128px]'>
            <Container>
                <Row>
                    <Col lg={3}>
                        <div className="faq-text">
                            <h2 className='text-[38px] font-semibold! text-[#282938]' >Frequently
                                <span className='block'>
                                    asked questions
                                </span>
                            </h2>
                            <h4 className='text-[18px] font-medium! text-[#2405F2] cursor-pointer relative icon-btn contact'>Contact us for more info
                                <FaArrowRightLong className='absolute top-[4px] left-[90px] icon' />
                            </h4>
                        </div>
                    </Col>
                    <Col lg={{ span: 6, offset: 3 }}>
                    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" className='bg-white! border-none! outline-none! acc '>
        <Accordion.Header className='! font-medium! text-[#282938] bg-white!'> <span className='text-[24px]! font-semibold! text-[#2405F2] mr-[59px]  border-b border-solid! border-[#ECECF1]'>01</span>
        <span className='text-[24px]!'>How much time does it take?</span>
        </Accordion.Header>
        <Accordion.Body className='pl-[93px]! border-b border-solid! border-[#ECECF1]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className=' border-none! outline-none!'>
      <Accordion.Header className='text-[24px]!font-medium! text-[#282938]'> <span className='text-[24px]! font-semibold! text-[#2405F2] mr-[59px]  border-b border-solid! border-[#ECECF1]'>02</span>
      <span className='text-[24px]!'>What is your class naming convention?</span>
        </Accordion.Header>
        <Accordion.Body className='pl-[93px]!  border-b border-solid! border-[#ECECF1]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className=' border-none! outline-none!'>
      <Accordion.Header className='text-[24px]! font-medium! text-[#282938]  border-b border-solid! border-[#ECECF1]'> <span className='text-[24px]! font-semibold! text-[#2405F2] mr-[59px]'>03</span>
    <span className='text-[24px]!'>  How do you communicate?</span>
        </Accordion.Header>
        <Accordion.Body className='pl-[93px]!  border-b border-solid! border-[#ECECF1]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className=' border-none! outline-none!'>
      <Accordion.Header className='text-[24px]! font-medium! text-[#282938]  border-b border-solid! border-[#ECECF1]'> <span className='text-[24px]! font-semibold! text-[#2405F2] mr-[59px]'>04</span>
      <span className='text-[24px]!'>I have a bigger project. Can you handle it?</span>
        </Accordion.Header>
        <Accordion.Body className='pl-[93px]!  border-b border-solid! border-[#ECECF1]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" className=' border-none! outline-none!'>
      <Accordion.Header className='text-[24px]! font-medium! text-[#282938]'> <span className='text-[24px]! font-semibold! text-[#2405F2] mr-[59px]  border-b border-solid! border-[#ECECF1]'>05</span>
   <span className='text-[24px]!'>   What is your class naming convention?</span>
        </Accordion.Header>
        <Accordion.Body className='pl-[93px]!  border-b border-solid! border-[#ECECF1]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default FAQ
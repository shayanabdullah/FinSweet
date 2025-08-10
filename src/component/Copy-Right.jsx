import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const CopyRight = () => {
    return (
        <footer className='py-[32px] flex items-center'>
            <Container>
                <Row className='items-center!'>
                    <Col lg={3}>
                        <div className="copy">
                            <h2 className='text-[16px]! font-medium! text-[#282938]'>Copyright 2025, Finsweet.com</h2>
                        </div>
                    </Col>
                    <Col lg={{ span: 5, offset: 4 }}>
                    <div className="menu">
                        <ul className='flex items-center gap-[2rem] pl-[45px]! copy-ul '>
                            <li className='text-[16px]! font-semibold text-[#282938]! cursor-pointer '>Home</li>
                            <li className='text-[16px]! font-semibold text-[#282938]! cursor-pointer '>About</li>
                            <li className='text-[16px]! font-semibold text-[#282938]! cursor-pointer '>Features</li>
                            <li className='text-[16px]! font-semibold text-[#282938]! cursor-pointer '>Pricing</li>
                            <li className='text-[16px]! font-semibold text-[#282938]! cursor-pointer'>FAQ</li>
                        </ul>
                    </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default CopyRight
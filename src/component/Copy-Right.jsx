import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CopyRight = () => {
    return (
        <footer className='py-[32px] flex items-center'>
            <Container>
                <Row className='items-center!'>
                    <Col lg={3}>
                        <div className="copy">
                            <h2 className='text-[16px]! font-medium! text-[#282938]'>
                                Copyright 2025, Finsweet.com
                            </h2>
                        </div>
                    </Col>
                    <Col lg={{ span: 5, offset: 4 }}>
                        <div className="menu">
                            <ul className='flex items-center gap-[2rem] pl-[45px]! copy-ul'>
                                <li>
                                    <Link to="/" className='text-[16px]! font-semibold text-[#282938]!'>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className='text-[16px]! font-semibold text-[#282938]!'>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/feature" className='text-[16px]! font-semibold text-[#282938]!'>
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/pricing" className='text-[16px]! font-semibold text-[#282938]!'>
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/feature#faq" className='text-[16px]! font-semibold text-[#282938]!'>
                                        FAQ
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blog" className='text-[16px]! font-semibold text-[#282938]!'>
                                        Blog
                                    </Link>
                                </li>
                              
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default CopyRight

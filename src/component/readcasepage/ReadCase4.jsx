import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import port2 from '../../assets/portfolio4..png'
import img2 from '../../assets/readcaseimg1.png'
import Images from '../Images'
import './readcase.css'
import CTA from '../workpage/CTA'
const ReadCase4 = () => {
    return (
        <>
            <section className='lg:pt-[128px] pt-[96px] lg:pb-[96px] pb-[48px]'>
                <Container>
                    <Row>
                        <Col lg={5}>
                            <div className="banner-text">
                                <p className='lg:text-[24px]! text-lg! font-medium! leading-[36px] opacity-[0.8] text-[#282938] lg:pb-[24px] pb-[16px]'>Web design and development</p>
                                <h1 className='lg:text-[48px]! text-[32px]! font-semibold! leading-[64px] text-[#282938]'>Finsweet Design case studies</h1>
                            </div>
                        </Col>
                    </Row>
                    <div className="text w-full">
                        <p className='lg:text-[16px]! font-medium! leading-[28px] opacity-[0.7] lg:pt-[16px] pt-[10px] text-[#282938] lg:pb-[3rem] pb-[2rem] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            <span className='block'> et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</span>
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
                        </p>
                        <div className="img w-full">
                            <Images src={port2} className='w-full' />
                        </div>
                    </div>
                    <div className="services w-full lg:pt-[48px] pt-[30px] lg:pb-[32px] pb-[24px] border-b border-solid border-[#282938] opacity-[0.8] text-center lg:text-left!">
                        <Row>
                            <Col lg={4}>
                                <div className="text">
                                    <p className='lg:text-[16px]! font-medium! leading-[28px] opacity-[0.8] text-[#282938] lg:pb-[4px] pb-[2px] m-[0]!'>Client</p>
                                    <h3 className='lg:text-[24px]! text-lg! font-semibold! leading-[36px]  text-[#282938]! m-[0]!'>facebook.com</h3>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="text">
                                    <p className='lg:text-[16px]! font-medium! leading-[28px] opacity-[0.8] text-[#282938] lg:pb-[4px] pb-[2px] m-[0]!'>Service</p>
                                    <h3 className='lg:text-[24px]! text-lg! font-semibold! leading-[36px] text-[#282938]! m-[0]!'>Product Design</h3>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="text">
                                    <p className='lg:text-[16px]! font-medium! leading-[28px] opacity-[0.8] text-[#282938] lg:pb-[4px] pb-[2px] m-[0]!'>Deliverable</p>
                                    <h3 className='lg:text-[24px]! text-lg! font-semibold! leading-[36px] text-[#282938]! m-[0]!'>UI Screens, UX Flow & Prototype</h3>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            <section className='lg:pt-[96px] pt-[64px] lg:pb-[112px] pb-[96px] '>
                <Container>
                    <div className="all lg:px-[114px] px-[3rem]">
                        <div className="">
                            <h2 className='lg:text-[38px]! text-[24px]! font-semibold! leading-[56px] text-[#282938] lg:pb-[29px] pb-[18px]'>About the project</h2>
                            <p className='lg:text-[16px]! font-medium! leading-[28px] opacity-[0.7] text-[#282938] lg:pb-[24px] pb-[1rem] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                <span className='block'>  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</span>
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                <span className='block'> fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </span>mollit anim id est laborum.</p>
                        </div>
                       <div className="all-list lg:pb-[4rem] pb-[3rem]">
                       <ul className='ul'>
                            <li className='lg:text-[16px]! font-medium! leading-[28px] '>
                                <span className='opacity-[0.7] text-[#282938]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                            </li>
                            <li className='lg:text-[16px]! font-medium! leading-[28px] '>
                                <span className='opacity-[0.7] text-[#282938]'>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</span>
                            </li>
                            <li className='lg:text-[16px]! font-medium! leading-[28px] '>
                                <span className='opacity-[0.7] text-[#282938]'>Duis aute irure dolor in reprehenderit in voluptate velit esse</span>
                            </li>
                            <li className='lg:text-[16px]! font-medium! leading-[28px] '>
                                <span className='opacity-[0.7] text-[#282938]'>Excepteur sint occaecat cupidatat non proident, sunt in culpa</span>
                            </li>
                        </ul>
                        
                       </div>
                       <div className="img w-full lg:pb-[4rem] pb-[3rem]">
                            <Images src={img2} className="w-full"/>
                        </div>
                        <div className="how">
                            <h2 className='lg:text-[38px]! text-[24px] font-semibold! leading-[56px] text-[#282938] lg:pb-[27px] pb-[20px]'>
                            How we do it
                            </h2>
                            <p className='lg:text-[16px]! font-medium! leading-[28px] opacity-[0.7] text-[#282938] lg:pb-[24px] pb-[16px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et

                      <span className='block'>dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</span>
                              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                              <span className='block'>  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt fugiat nulla pariatur.</span>
                                mollit anim id est laborum.
                            </p>
                            <div className="all-ul">
                            <ul className='ul'>
                            <li className='lg:text-[16px]! font-medium! leading-[28px] '>
                                <span className='opacity-[0.7] text-[#282938]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                            </li>
                            <li className='lg:text-[16px]! font-medium! leading-[28px] '>
                                <span className='opacity-[0.7] text-[#282938]'>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</span>
                            </li>
                            <li className='lg:text-[16px]! font-medium! leading-[28px] '>
                                <span className='opacity-[0.7] text-[#282938]'>Duis aute irure dolor in reprehenderit in voluptate velit esse</span>
                            </li>
                            <li className='lg:text-[16px]! font-medium! leading-[28px] '>
                                <span className='opacity-[0.7] text-[#282938]'>Excepteur sint occaecat cupidatat non proident, sunt in culpa</span>
                            </li>
                        </ul>
                            </div>
                        </div>
                        <div className="box border-y  border-solid border-[#282938] opacity-[0.8] text-center lg:text-left!  lg:mt-[112px] mt-[96px]">
                        <div className="flex flex-wrap lg:py-[24px] py-[18px] items-center lg:gap-[59px] gap-[20px] ">
                                <h2 className='lg:text-[24px]! text-lg! font-semibold! leading-[36px] text-[#2405F2]!'>Keywords</h2>
                                <p className='lg:text-lg! text-lg font-medium! leading-[32px] opacity-[0.7] text-[#282938] m-[0]!'>
                                    Design 

                                </p>
                                <p className='lg:text-lg! text-lg font-medium! leading-[32px] opacity-[0.7] text-[#282938] m-[0]!'>
                                UI/UX  

                                </p>
                                <p className='lg:text-lg! text-lg font-medium! leading-[32px] opacity-[0.7] text-[#282938] m-[0]!'>
                                Wireframing

                                </p>
                                <p className='lg:text-lg! text-lg font-medium! leading-[32px] opacity-[0.7] text-[#282938] m-[0]!'>
                                Branding

                                </p>
                                <p className='lg:text-lg! text-lg font-medium! leading-[32px] opacity-[0.7] text-[#282938] m-[0]!'>
                                Development

                                </p>
                                <p className='lg:text-lg! text-lg font-medium! leading-[32px] opacity-[0.7] text-[#282938] m-[0]!'>
                                webflow

                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
                <CTA/>
            </section>
        </>
    )
}

export default ReadCase4
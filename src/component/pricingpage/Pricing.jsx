import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Images from '../Images'
import pointer from '../../assets/pointer.png'
import pointer2 from '../../assets/pointer2.png'
import '../pricingpage/pricing.css'

const Pricing = () => {
    return (
        <section className='py-[128px] pricing'>
            <Container>
                <div className="heading text-center">
                    <h2 className='text-[3rem]! font-semibold! text-[#282938] pb-[18px]'>Our Pricing Plans</h2>
                    <p className='text-[1rem]! font-medium! text-[#282938] opacity-[0.7] pb-[4rem]'>
                        <span className='block'>     When you’re ready to go beyond prototyping in Figma, Webflow is</span>
                        ready to help you bring your designs to life — without coding them.</p>
                </div>
                <Row>
                    <Col lg={4}>
                        <div className="card py-[4rem]  pl-[3rem] w-full relative">
                            <div className="card-heading">
                                <h3 className='text-[2.6rem]! font-semibold! heading pb-[22px] leading-[56px]'>$299
                                    <span className='text-[1rem]! font-medium! text-[#2405F2] pl-[0.5rem] span'>Per Design</span>
                                </h3>

                                <h4 className='text-[1.5rem]! font-semibold! title text-[#282938] leading-[2.5rem] pb-[12px]'>Landing Page </h4>
                                <p className='text-[1rem]! font-medium! text-[#282938] opacity-[0.7]leading-[29px] pb-[50px]! p'>When you’re ready to go beyond <span className='block'> prototyping in Figma,</span> </p>
                            </div>

                            <div className="card-features pb-[5rem]">
                                <div className="flex items-center gap-[12px] pb-[22px] card-features">
                                    <Images src={pointer} />
                                    <p className='text-[1rem]! font-regular! text-[#282938] m-[0]! p'>All limited links</p>
                                </div>
                                <div className="flex items-center gap-[12px] pb-[22px] card-features">
                                    <Images src={pointer} />
                                    <p className='text-[1rem]! font-regular! text-[#282938] m-[0]! p'>Own analytics platform</p>
                                </div>
                                <div className="flex items-center gap-[12px] pb-[22px] card-features">
                                    <Images src={pointer} />
                                    <p className='text-[1rem]! font-regular! text-[#282938] m-[0]! p'>Chat support</p>
                                </div>
                                <div className="flex items-center gap-[12px] pb-[22px] card-features">
                                    <Images src={pointer2} />
                                    <p className='text-[1rem]! font-regular! text-[#282938] m-[0]!  opacity-[0.7] p' >Optimize hashtags</p>
                                </div>
                                <div className="flex items-center gap-[12px] pb-[22px] card-features">
                                    <Images src={pointer2} />
                                    <p className='text-[1rem]! font-regular! text-[#282938] m-[0]! p opacity-[0.7]'>Unlimited users</p>
                                </div>

                            </div>

                            <div className="flex justify-center w-full btn-box">
                            <button className=' bg-[#282938] text-white p-btn' >Get started</button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="card2 py-[4rem] bg-[#1C1E53] hover:bg-[#244BAF]  duration-500   pl-[3rem] w-full relative">
                            <div className="card-heading">
                                <h3 className='text-[2.6rem]! font-semibold! text-white heading pb-[22px] leading-[56px]'>$399
                                    <span className='text-[1rem]! font-medium! text-[#FCD980] pl-[0.5rem] span'>Multi Design</span>
                                </h3>

                                <h4 className='text-[1.5rem]! font-semibold! title text-white leading-[2.5rem] pb-[12px]'>Landing Page </h4>
                                <p className='text-[1rem]! font-medium! text-white opacity-[0.7]leading-[29px] pb-[50px]! p'>When you’re ready to go beyond <span className='block'> prototyping in Figma, Webflow’s ready to help.</span>  </p>
                            </div>

                            <div className="card-features pb-[5rem]">
                                <div className="flex items-center gap-[12px] pb-[22px] card-features">
                                    <Images src={pointer} />
                                    <p className='text-[1rem]! font-regular! text-white m-[0]! p'>All limited links</p>
                                </div>
                                <div className="flex items-center gap-[12px] pb-[22px] card-features">
                                    <Images src={pointer} />
                                    <p className='text-[1rem]! font-regular! text-white m-[0]! p'>Own analytics platform</p>
                                </div>
                                <div className="flex items-center gap-[12px] pb-[22px] card-features">
                                    <Images src={pointer} />
                                    <p className='text-[1rem]! font-regular! text-white m-[0]! p'>Chat support</p>
                                </div>
                                <div className="flex items-center gap-[12px] pb-[22px] card-features">
                                    <Images src={pointer} />
                                    <p className='text-[1rem]! font-regular! text-white m-[0]!   p' >Optimize hashtags</p>
                                </div>
                                <div className="flex items-center gap-[12px] pb-[22px] card-features">
                                    <Images src={pointer} />
                                    <p className='text-[1rem]! font-regular! text-white m-[0]! p ]'>Unlimited users</p>
                                </div>

                            </div>

                            <div className="flex justify-center w-full btn-box">
                            <button className=' bg-[#FCD980] text-black  p-btn' >Get started</button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="card pt-[4rem] pb-[3.5rem]  pl-[3rem] w-full relative">
                            <div className="card-heading">
                                <h3 className='text-[2.6rem]! font-semibold! heading pb-[22px] leading-[56px]'> $499 +
                                    <span className='text-[1rem]! font-medium! text-[#2405F2] pl-[0.5rem] span'>Per Design</span>
                                </h3>

                                <h4 className='text-[1.5rem]! font-semibold! title text-[#282938] leading-[2.5rem] pb-[12px]'>Complex Project </h4>
                                <p className='text-[1rem]! font-medium! text-[#282938] opacity-[0.7]leading-[29px] pb-[50px]! p'>When you’re ready to go beyond <span className='block'> prototyping in Figma,</span> </p>
                            </div>

                            <div className="card-features pb-[5rem]">
                                <div className="flex items-center gap-[12px] pb-[22px] card-features">
                                    <Images src={pointer} />
                                    <p className='text-[1rem]! font-regular! text-[#282938] m-[0]! p'>All limited links</p>
                                </div>
                                <div className="flex items-center gap-[12px] pb-[22px] card-features">
                                    <Images src={pointer} />
                                    <p className='text-[1rem]! font-regular! text-[#282938] m-[0]! p'>Own analytics platform</p>
                                </div>
                                <div className="flex items-center gap-[12px] pb-[22px] card-features">
                                    <Images src={pointer} />
                                    <p className='text-[1rem]! font-regular! text-[#282938] m-[0]! p'>Chat support</p>
                                </div>
                                <div className="flex items-center gap-[12px] pb-[22px] card-features">
                                    <Images src={pointer} />
                                    <p className='text-[1rem]! font-regular! text-[#282938] m-[0]!  opacity-[0.7] p' >Optimize hashtags</p>
                                </div>
                                <div className="flex items-center gap-[12px] pb-[22px] card-features">
                                    <Images src={pointer} />
                                    <p className='text-[1rem]! font-regular! text-[#282938] m-[0]! p opacity-[0.7]'>Unlimited users</p>
                                </div>
                                <div className="flex items-center gap-[12px] pb-[22px] card-features">
                                    <Images src={pointer} />
                                    <p className='text-[1rem]! font-regular! text-[#282938] m-[0]! p opacity-[0.7]'>Assist and Help</p>
                                </div>

                            </div>

                            <div className="flex justify-center w-full btn-box">
                            <button className=' bg-[#282938] text-white p-btn' >Get started</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Pricing
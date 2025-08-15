import React from 'react'
import { Button, Container } from 'react-bootstrap'
import Images from '../Images'
import img1 from '../../assets/BlogBanner.png'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const ReadBlog1 = () => {
    return (
        <>
        <section className='lg:pt-[128px] lg:pb-[80px] pt-[96px] pb-[64px]'>
            <Container>
                <div className="banner-text text-center">
                    <h1 className='lg:text-[48px]! text-[32px] font-bold! text-[#282938] lg:leading-[64px] leading-[2rem] pb-[16px]'>A UX Case Study on Creating a
                        <span className='block'>Studious Environment for Students</span>
                    </h1>
                    <p className='lg:text-[18px]! text-[16px] font-semibold! text-[#282938] leading-[28px] lg:pb-[2rem] pb-[1.5rem]'>Andrew Jonson
                        Posted on 27th January 2021</p>
                        <div className="img-box w-full lg:pb-[3rem] pb-[2rem]">
                            <Images src={img1}/>
                        </div>
                        <div className="para lg:pb-[1.5rem] pb-[1rem]">
                            <p className='text-[16px] font-regular! text-[#282938] leading-[28px] opacity-[0.7] '>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the 

                              <span className='block'>  stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the </span>

                                spectator on a hillside.</p>
                        </div>
                </div>
            </Container>
        </section>

        <section className='lg:pb-[96px] pb-[64px]'>
            <Container>
                <div className="text-part lg:px-[220px] px-[20px]">
                    <h2 className='lg:text-[38px]! text-[24px]! font-semibold! lg:leading-[56px]! text-[#282938] lg:pb-[2rem] pb-[1.5rem]'>
                    Lorem ipsum dolor sit amet, consectetur 
                    <span className='block'>adipiscing elit.</span>
                    </h2>
                    <p className='lg:text-[16px]! font-regular! leading-[28px] opacity-[0.7] lg:pb-[40px] pb-[32px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                        <h2 className='lg:text-[38px]! text-[24px]! font-semibold! lg:leading-[56px]! text-[#282938] lg:pb-[2rem] pb-[1.5rem]'>
                        Ut enim ad minim veniam, quis nostrud.
                    </h2>

                    <p className='lg:text-[16px]! font-regular! leading-[28px] opacity-[0.7] lg:pb-[40px] pb-[32px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                      <div className="lg:pb-[24px]! pb-2">
                      <ul className='ul '>
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

                      <p className='lg:text-[16px]! font-regular! leading-[28px] opacity-[0.7] lg:pb-[40px] pb-[32px]'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <h2 className='lg:text-[38px]! text-[24px]! font-semibold! lg:leading-[56px]! text-[#282938] lg:pb-[2rem] pb-[1.5rem]'>
                        Ut enim ad minim veniam, quis nostrud.
                    </h2>
                    <p className='lg:text-[16px]! font-regular! leading-[28px] opacity-[0.7] lg:pb-[40px] pb-[32px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                </div>
            </Container>
        </section>
        </>
    )
}

export default ReadBlog1
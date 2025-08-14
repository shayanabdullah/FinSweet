import React from 'react'
import { Button, Container } from 'react-bootstrap'
import Images from '../Images'
import img1 from '../../assets/BlogBanner.png'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <section className='lg:py-[128px] py-[96px]'>
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
                      <Link>
                      <div className="flex items-center group duration-400 justify-center">
                    <Button className='bg-white text-black! border-none! text-[16px]! font-medium! opacity-[0.7]'>Read More </Button>
                    <FaArrowRightLong className='icon group-hover:translate-x-[20px] text-black!'/>
                </div>
                      </Link>
                </div>
            </Container>
        </section>
    )
}

export default Banner
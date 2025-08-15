import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Images from '../Images'
import img3 from "../../assets/portfolio3.png"
import img4 from "../../assets/portfolio4..png"
import img5 from "../../assets/portfolio5.png"
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'
import WorkSection from '../../pages/WorkSection'
import Work from './Work'
import CTA from './CTA'
const WebFlow = () => {
  return (
   <>
   <Work/>
   <section className='lg:py-[96px] py-[48px]'>
    <Container>
        <div className="all-links flex justify-center items-center lg:pb-[3rem]">
            <ul className='flex flex-wrap items-center lg:gap-x-[2rem] gap-x-[20px]'>
               <Link className='a' to="/all">
               <li className='text-lg font-medium! text-[#2405F2] opacity-[0.7] hover:text-[#2405F2] duration-300 '>
                       All
                </li>
               </Link>
               <Link className='a' to='/ui'>
               <li className='text-lg font-medium! text-[#282938] opacity-[0.7] hover:text-[#2405F2] duration-300'>
               UI Design
                </li>
               </Link>
               <Link className='a' to='/webflow'>
               <li className='text-lg font-medium! text-[#282938] opacity-[0.7] hover:text-[#2405F2] duration-300'>
               Webflow Design
                </li>
               </Link>
               <Link className='a' to='/figma'>
               <li className='text-lg font-medium! text-[#282938] opacity-[0.7] hover:text-[#2405F2] duration-300'>
               Figma Design
                </li>
               </Link>
            </ul>
        </div>
        <Row className='gap-y-[5rem]'>
            <Col lg={6}>
       <Link to='/readcase3'>
       <div className="work-card1">
          <div className="img-box w-full lg:pb-[26px]">
                <Images className="w-full" src={img3}/>
            </div>
            <div className="project-title">
                <h2 className='lg:text-[2.6rem]! font-semibold! leading-[56px]! text-[#282938]! lg:pb-[27px] '>Template 1</h2>
                <p className='text-[16px] font-regular! text-[#282938] opacity-[0.7]'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                <Link to='/readcase3'>
                <button className='text-[18px]! font-bold! text-[#282938] relative icon-btn-2 cursor-pointer '>Read case study <FaArrowRightLong className='absolute top-[5px] right-[-1.8rem] icon'/></button>
                </Link>
            </div>
          </div>
       </Link>
            </Col>
            <Col lg={6}>
         <Link to='/readcase4'>
         <div className="work-card2">
          <div className="img-box w-full lg:pb-[26px]">
                <Images className="w-full" src={img4}/>
            </div>
            <div className="project-title">
                <h2 className='lg:text-[2.6rem]! font-semibold! leading-[56px]! text-[#282938]! lg:pb-[27px] '>Template 2</h2>
                <p className='text-[16px] font-regular! text-[#282938] opacity-[0.7]'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                <Link to='/raedcase4'>
                <button className='text-[18px]! font-bold! text-[#282938] relative icon-btn-2 cursor-pointer '>Read case study <FaArrowRightLong className='absolute top-[5px] right-[-1.8rem] icon'/></button>
                </Link>
            </div>
          </div>
         </Link>
            </Col>
            <Col lg={12}>
         <Link to="/readcase5">
         <div className="work-card2">
          <div className="img-box w-full lg:pb-[26px]">
                <Images className="w-full" src={img5}/>
            </div>
            <div className="project-title">
                <h2 className='lg:text-[2.6rem]! font-semibold! leading-[56px]! text-[#282938]! lg:pb-[27px] '>Template 2</h2>
                <p className='text-[16px] font-regular! text-[#282938] opacity-[0.7]'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                <Link to='/readcase5'>
                <button className='text-[18px]! font-bold! text-[#282938] relative icon-btn-2 cursor-pointer '>Read case study <FaArrowRightLong className='absolute top-[5px] right-[-1.8rem] icon'/></button>
                </Link>
            </div>
          </div>
         </Link>
            </Col>
        </Row>
    </Container>
</section>
<CTA/>  
   </>
  )
}

export default WebFlow
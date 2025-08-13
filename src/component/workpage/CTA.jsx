import React from 'react'
import { Container } from 'react-bootstrap'

const CTA = () => {
  return (
   <section className='lg:py-[128px] 48px'>
<Container>
    <div className="flex flex-col flex-wrap items-center justify-center">
       <div className="cta-text">
        <h2 className='lg:text-[3rem]! text-[2rem] font-semibold! text-[#282938] lg:leading-[4rem]! lg:pb-[27px] pb-[16px]'>Let's build something great <span className='block text-center'>together</span></h2>
        <p className='text-center text-[16px] font-medium! opacity-[0.7] leading-[28px] pb-[20px] lg:pb-[40px]'>Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies <span className='block text-center'>nec dolor sit amet, scelerisque cursus purus.</span></p>
       </div>
      <div className="" >
      <button className=' bg-[#FCD980] text-black hover:bg-transparent p-btn duration-300 border border-white hover:border-black!'  >Contact Us</button>
      </div>
    </div>
</Container>
   </section>
  )
}

export default CTA
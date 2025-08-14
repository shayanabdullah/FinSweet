import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BlogCard from '../blog/BlogCard'
import img1 from '../../assets/blogpagecard1.png'
import img2 from '../../assets/blogpagecard2.png'
import img3 from '../../assets/blogpagecard3.png'
import img4 from '../../assets/blogpagecard4.png'
import img5 from '../../assets/blogpagecard5.png'
import img6 from '../../assets/blogpagecard6.png'
const BlogCards = () => {
  return (
    <section className='lg:pb-[128px] pb-[5rem]'>

        <Container>
          <div className="header text-center">
               <h2 className='lg:text-[48px]! text-[32px] font-bold! text-[#282938] lg:leading-[64px] lg:pb-[3rem] pb-[1.9rem]'>Our blog</h2>
          </div>
            <Row className='gap-y-[3rem]'>
                <Col lg={4}>
                <BlogCard src={img1}/>
                </Col>
                <Col lg={4}>
                <BlogCard src={img2}/>
                </Col>
                <Col lg={4}>
                <BlogCard src={img3}/>
                </Col>
                <Col lg={4}>
                <BlogCard src={img4}/>
                </Col>
                <Col lg={4}>
                <BlogCard src={img6}/>
                </Col>
                <Col lg={4}>
                <BlogCard src={img5 }/>
                </Col>
              
            </Row>
        </Container>
    </section>
  )
}

export default BlogCards
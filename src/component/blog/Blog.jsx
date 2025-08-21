import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BlogCard from './BlogCard'
import BlogCard1 from '../../assets/Blog-Card-1.png'
import BlogCard2 from '../../assets/Blog-Card-2.png'
import BlogCard3 from '../../assets/Blog-Card-3.png'
const Blog = () => {
  return (
    <section className='lg:py-[128px] py-[96px]'>
      <Container>
        <div className="blog-text">
          <h2 className='text-[48px]! font-semibold! text-[#282938] pb-[64px]'>Our blog</h2>
        </div>
        <div className="cards">
          <Row className='lg:gap-[0px]'>
            <Col lg={4} md={6} sm={6}>
              <BlogCard src={BlogCard1} />
            </Col>
            <Col lg={4} md={6} sm={6}>
              <BlogCard src={BlogCard2} />
            </Col>

            <Col lg={4} md={6} sm={6}  >
              <BlogCard src={BlogCard3} />
            </Col>

          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Blog
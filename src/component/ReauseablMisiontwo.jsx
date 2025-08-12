import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ReauseablMisiontwo = ({title,header,para,src,span,span2,className}) => {
  return (
    <section className={`py-[128px] ${className}`}>
    <Container>
      <Row>
          <Col lg={5}>
          <div className="img-box">
            <img src={src}/>
          </div>
          </Col>
          <Col lg={{span:6, offset:1}}>
          <div className="box-1">
          <h5 className='text-[16px]! font-semibold! text-[#282938] pb-[16px]'>{title}
          
             </h5>
          <h2 className='text-[2.25rem]! font-semibold! text-[#282938] pb-[18px] leading-[56px]!'>{header}
          <span className='block'>{span}</span>
          <span className='block'>{span2}</span>
          </h2>
          <p  className='text-[1rem]! font-regular! opacity-[0.7] text-[#282938] leading-[28px]!'>{para}</p>
          </div>
          </Col>
      </Row>
    </Container>
</section>
  )
}

export default ReauseablMisiontwo
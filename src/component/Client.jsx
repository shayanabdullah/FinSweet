import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CLientPhoto from '../assets/Mask-Group.png'
import CLientPhoto2 from '../assets/Team-Card4.png'
import CLientPhoto3 from '../assets/Team-Card2.png'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import '../component/client.css'

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div onClick={onClick} className='next' >
      <IoIosArrowForward />
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div onClick={onClick} className='prev'>
        <IoIosArrowBack />
      </div>
    );
  }


const Client = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2200,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

    return (
        <section className='py-128px'>
            <Container>
                <Row>
                    <Col lg={3}>
                        <div className="client-text w-full">
                            <h2 className='text-[38px] font-semibold! text-[#282938] pb-[16px]'>What our clients say about us</h2>
                            <p className='text-[16px] font-regular text-[#282938] opacity-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                        </div>
                    </Col>
                    <Col lg={{ span: 8, offset: 1 }}>
                        <Slider {...settings}>
                        <div className='c_main'>
                            <div className="client lg:w-[790px] pb-[48px]">
                                <h3 className='text-[32px] font-semibold!'>"The best agency we’ve worked with so far. They understand our product and are able to add new <span className='block'>features with a great focus."</span></h3>
                            </div>
                            <Row>
                                <Col lg={1}>
                                    <div className="img">
                                        <img src={CLientPhoto} />
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <h4 className='text-[16px] font-medium! text-[#282938] mb-[0px]!'>Jenny Wilson</h4>
                                    <p className='text-[12px] font-regular! text-[#282938]'>Vice President</p>
                                </Col>
                            </Row>
                        </div>
                        <div className='c_main2'>
                            <div className="client lg:w-[790px] pb-[48px]">
                                <h3 className='text-[32px] font-semibold!'>"Working with them has been a game-changer. Their creativity and attention to detail exceeded all our expectations."</h3>
                            </div>
                            <Row>
                                <Col lg={1}>
                                    <div className="img">
                                        <img src={CLientPhoto2} />
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <h4 className='text-[16px] font-medium! text-[#282938] mb-[0px]!'>John Will</h4>
                                    <p className='text-[12px] font-regular! text-[#282938]'> Product Manager</p>
                                </Col>
                    
                            </Row>
                        </div>
                        <div className='c_main3'>
                            <div className="client lg:w-[790px] pb-[48px]">
                                <h3 className='text-[32px] font-semibold!'>"Their professionalism and quick turnaround made the entire process smooth and stress-free. Truly impressive work."</h3>
                            </div>
                            <Row>
                                <Col lg={1}>
                                    <div className="img">
                                        <img src={CLientPhoto3} />
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <h4 className='text-[16px] font-medium! text-[#282938] mb-[0px]!'>James Carter</h4>
                                    <p className='text-[12px] font-regular! text-[#282938]'> Marketing Director</p>
                                </Col>
                    
                            </Row>
                        </div>
                        </Slider>
                    </Col>

                </Row>


            </Container>
        </section>
    )
}

export default Client
import React from 'react'
import { Card, CardBody } from 'react-bootstrap'
import './card.css'
const Cards = ({src, text, Text, className, classCard,classNameP}) => {
  return (
    <div>
            <Card className={`w-full  lg:pb-[3rem] lg:pl-[3rem] lg:pr-[2rem] md:pr-[3rem] border-none! mb-[22px] ${classCard} `}>
      <CardBody>
        <Card.Title className='pb-[22px] card-t'>
            <img src={src} />
        </Card.Title>
        <Card.Subtitle className={`text-[24px]! font-medium text-[#282938] pb-[12px] card-sub ${className}`}>{text}</Card.Subtitle>
        <Card.Text>
       <h3 className={`text-[16px]! font-regular text-[#282938] ${classNameP} card-p`}>{Text}</h3>
        </Card.Text>
      </CardBody>
    </Card>
    </div>
  )
}

export default Cards
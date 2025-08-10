import React from 'react'
import { Card, CardBody } from 'react-bootstrap'

const Cards = ({src, text, Text, className, classCard,classNameP}) => {
  return (
    <div>
            <Card className={`w-full  pb-[3rem] pl-[3rem] pr-[2rem] border-none! mb-[22px] ${classCard}`}>
      <CardBody>
        <Card.Title className='pb-[22px]'>
            <img src={src} />
        </Card.Title>
        <Card.Subtitle className={`text-[24px]! font-medium text-[#282938] pb-[12px] ${className}`}>{text}</Card.Subtitle>
        <Card.Text>
       <h3 className={`text-[16px]! font-regular text-[#282938] ${classNameP}`}>{Text}</h3>
        </Card.Text>
      </CardBody>
    </Card>
    </div>
  )
}

export default Cards
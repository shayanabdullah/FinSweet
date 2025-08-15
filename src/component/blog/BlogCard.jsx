import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './blog.css'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
const BlogCard = ({ src }) => {
    return (
        <Card className='card'>
            <Card.Img src={src} />
            <Card.Body>
                <Card.Title className=' cd-h' >19 Jan 2022</Card.Title>
                <Card.Title className='card-heading'> How one Webflow user grew his single person consultancy from $0-100K in 14 months</Card.Title>
                <Card.Text>
                    See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
                </Card.Text>
<Link to='/blog'>

                <div className="flex items-center group duration-400">
                    <Button className='bg-white text-black! border-none! text-[16px]! font-medium!'>Read More </Button>
                    <FaArrowRightLong className='icon group-hover:translate-x-[20px]'/>
                </div>
</Link>
            </Card.Body>

        </Card>
    )
}

export default BlogCard

import React, { useState } from "react";
import { Container, Nav, Navbar } from 'react-bootstrap'
import Images from '../../component/Images'
import Logo from '../../assets/Logo-1.png'
import Buttons from '../../component/Buttons'
import '../../component/menu/menu.css'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa6'

const Menu = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <Navbar expand="lg" className="bg-[#1C1E53] py-[34px]!">
        <Container>
          <Navbar.Brand href="#home">
            <Images src={Logo} />
          </Navbar.Brand>
          <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
          className="border-0 focus:shadow-none "
        >
          {expanded ? <FaTimes color="white" size={24} /> : <FaBars color="white" size={24} />}
        </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-bar">
              <Nav.Link as={Link} to='/' className='text-[16px]  font-medium text-[#BBBBCB]! hover:text-white! duration-300'>Home</Nav.Link>
              <Nav.Link as={Link} to='/about' className='text-[16px]  font-medium text-[#BBBBCB]! hover:text-white! duration-300'>About us</Nav.Link>
              <Nav.Link href="#link" as={Link} to='/feature' className='text-[16px]  font-medium text-[#BBBBCB]! hover:text-white! duration-300'>Features</Nav.Link>
              <Nav.Link href="#link" as={Link} to='/pricing' className='text-[16px]  font-medium text-[#BBBBCB]! hover:text-white! duration-300'>Pricing</Nav.Link>
              <Nav.Link href="#link" as={Link} to="/feature#faq" className='text-[16px]  font-medium text-[#BBBBCB]! hover:text-white! duration-300'>
               FAQ
              </Nav.Link>
              <Nav.Link href="#link" as={Link} to="/blog" className='text-[16px]!  font-medium text-[#BBBBCB]! hover:text-white! duration-300'>Blog</Nav.Link>
              <Nav.Link href="#link" as={Link} to="/policy" className='text-[16px]!  font-medium text-[#BBBBCB]! hover:text-white! duration-300'>Policy</Nav.Link>
            </Nav>
           <Link to='/contact'>
           <Buttons text='Contact us' className="ml-[48px]!" />
           </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Menu
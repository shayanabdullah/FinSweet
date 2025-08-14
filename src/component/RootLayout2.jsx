import React from 'react'
import ScrollToTop from './ScrollToTop'
import Home from '../pages/Home'
import Work from './workpage/Work'
import AllLinks from './AllLinks'
import Footer from './Footer'
import CopyRight from './Copy-Right'
import { Outlet } from 'react-router-dom'
import CTA from './workpage/CTA'

const RootLayout2 = () => {
  return (
<>
<ScrollToTop/>
<Home/>
<Outlet/>
<Footer/>
<CopyRight/>
</>
  )
}

export default RootLayout2
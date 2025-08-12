import React from 'react'
import Home from '../pages/Home'
import FooterPage from '../pages/FooterPage'
import CopyRightPage from '../pages/CopyRightPage'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

const RootLayput = () => {
  return (
   <>
   <ScrollToTop/>
   <Home/>
   <Outlet/>
   <FooterPage/>
   <CopyRightPage/>
   </>
  )
}

export default RootLayput
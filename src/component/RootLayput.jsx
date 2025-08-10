import React from 'react'
import Home from '../pages/Home'
import FooterPage from '../pages/FooterPage'
import CopyRightPage from '../pages/CopyRightPage'
import { Outlet } from 'react-router-dom'

const RootLayput = () => {
  return (
   <>
   <Home/>
   <Outlet/>
   <FooterPage/>
   <CopyRightPage/>
   </>
  )
}

export default RootLayput
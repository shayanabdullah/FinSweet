import React from 'react'
import Home from "../pages/Home"
import Banner from '../pages/Banner'
import WorkPages from '../pages/WorkPages'
import ProjectPage from '../pages/ProjectPage'
import FeaturesPage from '../pages/FeaturesPage'
import ClientsPages from '../pages/ClientsPages'
import FaqPages from '../pages/FaqPages'
import ContactPage from '../pages/ContactPage'
import BlogPage from '../pages/BlogPage'
import FooterPage from '../pages/FooterPage'
import CopyRightPage from '../pages/CopyRightPage'

const HomePage = () => {
  return (
  <>
    <Banner/>
    <WorkPages/>
    <ProjectPage/>
    <FeaturesPage/>
    <ClientsPages/>
    <FaqPages/>
    <ContactPage/>  
    <BlogPage/>
  </>
  )
}

export default HomePage
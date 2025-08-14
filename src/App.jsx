  import React from 'react'
  import HomePage from './pages/HomePage'
  import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,  } from 'react-router-dom'
  import AboutPage from './pages/AboutPage'
  import RootLayput from './component/RootLayput'
import PricingPage from './pages/PricingPage'
import FeaturePage from './pages/FeaturePage'
import WorkSection from './pages/WorkSection'
import RootLayout2 from './component/RootLayout2'
import UIdesignPage from './pages/UIdesignPage'
import WebFlowPage from './pages/WebFlowPage'
import FigmaPage from './pages/FigmaPage'
import ReadCasePage1 from './pages/ReadCasePage1'
import ReadCasePage2 from './pages/ReadCasePage2'
import ReadCasePage3 from './pages/ReadCasePage3'
import ReadCasePage4 from './pages/ReadCasePage4'
import ReadCasePage5 from './pages/ReadCasePage5'
import ReadCasePage6 from './pages/ReadCasePage6'
import BlogPages from './pages/BlogPages'


  let router = createBrowserRouter(createRoutesFromElements(
 <>
    <Route element={<RootLayput/>}>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/about' element={<AboutPage/>}></Route>
      <Route path='/pricing' element={<PricingPage/>}></Route>
      <Route path='/feature' element={<FeaturePage/>}></Route>
      <Route path='/work' element={<WorkSection/>}></Route>
      <Route path='/blog' element={<BlogPages/>}></Route>
      <Route path='/readcase1' element={<ReadCasePage1/>}></Route>
      <Route path='/readcase2' element={<ReadCasePage2/>}></Route>
      <Route path='/readcase3' element={<ReadCasePage3/>}></Route>
      <Route path='/readcase4' element={<ReadCasePage4/>}></Route>
      <Route path='/readcase5' element={<ReadCasePage5/>}></Route>
      <Route path='/readcase6' element={<ReadCasePage6/>}></Route>
    </Route>
    <Route element={<RootLayout2/>}>
    <Route path='/all' element={<WorkSection/>}></Route>
    <Route path='/ui' element={<UIdesignPage/>}></Route>
    <Route path='/webflow' element={<WebFlowPage/>}></Route>
    <Route path='/figma' element={<FigmaPage/>}></Route>
    </Route>
 </>
  ))

  const App = () => {
    return (
      <>
  <RouterProvider router={router}/>
      </> 
    )
  }

  export default App
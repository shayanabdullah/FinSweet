  import React from 'react'
  import HomePage from './pages/HomePage'
  import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,  } from 'react-router-dom'
  import AboutPage from './pages/AboutPage'
  import RootLayput from './component/RootLayput'
import PricingPage from './pages/PricingPage'

  let router = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayput/>}>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/about' element={<AboutPage/>}></Route>
      <Route path='/pricing' element={<PricingPage/>}></Route>
    </Route>
  ))

  const App = () => {
    return (
      <>
  <RouterProvider router={router}/>
      </> 
    )
  }

  export default App
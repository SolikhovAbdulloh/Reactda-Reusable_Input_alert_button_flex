import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../home'


const root = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
 
])
export default root
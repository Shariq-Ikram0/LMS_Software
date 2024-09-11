import React from 'react'

import { Outlet } from 'react-router-dom'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'

const Class = () => {
  return (
    <div>
        <Navbar/> 
      <Outlet/>
    </div>
  )
}

export default Class

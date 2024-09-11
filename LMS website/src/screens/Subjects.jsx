import React from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Subjects = () => {
  return (
    <div>
         <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Subjects
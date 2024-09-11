import React from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Fees = () => {
  return (
    <div>
         <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Fees

import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'


const Layout = () => {
  return (
    <div>

        <Navbar/>
        <Outlet/>
        <Footer/>
        
    </div>
  )
}

export default Layout
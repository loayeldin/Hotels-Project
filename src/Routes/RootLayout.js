import React, { useEffect } from 'react'
import Navbar from '../shared/Navbar/Navbar'
import Footer from '../shared/Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'

function RootLayout() {
  const location = useLocation()
  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },[location])
  return (
    <>
        <Navbar/>

        <Outlet/>

        <Footer/>
    </>
  )
}

export default RootLayout
import React from 'react'
import Navbar from '../shared/Navbar/Navbar'
import Footer from '../shared/Footer/Footer'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <>
        <Navbar/>

        <Outlet/>

        <Footer/>
    </>
  )
}

export default RootLayout
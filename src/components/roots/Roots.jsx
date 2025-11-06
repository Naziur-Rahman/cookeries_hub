import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from '../home/Home'
import Footer from '../footer/Footer'
const Roots = () => {
  return (
    <>
      <Home></Home>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default Roots
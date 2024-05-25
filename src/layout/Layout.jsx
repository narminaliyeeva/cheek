import React from 'react'
import Navbar from '../komponents/Navbar'
import Footer from '../komponents/Footer'
import { Link, Outlet } from 'react-router-dom'



export default function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

import React from 'react'
import { Footer } from '../layout/Footer.jsx'
import { Header } from '../layout/Header.jsx'
import { Outlet } from "react-router-dom"

export const DefaultLayout = () => {
  return (
    <div>
        {/* nav bar */}
        <Header/>

        {/* actual page  */}
        <Outlet/>

        {/* footer */}
        <Footer/>
    </div>
  )
}

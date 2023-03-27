import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="Main-Content">
        <Outlet />
      </div>
      <div className="footer"></div>
    </div>
  )
}

export default Layout

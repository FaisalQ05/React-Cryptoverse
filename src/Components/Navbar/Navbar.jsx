import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  console.log(scrollPosition)
  return (
    <div className={`navbar-container`}>
      <div className={`navbar ${scrollPosition > 5.79 ? "fixedNav" : ""}`}>
        <Link className="logo" to={"/"}>
          CryptoVerse
        </Link>
        <div className="nav">
          <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/cryptocurrencies"}>Cryptocurrencies</Link>
            <Link to={"/exchanges"}>Exchnages</Link>
            <Link to={"/news"}>News</Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar

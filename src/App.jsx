import { Route, Router, Link, Routes } from "react-router-dom"
const { Header, Sider, Content } = Layout
import "antd/dist/reset.css"
import {
  CryptoDetails,
  Exchnages,
  Cryptocurrencies,
  News,
  Homepage,
} from "./pages"
import React, { useState } from "react"
import Layout from "./pages/Layout"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
        <Route path="/crypto/:coinId" element={<CryptoDetails />} />
        <Route path="/news" element={<News />} />
        <Route path="/exchanges" element={<Exchnages />} />
      </Route>
    </Routes>
  )
}

export default App

{
  /* <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/">
                <Route index element={<Homepage />} />
                <Route
                  path="/cryptocurrencies"
                  element={<Cryptocurrencies />}
                />
                <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                <Route path="/news" element={<News />} />
                <Route path="/exchnages" element={<Exchnages />} />
              </Route>
            </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer"></div>
    </div> */
}

import React from "react"
import ReactDom from "react-dom/client"
import "./Style.css"
import Navabar from "./components/Navbar"
import SearchNav from "./components/SearchNav"
import Product from './components/Product'
import About from './components/About'
import Footer from "./components/Footer"



const root = ReactDom.createRoot(document.getElementById("root"))

root.render(
    <>
        <Navabar></Navabar>
        <SearchNav />
        <Product />
        <About />
        <Footer />
    </>)
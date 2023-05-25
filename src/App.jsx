import React from "react"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import Servicess from "./components/servicess/Servicess"
import Contact from "./components/contact/Contact"
import Portfolio from "./components/portfolio/Portfolio"
import Footer from "./components/footer/Footer"




function App() {
 
  
  return (
   <>
     <Header />
     <Nav />
     <About />
     <Experience />
     <Servicess />
     <Portfolio />
     <Contact />
     <Footer />
   </>
  )
}

export default App

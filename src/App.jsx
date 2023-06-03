import React from "react"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import Contact from "./components/contact/Contact"
import Portfolio from "./components/portfolio/Portfolio"
import Footer from "./components/footer/Footer"
import Separador from "./components/separador/Separador"




function App() {
 
  
  return (
   <>
     <Header />
     <Separador />
     <Nav />
     <About />
     <Separador />
     <Experience />
     <Separador />
     <Portfolio />
     <Separador />
     <Contact />
     <Footer />
   </>
  )
}

export default App

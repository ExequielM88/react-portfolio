import React from 'react'
import "./header.css"
import Cta from "./Cta"
import ME from "../../assets/img/me.png"
import HeaderSocial from "./HeaderSocial"

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I`m</h5>
        <h1>Exequiel Mainero</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <Cta />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
      <a href="#contact" className="scroll_down">Scroll Down</a>

    </header>
  )
}

export default Header
import React, { useState } from 'react'
import "./nav.css"


const Nav = () => {

  const [ActiveNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={ActiveNav === "#" ?'active': ""}><i className='bx bx-home'></i></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={ActiveNav === "#about" ?'active': ""}><i className='bx bx-user'></i></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={ActiveNav === "#experience" ?'active': ""}><i className='bx bx-book-alt'></i></a>
      <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={ActiveNav === "#portfolio" ?'active': ""}><i className='bx bx-briefcase'></i></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={ActiveNav === "#contact" ?'active': ""}><i className='bx bx-message-dots'></i></a>
    </nav>
  )
}

export default Nav
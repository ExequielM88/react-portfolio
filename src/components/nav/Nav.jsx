import React, { useState } from 'react'
import "./nav.css"
import {AiOutlineHome} from 'react-icons/Ai'
import {AiOutlineUser} from 'react-icons/Ai'
import {AiOutlineBook} from 'react-icons/Ai'
import {RiServiceLine} from 'react-icons/Ri'
import {BiCommentDetail} from 'react-icons/Bi'

const Nav = () => {

  const [ActiveNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={ActiveNav === "#" ?'active': ""}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={ActiveNav === "#about" ?'active': ""}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={ActiveNav === "#experience" ?'active': ""}><AiOutlineBook /></a>
      <a href="#services" onClick={() => setActiveNav("#services")} className={ActiveNav === "#services" ?'active': ""}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={ActiveNav === "#contact" ?'active': ""}><BiCommentDetail /></a>
    </nav>
  )
}

export default Nav
import React from 'react'
import {AiFillLinkedin} from 'react-icons/Ai'
import {AiFillGithub} from 'react-icons/Ai'
import {AiFillDribbbleCircle} from 'react-icons/Ai'

const HeaderSocial = () => {
  return (
    <div className="header_social">
      <a href="https://www.linkedin.com/in/exequiel-mainero-568547239/" target='_blank'><AiFillLinkedin /></a>
      <a href="https://github.com/ExequielM88" target='_blank'><AiFillGithub /></a>
      <a href="https://www.linkedin.com/in/exequiel-mainero-568547239/" target='_blank'><AiFillDribbbleCircle /></a>  
    </div>
  )
}

export default HeaderSocial
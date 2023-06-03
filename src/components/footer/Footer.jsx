import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Kekelom88</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><i className='bx bxl-facebook-circle'></i></a>
        <a href="https://facebook.com"><i className='bx bxl-instagram-alt' ></i></a>
        <a href="https://facebook.com"><i className='bx bxl-twitter' ></i></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Exequiel Mainero. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
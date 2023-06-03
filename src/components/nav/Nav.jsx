import React, { useState, useEffect } from 'react';
import './nav.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sections = ['#about', '#experience', '#portfolio', '#contact'];

    sections.forEach((section) => {
      const element = document.querySelector(section);
      if (element) {
        const elementOffset = element.offsetTop;
        const elementHeight = element.offsetHeight;

        if (
          scrollPosition >= elementOffset &&
          scrollPosition < elementOffset + elementHeight
        ) {
          setActiveNav(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <i className="bx bx-home"></i>
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <i className="bx bx-user"></i>
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <i className="bx bx-book-alt"></i>
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <i className="bx bx-briefcase"></i>
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <i className="bx bx-message-dots"></i>
      </a>
    </nav>
  );
};

export default Nav;
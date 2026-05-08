import React, { useState } from 'react';
import Button from './Button';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      window.history.pushState(null, null, `#${id}`);
    }
  };

  return (
    <nav className={`navbar ${isOpen ? 'is-open' : ''}`}>
      <div className="navbar-left">
        <div className="logo" onClick={(e) => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsOpen(false); }}>Vebgenix</div>
        <div className={`nav-links ${isOpen ? 'mobile-visible' : ''}`}>
          <a href="#about" className="nav-link" onClick={(e) => scrollToSection(e, 'about')}>About</a>
          <a href="#services" className="nav-link" onClick={(e) => scrollToSection(e, 'services')}>Services</a>
          <a href="#work" className="nav-link" onClick={(e) => scrollToSection(e, 'work')}>Work</a>
          <a href="#process" className="nav-link" onClick={(e) => scrollToSection(e, 'process')}>Process</a>
          <a href="#contact" className="nav-link" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
        </div>
      </div>
      <div className="navbar-right">
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <div className="cta-hide-mobile">
          <Button variant="navbar" href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Book a Consultation</Button>
        </div>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

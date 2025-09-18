import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Navbar() {
  const [menu, setMenu] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking on overlay
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Handle menu item click
  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
    setMobileMenuOpen(false); // Close mobile menu when item is clicked
  };

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <div className='navbar'>
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-menu">
          <li>
            <AnchorLink className='anchor-link' href='#home'>
              <p onClick={() => setMenu("home")}>Home</p>
            </AnchorLink>
            {menu === "home" ? <img src={underline} alt='underline' /> : <></>}
          </li>
          <li>
            <AnchorLink className='anchor-link' offset={50} href='#about'>
              <p onClick={() => setMenu("about")}>About Me</p>
            </AnchorLink>
            {menu === "about" ? <img src={underline} alt='underline' /> : <></>}
          </li>
          <li>
            <AnchorLink className='anchor-link' offset={50} href='#services'>
              <p onClick={() => setMenu("services")}>Services</p>
            </AnchorLink>
            {menu === "services" ? <img src={underline} alt='underline' /> : <></>}
          </li>
          <li>
            <AnchorLink className='anchor-link' offset={50} href='#work'>
              <p onClick={() => setMenu("work")}>Projects</p>
            </AnchorLink>
            {menu === "work" ? <img src={underline} alt='underline' /> : <></>}
          </li>
          <li>
            <AnchorLink className='anchor-link' offset={50} href='#contact'>
              <p onClick={() => setMenu("contact")}>Contact</p>
            </AnchorLink>
            {menu === "contact" ? <img src={underline} alt='underline' /> : <></>}
          </li>
        </ul>

        <div className="nav-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect With Me
          </AnchorLink>
        </div>

        {/* Mobile Menu Toggle */}
        <div 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="mobile-menu-overlay active"
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <AnchorLink 
              className='anchor-link' 
              href='#home'
              onClick={() => handleMenuClick("home")}
            >
              Home
            </AnchorLink>
          </li>
          <li>
            <AnchorLink 
              className='anchor-link' 
              offset={50} 
              href='#about'
              onClick={() => handleMenuClick("about")}
            >
              About Me
            </AnchorLink>
          </li>
          <li>
            <AnchorLink 
              className='anchor-link' 
              offset={50} 
              href='#services'
              onClick={() => handleMenuClick("services")}
            >
              Services
            </AnchorLink>
          </li>
          <li>
            <AnchorLink 
              className='anchor-link' 
              offset={50} 
              href='#work'
              onClick={() => handleMenuClick("work")}
            >
              Projects
            </AnchorLink>
          </li>
          <li>
            <AnchorLink 
              className='anchor-link' 
              offset={50} 
              href='#contact'
              onClick={() => handleMenuClick("contact")}
            >
              Contact
            </AnchorLink>
          </li>
        </ul>
        
        <div className="mobile-nav-connect">
          <AnchorLink 
            className='anchor-link' 
            offset={50} 
            href='#contact'
            onClick={closeMobileMenu}
          >
            Connect With Me
          </AnchorLink>
        </div>
      </div>
    </>
  )
}

export default Navbar
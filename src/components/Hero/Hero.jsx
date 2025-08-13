import React from 'react';
import './Hero.css';
import profile from '../../assets/Profile_img.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { TypeAnimation } from 'react-type-animation';
import resume from '../../assets/resume.pdf'

function Hero() {
  return (
    <div id='home' className='hero'>
      <img src={profile} alt="Profile" />
      <h1>
        <span className="name">I'm Priyansh Tiwari</span>
      </h1>
      <TypeAnimation
        sequence={[
          ' I m, Web Developer ', 2000,
          ' I m, Graphics Designer', 2000,
          ' I m, Programmer', 2000,
          'And I m, IOT PASSIONATE', 2000,
        ]}
        wrapper="h3"
        speed={50}
        repeat={Infinity}
        className="animated-text"
      />
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div
          className="hero-resume"
          onClick={() => window.open(resume, '_blank')}
        >My Resume
        </div>
      </div>
    </div>

  );
}

export default Hero;

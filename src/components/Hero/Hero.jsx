import React from 'react';
import './Hero.css';
import profile from '../../assets/Profile_img.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from '../../assets/IOT Implementation Engineer Resume.pdf';
import githubIcon from '../../assets/icons8-github-50.png';
import linkedinIcon from '../../assets/icons8-linkedin-50.png';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="pulse-dot"></span>
          <p>IoT Implementation Engineer & Full-Stack Developer</p>
        </div>
        <p className="hero-kicker">// PRIYANSH_TIWARI.init()</p>
        <h1>Building intelligent IoT hardware <em>& high-scale web apps.</em></h1>
        <p className="hero-description">
          Bridging physical sensors with modern full-stack web architectures. Specializing in ESP32, React.js, FastAPI, TinyML, and real-time telemetry dashboards.
        </p>
        
        <div className="hero-stack">
          <span>React.js</span>
          <span>Node.js</span>
          <span>FastAPI</span>
          <span>ESP32</span>
          <span>MQTT</span>
          <span>TinyML</span>
        </div>

        <div className="hero-action">
          <AnchorLink className="hero-connect" offset={50} href="#contact">
            Let’s Work Together <b>↗</b>
          </AnchorLink>
          <a className="hero-resume" href={resume} target="_blank" rel="noreferrer">
            Download Résumé <b>↓</b>
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="portrait-frame">
          <div className="terminal-header-bar">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="terminal-title">priyansh_dev.sh</span>
          </div>
          <img src={profile} alt="Priyansh Tiwari" />
          
          <div className="status-card">
            <div className="status-indicator">
              <span className="status-pulse"></span>
              <span>HARDWARE ONLINE</span>
            </div>
            <p><b>5 Machine Nodes Active</b><br/>MQTT Telemetry · REST APIs</p>
          </div>

          <div className="portrait-socials" aria-label="Social links">
            <a href="https://github.com/priyansh207003" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/priyansh-tiwari03" target="_blank" rel="noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

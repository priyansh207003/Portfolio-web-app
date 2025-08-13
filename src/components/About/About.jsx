import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Profile from '../../assets/developer.png';
const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={Profile} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I'm an Electronics and Communication Engineering student with a passion for building intelligent systems that bridge hardware and software. From developing accident detection devices using microcontrollers to streamlining hospital workflows with AI-powered chatbots, I thrive on solving real-world problems through code and creativity.</p>
                        <p>I specialize in MERN stack development using React and FastAPI, and I’ve explored IoT integration with ESP32, GSM modules, and sensors. My experience spans hackathons like IBM Granite and Smart India Hackathon, where I’ve collaborated on impactful solutions in healthcare and environmental monitoring.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>React.JSX</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>Node.js</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>Express.JS</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>Java</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>Python</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>Arduino</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>Esp-32,8266</p><hr style={{ width: "50%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1> 1st Position in 2nd Year (2023-2024)</h1>
                    <p> Awarded Certificate of Merit for academic excellence at Gyan Ganga College of Technology.</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1> IBM Granite Hackathon 2025</h1>
                    <p> Developed Clinic-GO, a smart clinic flow management system using FastAPI and IBM Watson Assistant.</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1> Certified in CCNA 1</h1>
                    <p> Gained knowledge and  experience in IP addressing, router/switch configuration, and networking fundamentals.</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1> Certified in Programming Languages</h1>
                    <p> Completed certifications in C++, Python, and JavaScript, mastering core concepts and practical applications.</p>
                </div>
               


            </div>
        </div>
    )
}

export default About

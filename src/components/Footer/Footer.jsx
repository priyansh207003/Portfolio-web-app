import React from 'react'
import './Footer.css';
import footer_logo from '../../assets/logo.svg'
import user_icon from '../../assets/user_icon.svg'
import github from '../../assets/icons8-github-50.png'
import linkedin from '../../assets/icons8-linkedin-50.png'
import instagram from '../../assets/icons8-instagram-50.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <p> @ MERN stack developer with strong programming skills
                        passionate about IoT and creating smart, efficient solutions
                        that bridge hardware and software.
                    </p>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="footer-bottom-right">
                    <div className="git">
                        <a href="https://github.com/priyansh207003" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="" />
                            <p>Github</p>
                        </a>
                    </div>
                    <div className="linked">
                        <a href="https://linkedin.com/in/priyansh-tiwari-144a90267" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="" />
                            <p>Linked-in</p>
                        </a>
                    </div>
                    <div className="insta">
                        <a href="https://www.instagram.com/priyansh_tiwari_03?igsh=MWUweDMxaWpyaW9vYg==" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt="" />
                            <p>Instagram</p>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer

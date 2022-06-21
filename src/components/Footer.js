import "./Footer.css"
import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "white", marginRight: "2rem"}} /><span style={{color: "white"}}>11-1 St.Mary's Nagar Extension, Hosur</span>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "white", marginRight: "2rem"}} />+91 9159080613</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "white", marginRight: "2rem"}} />vaasukeeran260897@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>This is Vaasu from Infosys working as a UI developer with an experience in working on development of applications</p>
                <div className="social">
                <div className="facebook">
                    <h4><FaFacebook size={30} style={{color: "white", marginRight: "1rem"}} /> </h4>
                </div>
                <div className="email">
                    <h4><FaTwitter size={30} style={{color: "white", marginRight: "1rem"}} /> </h4>
                </div>
                <div className="email">
                    <h4><FaLinkedin size={30} style={{color: "white", marginRight: "1rem"}} /> </h4>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer
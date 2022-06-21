import "./AboutContent.css"
import About1 from '../assets/about1.jpg'
import About2 from '../assets/about2.avif'

import React from 'react'
import { Link } from "react-router-dom"

const AboutContent = () => {
  return (
      <div className="container">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm a React Front End Developer who creates responsive secure websites</p>
            <Link to="/contact" className="btn">Contact</Link>
        </div>
        <div className="right">
            <div className="image-container">
                <div className="image-stack-top">
                    <img src = {About1} alt = "img1" className="image" />
                </div>
                <div className="image-stack-bottom">
                    <img src = {About2} alt = "img2" className="image" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent
import "./Image.css"
import IntroImage from '../assets/backgroundimage.jpg'
import { Link } from 'react-router-dom'

import React from 'react'

const Image = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImage} alt= "Intro-Imgs"></img>
        </div>
        <div className="content">
            <p>HI, I'M VAASU KEERAN S A</p>
            <h1>React Developer</h1>
            <div>
                <Link to="/courses" className="btn">Courses</Link>
                <Link to="/contact" className="btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Image
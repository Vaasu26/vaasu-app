import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CourseImage from '../components/CourseImage'
import AboutContent from '../components/AboutContent'

function About() {
  return (
    <div>
      <Navbar></Navbar>
      <CourseImage heading = "ABOUT" paragraph = "I'm a Front-End React Developer"></CourseImage>
      <AboutContent></AboutContent>
      <Footer></Footer>
    </div>
  )
}

export default About
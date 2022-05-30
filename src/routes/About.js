import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CourseImage from '../components/CourseImage'

function About() {
  return (
    <div>
      <Navbar></Navbar>
      <CourseImage heading = "ABOUT" paragraph = "I'm a Front-End React Developer"></CourseImage>
      <Footer></Footer>
    </div>
  )
}

export default About
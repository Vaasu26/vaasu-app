import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CourseImage from '../components/CourseImage'

function Contact() {
  return (
    <div>
      <Navbar></Navbar>
      <CourseImage heading = "CONTACT" paragraph = "Let us have a chat. Bring up your questions"></CourseImage>
      <Footer></Footer>
    </div>
  )
}

export default Contact
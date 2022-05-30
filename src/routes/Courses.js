import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CourseImage from '../components/CourseImage'

function Courses() {
  return (
    <div>
      <Navbar></Navbar>
      <CourseImage heading = "COURSES" paragraph = "Courses that I have learned"></CourseImage>
      <Footer></Footer>
    </div>
  )
}

export default Courses
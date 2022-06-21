import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CourseImage from '../components/CourseImage'
import SkillsCard from '../components/SkillsCard'

function Courses() {
  return (
    <div>
      <Navbar></Navbar>
      <CourseImage heading = "COURSES" paragraph = "Courses that I have learned"></CourseImage>
      <SkillsCard></SkillsCard>
      <Footer></Footer>
    </div>
  )
}

export default Courses
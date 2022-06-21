import "./Skills.css"
import SkillsData from "./SkillsData"
import Skills from "./Skills"

import React from 'react'

const SkillsCard = () => {
  return (
    <div className="course-container">
        <h1 className="skills-heading">Skills</h1>
        <div className="skills-container">
            {SkillsData.map((val, ind) => {
                return(
                    <Skills 
                        key = {ind}
                        imgsrc = {val.imgsrc}
                        title = {val.title}
                        text = {val.text}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default SkillsCard
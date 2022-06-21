import "./Skills.css"

import React from 'react'

const Skills = (props) => {
  return (
    <div className="course-container">
        <div className="skills-container">
            <div className="skills-card">
                <img src= {props.imgsrc} alt="img"></img>
                <h2 className="skills-title">{props.title}</h2>
                <div className="skills-details">
                    <p>{props.text}</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Skills
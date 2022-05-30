import "./CourseImage.css"

import React from 'react'

class CourseImage extends React.Component {
  render(){
  return (
    <div className="hero-img">
        <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.paragraph}</p>
        </div>
    </div>
  )
}
}

export default CourseImage
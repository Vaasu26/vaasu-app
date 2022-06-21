import "./Form.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label for="name">Name</label>
            <input type="text" id="name"></input>
            <label for="email">Email</label>
            <input type="email" id="email"></input>
            <label for="subject">Subject</label>
            <input type="text" id="subject"></input>
            <label for="message">Message</label>
            <textarea type="text" id="message" rows="6" placeholder="Type your message here"></textarea>
            <button className="btn">SUBMIT</button>
        </form>
    </div>
  )
}

export default Form

import React from "react"
import Fade from 'react-reveal/Fade';
import Aman from './assets/aman.jpg'
import './App.scss'
function About(props) {
  return (
    <div className="contents">
          <div class ="row">
            
            <div class ="column">
                <Fade>
                  <div className="me-wrapper">
                    <img className = "me" src={Aman} alt="A picture of me, Aman Singh!"/>
                  </div>
                </Fade>
            </div>
            <div class ="column">
                <h1 className="introduction"> a quick introduction... </h1>
                <p className ="introduction"> 
                  I'm a computer science student at the University of Waterloo majoring in Computer Science and Data Science. I'm a problem solver who loves to leverage technology to design & develop efficient solutions. Outside of technology, I have an interest in bouldering, cycling, philosophy and music.  
                  <br/>
                  <br/>
                  If you'd like to chat, feel free to reach out by email or message me on LinkedIn!
                
                </p>
            </div>
          </div>
    </div>
  )
}
 
export default About;
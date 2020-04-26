import React from "react"
import Thumbnail from "./Thumbnail.js"
import Fade from 'react-reveal/Fade';
import nba_thumbnail from "./assets/sophism.svg";
import voc_thumbnail from "./assets/deloitte.svg";
import './App.scss'
function Main(props) {
  return (
    <div className="contents">
      <h1>
        <Fade top cascade>
          Hi, I'm Aman Singh!
        </Fade>
      </h1>
      <p className="about-me">I'm a computer science student at the University of Waterloo and a builder at heart. I'm passionate about software engineering, data science, and product management.</p>
      <div id="portfolio" class = "portfolio">
          <h2> Portfolio </h2>
          <div class ="row">
            <div class ="column">
                <Thumbnail
                link="/stotle"
                image={nba_thumbnail}
                title="Stotle"
                category="Accelerating Public Speaking Skills"
                alt="NBA Basketball Data Science"
                />
            </div>
            <div class ="column">
                <Thumbnail
                link="/VoC"
                image={voc_thumbnail}
                title="Deloitte (DSpace)"
                category="Automating Categorization of Client Feedback"
                alt="Voice of Client Project"
                />
            </div>
          </div>
      </div>
    </div>
  )
}
 
export default Main;
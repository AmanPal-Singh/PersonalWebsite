import React from "react";
import Thumbnail from "../Thumbnail.js";
import voc_header from "../assets/deloitte.svg";
import Flip from 'react-reveal/Flip';

function VoC(props) {
  return (
    <div className="contents">
      <div className="article">
        <div className="header-image-mobile">
          <img src={voc_header} className="blog-header"/>
        </div>
        <h2>
          <Flip top cascade>
              Client Feedback Text Classification
          </Flip>
        </h2>
        <div className="summary">
        
          <span>
            <b> Role: </b> Software Developer and Data Scientist  
            <br></br>       
            <b> Timeline: </b> Winter 2020
            <br></br>
            <b> Technology: </b> Python, PyTorch, ReactJS, Nginx, Gunicorn, Flask
            <br></br>
            <b> Skills: </b> Human-centric Design, Prototyping, Data Analysis, Software Engineering, Natural Language Processing
          </span>
          <br></br>
          <br></br>
          In Winter 2020, I had the opportunity to work as part of the DSpace team within Deloitte. I was working on a project related to the voice of customer, leveraging natural language processing and machine learning to extract insights on how to improve Deloitte's services.
          
        </div>
        <div className="article-contents">
          <h4 className="section-heading"> Overview </h4>
          <div className="section-text">
            Working in a team of 5, we were able to develop a full stack application using a human-in-the-loop design paradigm to provide a solution to accelerate the tagging process for client feedback. As a software developer and data scientist, I performed exploratory data analysis and worked with the user to brainstorm a solution to improve their insight extractio process and to better understand the problem. Following a better understanding of the problem and the data we had available, we developed natural language processing pipelines and various machine learning models to label specific categories. Following this. we developed a frontend in ReactJS and a backend in Flask to create a full-stack application that would allow the users to utilise the models to help them with their process. 
            <br/><br/>

            <b>Due to the nature of the project, this project is under NDA. If you would like to hear more about my work at Deloitte, feel free to reach out over email or LinkedIn!</b>
          </div>
        </div>




      </div>
    </div>
  )
}
 
export default VoC;
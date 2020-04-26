import React from "react";
import Thumbnail from "../Thumbnail.js";
import nba_header from "../assets/sophism.svg";
import Flip from 'react-reveal/Flip';

function NBA(props) {
  return (
    <div className="contents">
      <div className="article">
        <div className="header-image-mobile">
          <img src={nba_header} className="blog-header" />
        </div>
        <h2>
          <Flip top cascade>
              Stotle
          </Flip>
        </h2>
        <div className="summary">
        <span>
            <b> Project: </b> Passion Project
            <br></br>       
            <b> Technology: </b> Swift, Flask, Azure, AdobeXD
            <br></br>
            <b> Skills: </b> Mobile Development, Natural Language Processing, Prototyping, Product Design
          </span>
          <br></br>
          <br></br>
          
          
          
        </div>
        <div className="article-contents">
          <h3 className="section-heading"> COMING SOON!</h3>
        </div>




      </div>
    </div>
  )
}
 
export default NBA;
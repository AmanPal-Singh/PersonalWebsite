import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import Fade from 'react-reveal/Fade';
import './App.scss';

function Thumbnail(props) {
  return (
    <div className="project">
        <Link to={props.link}>
            <div className="project-image">
                <img src={props.image} alt={props.alt} className="project-thumbnail"/>
            </div>
             
        </Link>
        <Link to={props.link} style= {{ textDecoration: 'none', color: 'inherit'}}>
            <div className="project-title"> {props.title}</div>
            <div className="project-category">{props.category}</div>
        </Link>
         
      
    </div>
  );
}
 
export default Thumbnail;
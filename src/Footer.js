import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faMediumM, faGithub} from "@fortawesome/free-brands-svg-icons"
import './App.scss'

function Footer(props) {
  return (
    <div id = "footer">
      <nav id = "links">
          <ul className = "links-list">
              <li>
                  <a href="https://www.linkedin.com/in/aman-pal-singh" title="Visit my LinkedIn profile!" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} size="sm" className="profile-logo"/>
                  </a>
              </li>
              <li>
                <a href="https://medium.com/@aman.pal.singh" title="Sometimes I write cool stuff!" target="_blank">
                    <FontAwesomeIcon icon={faMediumM} size="sm" className="profile-logo"/>
                </a>
              </li>
              <li>
                 <a href="https://github.com/AmanPal-Singh" title="Check out some of my projects!" target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="sm" className="profile-logo"/>
                </a>
              </li>
          </ul>
      </nav>
      <div id = "signature">
          <p> Designed & Developed with &#128669; by Aman Singh </p>
      </div>
    </div>
  )
}
 
export default Footer;
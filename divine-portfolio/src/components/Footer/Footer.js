import React from "react";
import {ImGithub, ImLinkedin, ImTwitter  } from 'react-icons/im';
import {FaSlack} from 'react-icons/fa';


const Footer = () => {



    return (
        <div className="footer">
          
                 <div className="footer-child"><a href="https://github.com/Purplepro"><ImGithub color="white" className="social-icons" /></a></div>
                 <div className="footer-child"><a href="https://www.linkedin.com/in/sebastian-gayle-500897167/"><ImLinkedin color="white" className="social-icons" /></a></div>
                <div className="footer-child"><a href="https://twitter.com/Seviocreatives"><ImTwitter color="white" className="social-icons"/></a></div>
           
        </div>
    )
}


export default Footer;
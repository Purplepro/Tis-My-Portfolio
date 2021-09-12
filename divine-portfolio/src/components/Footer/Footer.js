import React from "react";
import {ImGithub, ImLinkedin, ImTwitter  } from 'react-icons/im';
import {FaSlack} from 'react-icons/fa';


const Footer = () => {



    return (
        <div className="footer">
            <ul>
                <li> <a href="https://github.com/Purplepro"><ImGithub color="white" className="social-icons" /></a></li>
                <li><a href="https://www.linkedin.com/in/sebastian-gayle-500897167/"><ImLinkedin color="white" className="social-icons" /></a></li>
                <li><a href=""><ImTwitter color="white" className="social-icons"/></a></li>
            </ul>
        </div>
    )
}


export default Footer;
import React from "react";
import {ImGithub, ImLinkedin, ImTwitter  } from 'react-icons/im';
import {FaSlack} from 'react-icons/fa';


const Footer = () => {



    return (
        <div className="footer">
            <ul>
                <li><ImGithub color="white" className="social-icons" /></li>
                <li><ImLinkedin color="white" className="social-icons" /></li>
                <li><FaSlack color="white" className="social-icons"/></li>
                <li><ImTwitter color="white" className="social-icons"/></li>
            </ul>
        </div>
    )
}


export default Footer;
import React, {Component} from 'react'

import react from '../../images/react.png';
import nodejs from '../../images/nodejs.png';
import javascript from '../../images/javascript.png';
import html from '../../images/html.png';
import css from '../../images/css.png';
import python from '../../images/python.png';
import django from '../../images/django.png';
import postgres from '../../images/postgresql.png';
import mongodb from '../../images/mongodb.png';
import restapi from '../../images/restapi.png';
import github from '../../images/github.png';
import git from '../../images/git.png';
import bootstrap from '../../images/bootstrap.png';
import heroku from '../../images/heroku.png';
import illustrator from '../../images/illustrator.png';
import photoshop from '../../images/photoshop.png';
import Footer from '../Footer/Footer';

















class Section3 extends Component {
    render() {
        return (
            <div className="Section_3 snap" id="sect_3">
                    <div id="stars"></div>
                    <div id="stars2"></div>
                    <div id="stars3"></div>
                    <div id="title"></div>


                <h1 className="skills-header">Skills</h1>
                <div className="language-container">
                
                <div>   <div className="circle"><img className="logo" src={ react } alt="react programming language logo"/> </div> <h2 className="skill-names">ReactJs</h2></div> 
                <div>   <div className="circle"><img className="logo" src={ nodejs } alt="nodejs logo"/></div> <h2 className="skill-names">NodeJs</h2></div>
                <div>   <div className="circle"><img className="logo" src={ javascript } alt="javascript logo"/></div> <h2 className="skill-names">Javascript</h2></div>
                <div>   <div className="circle"><img className="logo" src={ html } alt="html logo"/></div> <h2 className="skill-names">Html</h2></div>
                <div>   <div className="circle"><img className="logo" src={ css } alt="css logo"/></div> <h2 className="skill-names">CSS</h2></div>
                <div>   <div className="circle"><img className="logo" src={ python } alt="python"/></div> <h2 className="skill-names">Python</h2></div>
                <div>   <div className="circle"><img className="logo" src={ django } alt="django"/></div> <h2 className="skill-names">Django</h2></div>
                <div>   <div className="circle"><img className="logo" src={ postgres } alt="postgres"/></div> <h2 className="skill-names">PostgresQL</h2></div> 
                <div>   <div className="circle"><img className="logo" src={ mongodb  } alt="mongodb"/></div> <h2 className="skill-names">MongoDB</h2></div>
                <div>   <div className="circle"><img className="logo" src={ restapi } alt="restapi logo"/></div> <h2 className="skill-names">Rest API</h2></div> 
                <div>   <div className="circle"><img className="logo" src={ github } alt="github logo"/></div> <h2 className="skill-names">Github</h2></div> 
                <div>   <div className="circle"><img className="logo" src={ git } alt="git logo"/></div> <h2 className="skill-names">Git</h2></div>
                <div>   <div className="circle"><img className="logo" src={ bootstrap } alt="bootstrap"/></div> <h2 className="skill-names">Bootstrap</h2></div> 
                <div>   <div className="circle"><img className="logo" src={ heroku } alt="heroku logo"/></div> <h2 className="skill-names">Heroku</h2></div> 
                <div>   <div className="circle"><img className="logo" src={ illustrator } alt="adobe illustrator logo"/></div> <h2 className="skill-names">Adobe Illustrator</h2></div> 
                <div>   <div className="circle"><img className="logo" src={ photoshop } alt="adobe photoshop logo"/></div> <h2 className="skill-names">Adobe Photoshop</h2></div>
            
                </div>
            </div>
        )
    }
}


export default Section3;
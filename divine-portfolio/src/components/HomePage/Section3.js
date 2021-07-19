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
















class Section3 extends Component {
    render() {
        return (
            <div className="Section_3 snap" id="sect_3">
                <h1 className="skills-header">Skills</h1>
                <div className="language-container">
                
                    <div className="circle"><img className="logo" src={ react } alt="react programming language logo"/></div>
                    <div className="circle"><img className="logo" src={ nodejs } alt="nodejs logo"/></div>
                    <div className="circle"><img className="logo" src={ javascript } alt="javascript logo"/></div>
                    <div className="circle"><img className="logo" src={ html } alt="html logo"/></div>
                    <div className="circle"><img className="logo" src={ css } alt="css logo"/></div>
                    <div className="circle"><img className="logo" src={ python } alt="python"/></div>
                    <div className="circle"><img className="logo" src={ django } alt="django"/></div>
                    <div className="circle"><img className="logo" src={ postgres } alt="postgres"/></div>
                    <div className="circle"><img className="logo" src={ mongodb  } alt="mongodb"/></div>
                    <div className="circle"><img className="logo" src={ restapi } alt="restapi logo"/></div>
                    <div className="circle"><img className="logo" src={ github } alt="github logo"/></div>
                    <div className="circle"><img className="logo" src={ git } alt="git logo"/></div>
                    <div className="circle"><img className="logo" src={ bootstrap } alt="bootstrap"/></div>
                    <div className="circle"><img className="logo" src={ heroku } alt="heroku logo"/></div>
                    <div className="circle"><img className="logo" src={ illustrator } alt="adobe illustrator logo"/></div>
                    <div className="circle"><img className="logo" src={ photoshop } alt="adobe photoshop logo"/></div>
            
                </div>
            </div>
        )
    }
}


export default Section3;
import React, {Component} from 'react';
import Navbar from '../Navbar/Navbar';
import Character from '../../images/ui-character.png';


class Section1 extends Component {
    render() {
        return (
            <div className="Section_1 snap" id="sect_1">
            <div className="Entrence-quote section-1-child">
                <h1 className="section1-header">Hello! <span>I'm Sebastian Gayle,</span></h1>
                <span><h2 className="job-title">a Software engineer and Designer.</h2></span>
                <span><h3>Welcome to my world and don't hesitate to explore the attempted creativity.</h3></span>
            </div>
            <div className="svg-image section-1-child">
                {/* <img src={Character} className="character-image" alt="sebastians character svg"/> */}
            </div>
            </div>
        )
    }
}

export default Section1;
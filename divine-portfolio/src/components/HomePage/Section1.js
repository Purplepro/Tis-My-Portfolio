import React, {Component} from 'react'
import Navbar from '../Navbar';
class Section1 extends Component {
    render() {
        return (
            <div className="Section_1 snap" id="sect_1">
            <Navbar/>
            <div className="Entrence-quote section-1-child">
                <h1>Welcome to my World</h1>
                <span><p>Explore the attempted creativity</p></span>
            </div>
            <div className="svg-image section-1-child">

            </div>
            </div>
        )
    }
}

export default Section1;
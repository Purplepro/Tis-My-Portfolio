import React, {Component, Components} from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {};
    render() {
        return (
            <div className="nav" id="nav_sect">
                <ul className="link-bunch">
                <li className="nav_link">About</li>
                <li className="nav_link">Contact</li>
                <li className="nav_link">Resume</li>
                </ul>
            </div>
        )
    }
}

export default Navbar;
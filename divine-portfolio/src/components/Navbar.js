import React, {Component, Components} from 'react';


class Navbar extends Component {
    state = {};
    render() {
        return (
            <div className="nav">
                <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Resume</li>
                </ul>
            </div>
        )
    }
}

export default Navbar;
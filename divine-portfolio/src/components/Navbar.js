import React from 'react';
import { NavLink} from 'react-router-dom'

const Navbar  = () => {
    
   
        return (
            <div className="nav" id="nav_sect">
                <ul className="link-bunch">
                <li>
                   <NavLink className="nav-link" to='/'>Home</NavLink> 
                    </li>
                <li>
                   <NavLink className="nav-link" to='/about'>About</NavLink> 
                    </li>
                {/* <li className="nav_link">Contact</li> */}
                <li>
                    <NavLink className="nav-link" to='/resumepage'>Resume</NavLink>
                </li>
            
                </ul>
            </div>
        )
}

export default Navbar;
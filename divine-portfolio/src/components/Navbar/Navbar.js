import React from 'react';
import { NavLink} from 'react-router-dom'
import MobileNavbar from './MobileNavbar';
import NavLinks from './NavLinks'

import Navigation from './Navigation';


const Navbar  = () => {
    
   
        return (
            <div className="nav">
                <Navigation/>
                <MobileNavbar/>
            </div>
        )
}

export default Navbar;
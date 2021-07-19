
import {HiOutlineMenuAlt1} from 'react-icons/hi';
import { useState } from 'react';
import NavLinks from './NavLinks';
import {IoMdClose} from 'react-icons/io';

const MobileNavbar = () => {

    const [openHamburger, setOpenHumburger] = useState(false);

    const hamburger =  <HiOutlineMenuAlt1 
                        className="Hamburger" size="40px" color="black"
                        onClick={() => setOpenHumburger(!openHamburger)}
                        />
    const closeHamburger =  <IoMdClose 
                        className="Hamburger" size="40px" color="black"
                        onClick={() => setOpenHumburger(!openHamburger)}
                        />
    const closeHumburgerMenu = () => setOpenHumburger(false);


        return (
        <nav className="mobile-navbar">
        
            {openHamburger ? closeHamburger : hamburger}
            {openHamburger && <NavLinks isMobile={true} closeMobileMenu={closeHumburgerMenu}/>}

        </nav>
        )
}

export default MobileNavbar;
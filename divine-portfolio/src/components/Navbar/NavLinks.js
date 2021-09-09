import {NavLink} from 'react-router-dom'
import sevslogo from '../../images/SevSlogo.png';

const NavLinks = (props) => {


    return ( 
        <ul className="link-bunch">

            <li>
                <img src={sevslogo} className="SevsLogo"  alt="sebastians logo of his initials"/>
            </li>

        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
           <NavLink className="nav-link" to='/'>Home</NavLink> 
            </li>

        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <NavLink className="nav-link" to='/resumepage'>Resume</NavLink>
        </li>
        
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <NavLink id="contact-link" to='/contact'>Contact</NavLink>
        </li>

    
        </ul>
        
    )
}

export default NavLinks;
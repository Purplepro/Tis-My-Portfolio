import {NavLink} from 'react-router-dom'

const NavLinks = (props) => {


    return ( 
        
        <ul className="link-bunch">
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
           <NavLink className="nav-link" to='/'>Home</NavLink> 
            </li>

        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <NavLink className="nav-link" to='/resumepage'>Resume</NavLink>
        </li>
        
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <NavLink className="nav-link" id="contact-link" to='/contact'>Contact</NavLink>
        </li>

    
        </ul>
        
    )
}

export default NavLinks;
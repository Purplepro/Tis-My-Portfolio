import {NavLink} from 'react-router-dom'

const NavLinks = (props) => {


    return ( 
        
        <ul className="link-bunch">
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
           <NavLink className="nav-link" to='/'>Home</NavLink> 
            </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
           <NavLink className="nav-link" to='/about'>About</NavLink> 
            </li>
        {/* <li className="nav_link">Contact</li> */}
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <NavLink className="nav-link" to='/resumepage'>Resume</NavLink>
        </li>
    
        </ul>
        
    )
}

export default NavLinks;
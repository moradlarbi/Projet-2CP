import '../../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify as fa } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header className="header">
            <nav className="nav-container">
                <div className="logo-container">
                    
                </div>
                <ul className="navbar">
                    
                    <li className="nav-el">
                        <a href="" className="hero nav-btn">Hero</a>
                    </li>
                    <li className="nav-el">
                        <a href="" className="about nav-btn">About us</a>
                    </li>
                    <li className="nav-el">
                        <a href="" className="contact nav-btn">Contact us</a>
                    </li>
                    <li className="nav-el log">
                        <a href="/signin" className="login nav-btn">Login</a>
                    </li>
                    <li className="check">
                        <FontAwesomeIcon icon={fa} className="fa" />
                    </li>
                </ul>
            </nav>
        </header>
        
    )
}
export default Header;
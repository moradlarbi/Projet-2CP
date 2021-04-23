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
                        <a href="/settings" className="about nav-btn">Settings</a>
                    </li>
                    <li className="nav-el">
                        <a href="/signup" className="contact nav-btn">Sign up</a>
                    </li>
                    <li className="nav-el log">
                        <a href="/login" className="login nav-btn">Login</a>
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
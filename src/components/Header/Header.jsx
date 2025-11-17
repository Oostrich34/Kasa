import { Link } from 'react-router-dom'
import headerLogo from '../../assets/hdr-logo.png'
 
function Header() {
    return (
        <header>
            <img src={headerLogo} alt="Logo" />
            <nav className='navbar'>
                <ul>
                    <li><Link to='/'>Accueil</Link></li>
                    <li><Link to='/About'>A Propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
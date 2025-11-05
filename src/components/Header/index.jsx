import { Link } from 'react-router-dom'
import headerLogo from '../../assets/logo-header.png'
 
function Header() {
    return (
        <nav>
            <img src={headerLogo} alt="Logo" />
            <Link to='/'>Accueil</Link>
            <Link to='/About'>A propos</Link>
        </nav>
    )
}

export default Header
import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <nav>
            <Link to="/"> Accueil </Link>
            <Link to="/artists"> Artists </Link>
            <Link to="/albums"> Albums </Link>
            <Link to="/genres"> Genre </Link>

        </nav>
    )
}
export default Header
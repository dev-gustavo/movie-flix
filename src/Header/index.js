import '../Header/styleHeader.css'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <header>
            <Link className="brand" to="/"> Movie Flix </Link>
            <Link className="brand" to="/dashboard"> DashBoard </Link>

            <Link className="bookmarks" to="/bookmarks"> My Movies </Link>
        </header>
    )
}

export default Header;
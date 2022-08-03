import '../Header/styleHeader.css'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <header>
            <Link className="brand" to="/dashboard"> Movie Flix </Link>
            <Link className="link" to="/"> Now Playing </Link>
            <Link className="link" to="/TopRated"> Top Rated </Link>
            <Link className="link" to="/UpComing"> Up Coming </Link>

            <Link className="bookmarks" to="/bookmarks"> My Movies </Link>
        </header>
    )
}

export default Header;
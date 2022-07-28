import {Link} from 'react-router-dom';
import '../ControlErros/errors.css'

function Error(){
    return(
        <div className="container">
            <h1> 404 </h1>
            <h2> Page not found! </h2>
            <Link to="/"> See all movies! </Link>
        </div>
    )
}
export default Error;
import { useEffect, useState } from 'react';
import movieApi from '../UrlAPI/movieApi'
import {Link} from 'react-router-dom'
import '../Home/styleHome.css'

//NOW PLAYING >> /movie/now_playing?api_key=270d00f11fc0b8f5eb85e472529405b6

function Home(){

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true);

    //Toda vez que a aplicacao abrir, ele vai chamar esse comando que vai buscar a API
    useEffect(()=>{
        async function loadingMovies(){
           const response = await movieApi.get("movie/now_playing", {
            params: {
                api_key:"270d00f11fc0b8f5eb85e472529405b6",
                page: 1,
            }
           })

           //console.log(response.data.results.slice(0, 10));
           setMovies(response.data.results.slice(0, 10));
           setLoading(false);

        }
        loadingMovies();
    },[])

    if(loading){
        return(
            <div className='loading'>
                <h2> Loading movies ... </h2>
            </div>
        )
    }

    return(
        <div className="main">
            <h1 className='h1'> TOP 10 </h1>
            <div className="movieList"> {movies.map((movie)=>{
                return(
                    <article key={movie.id}>
                        <strong>{movie.title}</strong>
                        <img src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title}/>
                        <Link to={`/movie/${movie.id}`}> OPEN </Link>
                    </article>
                )
            })} 
            </div>
        </div>
    )
}

export default Home;
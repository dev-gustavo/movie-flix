import { useEffect, useState } from 'react'
import movieApi from '../UrlAPI/movieApi'
import {Link} from 'react-router-dom'
import '../TopRated/styleTopRated.css'

function TopRated(){
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        async function loadingMovies(){
            const response = await movieApi.get("/movie/top_rated", {
                params:{
                    api_key:"270d00f11fc0b8f5eb85e472529405b6",
                    page: 1,
                }
            })
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
        <div className='main'>
            <div className='movieList'>
                {movies.map((movie)=>{
                    return(
                        <article key={movie.id}>
                            <strong> {movie.title} </strong>
                            <img src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                            <Link to={`/movie/${movie.id}`}> OPEN </Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )

}
export default TopRated;
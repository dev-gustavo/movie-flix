import { useEffect, useState } from 'react';
import '../Bookmarks/styleBookmarks.css';
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify'

function Bookmarks(){

    const [movie, setMovies] = useState([])

    useEffect(()=>{
        const myList = localStorage.getItem("@movieFlix");
        setMovies(JSON.parse(myList) || [])
    }, [])


    function deleteMovie(id){
        //alert("test delete " + id)

        let filterMovies = movie.filter((movie)=>{
            return (movie.id !== id)
        })

        setMovies(filterMovies);
        localStorage.setItem("@movieFlix", JSON.stringify(filterMovies));
        toast.success("Movie successfully removed")

    }

    return(
        <div className='my-movies'>
            <h1> My Movies </h1>

            {movie.length === 0 && <span> You have no saved movies :( </span>}

            <ul>
                {movie.map((movie)=>{
                    return(
                        <li key={movie.id}>
                            <span> {movie.title} </span>
                            <div>
                                <Link to={`/movie/${movie.id}`}> Details </Link>
                                <button onClick={()=> deleteMovie(movie.id)}> Delete </button>
                            </div>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}

export default Bookmarks;
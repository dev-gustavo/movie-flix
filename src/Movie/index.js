import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import movieApi from '../UrlAPI/movieApi'
import '../Movie/styleMovie.css'
import { toast } from 'react-toastify'

function Movie(){

    
    const { id } =  useParams(); 
    const nav = useNavigate();
    const[movie, setMovie] = useState({});
    const[loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadingMovie(){
            await movieApi.get(`/movie/${id}`, {
                params:{
                    api_key:"270d00f11fc0b8f5eb85e472529405b6",
                }
            })
            .then((response)=>{
                setMovie(response.data);
                setLoading(false);
            })
            .catch(()=>{
                //console.log("Movie not found");
                nav("/", {replace: true} );
                return;
            })
        }

        loadingMovie();

        return() => {
            console.log("Test .... Componente foi desmontado")
        }

    }, [nav, id])

    function saveMovie(){
        //alert("test")
        const myList = localStorage.getItem("@movieFlix");

        let savedMovies = JSON.parse(myList) || [];

        const hasMovie = savedMovies.some((savedMovies)=> savedMovies.id === movie.id)

        if(hasMovie){
            //alert("You already have this item saved on your list.");
            toast.warning("Film is already on your list")
            return;
        }
        savedMovies.push(movie);
        localStorage.setItem("@movieFlix", JSON.stringify(savedMovies));
        //alert("This film has been successfully saved")
        toast.success("Movie saved successfully!")
    }

    if(loading){
        return(
            <div className="info">
                <h1> Loading details ... </h1>
            </div>
        )
    }

    return(
        <div className="info">
            <h1>{movie.title}</h1>
            <img src={`http://image.tmdb.org/t/p/original/${movie.backdrop_path}`} /> 
            <h3>Description</h3>
            <span> Worldwide Release: {movie.release_date}</span>
            <span>{movie.overview}</span>
            
            <strong> Rating: {movie.vote_average} / 10 </strong>

            <div className="buttons">
                <button onClick={saveMovie} > Save </button>
                
                <button>
                    <a target="blank" href={`https://youtube.com/results?search_query=${movie.title} Trailer`}>
                    Trailer
                    </a>
                   
                </button>
            </div>


        </div>
    )
}

export default Movie;
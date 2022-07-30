
import { useEffect, useState } from 'react';
import movieApi from '../UrlAPI/movieApi'
import '../Dashboard/styleDashboard.css'
import { Button, Card, Carousel, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import thor from '../images/thor.jpeg'
import jurassic from '../images/jurassic.jpeg'
import minion from '../images/minion.jpeg'



function Dashboard() {

    const [movies, setMovies] = useState([])
    const [topRated, setTopRated] = useState([])
    const [upcome, setUpcome] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadingMovies() {
            const response = await movieApi.get("movie/now_playing", {
                params: {
                    api_key: "270d00f11fc0b8f5eb85e472529405b6",
                    page: 1,
                }
            })

            console.log(response.data.results.slice(0, 10));
            setMovies(response.data.results.slice(0,1));
            setLoading(false);

        }
        loadingMovies();
    }, [])


    if (loading) {
        return (
            <div className='loading'>
                <h2> Loading movies ... </h2>
            </div>
        )
    }

    return (

        <div className="dashbord">
            
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={thor}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3> Thor </h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={jurassic}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={minion}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
            
            <div className='cards'>
                <div>
                {movies.map((movie)=>{
                    return(
                        <Card style={{ width: '25rem' }} key={movie.id}>
                            <Card.Img variant="top" src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
                            <Card.Body>
                                <Card.Title> {movie.title} </Card.Title>
                                <Button variant="primary"> NOW PLAYING </Button>
                            </Card.Body>
                        </Card>            
                    )
                    
                })}
                </div>
                <div>
                {movies.map((movie)=>{
                    return(
                        <Card style={{ width: '25rem' }} key={movie.id}>
                            <Card.Img variant="top" src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
                            <Card.Body>
                                <Card.Title> {movie.title} </Card.Title>
                                <Button variant="primary"> NOW PLAYING </Button>
                            </Card.Body>
                        </Card>            
                    )
                    
                })}
                </div>
                <div>
                {movies.map((movie)=>{
                    return(
                        <Card style={{ width: '25rem' }} key={movie.id}>
                            <Card.Img variant="top" src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
                            <Card.Body>
                                <Card.Title> {movie.title} </Card.Title>
                                <Button variant="primary"> NOW PLAYING </Button>
                            </Card.Body>
                        </Card>            
                    )
                    
                })}
                </div>
                

                
            </div>
           
        </div>



    )
}
export default Dashboard;

import { useEffect, useState } from 'react';
import movieApi from '../UrlAPI/movieApi'
import { Link } from 'react-router-dom'
import '../Dashboard/styleDashboard.css'
import { Button, Card, Carousel, CarouselItem, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import minion from '../images/minion.jpeg'
import topgun_new from '../images/topgun_new.jpeg'
import jurassic_new from '../images/jurassic_new.jpeg'



function Dashboard() {
    //for now plaing movies
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true);

    //for TopRated Movies
    const [topRated, setTopRated] = useState([])
    const [loading2, setLoading2] = useState(true)

    //for UpComing Movies
    const [upcome, setUpcome] = useState([])
    const [loading3, setLoading3] = useState(true)

    const [carousel, setCarousel] = useState([])
    const [loading4, setLoading4] = useState(true)


    useEffect(() => {
        async function loadingMovies() {
            const response = await movieApi.get("movie/now_playing", {
                params: {
                    api_key: "270d00f11fc0b8f5eb85e472529405b6",
                    page: 1,
                }
            })

            //console.log(response.data.results.slice(0, 10));
            setMovies(response.data.results.slice(0, 1));
            setLoading(false);

        }
        loadingMovies();
    }, [])

    useEffect(() => {
        async function loadingMovies2() {
            const response2 = await movieApi.get("/movie/top_rated", {
                params: {
                    api_key: "270d00f11fc0b8f5eb85e472529405b6",
                    page: 1,
                }
            })
            //console.log(response2.data.results.slice(0,10));
            setTopRated(response2.data.results.slice(0, 1));
            setLoading2(false)
        }
        loadingMovies2();
    }, [])

    useEffect(() => {
        async function loadingMovies3() {
            const response3 = await movieApi.get("/movie/upcoming", {
                params: {
                    api_key: "270d00f11fc0b8f5eb85e472529405b6",
                    page: 1,
                }
            })
            setUpcome(response3.data.results.slice(0, 1));
            setLoading3(false)
        }
        loadingMovies3();
    }, [])

    useEffect(() => {
        async function loadingMovies4() {
            const response4 = await movieApi.get("/movie/popular", {
                params: {
                    api_key: "270d00f11fc0b8f5eb85e472529405b6",
                    page: 1,
                }
            })
            setCarousel(response4.data.results.slice(0, 1));
            setLoading4(false)
        }
        loadingMovies4();
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
         
            <div className='Carousel'>
                {carousel.map((movie) => {
                    return (
                        <Carousel>
                            <CarouselItem>
                                <img
                                    className="d-block w-100"
                                    src={topgun_new}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h1> Top Gun - Maverick </h1>
                                </Carousel.Caption>
                            </CarouselItem>

                            <CarouselItem>
                                <img
                                    className="d-block w-100"
                                    src={jurassic_new}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h1> Jurassic Park </h1>
                                </Carousel.Caption>
                            </CarouselItem>

                            <CarouselItem>
                                <img
                                    className="d-block w-100"
                                    src={minion}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h1> Minions </h1>
                                </Carousel.Caption>
                            </CarouselItem>

                            

                        </Carousel>
                    )
                })}

            </div>

            <div className='cards' >
                <div>
                    {movies.map((movie) => {
                        return (
                            <Card style={{ width: '22rem' }} key={movie.id}>
                                <Card.Img variant="top" src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                                <Card.Body>
                                    <Card.Title> {movie.title} </Card.Title>
                                    <Link to={"/"} className="button" > NOW PLAYING </Link>
                                </Card.Body>
                            </Card>
                        )

                    })}
                </div>
                <div>
                    {topRated.map((movie) => {
                        return (
                            <Card style={{ width: '22rem' }} key={movie.id}>
                                <Card.Img variant="top" src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                                <Card.Body>
                                    <Card.Title> {movie.title} </Card.Title>
                                    <Link to={"/TopRated"} className="button" > TOP RATED </Link>
                                </Card.Body>
                            </Card>
                        )

                    })}
                </div>
                <div>
                    {upcome.map((movie) => {
                        return (
                            <Card style={{ width: '22rem' }} key={movie.id}>
                                <Card.Img variant="top" src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                                <Card.Body>
                                    <Card.Title> {movie.title} </Card.Title>
                                    <Link to={"/UpComing"} className="button" > UP COMING </Link>
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
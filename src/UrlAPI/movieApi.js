
import axios from 'axios';

//Base URL: https://api.themoviedb.org/3/

//Api URL: 
//NOW PLAYING >> /movie/now_playing?api_key=270d00f11fc0b8f5eb85e472529405b6
//POPULAR >> /movie/popular?api_key=270d00f11fc0b8f5eb85e472529405b6
//UP COMING >> /movie/upcoming?api_key=270d00f11fc0b8f5eb85e472529405b6

const movieApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default movieApi;

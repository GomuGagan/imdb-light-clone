import { useEffect, useState } from "react";
import "./home.css";
import {Link} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';


const Home = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    useEffect(()=>{
fetch("https://api.themoviedb.org/3/movie/popular?api_key=253e0c9fa31b84a960fab1cab7e1aa46&language=en-US&page=1")
.then(res =>res.json())
.then(data =>setPopularMovies(data.results) )
    },[]);
  return (
    <div className="home">
        <div className="poster">
        <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
        </div>
    </div>
  )
}

export default Home
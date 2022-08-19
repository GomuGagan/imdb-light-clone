import "./movieList.css";
import { useState, useEffect } from "react";
import Card from "../card/Card";
import { useParams } from "react-router-dom";

const MovieList = () => {
    const [movieList , setMovieList] = useState([]);
    const {type}=useParams();
    useEffect(()=>{
        getData();
    },[]);
    useEffect(()=>{

    }, [type]);
    const getData = ()=>{
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}popular?api_key=253e0c9fa31b84a960fab1cab7e1aa46&language=en-US&page=1`)
.then(res =>res.json())
.then(data =>setMovieList(data.results) )

    };
  return (
    <div className="movie__list">
        <h2 className="list__title">{(type ? type : "popular").toUpperCase()}</h2>
        <div className="list__cards">
            {
                movieList.map((movie)=>{
                    <Card movie={movie}/>

                })
            };
        </div>
    </div>
  );
};

export default MovieList;
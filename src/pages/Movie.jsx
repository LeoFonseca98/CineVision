import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import MovieCard from "../components/MovieCard";
import "./Movie.css";

const MOVIE_URL = process.env.REACT_APP_API;
const API_KEY = process.env.REACT_APP_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);


  const fetchMovie = async () => {
    try { 
      const response = await axios.get(`${MOVIE_URL}${id}?api_key=${API_KEY}`);
      setMovie(response.data);
    } catch (error) {
      console.error("Erro ao buscar filme: ", error);
    }
  };

  useEffect(() => {
    fetchMovie();

  }, [id]);


  return (
    <div className="movie-page">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.tagline}</p>
          <div className="info">
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
          </div>
          <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
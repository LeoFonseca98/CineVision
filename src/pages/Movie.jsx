import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BsHourglassSplit, BsFillFileEarmarkTextFill } from "react-icons/bs";
import MovieCard from "../components/MovieCard";
import styled from "styled-components";

const MOVIE_URL = process.env.REACT_APP_API;
const API_KEY = process.env.REACT_APP_API_KEY;

const MoviePage = styled.div`
  background-color: #111;
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Tagline = styled.p`
  font-style: italic;
  color: #ccc;
  margin: 1rem 0;
  text-align: center;
  max-width: 800px;
`;

const Info = styled.div`
  background-color: #222;
  padding: 1rem 2rem;
  border-radius: 10px;
  margin: 1rem 0;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);

  h3 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  &.description {
    line-height: 1.5;
  }
`;

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
    <MoviePage>
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <Tagline>{movie.tagline}</Tagline>
          <Info>
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
          </Info>
          <Info className="description">
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{movie.overview}</p>
          </Info>
        </>
      )}
    </MoviePage>
  );
};

export default Movie;

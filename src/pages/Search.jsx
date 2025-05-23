import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import './MoviesGrid.css';

const SEARCH_URL = process.env.REACT_APP_SEARCH;
const API_KEY = process.env.REACT_APP_API_KEY;


const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  
  const query = searchParams.get("q");
  

  const getSearchedMovies = async () => {
      try {
      const response = await axios.get(`${SEARCH_URL}?api_key=${API_KEY}&query=${query}`);
      
      if (response.data.results.length === 0) {
        setError(true);
      } else {
        setMovies(response.data.results);
        setError(false);
      }
      
    } catch (err) {
      console.error('Erro ao buscar filmes:', err);
      setError(true);
    }
  };

  useEffect(() => {
    getSearchedMovies();
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>

      <div className="movies-container">
        {error && <p> Nenhum filme encontrado para "<strong>{query}</strong>".</p>}
        {!error && movies.length === 0 && <p>🔎 Carregando...</p>}
        {movies.length > 0 &&
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default Search;
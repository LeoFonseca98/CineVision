import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import styled from "styled-components";


const SEARCH_URL = process.env.REACT_APP_SEARCH;
const API_KEY = process.env.REACT_APP_API_KEY;


const Container = styled.div`
  background-color: #111;
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-weight: bold;
`;

const QueryText = styled.span`
  color: #0d6efd;
`;

const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const Message = styled.p`
  font-size: 1.4rem;
`;

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  const query = searchParams.get("q");

  const getSearchedMovies = async () => {
    try {
      const response = await axios.get(
        `${SEARCH_URL}?api_key=${API_KEY}&query=${query}`
      );

      if (response.data.results.length === 0) {
        setError(true);
        setMovies([]);
      } else {
        setMovies(response.data.results);
        setError(false);
      }
    } catch (err) {
      console.error("Erro ao buscar filmes:", err);
      setError(true);
      setMovies([]);
    }
  };

  useEffect(() => {
    getSearchedMovies();
  }, [query]);

  return (
    <Container>
      <Title>
        Resultados para: <QueryText>{query}</QueryText>
      </Title>

      <MoviesContainer>
        {error && (
          <Message>
            Nenhum filme encontrado para "<strong>{query}</strong>".
          </Message>
        )}

        {!error && movies.length === 0 && <Message>Carregando...</Message>}

        {movies.length > 0 &&
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </MoviesContainer>
    </Container>
  );
};

export default Search;


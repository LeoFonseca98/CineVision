import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import styled from "styled-components";

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

const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RemoveButton = styled.button`
  background-color: #e50914;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b00610;
  }
`;

const Favoritos = () => {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const lista = localStorage.getItem("favoritos");
    setFavoritos(lista ? JSON.parse(lista) : []);
  }, []);

  const removeFavorito = (id) => {
    const novosFavoritos = favoritos.filter((movie) => movie.id !== id);
    setFavoritos(novosFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));
  };


  return (
    <Container>
      <Title>Meus Filmes Favoritos</Title>
      <MoviesContainer>
        {favoritos.length === 0 ? (
          <p>Você não tem filmes favoritos.</p>
        ) : (
          favoritos.map((movie) => (
            <CardWrapper key={movie.id}>
              <MovieCard movie={movie} showLink={false} />
              <RemoveButton onClick={() => removeFavorito(movie.id)}>
                Remover dos Favoritos
              </RemoveButton>
            </CardWrapper>
          ))
        )}
      </MoviesContainer>
    </Container>
  );
};

export default Favoritos;


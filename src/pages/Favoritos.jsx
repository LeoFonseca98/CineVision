import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "./FavGrid.css";

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
    <div className="container">
      <h2 className="title">Meus Filmes Favoritos 🎬</h2>
      <div className="movies-container">
        {favoritos.length === 0 ? (
          <p>Você não tem filmes favoritos.</p>
        ) : (
          favoritos.map((movie) => (
            <div key={movie.id}>
              <MovieCard movie={movie} showLink={false} />
              <button className="btn" onClick={() => removeFavorito(movie.id)}>
                Remover dos Favoritos
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Favoritos;

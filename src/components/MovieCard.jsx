import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState, useEffect } from "react";
import '../pages/FavGrid.css';
import './Navbar.css';

const imageUrl = process.env.REACT_APP_IMG

const MovieCard = ({ movie, showLink = true }) => {
  const [isFavorito, setIsFavorito] = useState(false);

  useEffect(() => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const favoritoExiste = favoritos.some((item) => item.id === movie.id);
    setIsFavorito(favoritoExiste);
  }, [movie.id]);

  const toggleFavorito = () => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    if (isFavorito) {
      const novosFavoritos = favoritos.filter((item) => item.id !== movie.id);
      localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));
      setIsFavorito(false);
    } else {
      favoritos.push(movie);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      setIsFavorito(true);
    }
  };

  return (
    <div className="movie-card">
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>

      <div className="buttons">
        {showLink && (<button><Link to={`/movie/${movie.id}`}>Detalhes</Link></button>)}
        {showLink && (<button onClick={toggleFavorito} className="fav-buttons">
          {isFavorito ? <FaHeart color="red" /> : <FaRegHeart />}{" "}
          {isFavorito ? "Remover" : "Favoritar"}
        </button>
      )}
      </div>
    </div>
  );
};

export default MovieCard;
  
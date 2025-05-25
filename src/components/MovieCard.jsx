import styled from "styled-components";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const imageUrl = process.env.REACT_APP_IMG;

const MovieCardContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const MovieCard = ({ movie, showLink = true }) => {
  const [isFavorito, setIsFavorito] = useState(false);

  useEffect(() => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const favoritoExiste = favoritos.some((item) => item.id === movie.id);
    setIsFavorito(favoritoExiste);
  }, [movie.id]);

  const atualizarFavorito = () => {
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
    <MovieCardContainer>
      <div className="card text-center shadow-sm p-2" style={{ width: '20rem', margin: '15px' }}>
        <img
          src={imageUrl + movie.poster_path}
          className="card-img-top"
          alt={movie.title}
          style={{ height: '450px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">
            <FaStar className="text-warning" /> {movie.vote_average}
          </p>
          <div className="d-flex justify-content-around">
            {showLink && (
              <Link to={`/movie/${movie.id}`} className="btn btn-primary">
                Detalhes
              </Link>
            )}
            {showLink && (
              <button
                onClick={atualizarFavorito}
                className={`btn ${isFavorito ? 'btn-danger' : 'btn-outline-danger'}`}
              >
                {isFavorito ? <FaHeart /> : <FaRegHeart />}
                {isFavorito ? ' Remover' : ' Favoritar'}
              </button>
            )}
          </div>
        </div>
      </div>
    </MovieCardContainer>
  );
};

export default MovieCard;

import { useState, useEffect } from "react";
import MovieCard from '../components/MovieCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


const API_URL = process.env.REACT_APP_API;
const API_KEY = process.env.REACT_APP_API_KEY;

const Title = styled.h2`
    color: #fff;
    text-align: center;
    margin: 2rem 0;
    font-weight: bold;
    padding-top: 2rem;
`;

 const Footer = styled.footer`
    text-align: center;
    margin-top: 2rem;
    width: 100%;
    padding: 1rem;
    background-color: #222;
    color: #fff;
`;

const HomeContainer = styled.div`
    background-color: #111;
    min-height: 100vh;
    padding: 2rem 1rem 2rem 1rem;
    
`;

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setTopMovies(data.results);
    };

    useEffect(() => {
        const topRatedUrl = `${API_URL}top_rated?api_key=${API_KEY}`;
        getTopRatedMovies(topRatedUrl);
    }, []);

    return (
        <HomeContainer className="container-fluid">
            <Title>Melhores Filmes</Title>
            <div className="row justify-content-center">
                {topMovies.length === 0 && <p>Carregando...</p>}
                {topMovies.length > 0 &&
                    topMovies.map((movie) => (
                        <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={movie.id}>
                            <MovieCard movie={movie} />
                        </div>
                    ))}
            </div>
            <Footer>© 2025 CineVision</Footer>  
        </HomeContainer>
    );
};

export default Home;

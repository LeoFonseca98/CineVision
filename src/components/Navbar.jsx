import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2, BiArrowBack } from "react-icons/bi";
import 'bootstrap/dist/css/bootstrap.min.css';
import './MovieCard';
import styled from "styled-components";

const NavbarStyled = styled.nav`
  .navbar {
    padding: 2rem;
    margin-bottom: 0;
  }

  h2 a {
    font-size: 4rem;
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;
  }

  h2 a:hover {
    color:  #0d6efd; 
  }

  ul li a {
    font-size: 2rem;
    color: white;
    text-decoration: none;
    font-weight: 500;
  }

  form {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  input {
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 25rem;
  }

  button {
    border: none;
    background-color: #0d6efd;
    color: white;
    padding: 6px 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0b5ed7;
  }

  .mb-0 {
    font-size: 2rem;
  }

  .mb-0 li a:hover {
    color:  #0b5ed7;
  }
`;

function Navbar() {
  const [search, setSearch] = useState("")
  const navigate = useNavigate();

  const handleSubmit = (e) => { 
    e.preventDefault();
    
    if(!search) return 

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <NavbarStyled>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid justify-content-between align-items-center">
          <h2 className="mb-0">
            <Link to="/">
              <BiArrowBack /> Cine Vision <BiCameraMovie />
            </Link>
          </h2>

          <ul className="mb-0">
            <li>
              <Link to="/favoritos">Favoritos</Link>
            </li>
          </ul>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Buscar filme"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button type="submit">
              <BiSearchAlt2 />
            </button>
          </form>
        </div>
      </nav>
    </NavbarStyled>
  );
};

export default Navbar;
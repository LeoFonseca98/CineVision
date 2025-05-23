import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2, BiArrowBack } from "react-icons/bi";
import './Navbar.css';

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
     <nav id="navbar">
        <h2>
          <Link to="/"><BiArrowBack />Cine Vision<BiCameraMovie /></Link>
        </h2>
        <li>
          <Link to="/favoritos">Favoritos</Link>
        </li>

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Buscar filme" 
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            />

            <button type="submit">
                <BiSearchAlt2 />
            </button>
        </form>
          
      </nav>
  )
}

export default Navbar
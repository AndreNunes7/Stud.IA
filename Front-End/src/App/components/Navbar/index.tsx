import { Link } from "react-router-dom";
import "../../Pages/styles/Navbar.css";
import React, { useState } from "react";

export function Navbar({ variant }) {
  const [isMenuActive, setIsMenuActive] = useState(false); 

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive); 
  };

  return (
    <nav className={`navbar ${variant === "home" ? "home" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="./iconLogoStudia.png" alt="Stud.Ia Logo" />
        </Link>

        <ul className={`navbar-menu ${isMenuActive ? "active" : ""}`}>
          {variant === "home" ? (
            <>
              <li><Link to="/home" className="navbar-link">Home</Link></li>
              <li><Link to="/Dashboard" className="navbar-link">Progresso</Link></li>
              <li><Link to="/Roadmap" className="navbar-link">Roadmap</Link></li>
              <li><Link to="/profile" className="navbar-button">Perfil</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/" className="navbar-link">Home</Link></li>
              <li><Link to="/sobre" className="navbar-link">Sobre</Link></li>
              <li><Link to="/login" className="navbar-button">Entrar</Link></li>
              <li><Link to="/cadastro" className="navbar-button">Cadastrar</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

import "./global.css";
import arrow from "./assets/arrow.svg";
import logo from "./assets/logoHeader.svg"; 
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


export function Home() {
    return (
        <div className="layout">
          <header className="header">
            <h1>Bem-vindo ao StudIA</h1>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">Estudos</Link></li>
                <li><Link to="/contact">Perfil</Link></li>
              </ul>
            </nav>
          </header>
          <main className="main-content">
            <h2>Esta é a tela inicial</h2>
            <h3>LOGADO</h3>
            <img src={arrow} alt="Seta" />
          </main>
          <footer className="footer">
            <p>&copy; 2025 StudIA.</p>
          </footer>
        </div>
      );
}

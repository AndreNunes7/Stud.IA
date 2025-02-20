import "./global.css";
import arrow from "./assets/arrow.svg";
import logo from "./assets/logoHeader.svg"; 
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export function App() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/login", {
        email: loginData.email,
        password: loginData.password,
      });

      if (response.status === 200) {
        alert("Login realizado com sucesso!");
        console.log("Usuário logado:", response.data);
        
        navigate("/Home"); 
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error.response?.data || error);
      alert("Erro ao fazer login. Verifique suas credenciais.");
    }
  }

  return (
    <div className="container">
      <header>
        <img src={logo} alt="Logo" />
        <span>Bem-Vindo ao Studi.a</span>
        <span>Faça login na sua conta</span>
      </header>

      <form onSubmit={handleLogin}>
        <div className="inputContainer">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="studia@gmail.com"
            value={loginData.email}
            onChange={handleChange}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            value={loginData.password}
            onChange={handleChange}
          />
        </div>

        <a href="#">Esqueceu sua senha?</a>

        <button className="button" type="submit">
          Entrar <img src={arrow} alt="Seta" />
        </button>

        <div className="footer">
          <p>Ainda não tem uma conta?</p>
          <Link to="/cadastro">Criar uma conta</Link>
        </div>
      </form>
    </div>
  );
}

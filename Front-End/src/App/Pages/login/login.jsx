import "../styles/global.css";
import arrow from "../../assets/arrow.svg";
import logo from "../../assets/logoStudIA.png"; 
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import ToggleButton from "../../components/toggleButton";

export function App() {
                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
 const storedTheme = localStorage.getItem('isDarkMode') === 'true';
 const [isDarkMode, setIsDarkMode] = useState(storedTheme);

  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });                       

  const navigate = useNavigate();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }

    
    localStorage.setItem('isDarkMode', isDarkMode);
  }, [isDarkMode]);

 
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };


  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!formData.email) {
      alert("O email é obrigatório!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    if (!formData.senha || formData.senha.length < 6) {
      alert("A senha deve ter no mínimo 6 caracteres.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          senha: formData.senha,
        }),
      });

      const responseData = await response.json();

      if (responseData && responseData.userID) {
        localStorage.setItem("userId", responseData.userID);
      }

      if (response.status === 200) {
        alert("Usuário autenticado com sucesso!");
        console.log("response: " + JSON.stringify(responseData));

        if (responseData.selecoes.length === 0) {
          alert("Usuário ainda não criou seleções.");
          navigate("/SwiperPage");
        } else {
          alert("Usuário já criou seleções.");
          navigate("/home");
        }
      } else {
        alert(responseData.message || "Erro desconhecido. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao autenticar usuário:", error);
      alert("Erro ao autenticar usuário. Tente novamente.");
    }
  }

  return (
    <div className="container">
      <header>
        <img src={logo} alt="Logo Stud.Ia" />
        <span>Realize seu login</span>
      </header>

      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="studia@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            name="senha"
            id="senha"
            placeholder="********"
            value={formData.senha}
            onChange={handleChange}
            required
          />
        </div>

        <a href="#">Esqueceu sua senha?</a>

        <button className="button">
          Entrar <img src={arrow} alt="Seta" />
        </button>

        <div className="footer">
          <p>Ainda não tem uma conta?</p>
          <Link to="/cadastro">Criar uma conta</Link>
        </div>
      </form>
      <ToggleButton isDarkMode={isDarkMode} onToggle={toggleTheme} />
    </div>
  );
}

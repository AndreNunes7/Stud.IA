import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/logoStudIA.png";
import "../styles/global.css";
import arrow from "../../assets/arrow.svg";
import { useNavigate } from "react-router-dom";
import ToggleButton from "../../components/toggleButton";

export function Cadastro() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
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

    if (!formData.name) {
      alert("O nome é obrigatório!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    if (!formData.senha || formData.senha.length < 6) {
      alert("A senha deve ter no mínimo 6 caracteres.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.name,
          email: formData.email,
          senha: formData.senha,
        }),
      });

      if (response.status === 201) {
        alert("Usuário cadastrado com sucesso!");
        navigate("/login");
      } else {
        alert("Erro ao cadastrar usuário.");
      }
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    }
  }

  return (
    <div className="container">
      <header>
        <img src={logo} alt="Logo Stud.Ia" />
        <span>Crie sua conta no Stud.IA</span>
      </header>

      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Seu nome"
            onChange={handleChange}
            value={formData.name}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="studia@gmail.com"
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            name="senha"
            id="senha"
            placeholder="********"
            onChange={handleChange}
            value={formData.senha}
          />
        </div>

        <button className="button" type="submit">
          Cadastrar <img src={arrow} alt="" />
        </button>

        <div className="footer">
          <p>Já tem uma conta?</p>
          <Link to="/">Fazer login</Link>
        </div>
      </form>

     
      <ToggleButton isDarkMode={isDarkMode} onToggle={toggleTheme} />
    </div>
  );
}

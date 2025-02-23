<<<<<<< HEAD

import "./global.css";
import arrow from "./assets/arrow.svg"
import logo from "./assets/logoHeader.svg"; 
import { Link } from "react-router-dom";


export function App() {
  
  return <div className="container">
    <header>
      <img src={logo} alt="" />
      <span>Bem-Vindo ao Studi.a</span>
      <span>Realize seu cadastro</span>
    </header>

    <form>
    <div className="inputContainer">
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" placeholder="studia@gmail.com" required/>
    </div>

    <div className="inputContainer">
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" placeholder="********" required/>
    </div>

    <a href="">Esqueceu sua senha?</a>

    <button className="button">Entrar <img src={arrow} alt="" /></button>
    

    <div className="footer">
    <p>Ainda não tem uma conta?</p>
    <Link to="cadastro">Criar uma conta</Link>
    <Link to="/swiper">Ir para o Swiper</Link>


    </div>

    </form>

  </div>
    
  
}


=======
import "./global.css";
import arrow from "./assets/arrow.svg";
import logo from "./assets/logoHeader.svg"; 
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export function App() {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const navigate = useNavigate();

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

      console.log("Usuário autenticado com sucesso:", responseData);
      if (response.status === 200) {
        alert("Usuário autenticado com sucesso!");

        console.log("response: " + JSON.stringify(responseData));

        if (responseData.user.selecoes.length === 0) { 
          alert("Usuário ainda não criou seleções.");
          navigate("/SwiperPage");  
        } else {
          alert("Usuário já criou seleções.");
          navigate("/telaInicial");  
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
        <img src={logo} alt="Logo Studi.a" />
        <span>Bem-Vindo ao Studi.a</span>
        <span>Realize seu cadastro</span>
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

        <button className="button">Entrar <img src={arrow} alt="Seta" /></button>

        <div className="footer">
          <p>Ainda não tem uma conta?</p>
          <Link to="/cadastro">Criar uma conta</Link>
          <Link to="/swiper">Ir para o Swiper</Link>
        </div>
      </form>
    </div>
  );
}
>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)

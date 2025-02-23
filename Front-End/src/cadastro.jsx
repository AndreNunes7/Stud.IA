import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./global.css";
import arrow from "./assets/arrow.svg";
import { useNavigate } from "react-router-dom";

<<<<<<< HEAD


=======
>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)
export function Cadastro() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
<<<<<<< HEAD
    password: "",
  });

 
=======
    senha: "",
  });

  const navigate = useNavigate();

>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

<<<<<<< HEAD
  
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

  if (!formData.password || formData.password.length < 6) {
    alert("A senha deve ter no mínimo 6 caracteres.");
    return;
  }

    try {
      const response = await axios.post("http://localhost:8080/api/v1/cadastro", {
        username: formData.name, 
        email: formData.email,
        password: formData.password,
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Usuário cadastrado com sucesso:", response.data);
      response.status === 200 && alert("Usuário cadastrado com sucesso!");
      navigate("/login")
      
=======
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

>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    }
  }

  return (
    <div className="container">
      <header>
        <span>Crie sua conta no Studi.a</span>
      </header>

      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" id="name" placeholder="Seu nome" onChange={handleChange} value={formData.name} />
        </div>

        <div className="inputContainer">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="studia@gmail.com" onChange={handleChange} value={formData.email} />
        </div>

        <div className="inputContainer">
<<<<<<< HEAD
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password" placeholder="********" onChange={handleChange} value={formData.password} />
=======
          <label htmlFor="senha">Senha</label>
          <input type="password" name="senha" id="senha" placeholder="********" onChange={handleChange} value={formData.senha} />
>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)
        </div>

        <button className="button" type="submit">
          Cadastrar <img src={arrow} alt="" />
        </button>

        <div className="footer">
          <p>Já tem uma conta?</p>
          <Link to="/">Fazer login</Link>
        </div>
      </form>
    </div>
  );
<<<<<<< HEAD
};
=======
}
>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)

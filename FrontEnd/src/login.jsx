
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
      <input type="text" name="email" id="email" placeholder="studia@gmail.com" />
    </div>

    <div className="inputContainer">
      <label htmlFor="password">Password</label>
      <input type="password" name="passaword" id="passaword" placeholder="********" />
    </div>

    <a href="">Esqueceu sua senha?</a>

    <button className="button">Entrar <img src={arrow} alt="" /></button>

    <div className="footer">
    <p>Ainda não tem uma conta?</p>
    <Link to="cadastro">Criar uma conta</Link>

    </div>

    </form>



  </div>
    
  
}



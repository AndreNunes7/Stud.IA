
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



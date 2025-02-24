import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {App} from './App/Pages/login/login.jsx'
import {Cadastro} from "./App/Pages/Cadastro/cadastro.jsx"
import { SwiperPage } from "./App/Pages/Cards/SwiperPage.jsx";
import {TelaInicial} from "./App/Pages/home/home.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path='/home' element={<TelaInicial />} />
        <Route path='/login' element={<App/>} />
        <Route path='/SwiperPage' element={<SwiperPage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

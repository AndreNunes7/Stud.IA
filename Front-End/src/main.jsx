import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {App} from './App/Pages/login/login.jsx'
import {Cadastro} from "./App/Pages/Cadastro/cadastro.jsx"
import { SwiperPage } from "./App/Pages/Cards/SwiperPage.jsx";
import {TelaInicial} from "./App/Pages/home/home.jsx"
import Dashboard from "./App/Pages/Dashboard/dashboard.jsx";
import {Introducao} from "./App/Pages/Introdução/introducao.jsx"
import {Sobre} from "./App/Pages/Sobre/sobre.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introducao />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path='/home' element={<TelaInicial />} />
        <Route path='/login' element={<App/>} />
        <Route path='/SwiperPage' element={<SwiperPage/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/sobre' element={<Sobre/>} />


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

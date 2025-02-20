import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {App} from './login.jsx'
import {Cadastro} from "./cadastro.jsx"
import { SwiperPage } from "./SwiperPage";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/swiper" element={<SwiperPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

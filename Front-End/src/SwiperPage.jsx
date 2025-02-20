import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./cards.css";
import "./swiper.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export function SwiperPage() {
  const [trilhaEscolhida, setTrilhaEscolhida] = useState(null);

  const trilhas = ["Frontend", "Backend", "DevOps", "Infraestrutura", "Redes", "Data Science" , "Inteligencia artificial"];

  const handleTrilhaClick = (trilha) => {
    setTrilhaEscolhida(trilha);
    console.log("Trilha escolhida:", trilha);
  };

  return (
    <div className="container">
      <header>
        <span>Explore os Slides</span>
      </header>

      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {/* Slide 2 - Dias de estudo */}
        <SwiperSlide>
          <div className="slide-content">
            <h2>Bora começar 📅</h2>
            <p></p>
          </div>
        </SwiperSlide>

        {/* Slide 1 - Escolha de trilha */}
        <SwiperSlide>
          <div className="slide-content">
            <h2>Qual trilha de conhecimento você quer seguir? 🚀</h2>
            <p>Escolha uma das opções abaixo:</p>
            <div className="trilhas-container">
              {trilhas.map((trilha) => (
                <button
                  key={trilha}
                  className={`trilha-card ${trilhaEscolhida === trilha ? "selected" : ""}`}
                  onClick={() => handleTrilhaClick(trilha)}
                >
                  {trilha}
                </button>
              ))}
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 - Dias de estudo */}
        <SwiperSlide>
          <div className="slide-content">
            <h2>Quais dias da semana você está no modo "bora estudar"? 📅</h2>
            <p>Conteúdo do terceiro slide.</p>
          </div>
        </SwiperSlide>

        {/* Slide 3 - Dificuldades no código */}
        <SwiperSlide>
          <div className="slide-content">
            <h2>Quais são os chefões que você ainda precisa derrotar no código? 🎮</h2>
            <p>Conteúdo do quarto slide.</p>
          </div>
        </SwiperSlide>

        {/* Slide 4 - Nível de experiência */}
        <SwiperSlide>
          <div className="slide-content">
            <h2>Qual trilha de conhecimento você quer seguir? 🚀</h2>
            <p>Escolha uma das opções abaixo:</p>
            <div className="trilhas-container">
              {trilhas.map((trilha) => (
                <button
                  key={trilha}
                  className={`trilha-card ${trilhaEscolhida === trilha ? "selected" : ""}`}
                  onClick={() => handleTrilhaClick(trilha)}
                >
                  {trilha}
                </button>
              ))}
            </div>
          </div>
        </SwiperSlide>


        {/* Slide 5 - Resumo */}
        <SwiperSlide>
          <div className="slide-content">
            <h2>Resumo</h2>
            <p></p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

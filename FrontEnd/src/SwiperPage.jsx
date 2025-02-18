import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



//import "./cards.css";
import './swiper.css';
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export function SwiperPage() {
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
        <SwiperSlide>
        <div className="slide-content">
             <h2>Qual trilha de conhecimento você quer seguir? 🚀</h2>
            <p>Conteúdo do primeiro slide.</p>
        </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="slide-content">
            <h2>Quantas horas você consegue dedicar ao seu aprendizado? ⏳</h2>
            <p>Conteúdo do segundo slide.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content">
            <h2>Quais dias da semana você está no modo "bora estudar"? 📅</h2>
            <p>Conteúdo do terceiro slide.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content">
            <h2>Quais são os chefões que você ainda precisa derrotar no código? 🎮</h2>
            <p>Conteúdo do quarto slide.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content">
            <h2>Em que nível você está nessa jornada? 🎯</h2>
            <p>Conteúdo do sexto slide.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

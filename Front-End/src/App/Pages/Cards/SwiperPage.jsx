import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/cards.css";
import "../styles/swiper.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { useNavigate } from "react-router-dom";

export function SwiperPage() {
  const [trilhaEscolhida, setTrilhaEscolhida] = useState(null);
  const [senioridadeEscolhida, setSenioridadeEscolhida] = useState(null);
  const [dificuldadeEscolhida, setDificuldadeEscolhida] = useState(null);
  const [diasEscolhidos, setDiasEscolhidos] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const trilhas = [
    "Frontend",
    "Backend",
    "DevOps",
    "Infraestrutura",
    "Redes",
    "Data Science",
    "Inteligencia artificial",
  ];
  const senioridade = ["estudante", "junior", "sênior", "pleno"];
  const dificuldades = [
    "Entendimento de Requisitos",
    "Integração de APIs",
    "Otimização de Banco de Dados",
    "Versionamento de Código",
    "Segurança de Aplicações",
    "Comunicação em Equipe",
    "Resolução de Conflitos de Merge",
    
    
    "Refatoração de Código Legado",
  ];
  const handleTrilhaClick = (trilha) => {
    setTrilhaEscolhida(trilha);
    console.log("Trilha escolhida:", trilha);
  };

  const handleSenioridadeClick = (senioridade) => {
    setSenioridadeEscolhida(senioridade);
    console.log("Senioridade escolhida:", senioridade);
  };

  const handleDificuldadeClick = (dificuldade) => {
    setDificuldadeEscolhida(dificuldade);
    console.log("Dificuldade escolhida:", dificuldade);
  };

  const handleDiaClick = (dia) => {
    if (diasEscolhidos.includes(dia)) {
      setDiasEscolhidos(diasEscolhidos.filter((d) => d !== dia));
    } else {
      setDiasEscolhidos([...diasEscolhidos, dia]);
    }
  };

  const handleConfirmar = async () => {
    if (isSubmitted) return;

    const dadosResumo = {
      userID: localStorage.getItem("userId"), 
      selecoes: [
        trilhaEscolhida,
        senioridadeEscolhida,
        dificuldadeEscolhida,
        ...diasEscolhidos,
      ].filter(Boolean), 
    };

    console.log("Dados confirmados:", JSON.stringify(dadosResumo, null, 2));

    try {
      const response = await fetch("http://localhost:8080/api/v1/roadmap", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosResumo),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Resposta da API:", data);
        alert("Seleções salvas com sucesso!");
        setIsSubmitted(true);
      } else {
        console.error("Erro na requisição:", response.statusText);
        alert("Erro ao salvar seleções.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro ao salvar seleções.");
    }
  };

  const todosCamposSelecionados = trilhaEscolhida && dificuldadeEscolhida && diasEscolhidos.length > 0;

  return (
    <div className="container">
      <header>
        <span></span>
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
        {/* Slide 1 - Começar */}
        <SwiperSlide>
          <div className="inicio-container">
            <header className="inicio-header">
              <h1>Bem-vindo ao Seu Guia de Aprendizado 💻</h1>
              <p>Descubra sua trilha ideal e comece sua jornada agora!</p>
              <p>Clique na seta ao lado para continuar!</p>
            </header>
            <div className="inicio-content"></div>
          </div>
        </SwiperSlide>

        {/* Slide 2 - Escolha de trilha */}
        <SwiperSlide>
          <div className="slide-content">
            <h2>Qual trilha de conhecimento você quer seguir? 🚀</h2>
            <p>Escolha uma das opções abaixo:</p>
            <div className="trilhas-container">
              {trilhas.map((trilha) => (
                <button
                  key={trilha}
                  className={`trilha-card ${
                    trilhaEscolhida === trilha ? "selected" : ""
                  }`}
                  onClick={() => handleTrilhaClick(trilha)}
                >
                  {trilha}
                </button>
              ))}
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 - Dias de estudo */}
        <SwiperSlide>
          <div className="slide-content">
            <h2>Quais dias da semana você está no modo "bora estudar"? 📅</h2>
            <p>Escolha os dias em que você está disponível para estudar:</p>
            <div className="dias-container">
              {[
                "Segunda-feira",
                "Terça-feira",
                "Quarta-feira",
                "Quinta-feira",
                "Sexta-feira",
                "Sábado",
                "Domingo",
              ].map((dia) => (
                <button
                  key={dia}
                  className={`trilha-card ${
                    diasEscolhidos.includes(dia) ? "selected" : ""
                  }`}
                  onClick={() => handleDiaClick(dia)}
                >
                  {dia}
                </button>
              ))}
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 - Dificuldades no código */}
        <SwiperSlide>
          <div className="slide-content">
            <h2>
              Quais são os chefões que você ainda precisa derrotar no código? 🎮
            </h2>
            <p>Escolha uma das opções abaixo:</p>
            <div className="trilhas-container">
              {dificuldades.map((dificuldade) => (
                <button
                  key={dificuldade}
                  className={`trilha-card ${
                    dificuldadeEscolhida === dificuldade ? "selected" : ""
                  }`}
                  onClick={() => handleDificuldadeClick(dificuldade)}
                >
                  {dificuldade}
                </button>
              ))}
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 5 - Nível de experiência */}
        <SwiperSlide>
          <div className="slide-content">
            <h2>Qual seu nível de senioridade? 🚀</h2>
            <p>Escolha uma das opções abaixo:</p>
            <div className="trilhas-container">
              {senioridade.map((nivel) => (
                <button
                  key={nivel}
                  className={`trilha-card ${
                    senioridadeEscolhida === nivel ? "selected" : ""
                  }`}
                  onClick={() => handleSenioridadeClick(nivel)}
                >
                  {nivel}
                </button>
              ))}
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 6 - Resumo */}
        <SwiperSlide>
          <div className="slide-content resumo-container">
            <h2>Resumo</h2>
            <div className="resumo-box color-box">
              <div className="resumo-item">
                <i className="icon-trilha" /> <strong>Trilha escolhida:</strong>{" "}
                {trilhaEscolhida}
              </div>
              <div className="resumo-item">
                <i className="icon-senioridade" />{" "}
                <strong>Senioridade escolhida:</strong> {senioridadeEscolhida}
              </div>
              <div className="resumo-item">
                <i className="icon-dificuldade" />{" "}
                <strong>Dificuldade escolhida:</strong> {dificuldadeEscolhida}
              </div>
              <div className="resumo-item">
                <i className="icon-dias" />{" "}
                <strong>Dias escolhidos para estudo:</strong>{" "}
                {diasEscolhidos.join(", ")}
              </div>
            </div>

            {todosCamposSelecionados && (
              <div className="botao-container">
                <button className="botao-confirmar" onClick={handleConfirmar}>
                  {isSubmitted ? "Enviado!" : "Confirmar!"}
                </button>
              </div>
            )}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
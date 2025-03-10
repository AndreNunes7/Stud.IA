import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/torta.css"


ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardTorta = () => {
  const location = useLocation(); 
  const navigate = useNavigate();
  
  
  const { trilhaEscolhida, senioridadeEscolhida, dificuldadeEscolhida, diasEscolhidos } = location.state || {};

 
  const data = {
    labels: ["Trilha", "Senioridade", "Dificuldade", "Dias de Estudo"],
    datasets: [
      {
        label: "Distribuição das Escolhas",
        data: [
          trilhaEscolhida ? 1 : 0,
          senioridadeEscolhida ? 1 : 0,
          dificuldadeEscolhida ? 1 : 0,
          diasEscolhidos && diasEscolhidos.length > 0 ? 1 : 0,
        ],
        backgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#ffce56",
          "#4bc0c0",
        ],
        hoverBackgroundColor: [
          "#ff4384",
          "#36a0eb",
          "#ffb156",
          "#49c6c6",
        ],
      },
    ],
  };

 
  const handleGoHome = () => {
    navigate("/home");  
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Seu Roadmap de Aprendizado 🚀</h2>

      {/* Gráfico de Torta */}
      <div className="chart-container">
        <Pie data={data} />
      </div>

      <div className="dashboard-info">
        <div className="dashboard-item">
          <strong>Trilha escolhida: </strong>
          <p>{trilhaEscolhida || "Não selecionada"}</p>
        </div>

        <div className="dashboard-item">
          <strong>Senioridade escolhida: </strong>
          <p>{senioridadeEscolhida || "Não selecionada"}</p>
        </div>

        <div className="dashboard-item">
          <strong>Dificuldade escolhida: </strong>
          <p>{dificuldadeEscolhida || "Não selecionada"}</p>
        </div>

        <div className="dashboard-item">
          <strong>Dias de estudo: </strong>
          <p>{diasEscolhidos && diasEscolhidos.length > 0 ? diasEscolhidos.join(', ') : "Não selecionados"}</p>
        </div>
      </div>

     
      <div className="action-container">
        <button className="button-dashboard" onClick={handleGoHome}>
          Ir para Home
        </button>
      </div>
    </div>
  );
};

export default DashboardTorta;

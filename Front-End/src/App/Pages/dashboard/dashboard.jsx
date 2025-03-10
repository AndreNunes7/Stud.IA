import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "../styles/dashboard.css";

const Dashboard = ({ etapas = [] }) => {
  const getNumeroDeDiasNoMes = () => {
    const dataAtual = new Date();
    const ano = dataAtual.getFullYear();
    const mes = dataAtual.getMonth();

    const ultimoDiaDoMes = new Date(ano, mes + 1, 0);
    return ultimoDiaDoMes.getDate();
  };

  const numeroDeDiasNoMes = getNumeroDeDiasNoMes();

  const [concluidos, setConcluidos] = useState(new Array(etapas.length).fill(false));
  const [diasEstudo, setDiasEstudo] = useState(Array(numeroDeDiasNoMes).fill(false));

  const marcarConcluido = (index) => {
    const novoEstado = [...concluidos];
    novoEstado[index] = !novoEstado[index];
    setConcluidos(novoEstado);
  };

  const marcarDiaEstudo = (index) => {
    const novoDias = [...diasEstudo];
    novoDias[index] = !novoDias[index];
    setDiasEstudo(novoDias);
  };

  const progresso = etapas.length > 0 
    ? (concluidos.filter(Boolean).length / etapas.length) * 100 
    : 0;

  // Dados- gráfico de progresso
  const data = [
    { name: "Concluído", value: concluidos.filter(Boolean).length },
    { name: "Pendente", value: etapas.length - concluidos.filter(Boolean).length },
  ];

  return (
    <div className="progresso-container">
      <h2>Meu Progresso</h2>
      <div className="progresso-bar">
        <div className="progresso" style={{ width: `${progresso}%` }}></div>
      </div>
      <p>{progresso.toFixed(0)}% concluído</p>

      {/* progresso de etapas */}
      <h3>Progresso das Etapas</h3>
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={index === 0 ? "#4CAF50" : "#FFC107"} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>

      <div className="modulos-grid">
        {etapas.map((etapa, index) => (
          <div
            key={index}
            className={`modulo ${concluidos[index] ? "concluido" : "pendente"}`}
            onClick={() => marcarConcluido(index)}
          >
            {etapa}
          </div>
        ))}
      </div>

     
      <h3>Dias Estudados</h3>
      <div className="calendario">
        {diasEstudo.map((dia, index) => (
          <div
            key={index}
            className={`dia ${dia ? "estudado" : ""}`}
            onClick={() => marcarDiaEstudo(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

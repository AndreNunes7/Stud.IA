import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";
import "../styles/dashboard.css";

const Dashboard = ({ etapas = [] }) => {
  const getNumeroDeDiasNoMes = () => {
    const dataAtual = new Date();
    const ano = dataAtual.getFullYear();
    const mes = dataAtual.getMonth();

    const ultimoDiaDoMes = new Date(ano, mes + 1, 0);
    return ultimoDiaDoMes.getDate(); // Número de dias no mês
  };

  const numeroDeDiasNoMes = getNumeroDeDiasNoMes(); // Número de dias do mês

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

  const progressoEtapas = etapas.length > 0 
    ? (concluidos.filter(Boolean).length / etapas.length) * 100 
    : 0;

  const progressoDias = numeroDeDiasNoMes > 0 
    ? (diasEstudo.filter(Boolean).length / numeroDeDiasNoMes) * 100 
    : 0;

  const progressoGeral = (progressoEtapas + progressoDias) / 2;

  // Dados para o gráfico de pizza
  const data = [
    { name: 'Etapas Concluídas', value: progressoEtapas },
    { name: 'Dias Estudados', value: progressoDias },
    { name: 'Restante', value: 100 - progressoGeral }
  ];

  // Cores para o gráfico de pizza
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div className="progresso-container">
      <h2>Meu Progresso</h2>

      {/* Barra de Progresso Geral */}
      <div className="progresso-bar">
        <div className="progresso" style={{ width: `${progressoGeral}%` }}></div>
      </div>
      <p>{progressoGeral.toFixed(0)}% concluído</p>

      {/* Exibindo o Gráfico de Pizza */}
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie 
            data={data} 
            dataKey="value" 
            nameKey="name" 
            cx="50%" 
            cy="50%" 
            outerRadius={100} 
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>

      {/* Exibindo as Etapas */}
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

      {/* Exibindo os Dias Estudados */}
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

// telaInicial.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

export const TelaInicial = () => {
  const location = useLocation();
  const dados = location.state?.dados; // Acessa os dados enviados, se existir

  return (
    <div>
      <h1>Tela Inicial</h1>
      {dados ? (
        <pre>{JSON.stringify(dados, null, 2)}</pre> // Exibe os dados retornados
      ) : (
        <p>Nenhum dado disponível.</p>
      )}
    </div>
  );
};

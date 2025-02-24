// telaInicial.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

export const TelaInicial = () => {
  const location = useLocation();
  const dados = location.state?.dados; 

  return (
    <div>
      <h1>Tela Inicial</h1>
      {dados ? (
        <pre>{JSON.stringify(dados, null, 2)}</pre> 
      ) : (
        <p>Nenhum dado disponível.</p>
        
      )}
    </div>
  );
};

// telaInicial.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

export const TelaInicial = () => {
  const location = useLocation();
<<<<<<< HEAD
  const dados = location.state?.dados; // Acessa os dados enviados, se existir
=======
  const dados = location.state?.dados; 
>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)

  return (
    <div>
      <h1>Tela Inicial</h1>
      {dados ? (
<<<<<<< HEAD
        <pre>{JSON.stringify(dados, null, 2)}</pre> // Exibe os dados retornados
      ) : (
        <p>Nenhum dado disponível.</p>
=======
        <pre>{JSON.stringify(dados, null, 2)}</pre> 
      ) : (
        <p>Nenhum dado disponível.</p>
        
>>>>>>> c959c5c (Feat: Integraçao com a API, arrumado bugs no front e melhorias na resposta da requisiçao da api)
      )}
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RoadmapPage() {
  const { id } = useParams();
  const [roadmapData, setRoadmapData] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

 
  useEffect(() => {
    const fetchRoadmapData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/roadmap/${id}`);
        
        
        if (!response.ok) {
          throw new Error('Falha ao carregar os dados do roadmap');
        }

        const data = await response.json();
        setRoadmapData(data); 
      } catch (err) {
        setError(err.message); 
      } finally {
        setLoading(false);
      }
    };

    fetchRoadmapData(); 
  }, [id]); 

  
  if (loading) {
    return <div>Carregando...</div>;
  }

  
  if (error) {
    return <div>Erro: {error}</div>;
  }

  
  return (
    <div>
      <h1>{roadmapData?.title}</h1>
      <p>{roadmapData?.description}</p>
      <ul>
        {roadmapData?.steps?.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </div>
  );
}

export default RoadmapPage;

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
  const [dificuldades, setDificuldades] = useState([]); 
  const navigate = useNavigate();

  const trilhas = [
    "Frontend",
    "Backend",
    "DevOps",
    "Infraestrutura",
    "Redes",
    "Data Science",
    "Inteligencia Artificial",
    "Cybersecurity",
    "Blockchain",
    "Mobile Development",
    "Game Development",
    "Cloud Computing"
  ];
  
  const senioridade = ["Estudante", "Junior","Pleno","Sênior"];

 
  const dificuldadesMap = {
    Frontend: [
      "Fundamentos de HTML, CSS e JavaScript",
      "Layout responsivo e Flexbox/Grid",
      "Manipulação do DOM e eventos",
      "Consumo de APIs REST e Fetch/Axios",
      "Gerenciamento de estado (Redux, Context API)",
      "Componentização e reuso de código (React/Vue)",
      "Performance e otimização (Lazy Load, Code Splitting)",
      "Testes unitários e de integração (Jest, Testing Library)",
      "WebAssembly e otimização de renderização",
      "Acessibilidade e SEO em aplicações web",
      "Progressive Web Apps (PWA) e Service Workers",
      "Animações avançadas e interatividade (GSAP, Framer Motion)"
    ],
    Backend: [
      "Fundamentos de APIs REST e JSON",
      "Bancos de Dados Relacionais (SQL) e NoSQL (MongoDB)",
      "Autenticação e autorização (JWT, OAuth, Session)",
      "Arquitetura MVC e separação de responsabilidades",
      "Testes automatizados no backend",
      "Caching e otimização de consultas (Redis, Indexação)",
      "Arquitetura de microserviços e filas de mensagens",
      "Segurança em APIs e boas práticas",
      "Escalabilidade e balanceamento de carga",
      "GraphQL e alternativas ao REST",
      "CI/CD para automação de deploys",
      "Observabilidade e logging estruturado"
    ],
    DevOps: [
      "Conceitos de CI/CD e automação de deploy",
      "Uso de Docker para containerização",
      "Gerenciamento de infraestrutura na nuvem",
      "Orquestração de containers com Kubernetes",
      "Monitoramento e logging (Prometheus, ELK Stack)",
      "Segurança em DevOps (IAM, TLS, Firewalls)",
      "Arquitetura serverless e escalabilidade automatizada",
      "Gerenciamento de infraestrutura como código",
      "Pipeline CI/CD otimizado",
      "Análise de custos em nuvem",
      "Backup e recuperação automatizados",
      "Alta disponibilidade e disaster recovery"
    ],
    Infraestrutura: [
      "Redes e protocolos (TCP/IP, DNS, HTTP/HTTPS)",
      "Configuração de servidores (Apache, Nginx)",
      "Backup e recuperação de dados",
      "Monitoramento e troubleshooting de redes",
      "Balanceamento de carga e proxy reverso",
      "Configuração de VPNs e segurança de rede",
      "Gerenciamento de redes distribuídas",
      "Infraestrutura híbrida (On-premise + Cloud)",
      "Proteção contra ataques DDoS",
      "Virtualização e gerenciamento de servidores",
      "Firewall avançado e segmentação de rede",
      "Alta disponibilidade em sistemas distribuídos"
    ],
    "Data Science": [
      "Análise de dados com Pandas e Numpy",
      "Visualização de dados (Matplotlib, Seaborn)",
      "Fundamentos de estatística para ciência de dados",
      "Machine Learning supervisionado e não supervisionado",
      "Engenharia de features e modelagem de dados",
      "Implementação de pipelines de dados",
      "Deep Learning e redes neurais",
      "Sistemas de recomendação",
      "Deploy de modelos de IA em produção",
      "Tratamento de dados desbalanceados",
      "Big Data e processamento distribuído",
      "Análise de séries temporais"
    ],
    "Inteligência Artificial": [
      "Introdução a IA e aprendizado de máquina",
      "Algoritmos clássicos de IA (A*, Minimax)",
      "Redes neurais e backpropagation",
      "Processamento de linguagem natural (NLP)",
      "Visão computacional e reconhecimento de imagens",
      "Aprendizado por reforço",
      "Arquiteturas avançadas de IA (Transformers, GANs)",
      "IA explicável e ética em IA",
      "Otimização e compressão de modelos",
      "Deploy de IA em edge computing",
      "Treinamento distribuído de modelos",
      "Simulações e modelagem probabilística"
    ],
    Cybersecurity: [
      "Fundamentos de segurança da informação",
      "Criptografia e hashing (AES, RSA, SHA)",
      "Segurança em APIs e Web (OWASP Top 10)",
      "Testes de penetração e análise de vulnerabilidades",
      "Segurança de redes e configuração de firewalls",
      "Análise forense e resposta a incidentes",
      "Pentesting avançado e engenharia reversa",
      "Segurança ofensiva e defesa cibernética",
      "Implementação de SIEM e SOC",
      "Hardening de servidores e sistemas",
      "Detecção e prevenção de intrusões",
      "Segurança em ambientes cloud e DevSecOps"
    ],
    "Mobile Development": [
      "Desenvolvimento nativo (Swift, Kotlin)",
      "Layout responsivo e UI/UX para mobile",
      "Consumo de APIs e armazenamento local",
      "Gerenciamento de estado em apps mobile",
      "Publicação na Play Store/App Store",
      "Performance e otimização para dispositivos móveis",
      "Integração com serviços de terceiros",
      "Segurança em aplicativos móveis",
      "Arquitetura modular e escalável",
      "Testes automatizados em apps mobile",
      "Desenvolvimento de aplicativos offline-first",
      "Animações e transições avançadas"
    ],
    "Game Development": [
      "Fundamentos de desenvolvimento de jogos",
      "Física e movimentação de personagens",
      "Design de níveis e mecânicas básicas",
      "Inteligência artificial para NPCs",
      "Animação e efeitos gráficos",
      "Networking para jogos multiplayer",
      "Otimização de performance e renderização",
      "Desenvolvimento de motores de jogos",
      "Realidade aumentada e virtual (AR/VR)",
      "Sistemas de partículas e shaders",
      "Monetização e publicação de jogos",
      "Game design e balanceamento de jogabilidade"
    ],
    "Cloud Computing": [
      "Fundamentos de computação em nuvem",
      "Configuração de instâncias e storage",
      "Noções de segurança em cloud",
      "Gerenciamento de custos e otimização",
      "Arquitetura serverless e funções como serviço",
      "Automação de infraestrutura com Terraform",
      "Arquitetura híbrida e multi-cloud",
      "Alta disponibilidade e recuperação de desastres",
      "Computação distribuída e Edge Computing",
      "Monitoramento e observabilidade na nuvem",
      "Gerenciamento de permissões e identidade",
      "Otimização de performance para workloads em cloud"
    ],
  };
  
  const handleTrilhaClick = (trilha) => {
    setTrilhaEscolhida(trilha);
    setDificuldades(dificuldadesMap[trilha] || []);  
    setDificuldadeEscolhida(null); 
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
        navigate("/home");
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

  const todosCamposSelecionados =
    trilhaEscolhida &&
    dificuldadeEscolhida &&
    diasEscolhidos.length > 0;

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
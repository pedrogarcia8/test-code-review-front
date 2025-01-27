import React, { FC, useState, useEffect } from 'react';

const Home: FC = () => {
  const [count, setCount] = useState<number>(0);
  const [hoverCount, setHoverCount] = useState<number>(0);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Simulação de dados para gráficos
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    // Gera dados aleatórios ao iniciar
    const generateData = () => {
      const newData = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
      setData(newData);
    };
    generateData();
  }, []);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  const handleHover = () => {
    setHoverCount(hoverCount + 1);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Estilos dinâmicos
  const containerStyle: React.CSSProperties = {
    padding: '20px',
    backgroundColor: isDarkMode ? '#333' : '#f4f4f4',
    color: isDarkMode ? '#fff' : '#000',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '10px 20px',
    backgroundColor: isDarkMode ? '#444' : '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const statsStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '500px',
  };

  const barChartStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '5px',
    height: '200px',
    width: '100%',
    maxWidth: '500px',
    borderBottom: '2px solid #ccc',
    borderLeft: '2px solid #ccc',
  };

  const barStyle = (value: number): React.CSSProperties => ({
    width: '10%',
    height: `${value}%`,
    backgroundColor: isDarkMode ? '#FF6347' : '#4CAF50',
    transition: 'height 0.3s ease, background-color 0.3s ease',
  });

  return (
    <div style={containerStyle}>
      <h1>Dashboard Interativo</h1>
      <div style={statsStyle}>
        <div>
          <h3>Clicks</h3>
          <p>{count}</p>
        </div>
        <div>
          <h3>Hovers</h3>
          <p>{hoverCount}</p>
        </div>
      </div>
      <button style={buttonStyle} onClick={handleButtonClick} onMouseEnter={handleHover}>
        Clique ou Passe o Mouse
      </button>
      <button style={buttonStyle} onClick={toggleDarkMode}>
        {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
      </button>
      <h3>Gráfico de Dados</h3>
      <div style={barChartStyle}>
        {data.map((value, index) => (
          <div key={index} style={barStyle(value)} title={`Valor: ${value}`} />
        ))}
      </div>
    </div>
  );
};

export default Home;

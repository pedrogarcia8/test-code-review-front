import { FC, useState, useEffect, CSSProperties } from 'react';

const AccessibilityTest: FC = () => {
  return (
    <div>
      {/* Erro 1: Imagem sem texto alternativo */}
      <img src="example.jpg" />

      {/* Erro 2: Falta de `role` em elemento interativo */}
      <div onClick={() => alert("Div interativa sem role")}>Clique aqui</div>

      {/* Erro 3: Uso de atributos de aria inválidos */}
      <button aria-hidden="true">Botão Inacessível</button>

      {/* Erro 4: Label faltando em elemento de formulário */}
      <input type="text" id="input-without-label" />

      {/* Erro 5: Links sem texto descritivo */}
      <a href="#">Clique</a>
    </div>
  );
};

const Home: FC = () => {
  const [count, setCount] = useState<number>(0);
  const [hoverCount, setHoverCount] = useState<number>(0);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
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

  const containerStyle: CSSProperties = {
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

  const buttonStyle: CSSProperties = {
    padding: '10px 20px',
    backgroundColor: isDarkMode ? '#444' : '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const statsStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '500px',
  };

  const barChartStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '5px',
    height: '200px',
    width: '100%',
    maxWidth: '500px',
    borderBottom: '2px solid #ccc',
    borderLeft: '2px solid #ccc',
  };

  const barStyle = (value: number): CSSProperties => ({
    width: '10%',
    height: `${value}%`,
    backgroundColor: isDarkMode ? '#FF6347' : '#4CAF50',
    transition: 'height 0.3s ease, background-color 0.3s ease',
  });

  return (
    <main style={containerStyle}>
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
        Clique ou passe o mouse
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
      <AccessibilityTest />
    </main>
  );
};

export default Home;

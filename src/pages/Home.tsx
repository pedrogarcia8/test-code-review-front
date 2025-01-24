import React from 'react';

const Home: React.FC = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div style={{ padding: '20px', color: '#000' }}>
      <h1>Home</h1>
      <p>Teste</p>
      <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '5px', flexDirection: 'column', alignItems: 'center' }}>
        <p>Contagem: {count}</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => setCount(count + 1)}>Aumentar</button>
          <button onClick={() => setCount(count - 1)}>Diminuir</button>
        </div>
      </div>  
    </div>
  );
};

export default Home;
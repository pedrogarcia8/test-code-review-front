import React, { useState } from 'react';

const Home: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [evenNumbers, setEvenNumbers] = useState<number>(0);

  const handleIncrement = (value: number): void => {
    setCount(value + 1);
  };

  const handleDecrement = (value: number): void => {
    setCount(value - 1);
  };

  const handleEvenNumbers = (value: number): void => {
    setEvenNumbers(value);
  };

  return (
    <div style={{ padding: '20px', color: '#000' }}>
      <h1>Home</h1>
      <p>Teste</p>
      <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '5px', flexDirection: 'column', alignItems: 'center' }}>
        <p>Contagem: {count}</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => { handleIncrement(count); }}>Aumentar</button>
          <button onClick={() => { handleDecrement(count); }}>Diminuir</button>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '5px', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <p>Número pares: {evenNumbers}</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => {handleEvenNumbers(2); }}>Aumentar</button>
          <button onClick={() => {handleEvenNumbers(-2); }}>Diminuir</button>
        </div>
      </div>  
    </div>
  );
};

export default Home;
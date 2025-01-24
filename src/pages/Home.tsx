import { CSSProperties, FC, useEffect, useState } from 'react';

type Props = {
  style: CSSProperties;
  text: string;
  value: number;
  fn: (value: number) => void;
  fnValue: number;
}

const Div: FC<Props> = ({ style, text, value, fn, fnValue }) => {
  return (
    <div style={style}>
      <p>{text} {value}</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => {fn(fnValue); }}>Aumentar</button>
        <button onClick={() => {fn(-fnValue); }}>Diminuir</button>
      </div>
    </div>
  )
}

const Home: FC = () => {
  const [count, setCount] = useState<number>(0);
  const [evenNumbers, setEvenNumbers] = useState<number>(0);
  const [loopNumber, setLoopNumber] = useState<number>(0);

  const handleIncrement = (value: number): void => {
    setCount(count + value);
  };

  const handleEvenNumbers = (value: number): void => {
    setEvenNumbers(evenNumbers + value);
  };

  const handleLoopNumber = (value: number): void => {
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        setLoopNumber(value * i * j);
      }
    }
  };

  useEffect(() => {
    handleLoopNumber(2);
  }, [loopNumber]);

  const boxStyle: CSSProperties = { 
    display: 'flex', 
    justifyContent: 'center', 
    backgroundColor: '#f0f0f0', 
    padding: '20px', 
    borderRadius: '5px', 
    flexDirection: 'column', 
    alignItems: 'center', 
    marginTop: '20px' 
  };

  return (
    <div style={{ padding: '20px', color: '#000' }}>
      <h1>Home</h1>
      <p>Teste</p>
      <Div style={boxStyle} text='Contagem: ' value={count} fn={handleIncrement} fnValue={1} />
      <Div style={boxStyle} text='Números pares: ' value={evenNumbers} fn={handleEvenNumbers} fnValue={2} />
      <div style={boxStyle}>
        <p>Loop: {loopNumber}</p>
      </div> 
    </div>
  );
};

export default Home;
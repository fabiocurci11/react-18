import React, { useState } from 'react';

const MyComponent = () => {
  // Definiamo uno stato locale per il componente
  const [count, setCount] = useState(0);

  // Funzione per incrementare il conteggio
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Contatore: {count}</h1>
      <button onClick={handleClick}>Incrementa</button>
    </div>
  );
};

export default MyComponent;
import React, {useState} from 'react';

// Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação.
// Propriedade: Informações que o componente PAI passa para o componente FILHO.
// Estado: Informações mantidas pelo componente.

function App() {
  const [counter, setCounter] = useState(0)

  function incrementCouter() {
    setCounter(counter + 1)
  }

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCouter}>Incrementar</button>
    </>
  );
}

export default App;

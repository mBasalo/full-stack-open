import { useState } from "react";

const App = () => {
  // Definimos los estados para cada tipo de feedback
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Funciones para manejar los clics en cada botón
  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  const handleReset = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  };

  return (
    <>
      <h1>give feedback</h1>

      {/* Asignamos las funciones a los eventos onClick de los botones */}
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>

      <h2>statistics</h2>

      {/* Mostramos los resultados */}
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <br />
      <button onClick={handleReset}>reset</button>


    </>
  );
};

export default App;

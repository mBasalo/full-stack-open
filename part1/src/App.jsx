import { useState } from "react";

//STATICS COMPONENT 

const Statistics = ({ good, neutral, bad, total, average, positivePercentage }) => {
  if (total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>total: {total}</p>
      <p>average: {average.toFixed(2)}</p>
      <p>positive feedback: {positivePercentage.toFixed(2)}%</p>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  const total = good + neutral + bad;
  const average = total > 0 ? (good - bad) / total : 0; 
  const positivePercentage = total > 0 ? (good / total) * 100 : 0;


  const handleReset = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  };

  return (
    <>
      <h1>give feedback</h1>

      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>

      <h2>statistics</h2>

      {/* <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <br />

      <p>total: {total}</p>
      <p>average: {average.toFixed(2)}</p>
      <p>positive feedback: {positivePercentage.toFixed(2)}%</p>
      <br /> */}

<Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positivePercentage={positivePercentage}
      />

      <button onClick={handleReset}>reset</button>
    </>
  );
};

export default App;

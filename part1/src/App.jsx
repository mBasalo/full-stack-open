import { useState } from "react";

//BUTTON COMPONENT

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

//STATICSLINE COMPONENT

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text}: {value}
    </p>
  );
};

//STATICS COMPONENT 

const Statistics = ({ good, neutral, bad, total, average, positivePercentage }) => {
  if (total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="total" value={total} />
      <StatisticLine text="average" value={average.toFixed(2)} />
      <StatisticLine text="positive feedback" value={positivePercentage.toFixed(2) + '%'} />
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const average = total > 0 ? (good - bad) / total : 0; 
  const positivePercentage = total > 0 ? (good / total) * 100 : 0;



  return (
    <>
      <h1>give feedback</h1>

      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />

      <Button onClick={() => { setGood(0); setNeutral(0); setBad(0); }} text="reset" />

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

    </>
  );
};

export default App;

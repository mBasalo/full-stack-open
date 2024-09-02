import { useState } from "react";

// Button component for handling feedback submission
const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

// StatisticLine component for displaying a single statistic in a table row
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

// Statistics component for displaying all statistics in a table
const Statistics = ({ good, neutral, bad, total, average, positivePercentage }) => {
  if (total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="total" value={total} />
        <StatisticLine text="average" value={average.toFixed(2)} />
        <StatisticLine text="positive feedback" value={positivePercentage.toFixed(2) + '%'} />
      </tbody>
    </table>
  );
};

// App component, which keeps the application's state
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

      {/* Use the Button component for each feedback type */}
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />

      <Button onClick={() => { setGood(0); setNeutral(0); setBad(0); }} text="reset" />

      <h2>statistics</h2>

      {/* Pass the statistics as props to the Statistics component */}
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

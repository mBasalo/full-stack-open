import { useState } from "react";

// Button component for handling feedback submission
// const Button = ({ onClick, text }) => {
//   return <button onClick={onClick}>{text}</button>;
// };

// StatisticLine component for displaying a single statistic in a table row
// const StatisticLine = ({ text, value }) => {
//   return (
//     <tr>
//       <td>{text}</td>
//       <td>{value}</td>
//     </tr>
//   );
// };

// Statistics component for displaying all statistics in a table
// const Statistics = ({ good, neutral, bad, total, average, positivePercentage }) => {
//   if (total === 0) {
//     return <p>No feedback given</p>;
//   }

//   return (
//     <table>
//       <tbody>
//         <StatisticLine text="good" value={good} />
//         <StatisticLine text="neutral" value={neutral} />
//         <StatisticLine text="bad" value={bad} />
//         <StatisticLine text="total" value={total} />
//         <StatisticLine text="average" value={average.toFixed(2)} />
//         <StatisticLine text="positive feedback" value={positivePercentage.toFixed(2) + '%'} />
//       </tbody>
//     </table>
//   );
// };

// App component, which keeps the application's state
const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0);

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };


  const maxVotes = Math.max(...votes);
  const topAnecdoteIndex = votes.indexOf(maxVotes);
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);

  // const total = good + neutral + bad;
  // const average = total > 0 ? (good - bad) / total : 0;
  // const positivePercentage = total > 0 ? (good / total) * 100 : 0;

  return (
    <>

<div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleNextAnecdote}>Next Anecdote</button>

      <h2>Anecdote with most votes</h2>
      {maxVotes > 0 ? (
        <>
          <p>{anecdotes[topAnecdoteIndex]}</p>
          <p>has {maxVotes} votes</p>
        </>
      ) : (
        <p>No votes yet</p>
      )}
    </div>
      {/* <h1>give feedback</h1> */}

      {/* Use the Button component for each feedback type */}
      {/* <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" /> */}

      {/* <Button onClick={() => { setGood(0); setNeutral(0); setBad(0); }} text="reset" /> */}

      {/* <h2>statistics</h2> */}

      {/* Pass the statistics as props to the Statistics component */}
      {/* <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positivePercentage={positivePercentage}
      /> */}
    </>
  );
};

export default App;

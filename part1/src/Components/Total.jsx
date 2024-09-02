const Total = ({ parts }) => {

  console.log(parts);
  
  let totalExercises = 0;

  parts.forEach(part => {
    totalExercises += part.exercises;
  });

  return <p>Number of exercises {totalExercises}</p>;
};

export default Total;

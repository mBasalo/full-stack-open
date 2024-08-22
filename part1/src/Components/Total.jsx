const Total = (props) => {
    const totalExercises = props.exercises1 + props.exercises2 + props.exercises3;
    return <p>Number of exercises {totalExercises}</p>;
  };  

export default Total
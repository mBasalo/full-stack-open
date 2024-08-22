const Part = (props) => {

  console.log(props)

    return (
      <p>
        {props.name} {props.exercises}
      </p>
    );
  };

  export default Part
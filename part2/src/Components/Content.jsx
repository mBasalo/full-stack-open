import Part from './Part'

const Content = ({ parts }) => {

    console.log("this is the array parts:", parts);

    
    

    const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)


  return (
    <div>
      {parts.map(part => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
      <p><strong>Total of {totalExercises} exercises</strong></p>

    </div>
  )
}

export default Content

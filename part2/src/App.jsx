// import Course from './Components/Course'
// import Note from './Components/Note'

  // const courses = [
  //   {
  //     name: 'Half Stack application development',
  //     id: 1,
  //     parts: [
  //       {
  //         name: 'Fundamentals of React',
  //         exercises: 10,
  //         id: 1
  //       },
  //       {
  //         name: 'Using props to pass data',
  //         exercises: 7,
  //         id: 2
  //       },
  //       {
  //         name: 'State of a component',
  //         exercises: 14,
  //         id: 3
  //       },
  //       {
  //         name: 'Redux',
  //         exercises: 11,
  //         id: 4
  //       }
  //     ]
  //   }, 
  //   {
  //     name: 'Node.js',
  //     id: 2,
  //     parts: [
  //       {
  //         name: 'Routing',
  //         exercises: 3,
  //         id: 1
  //       },
  //       {
  //         name: 'Middlewares',
  //         exercises: 7,
  //         id: 2
  //       }
  //     ]
  //   }
  // ]

  // console.log(props);
  

  // const initialNotes = [
  //   { id: 1, title: "html is easy" },
  //   { id: 2, title: "browser blalblal" },
  //   { id: 3, title: "Get blalblalb" }
  // ]

  // const [notes, setNotes] = useState([])

  // const [newNote, setNewNote] = useState(
  //   'a new note...'
  // ) 

  // const handleNoteChange = (event) => {
  //   console.log(event.target.value)
  //   setNewNote(event.target.value)
  // }

  // const addNote = (event) => {
  //   event.preventDefault()
  //   const noteObject = {
  //     content: newNote,
  //     important: Math.random() < 0.5,
  //     id: String(notes.length + 1),
  //   }
  
  //   setNotes(notes.concat(noteObject))
  //   setNewNote('')
  // }

  // {courses.map(course => (
  //   <Course key={course.id} course={course} />
  // ))}

  // <h1>Notes</h1>
  // <ul>
  //   {notes.map(note => 
  //     // Asegúrate de que la prop 'title' esté pasando correctamente
  //     <Note key={note.id} title={note.title} />
  //   )}
  // </ul>

  // <form onSubmit={addNote}>
  //   <input value={newNote}           
  //   onChange={handleNoteChange} />
  //   <button type="submit">save</button>
  // </form>  
  import { useState } from 'react'

  const App = () => {
    const [persons, setPersons] = useState([
      { name: 'Arto Hellas' }
    ]) 
    const [newName, setNewName] = useState('')
  
    const handleNameChange = (event) => {
      setNewName(event.target.value)
    }
  
    const addPerson = (event) => {
      event.preventDefault() 
      const newPerson = { name: newName }
      setPersons(persons.concat(newPerson)) 
      setNewName('') 
    }
  
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={addPerson}>
          <div>
            name: <input value={newName} onChange={handleNameChange} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        <ul>
          {persons.map((person, index) => (
            <li key={index}>{person.name}</li>
          ))}
        </ul>
      </div>
    )
  }
  
  export default App
  

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
import PersonForm from './2.10/PersonForm'
import Filter from './2.10/Filter'
import Persons from './2.10/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ]) 
  const [formData, setFormData] = useState({
    newName: '',
    newPhone: '',
    searchTerm: ''
  })

  // Maneja los cambios en el input
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  // Agrega una nueva persona
  const addPerson = (event) => {
    event.preventDefault()

    const nameExists = persons.some(person => person.name === formData.newName)
    const phoneExists = persons.some(person => person.phone === formData.newPhone)

    if (nameExists) {
      alert(`${formData.newName} is already added to phonebook`)
    } else if (phoneExists) {
      alert(`Phone number ${formData.newPhone} is already added to phonebook`)
    } else {
      const newPerson = { name: formData.newName, phone: formData.newPhone }
      setPersons(persons.concat(newPerson))
      setFormData({ ...formData, newName: '', newPhone: '' }) // Limpiamos los campos
    }
  }

  // Filtrar personas según el término de búsqueda (insensible a mayúsculas/minúsculas)
  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(formData.searchTerm.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter searchTerm={formData.searchTerm} handleInputChange={handleInputChange} />

      <h3>Add a new</h3>

      <PersonForm
        newName={formData.newName}
        newPhone={formData.newPhone}
        handleInputChange={handleInputChange}
        addPerson={addPerson}
      />

      <h3>Numbers</h3>

      <Persons persons={personsToShow} />
    </div>
  )
}

export default App


  
  

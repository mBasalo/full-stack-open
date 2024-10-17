// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import Note from './Components/Note'

// const App = () => {
//   const [notes, setNotes] = useState([])
//   const [newNote, setNewNote] = useState('')
//   const [showAll, setShowAll] = useState(false)

//   useEffect(() => {
//     axios
//       .get('http://localhost:3001/notes')
//       .then(response => {
//         setNotes(response.data)
//       })
//   }, [])

//   const addNote = (event) => {
//     event.preventDefault()
//     const noteObject = {
//       content: newNote,
//       important: Math.random() > 0.5,
//       id: notes.length + 1,
//     }
  
//     setNotes(notes.concat(noteObject))
//     setNewNote('')
//   }

//   const handleNoteChange = (event) => {
//     setNewNote(event.target.value)
//   }

//   const notesToShow = showAll
//     ? notes
//     : notes.filter(note => note.important)

//   return (
//     <div>
//       <h1>Notes</h1>
//       <div>
//         <button onClick={() => setShowAll(!showAll)}>
//           show {showAll ? 'important' : 'all' }
//         </button>
//       </div>      
//       <ul>
//         {notesToShow.map(note => 
//           <Note key={note.id} note={note} />
//         )}
//       </ul>
//       <form onSubmit={addNote}>
//       <input
//           value={newNote}
//           onChange={handleNoteChange}
//         />
//         <button type="submit">save</button>
//       </form> 
//     </div>
//   )
// }

// export default App


// ------------------------------------------------------------------


import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './2.10/PersonForm'
import Filter from './2.10/Filter'
import Persons from './2.10/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [formData, setFormData] = useState({
    newName: '',
    newPhone: '',
    searchTerm: ''
  })


  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const addPerson = (event) => {
    event.preventDefault()

    const nameExists = persons.some(person => person.name === formData.newName)
    const phoneExists = persons.some(person => person.number === formData.newPhone)

    if (nameExists) {
      alert(`${formData.newName} is already added to phonebook`)
    } else if (phoneExists) {
      alert(`Phone number ${formData.newPhone} is already added to phonebook`)
    } else {
      const newPerson = {
        name: formData.newName,
        number: formData.newPhone,
        id: persons.length + 1
      }
      setPersons(persons.concat(newPerson))
      setFormData({ ...formData, newName: '', newPhone: '' }) 
    }
  }

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(formData.searchTerm.toLowerCase())
  )

  useEffect(() => {
    console.log('Fetching data from the server')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('Data fetched successfully', response.data)
        setPersons(response.data) 
      })
      .catch(error => {
        console.error('Error fetching data', error)
      })
  }, []) 

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter
        searchTerm={formData.searchTerm}
        handleInputChange={handleInputChange}
      />

      <h3>Add a new person</h3>

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


  
  

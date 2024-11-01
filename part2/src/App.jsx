// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import Note from './Components/Note'
// import noteService from './services/notes'


// const App = () => {
//   const [notes, setNotes] = useState([])
//   const [newNote, setNewNote] = useState('')
//   const [showAll, setShowAll] = useState(false)

//   useEffect(() => {
//     noteService
//       .getAll()
//       .then(initialNotes => {
//         setNotes(initialNotes)
//       })
//   }, [])

//   const addNote = (event) => {
//     event.preventDefault()
//     const noteObject = {
//       content: newNote,
//       important: Math.random() > 0.5,
//     }

//     noteService
//       .create(noteObject)
//       .then(returnedNote => {
  //         setNewNote('')
  //       })
  //   }
  
  //   const toggleImportanceOf = (id) => {
//     const url = `http://localhost:3002/notes/${id}`
//     const note = notes.find(n => n.id === id)
//     const changedNote = { ...note, important: !note.important }

//     console.log(url);

//     noteService
//     .update(id, changedNote)
//     .then(returnedNote => {
//       setNotes(notes.map(note => note.id === id ? returnedNote : note))
//       })
//       .catch(error => {
//         console.error('Error updating note importance', error)
//       })

//       console.log(`importance of ${id} needs to be toggled`)
//   }

//   const handleNoteChange = (event) => {
//     setNewNote(event.target.value)
//   }

//   const notesToShow = showAll
//     ? notes
//     : notes.filter(note => note.important)
    //         setNotes(notes.concat(returnedNote))

//   return (
//     <div>
//       <h1>Notes</h1>
//       <div>
//         <button onClick={() => setShowAll(!showAll)}>
//           show {showAll ? 'important' : 'all'}
//         </button>
//       </div>      
//       <ul>
//         {notesToShow.map(note => 
//           <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
//         )}
//       </ul>
//       <form onSubmit={addNote}>
//         <input
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
import PersonForm from './2.10/PersonForm'
import Filter from './2.10/Filter'
import Persons from './2.10/Persons'
import personService from './services/persons'  // Import the persons service

const App = () => {
  const [persons, setPersons] = useState([])
  const [formData, setFormData] = useState({
    newName: '',
    newPhone: '',
    searchTerm: ''
  })

  useEffect(() => {
    personService
      .getAll() // Fetch all persons using the service
      .then(initialPersons => {
        setPersons(initialPersons)
      })
      .catch(error => {
        console.error('Error fetching persons', error)
      })
  }, [])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const addPerson = (event) => {
    event.preventDefault()
  
    const existingPerson = persons.find(person => person.name === formData.newName)
  
    if (existingPerson) {
      // If person already exists, ask for confirmation to replace the number
      const confirmUpdate = window.confirm(
        `${formData.newName} is already added to the phonebook. Replace the old number with the new one?`
      )
      if (confirmUpdate) {
        const updatedPerson = { ...existingPerson, number: formData.newPhone }
  
        personService
          .update(existingPerson.id, updatedPerson) // Update existing person using PUT request
          .then(returnedPerson => {
            setPersons(persons.map(person =>
              person.id !== existingPerson.id ? person : returnedPerson
            ))
            setFormData({ ...formData, newName: '', newPhone: '' })
          })
          .catch(error => {
            console.error('Error updating person', error)
          })
      }
    } else {
      // If person doesn't exist, add as a new entry
      const newPerson = {
        name: formData.newName,
        number: formData.newPhone
      }
  
      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setFormData({ ...formData, newName: '', newPhone: '' })
        })
        .catch(error => {
          console.error('Error adding person', error)
        })
    }
  }
  


  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService.remove(id).then(() => {
        setPersons(persons.filter(person => person.id !== id))
      }).catch(error => {
        console.error('Error deleting person', error)
      })
    }
  }

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(formData.searchTerm.toLowerCase())
  )



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

      <Persons persons={personsToShow} deletePerson={deletePerson}  />
    </div>
  )
}

export default App



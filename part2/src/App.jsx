// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import Note from './Components/Note'
// import Notification from './Components/Notification'
// import noteService from './services/notes'
// import './Styles/Styles.css'

// const App = () => {
//   const [notes, setNotes] = useState([])
//   const [newNote, setNewNote] = useState('')
//   const [showAll, setShowAll] = useState(false)
//   const [errorMessage, setErrorMessage] = useState('some error happened...')
  
//   const baseUrl = 'http://localhost:3001/notes'



  

//   const getAll = () => {
//     const request = axios.get(baseUrl)
//     return request.then(response => response.data)
//   }


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
//         setNotes(notes.concat(returnedNote)) // Add the new note to state
//         setNewNote('') // Clear the input field
//       })
//       .catch(error => {
//         console.error('Error adding note', error)
//       })
//   }

//   const toggleImportanceOf = id => {
//     const note = notes.find(n => n.id === id)
//     const changedNote = { ...note, important: !note.important }

//     noteService
//       .update(id, changedNote).then(returnedNote => {
//         setNotes(notes.map(note => note.id !== id ? note : returnedNote))
//       })
//       .catch(error => {

//         setErrorMessage(
//           `Note '${note.content}' was already removed from server`
//         )
//         setTimeout(() => {
//           setErrorMessage(null)
//         }, 5000)
//         setNotes(notes.filter(n => n.id !== id))
//       })
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
//       {/* <Notification message={errorMessage} /> */}

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
import personService from './services/persons.js'  
import Notification from './Components/Notification'
import './Styles/Styles.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [formData, setFormData] = useState({
    newName: '',
    newPhone: '',
    searchTerm: ''
  })

  const [notification, setNotification] = useState({ message: null, type: null })


  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
      .catch(error => {
        console.error('Error fetching persons', error)
      })
  }, [])

  const showNotification = (message, type) => {
    setNotification({ message, type })
    setTimeout(() => setNotification({ message: null, type: null }), 3000)
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const addOrUpdatePerson = (event) => {
    event.preventDefault()
    const existingPerson = persons.find(person => person.name === formData.newName)
    
    if (existingPerson) {
      const confirmUpdate = window.confirm(`${formData.newName} is already in the phonebook. Replace the old number with a new one?`)
      if (confirmUpdate) {
        const updatedPerson = { ...existingPerson, number: formData.newPhone }
        
        personService
          .update(existingPerson.id, updatedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== existingPerson.id ? person : returnedPerson))
            showNotification(`Updated ${returnedPerson.name}'s number`, 'success')
          })
          .catch(error => {
            if (error.response && error.response.status === 404) {
              showNotification(`Information for ${existingPerson.name} has already been removed from the server`, 'error')
              setPersons(persons.filter(person => person.id !== existingPerson.id)) // Remove from local state
            } else {
              console.error('Error updating person', error)
            }
          })
      }
    } else {
      const newPerson = {
        name: formData.newName,
        number: formData.newPhone
      }

      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setFormData({ ...formData, newName: '', newPhone: '' })
          showNotification(`Added ${returnedPerson.name}`, 'success')
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
        showNotification(`Deleted ${name}`, 'success')
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

      <Notification message={notification.message} type={notification.type} />

      <Filter
        searchTerm={formData.searchTerm}
        handleInputChange={handleInputChange}
      />

      <h3>Add a new person</h3>

      <PersonForm
        newName={formData.newName}
        newPhone={formData.newPhone}
        handleInputChange={handleInputChange}
        addPerson={addOrUpdatePerson}
      />

      <h3>Numbers</h3>

      <Persons persons={personsToShow} deletePerson={deletePerson} />
    </div>
  )
}

export default App
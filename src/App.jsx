import axios from 'axios'
import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personServices from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [personFilter, setPersonFilter] = useState([])

  // Get people
  useEffect(() => {
    personServices.getAll().then((res) => setPersons(res))
  }, [])

  // Create new person
  const addPerson = (e) => {
    e.preventDefault()

    if (persons.find((person) => person.name === newName) === undefined) {
      const newPerson = {
        name: newName,
        number: newNumber,
      }

      personServices
        .create(newPerson)
        .then((res) => setPersons(persons.concat(res)))
        .catch((error) => console.log(error))
    } else {
      alert(`${newName} is already added to phonebook`)
    }

    setNewNumber('')
    setNewName('')
  }

  const handlePersonFilter = (e) => {
    setPersonFilter(
      e.target.value === ''
        ? []
        : persons.filter((person) =>
            person.name.toLowerCase().includes(e.target.value.toLowerCase())
          )
    )
  }

  const deletePerson = (id) => {
    personServices.deletePerson(id).then((status) => {
      if (status === 200) {
        setPersons(persons.filter((person) => person.id !== id))
      }
    })
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter handlePersonFilter={handlePersonFilter} />
      <h2>Add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <Persons
        personFilter={personFilter}
        persons={persons}
        deletePerson={deletePerson}
      />
    </div>
  )
}

export default App

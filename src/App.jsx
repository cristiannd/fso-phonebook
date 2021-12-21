import axios from 'axios'
import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [personFilter, setPersonFilter] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(res => setPersons(res.data))
  }, [])

  const addPerson = (e) => {
    e.preventDefault()



    if (persons.find((person) => person.name === newName) === undefined) {
      const newPerson = {
        name: newName,
        number: newNumber
      }

      axios
        .post("http://localhost:3001/persons", newPerson)
        .then(res => setPersons(persons.concat(res.data)))
        .catch(error => console.log(error))
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
      <Persons personFilter={personFilter} persons={persons} />
    </div>
  )
}

export default App

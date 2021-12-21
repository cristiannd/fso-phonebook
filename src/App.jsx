import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [personFilter, setPersonFilter] = useState([])

  const addPerson = (e) => {
    e.preventDefault()

    if (persons.find((person) => person.name === newName) === undefined) {
      setPersons(persons.concat({ name: newName, number: newNumber }))
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

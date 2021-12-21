import { useState } from 'react'

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
      <div>
        Filter shown with <input type="text" onChange={handlePersonFilter} />
      </div>

      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name:{' '}
          <input
            type="text"
            placeholder="Arto Hellas"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div>
          number:{' '}
          <input
            type="number"
            placeholder="3534187270"
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personFilter.length > 0
        ? personFilter.map((person) => (
            <p key={person.name}>
              {person.name} - {person.number}
            </p>
          ))
        : persons.map((person) => (
            <p key={person.name}>
              {person.name} - {person.number}
            </p>
          ))}
    </div>
  )
}

export default App

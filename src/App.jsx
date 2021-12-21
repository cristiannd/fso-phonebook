import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')

  const addPerson = (e) => {
    e.preventDefault()

    if (persons.find((person) => person.name === newName) === undefined) {
      setPersons(persons.concat({ name: newName }))
    } else {
      alert(`${newName} is already added to phonebook`)
    }
    setNewName('')
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={addPerson}>
        <div>
          name:{' '}
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>{person.name}</p>
      ))}
    </div>
  )
}

export default App

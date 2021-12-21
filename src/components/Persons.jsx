const Persons = ({ personFilter, persons, deletePerson }) => {
  if (personFilter.length > 0) {
    return personFilter.map((person) => (
      <p key={person.name}>
        {person.name} - {person.number}
      </p>
    ))
  }

  return persons.map((person) => (
    <p key={person.name}>
      {person.name} - {person.number}{' '}
      <button onClick={() => deletePerson(person.id)}>delete</button>
    </p>
  ))
}

export default Persons

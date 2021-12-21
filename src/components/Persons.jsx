const Persons = ({personFilter, persons}) => {
  if (personFilter.length > 0) {
    return personFilter.map((person) => (
      <p key={person.name}>
        {person.name} - {person.number}
      </p>
    ))
  }

  return persons.map((person) => (
    <p key={person.name}>
      {person.name} - {person.number}
    </p>
  ))
}

export default Persons

const Filter = ({handlePersonFilter}) => {
  return (
    <div>
      Filter shown with <input type="text" onChange={handlePersonFilter} />
    </div>
  )
}

export default Filter

const Filter = ({ searchTerm, handleInputChange }) => {
    return (
      <div>
        Search: <input name="searchTerm" value={searchTerm} onChange={handleInputChange} />
      </div>
    )
  }
  
  export default Filter
  
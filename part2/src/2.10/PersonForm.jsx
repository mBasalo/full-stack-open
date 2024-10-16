const PersonForm = ({ newName, newPhone, handleInputChange, addPerson }) => {
    return (
      <form onSubmit={addPerson}>
        <div>
          name: <input name="newName" value={newName} onChange={handleInputChange} />
        </div>
        <div>
          phone: <input name="newPhone" value={newPhone} onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
  }
  
  export default PersonForm
  
import React from 'react'

const Note = ({ title }) => {
  // Verifica si la prop 'title' está siendo recibida
  console.log("Note component rendered with title:", title);

  return (
    <div>
      <li>{title}</li> {/* Renderiza el título en una lista */}
    </div>
  )
}

export default Note

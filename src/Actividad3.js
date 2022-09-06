import React from 'react'

function Actividad3({reyes}) {
  const resultado = reyes.find(e => e.nombre.substring(0, 1) === 'e' || e.nombre.substring(0, 1) === 'E')
  return (
    <div>
      {resultado === undefined ? 'No se ha encontrado' : resultado.nombre}
    </div>
  )
}

export default Actividad3
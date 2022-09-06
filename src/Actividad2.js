import React from 'react'

function Actividad2({reyes}) {
     const borrar = (e) => {
        e.target.parentNode.remove()
     }
  return (
    <div>
        {reyes.filter( e => !e.nombre.includes('g')).
        map(e => <div key={e.nombre}>{e.nombre}
        <button onClick={borrar}>Borrar</button></div>)}
       
    </div>
  )
}

export default Actividad2;
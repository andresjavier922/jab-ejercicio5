import React from 'react'

function ReyGodo({reyes}) {
  const texto = `https://www.html6.es/img/rey_`;
  const resultado = reyes.map(e => <div key= {e.nombre} className='rey'><span className='rojo'>{e.nombre.toUpperCase()}</span> ha comido {e.reinado*e.vacasComidas*365} vacas en sus {e.reinado} años de reinado 
  <img src={texto+e.nombre.toLowerCase()+'.png'}/></div>) 
  return (
    
    <>
      {resultado} 
      
    </>
  )
}

export default ReyGodo;
import React from 'react'

function Actividad4({reyes}) {
  const incrementar = (e)=>{
    ++e.target.innerHTML;
  }
   
  return (
    <div>
        {reyes.filter(e => e.reinado >= 10 && e.vacasComidas >= 10).
        map(e => <div key={e.nombre}>{e.nombre}<div className='numero' onClick={incrementar}>{0}</div></div> )}
    </div>
  )
}

export default Actividad4
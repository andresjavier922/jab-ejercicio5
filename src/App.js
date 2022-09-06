import Actividad2 from './Actividad2';
import Actividad3 from './Actividad3';
import Actividad4 from './Actividad4';
import './App.css';
import ReyGodo from './ReyGodo';


function App() {
  const reyes=[
    {
        nombre:"Atanagildo",
        reinado:15,
        vacasComidas:9
    },{
        nombre:"Ervigio",
        reinado:7,
        vacasComidas:3
    },{
        nombre:"Ataúlfo",
        reinado:5,
        vacasComidas:16
    },{
        nombre:"Leovigildo",
        reinado:18,
        vacasComidas:3
    },{
        nombre:"Sisebuto",
        reinado:9,
        vacasComidas:13
    },{
        nombre:"Recesvinto",
        reinado:19,
        vacasComidas:11
    },{
        nombre:"Teodorico",
        reinado:33,
        vacasComidas:12
    }
  ]
  
  

  return (
    <>
      <h1>Actividad 1</h1>
      <div className='caja'><ReyGodo reyes={reyes}/></div>
      <h1>Actividad 2</h1>
      <div className='caja'><Actividad2 reyes={reyes}/></div>
      <h1>Actividad 3</h1>
      <div className='caja'><Actividad3 reyes={reyes}/></div>
      <h1>Actividad 4</h1>
      <div className='caja'><Actividad4 reyes={reyes}/></div>
    </>
  );
}

export default App;

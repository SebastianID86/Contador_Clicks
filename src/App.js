import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freecodeCampLogo from './imagenes/Compteur-de-clics.jpg';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
        className='Compteur-de-clics'
        src={freecodeCampLogo} 
        alt='Compteur-de-clics' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics= {numClics} />
        <Boton 
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic} />
        <Boton 
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Boton from './componentes/Boton';
import Monitor from './componentes/Monitor';
import cursoLogo from './imagenes/curso-logo.png';

//UseState, el estado es el número de clics, en aumento o reinicio
//UseState, permite add estado a un componente funcional
import { useState } from 'react';

function App() {
  //interactivo
  //HOOKS. El Gancho: setNumClics
  //El Hooks (useState) actualiza la variable numClics, a través de la función setNumClics que es utilizada en los dos botones.
  const [numClics, setNumClics] = useState(0); /* numClics es cero */

  const manejarClic = () => {
    //console.log('Clic');
    setNumClics( numClics + 1 );
  }

  const reiniciarContador = () => {
    //console.log('Reiniciar');
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='curso-logo-contenedor'>
        <img 
          className = 'curso-logo'
          src={cursoLogo}
          alt='logo de curso'
        />
      </div>

      <div className='contenedor-principal'>
        <Monitor numClics= {numClics} />

        <Boton 
          texto='Clic'
          esBotonClic={true} 
          manejarClic={manejarClic}
        />

        <Boton 
          texto = 'Reiniciar'
          esBotonClic={false}
          manejarClic={reiniciarContador}
          />

      </div>
      
    </div>
  );
}

export default App;

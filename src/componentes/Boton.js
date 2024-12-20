import React from 'react'; //para versiones anteriores a react 17
import '../hoja-estilo/Boton.css'

function Boton({texto, esBotonClic, manejarClic}) {
    //{props.texto}
    //desestructuracion
    //Event Listener
    return(
        <button
            className={ esBotonClic ? 'boton-clic' : 'boton-reiniciar' }
            onClick={manejarClic}
            >
            {texto}
        </button>
    )
}

export default Boton;
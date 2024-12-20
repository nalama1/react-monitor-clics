import React from 'react'; //para versiones anteriores a react 17
import '../hoja-estilo/Monitor.css'

function Monitor({ numClics }){
    // no props, sino Desestructuracion: código claro, desarrollo eficiente.
    return(
        <div className='monitor'>
            {numClics}
        </div>
    )
}

export default Monitor;

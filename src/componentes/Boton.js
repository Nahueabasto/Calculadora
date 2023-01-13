import React from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton(props) { //definimos el componente funcional

    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '='); //si valor no es un numero y tampoco es un punto y si tampoco es el signo igual, entonces lo considereamos esOperador y retornamos true.-
    };


    return ( //todo lo que este adentro de la etiqueta de apaertura y de cierre de Boton se va a considerar como children y podemos usarlo en nuestro componente 
    //si el resultado o valor retornado por esta funcion: esOperador(props.children) es verdadero entonces se va a remplazar por operador, si es false se va a retornal null y no va a hacer ningun cambio
        <div 
            className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
            onClick={() => props.manejarClic(props.children)}>
            {props.children}            
        </div>
    );
}
//estamos dicienco que cuando ocurra un clic se va a llamar a una funcion nueva que estamos creando, que es anonima no la estamos definiendo arriba, si no que llamamos a esta funcion nueva: () => props.manejarClic(props.children) que no toma ningun parametro y retorna el resultado de llamar a esa funcion
export default Boton;
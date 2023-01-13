import './App.css';
//import freeCodeCampLogo from './imagenes/fcc.jpg';
import Boton from './componentes/Boton'; //para usar el componente de Boton tenemos que importarlo y exportarlo del archivo 
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react'; //para importar un hooks necesitamos las llaves {} 
import { evaluate } from 'mathjs'; //math.js es una libreria, una biblioteca de funciones matematicas para js que se instala con npm install mathjs. mathjs nos permite evaluar una expresion como una cadena de caracteres y transformarla en una expresion matematica, cuando hacemos clic en = todo ese proceso ocurre y vemos el resultado.

function App() {

  const [input, setInput] = useState(''); //estamos creando un estado para la App llamado input, este input se va a mantener como el estado del componente App y tambien tenemos una funcion setInput para actualizar el input, inicialmente ese input va a ser una cadena vacia. Por eso no vamos a ver nada en la pantalla, lo primero que vamos a hacer es asignar ese input como el valor de la pantalla, para que cuando lo actualicemos se actualice su valor 

  const agregarInput = valor => { //tenemos la funcion agregarInput, la defino como una funcion flecha, que va a tomar un valor y va a ejecutar la secuencia de lineas que va a estar dentro de las llaves
    setInput(input + valor); // CUANDO LA FUNCION SE LLAME, ESTE CODIGO SE VA A EJECUTAR //va a actualizar el input, dentro de los parentecis le vamos a pasar el nuevo valor de input. Cual va a ser? el input que teniamos anteriormente concatenado con el nuevo valor.
  };

  const calculadorResultado = () => { //para el boton de = le vamos a asignar calculadorResultado.-
    if(input) { //si ese valor no es una cadena de caracteres vacia, se va a ejecutar lo siguiente:
      setInput(evaluate(input));
    } else {
      alert('Por favor ingrese valores para realizar los calculos'); // si la cadena de caracteres esta vacia..
    }
     //nuevo valor que se va a mostrar en la pantalla, va a ser el resultado de evaluar lo que estaba en la pantalla. Esta funcion de evaluar la vamos a conseguir en un paquete llamado mac.js LA TENEMOS QUE IMPORTAR.
  };

  return (
    <div className='App'>
      <div className='contenedor-calculadora'> 
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton> 
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={agregarInput}>4</Boton>
        <Boton manejarClic={agregarInput}>5</Boton>
        <Boton manejarClic={agregarInput}>6</Boton>
        <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={agregarInput}>7</Boton>
        <Boton manejarClic={agregarInput}>8</Boton>
        <Boton manejarClic={agregarInput}>9</Boton>
        <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={calculadorResultado}>=</Boton>
        <Boton manejarClic={agregarInput}>0</Boton>
        <Boton manejarClic={agregarInput}>.</Boton>
        <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'></div>
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
      </div>
    </div>
  );
}

export default App;

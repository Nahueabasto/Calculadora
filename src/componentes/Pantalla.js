import React from "react";
import '../hojas-de-estilo/Pantalla.css';

const Pantalla = ({ input }) => ( //define un componente con una funcion flecha, con la flecha le estamos diciendo que vamos a retornar el siguiente valor, dentro del div vamos a remplazar el valor del props: ({ input }).

    <div className='input'>
        {input}
    </div>
);

export default Pantalla;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from '';

const parrafo = (
  <div>
    <p>Hello there</p>
    <button class="boton-personalizado" id="azul">Azul</button>
    <button class="boton-personalizado" id="verde">Verde</button>
    <button class="boton-personalizado" id="rojo">Rojo</button>
  </div>
);

ReactDOM.render(parrafo, document.getElementById('root'));

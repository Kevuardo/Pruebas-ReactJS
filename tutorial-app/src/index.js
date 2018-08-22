import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/App';

const paragraph = (
  <div>
    <p>Hello there</p>
    <button class="custom-button" id="blue">
      Blue (#033250)
    </button>
    <button class="custom-button" id="green">
      Green (#79c879)
    </button>
    <button class="custom-button" id="red">
      Red (#ea0001)
    </button>
  </div>
);

ReactDOM.render(paragraph, document.getElementById('root'));

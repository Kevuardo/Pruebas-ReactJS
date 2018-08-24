import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/App';
import CustomButton from './components/CustomButton';

const blueButton = (
  <CustomButton
    className="custom-button custom-button--blue"
    text="Blue (#033250)"
  />
);
const greenButton = (
  <CustomButton
    className="custom-button custom-button--green"
    text="Green (#79c879)"
  />
);
const redButton = (
  <CustomButton
    className="custom-button custom-button--red"
    text="Red (#ea0001)"
  />
);

const paragraph = (
  <div>
    <p>Hello there</p>
    {blueButton}
    {greenButton}
    {redButton}
  </div>
);

ReactDOM.render(paragraph, document.getElementById('root'));

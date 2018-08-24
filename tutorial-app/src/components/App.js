// All needed imports.
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import CustomButton from './components/CustomButton';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        // App's initial state.
        this.state = {
            devModeOn: true
        };
        // The handleCLick method needs to be bound to
        // the 'this' environment in order to be used in
        // render() or else it will result in an 'undefined'
        // error.
        this.handleClick = this.handleClick.bind(this);
    }

    // This method will be called in the onClick event of the
    // button to toggle the state of the component.
    handleClick() {
        this.setState({ devModeOn : !this.state.devModeOn });
    }

    render() {
        let h1 = null;
        const toggleButton = (
            <CustomButton
              className="custom-button custom-button--blue"
              onClick={this.handleClick}
              text="Click me to toggle state!"
            />
        );

        if (this.state.devModeOn) {
            h1 = <h1>I'm developing some cool ReactJS app!</h1>;
        } else {
            h1 = <h1>I'm deploying some cool ReactJS app!</h1>;
        }
        return <div>
            { h1 }
            { toggleButton }
        </div>;
    }
}

//Prints the App component into de node with id = 'root'.
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
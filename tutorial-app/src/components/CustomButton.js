import React from 'react';

export default class CustomButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <button className={this.props.className}>{this.props.text}</button>;
    }
}
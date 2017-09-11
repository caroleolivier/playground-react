import React, { Component } from 'react';

class MyToggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false
        };
        // to make sure this in the callback is the component and not undefined
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <button onClick={this.handleClick}>{this.state.isToggleOn ? "ON" : "OFF"}</button>
        )
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
}

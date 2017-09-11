import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    render() {
        return (
            <p>It is {this.state.date.toLocaleTimeString()}</p>
        );
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        if(this.timerId) {
            clearInterval(this.timerId);
        }
    }

    tick() {
        this.setState({
            date : new Date()
        });
    }
}

export default Clock;

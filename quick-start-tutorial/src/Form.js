import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClickClear = this.handleClickClear.bind(this);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <button onClick={this.handleClickClear}>Clear</button>
            </div>
        );
    }

    handleChange(event) {
        this.setState({value: event.target.value.toUpperCase()});
    }

    handleSubmit(event) {
        alert("a name was submitted [" + this.state.value + "]");
        event.preventDefault();
    }

    handleClickClear(event) {
        this.setState({value: ""});
    }
}

export default Form;
import React, { Component } from 'react';

function toCelsius(fahrenheit) {
    return (fahrenheit-32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

function tryConvert(str, convertWith) {
    const input = parseFloat(str);
    if(Number.isNaN(input)) {
        return "";
    }
    const converted = convertWith(input);
    const rounded = Math.round(converted * 1000) / 1000;
    return rounded;
}

let friendlyScale = {
    "c": "Celsius",
    "f": "Fahrenheit"
}

class BoilingVerdict extends Component {
    render() {
        return this.props.temperature >= 100 ?
            <h2>Boiling!</h2> :
            <h2>Not quite ready</h2>;
    }
}

class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    render() {
        return (
            <fieldset>
                <legend>Enter a temperature in {friendlyScale[this.props.scale]}</legend>
                <input value={this.props.temperature} onChange={this.onChange}/>
            </fieldset>);
    }

    onChange(event) {
        this.props.onTemperatureChange(event.target.value);
    }
}

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {scale: "c", temperature: "26"}
        this.onCelsiusInputChange = this.onCelsiusInputChange.bind(this);
        this.onFahrenheitInputChange = this.onFahrenheitInputChange.bind(this);
    }

    render() {
        const fahrenheit = this.state.scale == "f" ? this.state.temperature : tryConvert(this.state.temperature, toFahrenheit);
        const celsius = this.state.scale == "c" ? this.state.temperature : tryConvert(this.state.temperature, toCelsius);
        return (
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.onCelsiusInputChange}/>
                <TemperatureInput scale="f" temperature={fahrenheit}  onTemperatureChange={this.onFahrenheitInputChange}/>
                <BoilingVerdict temperature={celsius}/> 
            </div>
        );
    }

    onCelsiusInputChange(temperature) {
        this.setState({scale: "c", temperature: temperature});
    }

    onFahrenheitInputChange(temperature) {
        this.setState({scale: "f", temperature: temperature});
    }

}

export default Calculator;
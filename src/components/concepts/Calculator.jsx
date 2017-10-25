import React, {Component} from 'react';

import {toCelsius, toFahrenheit, tryConvert} from './calculatorFunctions.js';

const scaleNames = {
  c: 'Celsius',
  f: 'Farenheit'
};

function BoilingVerdict(props){
  if(props.celsius >= 100){
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>
}

class TemperatureInput extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e){
    // Before: this.setState({temperature: e.target.value});
    this.props.onTemperatureChange(e.target.value);
  }

  render(){
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter Temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange = {this.handleChange} />
      </fieldset>
    );
  }
}


export default class Calculator extends Component {
  constructor(props){
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {
      temperature : '',
      scale: 'c'
    };
  }

  handleCelsiusChange(temperature){
    this.setState({
      scale: 'c',
      temperature
    });
  }

  handleFahrenheitChange(temperature){
    this.setState({
      scale: 'f',
      temperature
    });
  }

  render(){
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale='c'
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale='f'
          onTemperatureChange={this.handleFahrenheitChange}/>
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

import React, { Component } from "react";
import "./App.css";
import Input from "./Components/Input";
import Button from "./Components/Button";
import ClearButton from "./Components/ClearButton";

class App extends Component {
  state = {
    input: "",
    add: 0,
    multiply: 1,
    divide: 1,
    minus: 0,
    decimal: false
  };

  handleClear = () => {
    this.setState({
      input: "",
      divide: 1,
      minus: 0,
      multiply: 1
    });
  };

  handleClick = e => {
    let checkInput = this.state.input;
    let input = "";
    if (checkInput === "") {
      input = parseInt(e.target.id);
    } else if (this.state.decimal) {
      input = checkInput + parseInt(e.target.id) / 10;
    } else {
      input = checkInput * 10 + parseInt(e.target.id);
    }
    this.setState({
      input
    });
  };

  handleAdd = () => {
    let firstInput = this.state.input;
    this.setState({
      input: "",
      add: firstInput
    });
  };

  handleEqual = () => {
    const { multiply, add, input, divide, minus } = this.state;
    if (add !== 0) {
      let result = input + add;
      this.setState({
        input: result,
        add: 0
      });
    } else if (multiply !== 1) {
      let result = input * multiply;
      this.setState({
        input: result,
        multiply: 1
      });
    } else if (divide !== 1) {
      let result = divide / input;
      this.setState({
        input: result,
        divide: 1
      });
    } else if (minus !== 0) {
      let result = minus - input;
      this.setState({
        input: result,
        minus: 0
      });
    }
  };

  handleMultiplication = () => {
    let firstNumber = this.state.input;
    this.setState({
      input: "",
      multiply: firstNumber
    });
  };

  handleDivision = () => {
    let firstNum = this.state.input;
    this.setState({
      input: "",
      divide: firstNum
    });
  };

  handleMinus = () => {
    let firstEntry = this.state.input;
    this.setState({
      input: "",
      minus: firstEntry
    });
  };

  handleDecimal = () => {
    this.setState({
      decimal: true
    });
  };

  render() {
    console.log(this.state.input);
    return (
      <div className="App">
        <div className="calc-wrapper">
          <Input className="input" input={this.state.input} />
          <div className="row">
            <Button handleClick={this.handleClick}>1</Button>
            <Button handleClick={this.handleClick}>2</Button>
            <Button handleClick={this.handleClick}>3</Button>
            <Button handleClick={this.handleAdd}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleClick}>4</Button>
            <Button handleClick={this.handleClick}>5</Button>
            <Button handleClick={this.handleClick}>6</Button>
            <Button handleClick={this.handleMultiplication}>x</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleClick}>7</Button>
            <Button handleClick={this.handleClick}>8</Button>
            <Button handleClick={this.handleClick}>9</Button>
            <Button handleClick={this.handleDivision}> /</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleDecimal}>.</Button>
            <Button handleClick={this.handleClick}>0</Button>
            <Button handleClick={this.handleEqual}>=</Button>
            <Button handleClick={this.handleMinus}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={this.handleClear} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

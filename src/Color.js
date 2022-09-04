import React, { Component } from 'react'

class Color extends Component {

  handleSetRandomColor = () => {
    let hexNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let random = "";
    for(let i = 0; i < 6; i++){
      random += hexNumbers[Math.floor(Math.random() * hexNumbers.length)];
    }
    this.props.setRandomColor("#" + random);
  };

  render() {
    return (
      <div>
        <h1>Hex color {this.props.color}</h1>
        <button onClick={this.handleSetRandomColor}>Click me</button>
      </div>
    )
  }
}

export default Color
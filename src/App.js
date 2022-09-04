import React, { Component } from 'react';

import './App.css';
import Color from "./Color"

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: "#FFFFFF"
    }
  }

  setRandomColor = (random) => {
    this.setState({
      color: this.setState.color = random
    })
  }

  render() {
    return (
      <div className="App" style={{backgroundColor: this.state.color}}>
        <Color color={this.state.color} setRandomColor={this.setRandomColor}/>
      </div>
    );
  }

}

export default App;
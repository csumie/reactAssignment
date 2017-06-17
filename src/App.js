import React, { Component } from 'react';
import logo from './anchor.svg';
import './App.css';
import Pirate from './Pirates';
import Header from './Header';
import PirateForm from './PirateForm';

class App extends Component {

    constructor() {
    super();
    this.addPirate = this.addPirate.bind(this)
    this.state = { 
      pirates: {}
    }
  }

    addPirate(pirate){
    //update state
    const pirates = {...this.state.pirates}
    //add new pirate
    const timestamp = Date.now();
    pirates[`pirate-${timestamp}`] = pirate;
    //set state
    this.setState({ pirates: pirates })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Pirate tagline="Ahoy there Matey!" />
        <PirateForm />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
   <div className="App">
        <div className="App-header">
          </div>       <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
export default Clock;
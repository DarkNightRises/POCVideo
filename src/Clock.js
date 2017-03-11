import React, { Component } from 'react';
import './App.css';
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
    this.handleClick = this.handleClick.bind(this);
  }
  //Works once when the DOM is loaded first time
  componentDidMount() {
    this.timerID = setInterval(
        () => this.tick(),
        1000
      );
  }
  



  componentDidUnmount() {
    clearInterval(this.timerID);
  }


  tick() {
    this.setState({
      date: new Date()
    });
  }
  
  //Handling events but it needs binding in the constructor
  handleClick() {
    console.log('This link was clicked');
     clearInterval(this.timerID);
  }

  //Without adding binding to a function in constructo
  clicked = () =>{
  console.log('This link was clicked');
     clearInterval(this.timerID);

  }
  render() {
    return (
   <div className="App">
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            <button onClick={this.clicked}>
            Fuck u
            </button>
      </div>
    );
  }
}
export default Clock;
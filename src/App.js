import React, { Component } from 'react';
import './App.css';
import ReactPlayer from 'react-player'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          </div>
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' loop='true' playing />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import video from './video.mp4'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
 
      <video width="500" height="500" autoplay>
      <source src={video} type="video/mp4" />
      </video>
      </div>
      </div>
    );
  }
}

export default App;

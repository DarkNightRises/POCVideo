import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './Clock';
import Toggle from './Toggle';
const element = (
<div>
    <div className="App-header">
          </div>   
<Clock />
<Toggle />
</div>	
)
;
ReactDOM.render(
  element,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './Clock';
import Toggle from './Toggle';
import LoginControl from './LoginControl';
const element = (
<div>
    <div className="App-header">
          </div>   
          <h1>Working</h1>
          

<Clock />
<Toggle />
<LoginControl />
</div>	
)
;
ReactDOM.render(
  element,
  document.getElementById('root')
);
//Conditional Rendering
function UserGreeting(props) {
	return <h1>Welcome back</h1>
}
function GuestGreeting(props) {
	return <h1>Please SIgn Up</h1>
}

function Greeting(props) {
	const isLoggedIn = props.isLoggedIn;
	if (isLoggedIn){
		return <UserGreeting />;

	}
	else {
		return <GuestGreeting />;
	}
}
const elem = (
	<div>
    <div className="App-header">
          </div>   
<Greeting isLoggedIn={true}/>
</div>	);
ReactDOM.render(
elem,
document.getElementById('greeting')
);

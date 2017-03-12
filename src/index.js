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
);
		const numbers = [1,2,3,4,5];

		const list_items = numbers.map((number)=>
		<li>{number}</li>
			);

		const new_element = (
					<div>
					    <div className="App-header">
					          </div>   
					<ul>{list_items}</ul>
					</div>
			);
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);

//Component for list 
function NumberList(props) {
	const numbers = props.numbers;
	const listItems = numbers.map((number)=>
		<li key={number.toString()}>{number}</li>
		);
	return (<ul>{listItems}</ul>);
}

//Conditional Rendering
function UserGreeting(props) {
	return <h1>Welcome back</h1>;
}
function GuestGreeting(props) {
	return <h1>Please SIgn Up</h1>;
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

import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyAUfBcQDhqt-6sIJaaKTap9SQu36QfFZJ0';
// Create a new component
//
const App = () => {
	return <div> Hi! </div>;
}


// Take this component's generated HTML and put it
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
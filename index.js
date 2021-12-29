import React from 'react'; 
import ReactDOM from 'react-dom';

// const element = React.createElement('div', null, 'React element!'); 
// Is required to do without babel 
const element = <div>This is JSX!!</div>; 

ReactDOM.render(element, document.getElementById('root')); 
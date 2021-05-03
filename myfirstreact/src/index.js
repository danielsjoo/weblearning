import React from 'react';
import ReactDOM from 'react-dom';

const myfirstelement = <h1>Hello React!</h1>

hello = function() {
  return <h1>"Hello World!"</h1>;
}

ReactDOM.render(hello(),document.getElementById('root'));


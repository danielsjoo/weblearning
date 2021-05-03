import React from 'react';
import ReactDOM from 'react-dom';
import htmlCode from "./carComponents.js";
import Car from "./carComponents.js";
import Toaster from "./toasterComp.js";

const inforaw = {model:"2004", doneness:"burnt"};

ReactDOM.render(<Toaster info = {inforaw}/>, document.getElementById('root'));
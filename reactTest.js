import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.component {
    render(){
        return <h1>Hello World!</h1>;
    }
}

ReactDOM.render(<Test />, document.getElementbyID('root'));
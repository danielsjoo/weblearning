import React from 'react';
import ReactDOM from 'react-dom';

class helloWorld1 {
  constructor(name){
    this.name=name;
  }
  present() {
    return "Hello " + this.name + "!"
  }
}

class Car extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <h2>Hi, I am a {this.state.color} Car!</h2>;
  }
}

class Car2 extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <h2>Hi, I am a {this.props.color} Car!</h2>;
  }
}

let anObject = new helloWorld1("Josh");

const htmlCode = (
  <div>
    <h1>{anObject.present()}</h1>
    <Car />
    <Car2 color = "blue"/>
  </div>
)

export default Car;

// what is the react dom? why don't we use it?
// in our index.html, we have id=root, but we still don't use it, how does react know where to render the page?


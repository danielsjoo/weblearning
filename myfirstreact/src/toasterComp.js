import React from 'react';
import ReactDOM from 'react-dom';

class Toaster extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color: "red",
            weight: "2 kilos",
            timer: 10
        };
    }
    changeColor = () => {
        this.setState({color: "blue"});
    }
    ding = () => {
        if (this.state.timer == 1){
            alert("ding! the toast is burnt!");
        }
        this.setState({timer: this.state.timer - 1});
    }
    render(){
        return(
            <div>
            <h2>Hello, I am a {this.state.color} toaster that like his toast {this.props.info.doneness}!</h2>
            <button onClick = {this.ding}> {this.state.timer} left! </button>
            </div>
        );
    }
}

export default Toaster;
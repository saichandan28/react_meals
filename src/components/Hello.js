
import React from 'react';

class Hello extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            custName : props.custName
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log(`Hello ${this.state.custName}`);
    }

    render() {
        return (
            <button onClick={this.handleClick}>Click Me</button>
        );
    }
}

export default Hello;
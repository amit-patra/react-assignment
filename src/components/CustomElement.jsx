import React, { Component } from 'react';

class CustomElement extends Component {
    constructor() {
        super();
        this.state={
            name:'Amit'
        }
    }
    render() {
        return (
            <div>
                {React.createElement('h1', {}, `Hello ${this.state.name}`)}
                {React.createElement('p', { style: { color: "red", fontSize: "30px" }, id:"para" }, "This is paragraph")}
                {React.createElement('div',null,React.createElement('h1', {id:'dumyId', ClassName:'dumyClass'}, 'Paragraph Test'))}
            </div>
        )
    }
}

export default CustomElement;
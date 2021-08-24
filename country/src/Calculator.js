import React, { Component } from 'react'

class Calculator extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             input:""
        }
    }
    handleChange=(e)=>{
        this.setState({
            input:e.target.value,
        })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.input} onChange={this.handleChange}/><br/>
                {this.state.input}
            </div>
        )
    }
}

export default Calculator

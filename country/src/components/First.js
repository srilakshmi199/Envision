import React, { Component } from 'react';
import Second from './Second';
import './App.css'

class First extends Component {
    render() {
        let details={
            name:"Srilakshmi",
            id:"10129",
            tech:"React js"
        }
        return (
            <div>
                <Second data={details}/>
                
            </div>
        )
    }
}

export default First

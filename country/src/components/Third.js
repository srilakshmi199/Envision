import React, { Component } from 'react';
import Fourth from './Fourth';
import './App.css'

 class Third extends Component {
    render() {
        return (
            <div>
               <Fourth data={this.props.data}/> 
            </div>
        )
    }
}

export default Third

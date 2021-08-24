import React, { Component } from 'react';
import Third from './Third';
import './App.css'
class Second extends Component {
    render() {
        return (
            <div>
                <Third data={this.props.data}/>
            </div>
        )
    }
}

export default Second

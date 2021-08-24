import React, { Component } from 'react'
import './App.css'
 class Fourth extends Component {
    render() {
        return (
            <div>
               
            <h3>Employee Name:{this.props.data && this.props.data.name ? this.props.data:""}</h3>

            <h3>Employee Id:{this.props.data && this.props.data.id ? this.props.data:""}</h3>

        <h3>Technology:{this.props.data && this.props.data.tech ? this.props.data:""}</h3>
            </div>
        )
    }
}

export default Fourth

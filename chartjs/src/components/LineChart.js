import React from 'react'
import { connect } from 'react-redux'

function LineChart(props) {
    return (
        <p>lineChart:{props.data}</p>
    )
}
const mapStateToProps=(state)=>{
    return{
        data:state.data
    }
}

export default connect(mapStateToProps) (LineChart)

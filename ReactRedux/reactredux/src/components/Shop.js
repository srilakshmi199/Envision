import React from 'react';
import buyLaptop from '../redux/actions';
import {connect} from 'react-redux';


function Shop(props) {
    return (
        <div>
            <p>Dell Laptops</p>
            <p>Available:{props.numOfLaptops}</p>
            <button onClick={props.buyLaptop}>Buy</button>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        numOfLaptops:state.numOfLaptops
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        buyLaptop:()=>dispatch(buyLaptop())
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (Shop)

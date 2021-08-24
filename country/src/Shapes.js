import React from 'react';

class Test extends React.Component {
    constructor(){
        super();

        this.state = {
           black: true
        }
    }

    changeColor(){
       this.setState({black: !this.state.black})
    }

    render(){
        let btn_class = this.state.black ? "blackButton" : "whiteButton";

        return (
             <button className={btn_class} onClick={this.changeColor.bind(this)}>
                  Button
             </button>
        )
    }
}
export default Test
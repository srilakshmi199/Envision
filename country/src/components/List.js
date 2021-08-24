import React, { Component } from 'react';
import './App.css';
import Circle from './Circle';
import Rectangle from './Rectangle';
import Square from './Square';


class List extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      Shapes:"",
      Colors:"",
      Symbols:"",
      items:[],
      
    }
  }
  
  shapesChange=(e)=>{
    this.setState({
      Shapes:e.target.value
    })
  }
  colorsChange=(e)=>{
    this.setState({
      Colors:e.target.value
    })
  }
  handleClick=(e)=>{
    e.preventDefault();
    alert(`Shapes:${this.state.Shapes} and Color:${this.state.Colors}`);
    let {items}=this.state;
    items.push({
      Shapes:this.state.Shapes,
      Colors:this.state.Colors,
    }) 
    this.setState({
       items,   
    })
  }
  resetChange=(e)=>{
    this.setState({
      Shapes:"",
      Colors:""
    })
  }
  render() {
    
    const project = (s) => {
      switch(s.Shapes) {
 
        case "Circle":   
               return (
                     <div style={{backgroundColor:s.Colors}}><Circle/></div>
                      );
         case "Rectangle": 
                     return (
                     <div style={{backgroundColor:s.Colors}}><Rectangle/></div>
                          );
         
          case "Square":
                  return(
                   <div
                   style={{backgroundColor:s.Colors}}><Square/></div>
                        );
                     
         default: 
       }
     };
    return (
      <form>
        <label>Select Shapes:</label>
       <select value={this.state.Shapes} onChange={this.shapesChange}>
         <option value="Circle">Circle</option>
         <option value="Rectangle">Rectangle</option>
         <option value="Square">Square</option>
       </select><br/><br/>
       <label>Select Colors:</label>
       <select value={this.state.Colors} onChange={this.colorsChange}>
         <option value="pink">Pink</option>
         <option value="steelblue">Steelblue</option>
         <option value="yellow">Yellow</option>
       </select><br/><br/>
       <center ><button className="Submit" type="button" onClick={this.handleClick}>Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="Submit" type="button" onClick={this.resetChange}>Reset</button>
      </center><br/><br/>
      <div>{this.state.items.map((s)=>{
        return(
           project(s)
        )
      })  }</div>

      <p>{`${this.state.Shapes} ${this.state.Colors}`} </p>
      
      
        
      </form>
      

    )
  }
}
export default List

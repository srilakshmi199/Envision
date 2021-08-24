import React, { Component } from 'react'

 class Dropdown extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        Shapes:"",
        Colors:"",
        Symbols:"",
        items:[]
       
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
     alert(`Shapes:${this.state.Shapes} and Color:${this.state.Colors}`);
     let {items}=this.state;
     items.push({
       Shapes:this.state.Shapes,
       Colors:this.state.Colors
     })
     this.setState({
       Symbols:this.state.Shapes,
      
       
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
                    <div className="Circle"
                     style={{backgroundColor:s.Colors}}></div>
                     );
        case "Rectangle": 
                    return (
                    <div className="Rectangle" style={{backgroundColor:s.Colors}}></div>
                         );
        
         case "Square":
                 return(
                  <div className="Square"
                  style={{backgroundColor:s.Colors}}></div>
                       );
                    
        default: 
      }
    };
    
    
    return (
      <form action="message.html">
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
      <center ><button className="Submit" type="button" onClick={this.handleClick}>Submit</button>&nbsp;&nbsp;
      <button className="Submit" type="button" onClick={this.resetChange}>Reset</button>
      </center>
    
      

       <div>
         {this.state.items.map((s)=>{
           return(
             project(s)
           )
         })}
       </div>
      {/*<div>
        {
          this.state.Symbols==='Circle'?<div className="Circle"
          style={{backgroundColor:this.state.Colors}}></div>
          :null
        }
         {
          this.state.Symbols==='Rectangle'?<div className="Rectangle" style={{backgroundColor:this.state.Colors}}></div>
          :null
        }
         {
          this.state.Symbols==='Square'?<div className="Square"
          style={{backgroundColor:this.state.Colors}}></div>
          :null
        }
      </div>*/}
      <p>{`${this.state.Shapes} ${this.state.Colors}`} </p>
      </form>
          )
  }
}


export default Dropdown

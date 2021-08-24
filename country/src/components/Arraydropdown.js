import React, { Component } from 'react';

class Arraydropdown extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           data:['Andhra','Telangana','Karnataka','Kerala']
        }
    }
    
    render() {
        return (
            <form>
                <select>
                  <option selected disable>....select....</option>
                   {this.state.data.map((displaydata)=>{
                       return(
                           <option>{displaydata}</option>
                       )
                   })}
                </select>
            </form>
        )
    }
}
export default Arraydropdown


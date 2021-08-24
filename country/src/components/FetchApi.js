import React, { Component } from 'react'

class FetchApi extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[]
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            this.setState({posts:data})
        })
        .catch(console.err)
    }
    render() {
        return (
            <div>
                {
                   this.state.posts.map((s)=>{
                       return(
                          
                               <div key={s.id}>{s.id}.{s.id}</div>
                               
                          
                       )
                   }) 
                }
            </div>
        )
    }
}

export default FetchApi

import React from 'react'

 function Listitems(props) {
   const Items=props.Items;
   const listItems=Items.map(Item=>{
       return(
           <div>{Item.Shapes}</div>
       )
   })
   return(
       <div>{listItems}</div>
   )
}
export default Listitems
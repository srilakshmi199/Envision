          import React from 'react'

          function AllStates() {
            var arr = [
              { 'name': 'P1', 'value': 150 },
              { 'name': 'P1', 'value': 150 },
              { 'name': 'P2', 'value': 200 },
              { 'name': 'P3', 'value': 450 }
          ];
          
let obj = []

arr.forEach((item)=>{
   if(obj[item.name]){
        obj[item.name].value = obj[item.name].value + item.value
   }else{
       obj[item.name] = item
   }
})

let valuesArr = Object.values(obj)
        
            return (
              <div>
                {
                  valuesArr.map((s)=>{
                    return(
                      <div>
                      <div className="State-name">{s.name}</div>
                      <div className="State-dist">{s.value}</div>
                      </div>
                    )
                  })
                }
              </div>
            )
          }
          export default AllStates

import { LINE_CHART } from "./actiontype"

const data={
    data:{
        labels:['jan','feb','mar','apr'],
        datasets:[
            {
            label:'Sales for 2020(M)',
            data:[3,2,2,1,4]
            }
    ]

    }
}
    const linereducer=(state=data,action)=>{
        switch(action.type){
            case LINE_CHART:
                return{
                    ...state,
                }
                default:return state;
        }
    }
    export default linereducer
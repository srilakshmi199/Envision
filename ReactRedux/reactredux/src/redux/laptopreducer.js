import { BUY_LAPTOP } from "./actiontype";
const initialState={
    numOfLaptops:100
}

const laptopreducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_LAPTOP:
            return{
                ...state,
                numOfLaptops:state.numOfLaptops-1
            }
        default:return state;
    }
}
export default laptopreducer
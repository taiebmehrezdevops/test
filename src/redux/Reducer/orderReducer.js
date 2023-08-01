import { GET_ORDERS } from "../actionstypes/actionTypes";
const initState={
    orders:[]
}
export const orderReducer=(state=initState,action)=>{
    switch(action.type){
        case GET_ORDERS:
            return{
                ...state,
                orders:action.payload
            };
            default:
                return state
    }
}
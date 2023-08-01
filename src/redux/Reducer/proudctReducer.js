import { GET_PRODUCTS } from "../actionstypes/actionTypes";
const initState={
    products:[]
}
export const productReducer=(state=initState,action)=>{
    switch(action.type){
        case GET_PRODUCTS:
            return{
                ...state,
                products:action.payload
            };
            default:
                return state
    }
}
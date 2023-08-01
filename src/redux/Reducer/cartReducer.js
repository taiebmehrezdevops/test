import { ADD_TO_CART } from "../actionstypes/actionTypes";
const initState={
    cart: {
        cartItems: localStorage.getItem('cartItems')
          ? JSON.parse(localStorage.getItem('cartItems'))
          : []
}
}
const cartReducer=(state=initState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
        return{
            ...state,
            cartItems:[...state.cartItems,action.payload]
            };
            default:
                return state
        }
    }
export default cartReducer


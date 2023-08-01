import  axios from "axios"
import { ADD_TO_CART } from "../actionstypes/actionTypes"
export const addtocart =  (idProduct) => async (dispatch) => {
   const {data} = await axios.get(`/api/product/search/${idProduct}`)
   dispatch({
            type:ADD_TO_CART,
            payload:
                {name:data.name,
                desc:data.desc,
                prix:data.prix,
                qte:data.qte,
                image:data.image}
            })
            localStorage.setItem(
                'cartItems',
                JSON.stringify(getState().cart.cartItems)
              );     
}
import {useEffect} from "react"
import { useDispatch, useSelector} from "react-redux"
import { addtocart } from "../../redux/actions/actionsCart"

const Cart = (data) =>{
    const dispatch=useDispatch()
    useEffect(()=>{
     dispatch(addtocart())
 },[])
 const cart = useSelector ((state)=>state.cartReducer.cart)
return(
    <div>
    <h1>Cart</h1>
   
  
    </div>
)
    
}
export default Cart
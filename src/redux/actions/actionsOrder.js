import { GET_ORDERS } from "../actionstypes/actionTypes";
import axios from "axios"
//Get Order
export const getOrders=()=>(dispatch)=>{
    axios.get("/api/order")
    .then((res)=>dispatch({type:GET_ORDERS,payload:res.data}))
    .catch((err)=>console.log(err))
}
export const addOrder=(neworder)=>async(dispatch)=>{
    const  config={
        headers:{
            'authorization':localStorage.getItem("token")
        }
    }
   try{
    const res = await axios.post("/api/order/addo",neworder,config)
    dispatch(getOrders())}
    catch(error){
        console.log(error)
    }
}
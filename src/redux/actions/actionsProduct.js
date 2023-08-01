import { GET_PRODUCTS } from "../actionstypes/actionTypes";
import axios from "axios"
//Get product
export const getProducts=()=>(dispatch)=>{
    axios.get("/api/product")
    .then((res)=>dispatch({type:GET_PRODUCTS,payload:res.data}))
    .catch((err)=>console.log(err))
}
export const addProduct=(newProduct)=>async(dispatch)=>{
    const  config={
        headers:{
            'authorization':localStorage.getItem("token")
        }
    }
   try{
    const res = await axios.post("/api/product/add",newProduct,config)
    dispatch(getProducts())}
    catch(error){
        console.log(error)
    }
}
export const deleteProduct=(idProduct)=>(dispatch)=>{
    const  config={
        headers:{
            'authorization':localStorage.getItem("token")
        }
    }
        try{
    const res = axios.delete(`/api/product/${idProduct}`,config)
    dispatch(getProducts())
}
    catch(error){
        console.log(error)
    }
}
export const editProduct=(idProduct,editedProduct)=>(dispatch)=>{
    const  config={
        headers:{
            'authorization':localStorage.getItem("token")
        }
    }
    try{
   const res= axios.put(`/api/product/edit/${idProduct}`,editedProduct,config)
    dispatch(getProducts())
    }
    catch(error){
        console.log(error)
    }
}